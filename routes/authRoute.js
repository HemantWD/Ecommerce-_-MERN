import express from "express";
import {
  forgotPasswordController,
  getAllOrdersControllers,
  getOrdersControllers,
  loginController,
  orderStatusController,
  registerController,
  testController,
  updateProfileController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// Routing

// REGISTER || METHOD POST
router.post("/register", registerController);

// LOGIN || METHOD POST
router.post("/login", loginController);

// forgot-password || METHOD POST
router.post("/forgot-password", forgotPasswordController);
// test
router.get("/test", requireSignIn, isAdmin, testController);

// protected user route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// protected admin route
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// METHOD : PUT || updating profile
router.put("/profile", requireSignIn, updateProfileController);

// METHOD : GET || order
router.get("/orders", requireSignIn, getOrdersControllers);

// METHOD : GET || get all order
router.get("/all-orders", requireSignIn, getAllOrdersControllers);

// status update
router.put("/order-status/:id", requireSignIn, isAdmin, orderStatusController);

export default router;
