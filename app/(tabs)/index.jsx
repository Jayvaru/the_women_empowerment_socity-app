import { useState } from "react";
import { TextInput, Button, View, StyleSheet } from "react-native";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "@/firebaseConfig";
import ParallaxScrollView from "@/components/ParallaxScrollView";

export default function HomeScreen() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pan_no: "",
    password: "",
    phone: "",
  });

  // Handle input change
  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  // Dynamic Firestore write function
  const writeData = async () => {
    try {
      const result = await addDoc(collection(firestore, "users"), formData);
      console.log("Document written with ID: ", result.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
    >
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Name"
          value={formData.name}
          onChangeText={(text) => handleChange("name", text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={formData.email}
          onChangeText={(text) => handleChange("email", text)}
          keyboardType="email-address"
          style={styles.input}
        />
        <TextInput
          placeholder="PAN No"
          value={formData.pan_no}
          onChangeText={(text) => handleChange("pan_no", text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={formData.password}
          onChangeText={(text) => handleChange("password", text)}
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          placeholder="Phone"
          value={formData.phone}
          onChangeText={(text) => handleChange("phone", text)}
          keyboardType="phone-pad"
          style={styles.input}
        />
        <Button title="Add Data" onPress={writeData} />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
