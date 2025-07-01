import { Router } from 'express';
import { sendReminders } from '../controllers/workflowController';

const workflowRouter = Router();

workflowRouter.get("/", sendReminders);