import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  KeyboardType,
} from "react-native";
import React, { useContext, useState } from "react";
import { styles } from "./Style";
import InputField from "react-native-input-field";
import Button from "react-native-button";
import { String } from "./constants/String";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginContext } from "./Context";
interface InputData {
  name: string;
  Label?: string;
  placeholder?: string;
  inputType?: string;
  keyboardType?: KeyboardType | undefined;
}

export interface ILoginProps {
  data: InputData[];
}

const Login = (props: ILoginProps) => {
  let schema = yup.object().shape({
    mobilenumber: yup.string().required().min(10),
    password: yup
      .string()
      .required()
      .test(
        "regex",
        "Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
        (val: any) => {
          let regExp = new RegExp(
            "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
          );
          // console.log(regExp.test(val), regExp, val);
          return regExp.test(val);
        }
      ),
  });
  const { registerUser, userData } = useContext(LoginContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });
  const submit = () => {
    console.log("data:: ", data);
  };

  const data = {
    mobilenumber: getValues("mobilenumber"),
    password: getValues("password"),
  };

  const [res, setRes] = useState(data);
  return (
    <View style={styles.mainView}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={props.data}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.inputTitle}>{item.Label}</Text>
            <InputField
              name={item.name}
              control={control}
              containerStyle={styles.containermobile}
              placeholder={item.placeholder}
              maxLength={10}
              keyboardType={item.keyboardType}
              inputStyle={{ width: "100%" }}
              errors={errors}
            />
          </View>
        )}
        ListHeaderComponent={
          <>
            <Image
              source={require("../src/assets/CraftCoders.png")}
              style={styles.image}
            />
            <Text style={styles.mainTitle}>{String.loginLabel}</Text>
          </>
        }
        ListFooterComponent={
          <>
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
          </>
        }
      />
    </View>
  );
};
export default Login;
