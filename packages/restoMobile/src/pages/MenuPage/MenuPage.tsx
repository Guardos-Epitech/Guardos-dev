import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

interface Dish {
  category: {
    menuGroup: string;
    foodGroup: string;
    extraGroup: string[];
  };
  picturesId: string[];
  name: string;
  description: string;
  products: string[];
  pictures: string[];
  price: number;
  allergens: string[];
}

interface DishData {
  _id: number;
  dishes: Dish[];
}

const MenuPage: React.FC = ({ route }) => {
  const [dishesData, setDishesData] = useState<DishData[]>([]);
  const [loading, setLoading] = useState(true);
  const {restaurantId, restaurantName } = route.params;
  console.log(restaurantName);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://195.90.210.111:8081/api/dishes/${restaurantName}`);
        const data: DishData[] = await response.json();
        setDishesData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  // Define the custom order of menuGroup
  const menuGroupOrder = ['Appetizer', 'Maindish', 'Dessert'];

  // Sort dishes based on the custom order, placing items without menuGroup at the end
  const sortedDishes = dishesData[0]?.dishes.sort((a, b) => {
    const orderA = a.category.menuGroup ? menuGroupOrder.indexOf(a.category.menuGroup) : menuGroupOrder.length;
    const orderB = b.category.menuGroup ? menuGroupOrder.indexOf(b.category.menuGroup) : menuGroupOrder.length;
    return orderA - orderB;
  });

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollView} horizontal={false}>
          {sortedDishes.map((dish, index) => (
            <React.Fragment key={dish.name}>
              {(index === 0 || sortedDishes[index - 1].category.menuGroup !== dish.category.menuGroup) && (
                <Text style={styles.groupTitle}>{dish.category.menuGroup}</Text>
              )}
              <View style={styles.card}>
                <Image source={{ uri: dish.pictures[0] }} style={styles.cardImage} />
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{dish.name}</Text>
                  <Text>{dish.description}</Text>
                  <Text>Price: ${dish.price}</Text>
                  <Text>Allergens: {dish.allergens.join(', ')}</Text>
                </View>
              </View>
            </React.Fragment>
          ))}
        </ScrollView>
      )}
    </View>
  );
  
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 20;
const iconSize = 20;

const styles = StyleSheet.create({
  
  container: {
    width: deviceWidth - 20,
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
  },
  scrollView: {
    alignItems: 'center',
  },
  card: {
    width: deviceWidth - offset,
    backgroundColor: '#FFFFFF',
    height: 230,
    margin: 20,
    borderRadius: radius,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 4,
    elevation: 9,
    position: 'relative',
    overflow: 'hidden',
  },
  cardImage: {
    height: 130,
    width: deviceWidth - offset,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.9,
    alignContent: 'center',
    alignSelf: 'center',
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  groupTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default MenuPage;