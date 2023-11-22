import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import EditRestaurant from 'src/pages/EditRestaurant/EditRestaurant';
import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import styles from './RestaurantCard.styles';
import { useNavigation } from '@react-navigation/native';

const RestaurantCard = ({ info, onDelete }) => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'ionicons': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf'),
      });
      setIsFontLoaded(true);
    }

    loadFonts();
  }, []);

  const handleDelete = () => {
    onDelete(info.name);
  };

  const handleEdit = () => {
    console.log(info.name );
    
    navigation.navigate('EditRestaurant', { restaurantId: info.name });
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image style={styles.imageStyle} source={{ uri: info.pictures[0] }} />
        <View style={styles.infoStyle}>
          <Text style={styles.titleStyle} numberOfLines={1} ellipsizeMode="tail">
            {info.name}
          </Text>
          <Text style={styles.categoryStyle} numberOfLines={2} ellipsizeMode="tail">
            {info.description}
          </Text>
          <Text numberOfLines={1} ellipsizeMode="tail">
            Rating: {info.rating} ({info.ratingCount} ratings)
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={handleDelete} style={styles.iconButton}>
            <Image source={require('/Users/duboisrenan/Guardos-dev/packages/restoMobile/src/assets/trash.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEdit} style={styles.iconButton}>
            <Image source={require('/Users/duboisrenan/Guardos-dev/packages/restoMobile/src/assets/pen.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RestaurantCard;