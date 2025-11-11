import RestaurantService from "../services/restaurants.service.js";

const postRestaurant = async (req, res) => {
  try {
    const restaurantData = req.body;
    const newRestaurant = await RestaurantService.postRestaurant(restaurantData);
    res.status(201).send(newRestaurant);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getRestaurantById = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await RestaurantService.getRestaurantById(id);
    if (!restaurant) {
      return res.status(404).send({ error: "Restaurant not found" });
    }
    res.send(restaurant);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getAllRestaurants = async (req, res) => {
  try {
    const { term } = req.query;

    let filter = {};
    if (term) {
      // Búsqueda  por nombre o tipo de comida
      filter = {
        $or: [
          { name: { $regex: term, $options: "i" } },
          { cuisine: { $regex: term, $options: "i" } },
        ],
      };
    }

    const restaurants = await RestaurantService.getAllRestaurants(filter);
    res.send(restaurants);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const patchRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedRestaurant = await RestaurantService.updateRestaurant(id, updates);
    if (!updatedRestaurant) {
      return res.status(404).send({ error: "Restaurant not found" });
    }
    res.send(updatedRestaurant);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const deleteRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRestaurant = await RestaurantService.deleteRestaurant(id);
    if (!deletedRestaurant) {
      return res.status(404).send({ error: "Restaurant not found" });
    }
    res.send({ message: "Restaurant deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export default {
  postRestaurant,
  getRestaurantById,
  getAllRestaurants,
  patchRestaurant,
  deleteRestaurant,
};
