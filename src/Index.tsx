import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./Style";
import InputField from "react-native-input-field";
import Button from "react-native-button";
import { String } from "./constants/String";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const Login = () => {
  let schema = yup.object().shape({
    mobilenumber: yup.string().required().min(10),
    password: yup
      .string()
      .required()
      .test(
        "regex",
        "Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
        (val) => {
          let regExp = new RegExp(
            "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
          );
          // console.log(regExp.test(val), regExp, val);
          return regExp.test(val);
        }
      ),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });
  const submit = () => {
    console.log("error", errors);
  };
  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <Image
        source={require("../src/assets/image1.png")}
        style={styles.image}
      />
      <Text style={styles.mainTitle}>{String.loginLabel}</Text>
      <Text style={styles.inputTitle}>{String.moblieNum}</Text>
      <InputField
        name="mobilenumber"
        control={control}
        containerStyle={{
          height: 40,
          width: "100%",
          borderWidth: 1,
          paddingHorizontal: 5,
        }}
        placeholder="Enter Mobile Number"
        maxLength={10}
        keyboardType={"numeric"}
        inputStyle={{ width: "100%" }}
        errors={errors}
      />

      <Text style={styles.inputTitle}>{String.password}</Text>
      <InputField
        name="password"
        control={control}
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
        errors={errors}
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
        onPress={handleSubmit(submit)}
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
