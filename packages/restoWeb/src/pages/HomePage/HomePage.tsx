import React, { useEffect, useState } from "react";

import FixedBtn
  from "@src/components/dumpComponents/buttons/FixedBtn/FixedBtn";
import { getAllRestaurantsByUser } from "@src/services/restoCalls";
import {IRestaurantFrontEnd} from "shared/models/restaurantInterfaces";
import Layout from 'shared/components/Layout/Layout';
import RestoCard from "@src/components/RestoCard/RestoCard";
import styles from "./HomePage.module.scss";
import SuccessAlert
  from "@src/components/dumpComponents/SuccessAlert/SuccessAlert";

const HomePage = () => {
  const [restoData, setRestoData] = useState<IRestaurantFrontEnd[]>([]);
  const [isUserTokenSet, setIsUserTokenSet] = useState<Boolean>(false);

  const textNotLoggedIn = "Please login/register to see your restaurants";
  const textLoggedIn = "You have currently no active restaurant. You can click on the button in the lower right corner to add a new one."

  useEffect(() => {
    updateRestoData();
  }, []);

  const updateRestoData = () => {
    const userToken = localStorage.getItem('user');
    
    if (userToken === null) {
      setIsUserTokenSet(false);
      return;
    }
    setIsUserTokenSet(true);
    getAllRestaurantsByUser({ key: userToken })
      .then((res) => {
        setRestoData(res);
      });
  };

  return (
    <div>
      <div className={styles.RectOnImg}>
        <span className={styles.TitleSearch}>My Restaurants</span>
      </div>
      <Layout>
        <div className={styles.DivContent}>
          <div>
            { isUserTokenSet && restoData.length == 0 && (
              <p>
                {textLoggedIn}
              </p>
            )}
            { !isUserTokenSet && (
              <p>
                {textNotLoggedIn}
              </p>
            )}
            {restoData.map((restaurant, index) => {
              return (
                <RestoCard
                  key={restaurant.name + index}
                  resto={restaurant as IRestaurantFrontEnd}
                  onUpdate={updateRestoData}
                  editable
                />
              );
            })}
          </div>
        </div>
      </Layout>
      <FixedBtn title="Add Restaurant" redirect="/addResto" />
      <SuccessAlert />
    </div>
  );
};

export default HomePage;
