import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native';

const PopularDestinationScreen = ({ route }) => {
  const { destination } = route.params;

  const renderReview = ({ item }) => (
    <View style={styles.reviewContainer}>
      <Text>{item.review}</Text>
    </View>
  );

  const renderActivity = ({ item }) => (
    <View style={styles.activityContainer}>
      <Text>{item.activity}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Image source={destination.imageUrl} style={styles.image} />
      <Text style={styles.title}>{destination.name}</Text>
      <Text style={styles.description}>{destination.description}</Text>
      
      <Text style={styles.sectionTitle}>Reviews</Text>
      <FlatList
        data={destination.reviews}
        keyExtractor={(item, index) => `review-${index}`}
        renderItem={renderReview}
        contentContainerStyle={styles.flatListContainer}
      />
      
      <Text style={styles.sectionTitle}>Things to do</Text>
      <FlatList
        data={destination.activities}
        keyExtractor={(item, index) => `activity-${index}`}
        renderItem={renderActivity}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
  },
  description: {
    fontSize: 16,
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 20,
  },
  flatListContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  reviewContainer: {
    marginBottom: 10,
  },
  activityContainer: {
    marginRight: 10,
    marginBottom: 10,
  },
});

export default PopularDestinationScreen;
