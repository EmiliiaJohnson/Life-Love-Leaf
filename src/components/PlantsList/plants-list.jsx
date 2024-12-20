import React, { useState, useEffect } from "react";
import "./plants-list.css";
import no_plant from "../../assets/images/no-img.svg";

const API_KEY = process.env.REACT_APP_API_KEY;
const getRandomPlantPrice = () => {
  return Math.ceil((Math.random() * (2000 - 250)) / 50) * 50;
};

function PlantsList() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch(
          `https://perenual.com/api/species-list?key=${API_KEY}&hardiness=1-3`
        );
        const data = await response.json();
        setPlants(data.data);
        console.log(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPlants();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {plants.map((plant) => (
        <div className="item" id={plant.id} key={plant.id}>
          <img
            className="item-img"
            src={
              plant.default_image?.medium_url ||
              plant.default_image?.url ||
              no_plant
            }
            alt={plant.common_name}
          />
          <p className="item-name"> {plant.common_name || "No Name"}</p>
          <p>Info</p>
          <p>${getRandomPlantPrice()}</p>
        </div>
      ))}
    </>
  );
}

export default PlantsList;
