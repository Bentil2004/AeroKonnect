import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, TextInput, Modal, Dimensions } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import CustomButton from "../../components/CustomButton";

const { width, height } = Dimensions.get('window');

const PastTrips = ({ trips }) => (
  <View style={styles.tripsContainer}>
    {trips.length === 0 ? (
      <Text style={styles.noFlightText}>No past trips available</Text>
    ) : (
      trips.map((trip, index) => (
        <View key={index} style={styles.tripDetails}>
          <Text style={styles.tripText}>Booking Code: {trip.reservationCode}</Text>
          <Text style={styles.tripText}>Surname: {trip.surname}</Text>
        </View>
      ))
    )}
  </View>
);

const UpcomingTrips = ({ trips }) => (
  <View style={styles.tripsContainer}>
    {trips.length === 0 ? (
      <Text style={styles.noFlightText}>No upcoming trips available</Text>
    ) : (
      trips.map((trip, index) => (
        <View key={index} style={styles.tripDetails}>
          <Text style={styles.tripText}>Booking Code: {trip.reservationCode}</Text>
          <Text style={styles.tripText}>Surname: {trip.surname}</Text>
        </View>
      ))
    )}
  </View>
);

const MyTripScreen = ({ navigation }) => {
  const [selectedButton, setSelectedButton] = useState("Upcoming");
  const [isModalVisible, setModalVisible] = useState(false);
  const [reservationCode, setReservationCode] = useState("");
  const [surname, setSurname] = useState("");
  const [pastTrips, setPastTrips] = useState([]);
  const [upcomingTrips, setUpcomingTrips] = useState([]);

  useEffect(() => {
    const handleOrientationChange = () => {
      const { width: newWidth, height: newHeight } = Dimensions.get('window');
      // Implement logic based on new width and height if needed
    };

    Dimensions.addEventListener('change', handleOrientationChange);
    return () => {
      Dimensions.removeEventListener('change', handleOrientationChange);
    };
  }, []);

  const handlePress = (button) => {
    setSelectedButton(button);
  };

  const handleSignIn = () => {
    navigation.navigate("SignUp");
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleAddTrip = () => {
    const newTrip = { reservationCode, surname };
    if (selectedButton === "Past") {
      setPastTrips([...pastTrips, newTrip]);
    } else {
      setUpcomingTrips([...upcomingTrips, newTrip]);
    }
    setReservationCode("");
    setSurname("");
    toggleModal();
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.text}>MY TRIP Learnig Git Hub</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              selectedButton === "Past" && styles.selectedButton
            ]}
            onPress={() => handlePress("Past")}
          >
            <Text style={[styles.buttonText, selectedButton === "Past" && styles.selectedText]}>Past</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              selectedButton === "Upcoming" && styles.selectedButton
            ]}
            onPress={() => handlePress("Upcoming")}
          >
            <Text style={[styles.buttonText, selectedButton === "Upcoming" && styles.selectedText]}>Upcoming</Text>
          </TouchableOpacity>
        </View>
        
        {selectedButton === "Past" ? <PastTrips trips={pastTrips} /> : <UpcomingTrips trips={upcomingTrips} />}

        <View style={styles.bookNowButtonContainer}>
          <CustomButton 
            text="Book Now"
            bg={"#00527e"}
            fontSize="bold"
            txt={"white"}
          />
          <CustomButton 
            text="Add a trip"
            bg={"white"}
            fontSize="bold"
            txt={"#00527E"}
            bordercolor={"#00527E"}
            onPress={toggleModal}
          />
        </View>
        <View style={styles.signInContainer}>
          <TouchableOpacity onPress={handleSignIn}>
            <Text style={styles.Link}>Sign in</Text>
          </TouchableOpacity>
          <Text style={styles.Text}> to view your trip</Text>
        </View>
        {pastTrips.length === 0 && upcomingTrips.length === 0 && (
          <View style={styles.noFlightContainer}>
            <FontAwesome5 name="plane-slash" size={50} color="#00527E" />
            <Text style={styles.noFlightText}>No trip available</Text>
          </View>
        )}
      </ScrollView>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add a reservation code</Text>
            <TextInput
              style={styles.input}
              placeholder="Booking code"
              value={reservationCode}
              onChangeText={setReservationCode}
            />
            <TextInput
              style={styles.input}
              placeholder="Surname"
              value={surname}
              onChangeText={setSurname}
            />
            <CustomButton 
              text="Add trip"
              bg={"#00527e"}
              fontSize="bold"
              txt={"white"}
              onPress={handleAddTrip}
              style={styles.modalButton}
            />
            <CustomButton 
              text="Cancel"
              bg={"white"}
              fontSize="bold"
              txt={"#00527E"}
              bordercolor={"#00527E"}
              onPress={toggleModal}
              style={styles.modalButton}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    padding: 15,
    top: "5%",
    zIndex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 6,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  Text: {
    fontSize: 16,
    color: "black",
  },
  signInContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: "20%",
    textAlign: "center",
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "#E4EAF1",
    borderColor: '#00527E',
    width: '100%',
    height: 66,
    borderRadius: 8,
    overflow: 'hidden',
    padding: 10,
    zIndex: 2,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#00527E",
    zIndex: 3,
  },
  selectedButton: {
    backgroundColor: "#00527E",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  selectedText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  bookNowButtonContainer: {
    position: 'absolute',
    bottom: "35%", 
    width: 381,
    height: 67,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  Link: {
    fontSize: 16,
    color: "#00527E",
    textDecorationLine: "underline",
  },
  noFlightContainer: {
    position: "absolute",
    width: "70%",
    height: "50%",
    top: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  noFlightText: {
    marginTop: 10,
    fontSize: 20,
    color: "#00527E",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  modalButton: {
    width: "100%",
    marginVertical: 5,
  },
  tripsContainer: {
    width: '100%',
    padding: 20,
  },
  tripText: {
    fontSize: 16,
    color: '#333',
  },
  tripDetails: {
    backgroundColor: "#f1f1f1",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
});

export default MyTripScreen;

