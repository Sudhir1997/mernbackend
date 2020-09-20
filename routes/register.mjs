import express from "express";

import mongoose from "mongoose";

import expressValidator from "express-validator";

const { check, validationResult } = expressValidator;

// import schemaUser from './/user.mjs';

import schema from "../datamodel/user.mjs";

const router = express.Router();

router.use((req, res, next) => {
  console.log(Date.now());
  next();
});

router.post(
  "/",
  [check("password").isLength({ min: 5 })],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()});
    } else {
      next();
    }
  },
  async (req, res) => {
    try {
      await schema.create(req.body);
    } catch (err) {
      res.status(400).json({ value: "Email is Registered" });
    }
    res.status(201).json({ Value: "Successfully Registered" });
  }
);

export default router;
