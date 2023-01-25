# react-native-login

login a great way to verifiy the user with their e-mail address or phone number and password. Login page can contain images, buttons, text and more. Login page is mainly used for let the user enter in the app with verification.

## Table of Content

- [Features](#features)
- [Installation](#installation)
- [API reference](#api-reference)

## Features

Add a featured subtitle to the Login. This, Receives all Text, Image, Button And input props.
To add the react-native-login to React Native app, run this command with tag version

```
npm install react-native-login
```

Make sure to install pod into react-native Project after linking given command

## API reference
### data
| Name | Type   | Why to add  |
| ---- | -----  |-------------------- |
| name |string  | To let the data verify with "yup"|
| Label | string  |To add the title upon the input-field|
| placeholder | string|To add the placeholder in input-field |
| inputType | string|-------------------- |
| keyboardType | KeyboardType  |"default", "number-pad", "decimal-pad", "numeric", "email-address", "phone-pad""url"|
| showIcon | boolean|Add to show the password image |
| showLogo |boolean|Add to show the placeholder image |
| image | ImageSourcePropType|To add image as placeholder |
| showPasswordIcon | ImageSourcePropType|To add image for show password |
| hidePasswordIcon | ImageSourcePropType|To add image for hide password |
### Login

| Name | Type  | Description          |
| ---- | ----- | -------------------- |
| data | InputData[] | Props to render data |
| source |  ImageSourcePropType; |  Path of image |
| imageStyle | StyleProp<ImageStyle>; |Prop to give style to image |
| title | string | Heading under the image |
| titleStyle | StyleProp<TextStyle> | Prop to give style to heading under the image |
| ShowLabel | boolean | To show the label upon input-field |
| inputLabelStyle | StyleProp<ViewStyle> | Prop to style  the label upon input-field |
| inputContainer | props | Prop to style  the input-field |
| maxLength | number | Add to allow user enter limited data |
| buttonContainer | StyleProp<ViewStyle> | Prop to style the "login" button |
| buttonText | StyleProp<ViewStyle> | Prop to style the "login" button |
| buttonTextStyle | string | Add text in-place of "login" |
| onLoginPress | any | onpress for button |
| backgroundColor | string | Inactive color of "login" button |
| activeBackgroundColor | string | Active color of "login" button |
| orText | string | Add text in-place of "or" |
| orTextStyle | StyleProp<TextStyle> | Prop to style the "or" text ||||||||||||||||||||||||||||||||
| orLineView | StyleProp<ViewStyle> | Prop to give style to line "or" |
| orLineContainer | StyleProp<ViewStyle> | To give style to orLine container|
| paddingHorizontalorText | number | To leave space between "or" |
| footerText | string | Add text in-place of "Don't have an account? " |
| footerTextStyle | StyleProp<TextStyle> | Prop to give style to  "Don't have an account?" |
| footerTouchableTextStyle | StyleProp<TextStyle> | Prop to give style to  "REGISTER" |
| footerTouchableText | string | Add text in-place of "REGISTER " |
| registerPress | () => void | onPress for "REGISTER" text |
| forgotLabel | string | Add text for "forgot password?" |
| forgotStyle | StyleProp<TextStyle> | Prop to style the text "forgot password?" |
| forgotPress | () => void | onPress for "Forget password" text |
| children | ReactNode| User can add view or text |
| iconStyle | StyleProp<ImageStyle>| Prop to give style to image in-front of input-field  |
| passwordIconStyle | StyleProp<ImageStyle>| Prop to give style to password image |
| placeholderTextColor | string| To change the color of placeholder |
| bounces | boolean| To let the screen bounce or not |
| inputStyle | StyleProp<ViewStyle>| prop to give style to inner part of input field |

![Screenshot 2022-12-06 at 5 33 52 PM](https://user-images.githubusercontent.com/24438876/205907066-d81db9cf-73fb-4621-a294-64bcdc71c6ee.png)
![Screenshot 2022-12-06 at 5 34 29 PM](https://user-images.githubusercontent.com/24438876/205907330-69b1023d-508e-43cd-b6f6-b7ae2251ccfb.png)
