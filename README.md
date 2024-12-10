# React Native Modal Dialog

## React Native Modal Dialog <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat" />

<a href="https://nodei.co/npm/@bayudev/react-native-modal-dialog-animated/"><img src="https://nodei.co/npm/@bayudev/react-native-modal-dialog-animated.png?downloads=true&downloadRank=true&stars=true"></a>

<hr>

## Installation

```bash
npm i @bayudev/react-native-modal-dialog-animated --save
# OR
yarn add @bayudev/react-native-modal-dialog-animated

```

## Usage

```js
import { ReactNativeAlert } from "@bayudev/react-native-modal-dialog-animated";

<ReactNativeAlert />;
```

<hr>
<!-- <div>
  <h2 style="color:darkgreen;">NPM Package</h2>
  <a href="https://www.npmjs.com/package/rn-custom-modal-components">https://www.npmjs.com/package/rn-custom-modal-components</a>
</div> -->
<hr>
<div>
  <h2 style="color:darkgreen;">Screenshots</h2>
  <table border>
	<tr>
     	  <td><img src="https://github.com/bayuhendrianto/react-native-modal-dialog/blob/main/screenshot/home.jpg" width="200" style="margin-right: 30px;"/></td>
     	  <td><img src="https://github.com/bayuhendrianto/react-native-modal-dialog/blob/main/screenshot/modal.jpg" style="margin-right: 30px;" width="200"/></td>
	  <td><img src="https://github.com/bayuhendrianto/react-native-modal-dialog/blob/main/screenshot/openmodaldialog.jpg" width="200" style="margin-right: 30px;"/></td>
     	  <td><img src="https://github.com/bayuhendrianto/react-native-modal-dialog/blob/main/screenshot/modaldialog.jpg" style="margin-right: 30px;" width="200"/></td>
	  <td><img src="https://github.com/bayuhendrianto/react-native-modal-dialog/blob/main/screenshot/openmodaldialoginput.jpg" width="200" style="margin-right: 30px;"/></td>
     	  <td><img src="https://github.com/bayuhendrianto/react-native-modal-dialog/blob/main/screenshot/modaldialoginput.jpg" style="margin-right: 30px;" width="200"/></td>
	</tr>
  </table>
</div>
<hr>

<h2 style="color:darkgreen;">Component properties for Alert Component</h2>
<pre style="font-size: 15px; color: brown;">
    isTitle?: boolean;
    visible: boolean;
    onVisible: any;
    onConfirm: () => void;
    title?: string;
    titleColor?: string;
    titlePosition?: "center" | "auto" | "left" | "right" | "justify";
    message: string | ReactNode;
    messageColor?: string;
    actionText?: string;
    fontSize?: number;
    backgroundColor?: string;
    buttonColor?: string;
    buttonTextColor?: string;
</pre>
<hr>

<h2 style="color:darkgreen;">Component properties for Dialog Component</h2>
<pre style="font-size: 15px; color: brown;">
    isTitle?: boolean;
    visible: boolean;
    onVisible: any;
    onConfirm: () => void;
    title?: string;
    titleColor?: string;
    titlePosition?: "center" | "auto" | "left" | "right" | "justify";
    titleFontSize?: number;
    message: string | ReactNode;
    messageColor?: string;
    messageFontSize?: number;
    actionCancelText?: string;
    actionConfirmText?: string;
    backgroundColor?: string;
    buttonCancelColor?: string;
    buttonTextCancelColor?: string;
    buttonConfirmColor?: string;
    buttonTextConfirmColor?: string;
    borderColor?: string;
    fontSize?: number;
</pre>
<hr>

<h2 style="color:darkgreen;">Component properties for Dialog Input Component</h2>
<pre style="font-size: 15px; color: brown;">
    isTitle?: boolean;
    isMessage?: boolean;
    visible: boolean;
    onVisible: any;
    onConfirm: () => void;
    title?: string;
    titleColor?: string;
    titleFontSize?: number;
    titlePosition?: "center" | "auto" | "left" | "right" | "justify";
    message?: string | ReactNode;
    messageColor?: string;
    messageFontSize?: number;
    messagePosition?: "center" | "auto" | "left" | "right" | "justify";
    actionCancelText?: string;
    actionConfirmText?: string;
    backgroundColor?: string;
    buttonCancelColor?: string;
    buttonTextCancelColor?: string;
    buttonConfirmColor?: string;
    buttonTextConfirmColor?: string;
    children: ReactNode;
    borderColor?: string;
  fontSize?: number;
</pre>
<hr>
<h2 style="color:darkgreen;">Code for Alert Modal</h2>

```js
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import { ReactNativeAlert } from "@bayudev/react-native-modal-dialog-animated";

export default function App() {
  const [visible, setVisible] = useState(false);

  const onConfirm = () => {
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <ReactNativeAlert
        visible={visible}
        onVisible={setVisible}
        message={
          <>
            <Text>React Native Alert !</Text>
          </>
        }
        onConfirm={onConfirm}
      />

      <Pressable
        onPress={() => setVisible(true)}
        style={{
          width: "80%",
          height: 50,
          padding: 8,
          borderRadius: 10,
          backgroundColor: "blue",
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 22,
          }}
        >
          Open Modal
        </Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
```

<hr/>

<h2 style="color:darkgreen;">Code for Dialog Modal</h2>

```js
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

// Import here
import { ReactNativeDialog } from "@bayudev/react-native-modal-dialog-animated";

export default function App() {
  const [visible, setVisible] = useState(false);

  const onConfirm = () => {
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <ReactNativeDialog
        visible={visible}
        onVisible={setVisible}
        message={
          <>
            <Text>React Native Dialog !</Text>
          </>
        }
        onConfirm={onConfirm}
      />

      <Pressable
        onPress={() => setVisible(true)}
        style={{
          width: "80%",
          height: 50,
          padding: 8,
          borderRadius: 10,
          backgroundColor: "blue",
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 22,
          }}
        >
          Open Dialog
        </Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
```

<hr/>

<h2 style="color:darkgreen;">Code for Dialog Modal</h2>

```js
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

// Import here
import { ReactNativeDialogInput } from "@bayudev/react-native-modal-dialog-animated";

export default function App() {
  const [visible, setVisible] = useState(false);
  const [comment, setComment] = useState("");

  const onConfirm = () => {
    setVisible(false);
  };

  /**
   * Create Input for children
   */
  const CustomInput = () => {
    return (
      <View style={{ padding: 15 }}>
        <Text style={{ margin: 12, marginBottom: -18, color: "#000000" }}>
          Comment
        </Text>
        <TextInput
          onChangeText={setComment}
          placeholder="add your comment here"
          inputMode="text"
          value={comment}
          multiline
          textAlignVertical="top"
          style={{
            height: 100,
            margin: 12,
            borderBottomWidth: 3,
            borderBottomColor: "#000000",
            color: "#FFFFFF",
            fontSize: 22,
            fontWeight: "700",
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ReactNativeDialogInput
        children={<CustomInput />}
        isTitle
        title="React Native Dialog !"
        titleFontSize={22}
        titleColor="#000000"
        titlePosition="center"
        visible={visible}
        onVisible={setVisible}
        message={
          <>
            <Text>React Native Dialog !</Text>
          </>
        }
        onConfirm={onConfirm}
        backgroundColor="#FFF8E3"
      />

      <Pressable
        onPress={() => setVisible(true)}
        style={{
          width: "80%",
          height: 50,
          padding: 8,
          borderRadius: 10,
          backgroundColor: "blue",
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 22,
          }}
        >
          Open Dialog Input
        </Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
```

<hr/>
