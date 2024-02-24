import express from 'express';
import { getUsersForSidebar } from '../controllers/user.controllers.js';
const router = express.Router();

router.get("/", protectRoute,getUsersForSidebar)