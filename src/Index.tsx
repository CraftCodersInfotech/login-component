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
  buttonText?: StyleProp<TextStyle>;
  backgroundColor?: string;
  activeBackgroundColor?: string;
  orText?: string;
  orLineView?: StyleProp<ViewStyle>;
  opacity?: number;
  paddingHorizontalorText?: number;
  footerText?: string;
  footerTextStyle?: StyleProp<TextStyle>;
  footerTouchableTextStyle?: StyleProp<TextStyle>;
  footerTouchableText?: string;
  registerPress?: () => void;
  forgotLabel?: string;
  forgotStyle?: StyleProp<TextStyle>;
  forgotPress?: () => void;
}

const Login = (props: ILoginProps) => {
  let schema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    mobilenumber: yup.string().required().min(10),
    password: yup
      .string()
      .required()
      .test(
        'regex',
        'Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase',
        (val: any) => {
          let regExp = new RegExp(
            '^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$',
          );
          // console.log(regExp.test(val), regExp, val);
          return regExp.test(val);
        },
      ),
  });
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
    buttonText, // add text in place of "login"
    backgroundColor, //inactive color of "login" button
    activeBackgroundColor, //active color of "login" button
    orText, //add text in-place of "or"
    orLineView, //prop to give style to line "or"
    opacity, //to give opacity to "or" view
    paddingHorizontalorText, //to leave space between "or"
    footerText, // add text in-place of "Don't have an account? "
    footerTextStyle, //prop to give style to  "Don't have an account?"
    footerTouchableTextStyle, //prop to give style to  "REGISTER"
    footerTouchableText, //add text in-place of "REGISTER "
    registerPress, //onPress for "REGISTER" text
    forgotLabel, // add text for "forgot password?"
    forgotStyle, // prop to style the text "forgot password?"
    forgotPress, //onPress for "Forget password" text
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
  const submit = () => {
    console.log('data:: ', data);
  };

  const data = {
    email: getValues('email'),
    mobilenumber: getValues('mobilenumber'),
    password: getValues('password'),
  };

  const [res, setRes] = useState(data);
  return (
    <View style={styles.mainView}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={props.data}
        renderItem={({item}) => (
          <View>
            {ShowLabel && <Text style={inputLabelStyle}>{item.Label}</Text>}
            <InputField
              showIcon={item.showIcon}
              name={item.name}
              control={control}
              containerStyle={inputContainer}
              placeholder={item.placeholder}
              maxLength={maxLength}
              keyboardType={item.keyboardType}
              inputStyle={{
                width: item.showIcon ? '90%' : '100%',
                // backgroundColor: 'red',
              }}
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
              title={'Login'}
              containerStyle={buttonContainer}
              textStyle={buttonText}
              backgroundColor={backgroundColor}
              activeBackgroundColor={activeBackgroundColor}
              onPress={handleSubmit(submit)}
            />
            <View style={[styles.orMain, {opacity}]}>
              <View style={orLineView} />
              <Text style={{paddingHorizontal: paddingHorizontalorText}}>
                {orText}{' '}
              </Text>
              <View style={orLineView} />
            </View>
            <View style={styles.footerText}>
              <Text style={footerTextStyle}>{footerText}</Text>
              <TouchableOpacity onPress={registerPress}>
                <Text style={footerTouchableTextStyle}>
                  {footerTouchableText}
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={forgotPress}>
                <Text style={forgotStyle}>{forgotLabel}</Text>
              </TouchableOpacity>
            </View>
          </>
        }
      />
    </View>
  );
};
export default Login;
