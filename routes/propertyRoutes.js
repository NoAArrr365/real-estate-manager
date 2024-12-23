const express = require("express");
const {
  getProperties,
  createProperty,
  getOneProperty,
  updateProperty,
  deleteProperty,
} = require("../controllers/propertyController");

router = express.Router();
const validateProperty = require("../middlewares/validateProperty")

router.get("/users/:id/properties", async (req, res) => {
  try {
    const properties = await getProperties(req.params.id);
    if (!properties) {
      return res.status(201).send("No properties added yet!");
    }
    res.status(201).send(properties);
  } catch (error) {
    throw error;
  }
});

router.get("/users/:id/properties/:propertyId", async (req, res) => {
  try {
    const property = await getOneProperty(req.params.propertyId);
    if (!property) {
      return res.status(404).send("This property does not exist!");
    }
    res.status(201).send(property);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

router.post("/users/:id/properties", validateProperty, async (req, res) => {
  try {
    const newProp = await createProperty(req.body, req.params.id);
    res.status(201).send(newProp);
  } catch (error) {
    next(error);
  }
});

router.put("/users/:id/properties/:propertyId", async (req, res) => {
  try {
    const updateProp = await updateProperty({
      ...req.body,
      id: req.params.propertyId,
    });
    res.status(201).send(updateProp);
  } catch (error) {}
});

router.delete("/users/:id/properties/:propertyId", async (req, res) => {
  try {
    await deleteProperty(req.params.propertyId);
    res.status(201).send("Property deleted");
  } catch (error) {
    throw error;
  }
});

module.exports = router;
