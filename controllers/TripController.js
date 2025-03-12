import Trip from "../models/Trip";

exports.getTrips = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.addTrip = async (req, res) => {
  try {
    const { title, startDate, endDate, destinations } = req.body;
    const newTrip = new Trip({ title, startDate, endDate, destinations });
    await newTrip.save();
    res.status(201).json(newTrip);
  } catch (error) {
    res.status(500).json({ message: "Error adding trip" });
  }
};

exports.deleteTrip = async (req, res) => {
  try {
    await Trip.findByIdAndDelete(req.params.id);
    res.json({ message: "Trip deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting trip" });
  }
};
