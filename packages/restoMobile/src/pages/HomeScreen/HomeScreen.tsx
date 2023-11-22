import React, { useEffect, useState } from 'react';
import { StyleSheet, View, StatusBar, FlatList, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import AddRestaurantScreen from '../AddRestaurant/AddRestaurant';
import Card from '../../components/RestaurantCard';
import axios from 'axios';
import styles from './HomeScreen.styles';

export interface IRestaurantFrontEnd {
  name: string;
  id: number;
  phoneNumber: string;
  website: string;
  description: string;
  pictures: string[];
  hitRate?: number;
  range: number;
  rating: number;
  ratingCount?: number;
}

const baseUrl = `http://195.90.210.111:8081/api/restaurants/`;

export const getAllResto = async () => {
  try {
    const response = await axios({
      method: 'GET',
      url: baseUrl,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching all restaurants:', error);
    throw new Error('Failed to fetch all restaurants');
  }
};

const deleteRestaurantByName = async (restaurantName: string) => {
  try {
    await axios({
      method: 'DELETE',
      url: `${baseUrl}${restaurantName}`,
    });
  } catch (error) {
    console.error('Error deleting restaurant:', error);
    throw new Error('Failed to delete restaurant');
  }
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const [restoData, setRestoData] = useState<IRestaurantFrontEnd[]>([]);

  useEffect(() => {
    updateRestoData();
  }, []);

  const updateRestoData = () => {
    getAllResto()
      .then((res) => {
        setRestoData(res);
      })
      .catch((error) => {
        console.error('Error updating restaurant data:', error);
      });
  };

  const onDelete = async (restaurantName: string) => {
    console.log(restaurantName);

    try {
      await deleteRestaurantByName(restaurantName);
      updateRestoData();
    } catch (error) {
      console.error('Error deleting restaurant:', error);
    }
  };

  const navigateToAddRestaurant = () => {
    navigation.navigate('AddRestaurant');
  };

  return (
    <View style={styles.container}>
      <Header label="Guardos" />
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={restoData}
        renderItem={({ item }) => {
          return <Card info={item} onDelete={onDelete} />;
        }}
        keyExtractor={(restaurant) => restaurant.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        style={styles.roundButton}
        onPress={navigateToAddRestaurant}
      >
        <Text style={styles.buttonText}>Add Restaurant</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
