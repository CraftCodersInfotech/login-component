import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./Style";
import InputField from "react-native-input-Field";
import Button from "react-native-button";

const Login = () => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <Image
        source={require("../src/assets/image1.png")}
        style={styles.image}
      />
      <Text style={styles.mainTitle}>Login to Continue</Text>
      <Text style={styles.inputTitle}>Mobile Number</Text>
      <InputField
        placeholder="Enter Mobile Number"
        width={"100%"}
        borderWidth={0.2}
        keyboardType={"numeric"}
      />
      <Text style={styles.inputTitle}>Password</Text>
      <InputField
        placeholder="Enter Password"
        width={"100%"}
        borderWidth={0.2}
        showIcon
      />
      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <Button
        onPress={() => console.log("Pressed!")}
        title={"Login"}
        width={340}
        height={40}
        borderRadius={5}
        backgroundColor={"#5625CC"}
        fontSize={18}
        fontWeight={"500"}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{ borderBottomWidth: 1, width: "35%", marginVertical: 20 }}
        />
        <Text style={{ paddingHorizontal: 10 }}>or </Text>
        <View
          style={{ borderBottomWidth: 1, width: "35%", marginVertical: 20 }}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "400" }}>
          Don't have an account?
        </Text>
        <Text style={{ fontSize: 18, color: "#5625CC", fontWeight: "600" }}>
          {" "}
          Register
        </Text>
      </View>
    </View>
  );
};

export default Login;
