import express from "express";
import {
  changePassword,
  changeResetPassword,
  enterRecord,
  forgetPassword,
  getHistoryDay,
  getHistoryMonth,
  getHistoryWeek,
  getHistoryYear,
  getHistoryYearpart,
  getSingleUserStatus,
  // getStatusCount,
  getUser,
  logStatus,
  logout,
  removeAccount,
  resetPassword,
  sendToEmailAgain,
  signIn,
  signUp,
  updateDate,
  verfiyEmail,
} from "./auth.controller.js";
import { auth } from "../../middleware/authentication.js";
import { uploadFile } from "../../middleware/uploadfile.js";

const userRouter = express.Router();

userRouter.post("/signup", uploadFile("image", "user"), signUp);
userRouter.post("/signin", signIn);
userRouter.post("/sendagain", sendToEmailAgain);
userRouter.get("/verfiy/:token", verfiyEmail);
userRouter.put("/", auth, uploadFile("image", "user"), updateDate);
userRouter.patch("/", auth, changePassword);
userRouter.get("/getme", auth, getUser);
userRouter.patch("/logout", auth, logout);
userRouter.delete("/delete", auth, removeAccount);

// Endpoint to initiate password reset
userRouter.post("/forgot-password", forgetPassword);

// Endpoint to render the password reset page
userRouter.get("/reset-password/:token", changeResetPassword);

// Endpoint to handle password reset form submission
userRouter.post("/reset-password/:token", resetPassword);

// Route to log user status
userRouter.post("/log", auth, logStatus);
userRouter.get("/:userId", getSingleUserStatus);
userRouter.get('/history/week/:userId', getHistoryWeek);
userRouter.get('/history/month/:userId', getHistoryMonth);
userRouter.get('/history/year/:userId', getHistoryYear);
userRouter.get('/history/yearpart/:userId', getHistoryYearpart);
userRouter.get('/history/day/:userId', getHistoryDay);
userRouter.post('/record', enterRecord);


export default userRouter;
