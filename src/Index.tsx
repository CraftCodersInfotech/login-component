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
    <View style={styles.mainView}>
      <Image
        source={require("../src/assets/image1.png")}
        style={styles.image}
      />
      <Text style={styles.mainTitle}>{String.loginLabel}</Text>
      <Text style={styles.inputTitle}>{String.moblieNum}</Text>
      <InputField
        name="mobilenumber"
        control={control}
        containerStyle={styles.containermobile}
        placeholder="Enter mobile number"
        maxLength={10}
        keyboardType={"numeric"}
        inputStyle={{ width: "100%" }}
        errors={errors}
      />

      <Text style={styles.inputTitle}>{String.password}</Text>
      <InputField
        name="password"
        control={control}
        containerStyle={styles.containerpassword}
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
        containerStyle={styles.Button}
        textStyle={styles.loginText}
        backgroundColor={"#5625CC"}
        activeBackgroundColor={"#7f52e9"}
        onPress={handleSubmit(submit)}
      />
      <View style={styles.orMain}>
        <View style={styles.orLine} />
        <Text style={{ paddingHorizontal: 10 }}>or </Text>
        <View style={styles.orLine} />
      </View>
      <View style={styles.footerText}>
        <Text style={styles.textLabel}>{String.textLabel}</Text>
        <Text style={styles.register}>{String.register}</Text>
      </View>
    </View>
  );
};
export default Login;
