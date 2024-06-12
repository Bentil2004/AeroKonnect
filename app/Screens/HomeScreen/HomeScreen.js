import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomInput from "../../components/CustomInput";
import { useNavigation } from "@react-navigation/native";
import { data, data2, data3 } from "../../Data";

const { height } = Dimensions.get("window");

const HomeScreen = () => {
  const navigation = useNavigation();

  const onBellOutlinePressed = () => {
    navigation.navigate("Notification");
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        /* Handle image press */
      }}
    >
      <Image source={item.imageUrl} style={styles.image} />
      <Text>Tokyo, Japan</Text>
      <Text>Price ${item.id}</Text>
    </TouchableOpacity>
  );

  const getKeyExtractor = (prefix) => (item) => `${prefix}-${item.id}`;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.Text}>
            Good Morning, Ama{"\n"}
            <Text style={styles.text}>Where are you going?</Text>
          </Text>
          <TouchableOpacity onPress={onBellOutlinePressed}>
            <MaterialCommunityIcons
              name="bell-outline"
              size={24}
              color="#7D7D7D"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <CustomInput
            placeholder="Search for your next destination"
            bordercolor="#7D7D7D"
            borderRadius="7"
            iconName="search"
            icon={
              <MaterialCommunityIcons
                name="magnify"
                size={20}
                color="#7D7D7D"
              />
            }
          />
        </View>

        {/* First FlatList */}
        <Text style={styles.sectionTitle}>Popular Destinations</Text>
        <FlatList
          data={data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={getKeyExtractor("popular")}
          renderItem={renderItem}
          contentContainerStyle={styles.flatListContainer}
        />

        {/* Second FlatList */}
        <Text style={styles.sectionTitle}>Good Deals Just For You </Text>
        <Text style={styles.writing}>
          Save 20% on Flights to Europe! Book your summer getaway now
        </Text>
        <FlatList
          data={data2}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={getKeyExtractor("deals")}
          renderItem={renderItem}
          contentContainerStyle={styles.flatListContainer}
        />

        {/* Third FlatList */}
        <Text style={styles.sectionTitle}>Trip Inscription </Text>
        <Text style={styles.writing}>
          Experience the world through new cultures and breathtaking landscapes.
        </Text>
        <FlatList
          data={data3}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={getKeyExtractor("trips")}
          renderItem={renderItem}
          contentContainerStyle={styles.flatListContainer}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  Text: {
    fontSize: 20,
    fontWeight: "300",
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  flatListContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  image: {
    width: 187,
    height: 128,
    borderRadius: 6,
    resizeMode: "cover",
    marginHorizontal: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 16,
    marginTop: 20,
  },
  writing: {
    fontSize: 15,
    marginLeft: 16,
    marginTop: 20,
  },
});

export default HomeScreen;
