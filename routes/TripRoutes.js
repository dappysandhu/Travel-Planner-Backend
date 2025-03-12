import express from "express";

const router = express.Router();

router.get("/", getTrips);
router.post("/", addTrip);
router.delete("/:id", deleteTrip);

module.exports = router;
