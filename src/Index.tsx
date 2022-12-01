import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./Style";
import InputField from "react-native-input-field";
import Button from "react-native-button";
import { String } from "./constants/String";

const Login = () => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <Image
        source={require("../src/assets/image1.png")}
        style={styles.image}
      />
      <Text style={styles.mainTitle}>{String.loginLabel}</Text>
      <Text style={styles.inputTitle}>{String.moblieNum}</Text>
      <InputField
        containerStyle={{
          height: 40,
          width: "100%",
          borderWidth: 1,
          paddingHorizontal: 5,
        }}
        placeholder="Enter Mobile Number"
        keyboardType={"numeric"}
        inputStyle={{ width: "100%" }}
      />
      <Text style={styles.inputTitle}>{String.password}</Text>
      <InputField
        containerStyle={{
          height: 40,
          width: "100%",
          borderWidth: 1,
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 5,
        }}
        placeholder="Enter Password"
        showIcon
        inputStyle={{ width: "90%" }}
      />
      <TouchableOpacity>
        <Text style={styles.forgotText}>{String.forgotpassword}</Text>
      </TouchableOpacity>
      <Button
        title={"Login"}
        containerStyle={{
          height: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
        textStyle={{ fontSize: 16, color: "white", fontWeight: "bold" }}
        backgroundColor={"#5625CC"}
        activeBackgroundColor={"#7f52e9"}
        onPress={() => {}}
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
          {String.textLabel}
        </Text>
        <Text style={{ fontSize: 18, color: "#5625CC", fontWeight: "600" }}>
          {String.register}
        </Text>
      </View>
    </View>
  );
};

export default Login;
