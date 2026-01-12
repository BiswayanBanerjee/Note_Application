import express from "express";
import { signup, login, sendOTP, verifyOTP, resetPassword, verifySignupOTP } from "../controllers/authController";
import { googleLogin } from "../controllers/authController";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/send-otp", sendOTP);
router.post("/verify-otp", verifyOTP);
router.post("/reset-password", resetPassword);
router.post("/verify-signup-otp", verifySignupOTP);
router.post("/google", googleLogin);

export default router;