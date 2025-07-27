import dayjs from 'dayjs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { serve } = require("@upstash/workflow/express");
import Subscription from '../models/subscriptionModel';

const REMINDERS = [7, 5, 2, 1];

export const sendReminders = serve(async (context) => {
    const { subscriptionId } = context.requestPayload;
    const subscription = await fetchSubscription(context, subscriptionId);

    if (!subscription || subscription.staus != active) return;

    const renewalDate = dayjs(subscription.renewalDate);

    if (renewalDate.isBefore(dayjs())) {
        console.log(`Renewal date has passed for subscription ${subscriptionId}. Stopping workflow.`);
        return;
    }

    for (const daysBefore of REMINDERS) {
        const renewalDate = renewalDate.substract(daysBefore, "day");

        if (renewalDate.isAfter(dayjs())) {
            await sleepUnitReminnder(context, `Reminder ${daysBefore} days before`, reminderDate);
        }

        await triggerReminnder(context, `Reminder ${daysBefore} days before`);
    }
});

const fetchSubscription = async (context, subscriptionId) => {
    return await context.run("get subcription", () => {
        return Subscription.findById(subscriptionId).populate("user", "name email");
    });
};

const sleepUnitReminnder = async (context, label, reminderDate) => {
    console.log(`Sleeping until ${label} reminder at ${reminderDate}`);
    await context.sleepUntil(label, reminderDate.toDate());
};

const triggerReminnder = async (context, label) => {
    return await context.run(label, () => {
        console.log(`Triggering ${label} reminder`);
    });
};