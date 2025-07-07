import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let droneData = [];

app.post("/api/upload", (req, res) => {
  const { latitude, longitude, disease, confidence, image } = req.body;
  const entry = {
    id: Date.now(),
    latitude,
    longitude,
    disease,
    confidence,
    image,
  };
  droneData.push(entry);
  console.log("Received data:", entry);
  res.status(201).send({ message: "Data stored", entry });
});

app.get("/api/diseases", (req, res) => {
  res.json(droneData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
