import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  KeyboardType,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {styles} from './Style';
import InputField from 'react-native-input-field';
import Button from 'react-native-button';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {LoginContext} from './Context';

interface InputData {
  name: string;
  Label?: string;
  placeholder?: string;
  inputType?: string;
  keyboardType?: KeyboardType | undefined;
  showIcon?: boolean;
  showLogo?: boolean;
  image?: ImageSourcePropType;
  showPasswordIcon?: ImageSourcePropType;
  hidePasswordIcon?: ImageSourcePropType;
}

export interface ILoginProps {
  data: InputData[];
  source?: ImageSourcePropType;
  imageStyle?: StyleProp<ImageStyle>;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  ShowLabel?: boolean;
  inputLabelStyle?: StyleProp<TextStyle>;
  inputContainer?: StyleProp<ViewStyle>;
  maxLength?: number;
  buttonContainer?: StyleProp<ViewStyle>;
  buttonText?: string;
  buttonTextStyle?: StyleProp<TextStyle>;
  onLoginPress?: any;
  backgroundColor?: string;
  activeBackgroundColor?: string;
  orText?: string;
  orTextStyle?: StyleProp<TextStyle>;
  orLineView?: StyleProp<ViewStyle>;
  orLineContainer?: StyleProp<ViewStyle>;
  paddingHorizontalorText?: number;
  footerText?: string;
  footerTextStyle?: StyleProp<TextStyle>;
  footerTouchableTextStyle?: StyleProp<TextStyle>;
  footerTouchableText?: string;
  registerPress?: () => void;
  forgotLabel?: string;
  forgotStyle?: StyleProp<TextStyle>;
  forgotPress?: () => void;
  children?: React.ReactNode;
  iconStyle?: StyleProp<ImageStyle>;
  passwordIconStyle?: StyleProp<ImageStyle>;
  placeholderTextColor?: string;
  bounces?: boolean;
  inputStyle?: StyleProp<ViewStyle>;
  schema?:any
}

const Login = (props: ILoginProps) => {
//   let schema = yup.object().shape({
//     email: yup
//       .string()
//       .email('Please enter valid email')
//       .required('Email Address is Required'),
//     // mobilenumber: yup.string().required().min(10),
//     password: yup
//       .string()
//       .required()
//       .test(
//         'regex',
//         'Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase',
//         (val: any) => {
//           let regExp = new RegExp(
//             '^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$',
//           );
//           // console.log(regExp.test(val), regExp, val);
//           return regExp.test(val);
//         },
//       ),
//   });
  const {
    source, // path of image
    imageStyle, // prop to give style to image
    title, // heading under the image
    titleStyle, // prop to give style to heading under the image
    ShowLabel, // To show the label upon input-field
    inputLabelStyle, //prop to style  the label upon input-field
    inputContainer, //prop to style  the input-field
    maxLength, // add to allow user enter limited data
    buttonContainer, // prop to style the "login" button
    buttonText, // Add text in-place of "login"
    buttonTextStyle, // add text in place of "login"
    onLoginPress, //onpress for button
    backgroundColor, //inactive color of "login" button
    activeBackgroundColor, //active color of "login" button
    orText, //add text in-place of "or"
    orTextStyle,
    orLineView, //prop to give style to line "or"
    orLineContainer, //To give style to orLine container
    paddingHorizontalorText, //to leave space between "or"
    footerText, // add text in-place of "Don't have an account? "
    footerTextStyle, //prop to give style to  "Don't have an account?"
    footerTouchableTextStyle, //prop to give style to  "REGISTER"
    footerTouchableText, //add text in-place of "REGISTER "
    registerPress, //onPress for "REGISTER" text
    forgotLabel, // add text for "forgot password?"
    forgotStyle, // prop to style the text "forgot password?"
    forgotPress, //onPress for "Forget password" text
    children, //User can add view or text
    iconStyle,
    passwordIconStyle,
    placeholderTextColor,
    bounces,
    inputStyle,
    schema
  } = props;
  const {registerUser, userData} = useContext(LoginContext);
  const {
    control,
    handleSubmit,
    formState: {errors},
    getValues,
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
  });
  const submit = (data: any) => {
    onLoginPress(data);
    // console.log('data:: ', data);
  };

  const data = {
    email: getValues('email'),
    // mobilenumber: getValues('mobilenumber'),
    password: getValues('password'),
  };

  const [res, setRes] = useState(data);
  return (
    <View style={styles.mainView}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={props.data}
        bounces={bounces}
        renderItem={({item}) => (
          <View>
            {ShowLabel && <Text style={inputLabelStyle}>{item.Label}</Text>}
            <InputField
              passwordIconStyle={passwordIconStyle}
              placeholderTextColor={placeholderTextColor}
              iconStyle={iconStyle}
              showLogo={item.showLogo}
              source={item.image}
              showPasswordIcon={item.showPasswordIcon}
              hidePasswordIcon={item.hidePasswordIcon}
              showIcon={item.showIcon}
              name={item.name}
              control={control}
              containerStyle={inputContainer}
              placeholder={item.placeholder}
              maxLength={maxLength}
              keyboardType={item.keyboardType}
              inputStyle={inputStyle}
              errors={errors}
            />
          </View>
        )}
        ListHeaderComponent={
          <>
            <Image source={source} style={imageStyle} />
            <Text style={titleStyle}>{title}</Text>
          </>
        }
        ListFooterComponent={
          <>
            <Button
              title={buttonText}
              containerStyle={buttonContainer}
              textStyle={buttonTextStyle}
              backgroundColor={backgroundColor}
              activeBackgroundColor={activeBackgroundColor}
              onPress={handleSubmit(submit)}
            />
            {orText && (
              <View style={[styles.orMain, orLineContainer]}>
                <View style={orLineView} />
                <Text
                  style={[
                    {paddingHorizontal: paddingHorizontalorText},
                    orTextStyle,
                  ]}>
                  {orText}
                </Text>
                <View style={orLineView} />
              </View>
            )}
            {children}
            <TouchableOpacity style={styles.footerText} onPress={registerPress}>
              <Text style={footerTextStyle}>{footerText}</Text>
              <Text style={footerTouchableTextStyle}>
                {footerTouchableText}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={forgotPress}
              style={{alignSelf: 'center'}}>
              <Text style={forgotStyle}>{forgotLabel}</Text>
            </TouchableOpacity>
          </>
        }
      />
    </View>
  );
};
export default Login;
