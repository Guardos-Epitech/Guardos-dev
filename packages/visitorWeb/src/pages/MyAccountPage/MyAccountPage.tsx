import React, { useState } from "react";
import styles from "./MyAccountPage.module.scss";

const MyAccountPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [allergens, setAllergens] = useState('');
  const [picture, setPicture] = useState('');
  const [watchedRestaurants, setWatchedRestaurants] = useState([]);

  const handlePictureChange = (e : any) => {
    setPicture(e.target.value);
  };

  const handleEmailChange = (e : any) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e : any) => {
    setName(e.target.value);
  };

  const handleCityChange = (e : any) => {
    setCity(e.target.value);
  };

  const handleAllergensChange = (e : any) => {
    setAllergens(e.target.value);
  };

  const handleAddRestaurant = () => {
    // Add the watched restaurant to the list
    const newRestaurant = {
      name: `Restaurant ${watchedRestaurants.length + 1}`,
      date: new Date().toLocaleString(),
    };

    setWatchedRestaurants((prevRestaurants) => [newRestaurant, ...prevRestaurants]);
  };

  return (
    <div className={styles.MyAccountPage}>
      <div className={styles.profileSection}>
        <h1>Account Page</h1>
        <div className={styles.profilePicture}>
          <label>Profile Picture:</label>
          <input type="file" accept="image/*" onChange={handlePictureChange} />
          {/* Add an image preview */}
          {picture && <img src={picture} alt="Profile" className={styles.profileImage} />}
        </div>
        <div>
          <label>Email:</label>
          <input type="text" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>City:</label>
          <input type="text" value={city} onChange={handleCityChange} />
        </div>
        <div>
          <label>Allergens:</label>
          <select value={allergens} onChange={handleAllergensChange}>
            <option value="">Select...</option>
            <option value="peanut">Peanut</option>
            <option value="gluten">Gluten</option>
            <option value="dairy">Dairy</option>
          </select>
        </div>
        <button onClick={handleAddRestaurant}>Add Watched Restaurant</button>
      </div>
      <div className={styles.restaurantSection}>
        <h2>Last Watched Restaurants</h2>
        <ul>
          {watchedRestaurants.map((restaurant, index) => (
            <li key={index}>
              <strong>{restaurant.name}</strong> - {restaurant.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyAccountPage;
