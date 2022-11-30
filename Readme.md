# react-native-login

login a great way to verifiy the user with their e-mail address or phone number. Login page can contain images, buttons, text and more. Login page is mainly used for let the user enter in the app with verification.

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

### Login

| Name       | Type  | Description         |
| ---------- | ----- | ------------------- |
| InputField | props | props of InputField |
| Button     | props | props of Button     |

- Example

```javascript
import Login from "react-native-login";
import InputField from "react-native-input-Field";
import Button from "react-native-button";
const App = () => {
  return (
        <Image
        source={require("../src/assets/image1.png")}
        style={styles.image}
      />
      <InputField
        placeholder="Enter Mobile Number"
        width={"100%"}
        borderWidth={0.2}
        keyboardType={"numeric"}
      />
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
  );
};
```
