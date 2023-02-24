const express = require("express");

const router = express.Router();

const carsControllers = require("./controllers/CarsControllers");

router.get("/cars", carsControllers.browse);
router.get("/cars/:id", carsControllers.read);
router.post("/cars", carsControllers.add);
router.delete("/cars/:id", carsControllers.deleteOne);

module.exports = router;
