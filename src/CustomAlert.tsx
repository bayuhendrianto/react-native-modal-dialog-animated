import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC } from "react";
import { CustomAlertProps } from "./types";
import Animated from "react-native-reanimated";

const { width } = Dimensions.get("window");

export const CustomAlert: FC<CustomAlertProps> = ({
  isTitle,
  visible,
  onVisible,
  onConfirm,
  title,
  titleColor,
  titlePosition,
  message,
  messageColor,
  actionText = "ok",
  fontSize = 24,
  backgroundColor = "#FFFFFF",
  buttonColor = "#279EFF",
  buttonTextColor = "white",
}) => {
  return (
    <>
      {visible && (
        <Animated.View
          style={[styles.modalOverlay, { backgroundColor: "rgba(0,0,0,0.5)" }]}
        >
          <Animated.View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
            }}
          >
            <Animated.View
              style={{
                backgroundColor: backgroundColor,
                height: "auto",
                width: "100%",
                borderRadius: 10,
                padding: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Animated.View>
                {isTitle && (
                  <Animated.Text
                    style={{
                      position: "relative",
                      fontWeight: "bold",
                      fontSize: 28,
                      color: titleColor ? titleColor : "#000000",
                      textAlign: titlePosition,
                      marginBottom: 20,
                    }}
                  >
                    {title}
                  </Animated.Text>
                )}
                <Animated.Text
                  style={{
                    position: "relative",
                    fontWeight: "bold",
                    fontSize: 22,
                    color: messageColor ? messageColor : "#000000",
                    textAlign: "center",
                  }}
                >
                  {message}
                </Animated.Text>
              </Animated.View>
            </Animated.View>
            <Animated.View style={{ marginTop: 10, width: "90%" }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => onConfirm()}
                style={{
                  minHeight: 20,
                  padding: 10,
                  backgroundColor: buttonColor,
                  borderRadius: 10,
                  width: 0.9 * width,
                }}
              >
                <Animated.Text
                  style={{
                    textAlign: "center",
                    fontSize: fontSize,
                    fontWeight: "700",
                    color: buttonTextColor,
                  }}
                >
                  {actionText}
                </Animated.Text>
              </TouchableOpacity>
            </Animated.View>
          </Animated.View>
        </Animated.View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99999,
  },
  modalContainer: {
    width: width,
    borderRadius: 10,
    alignItems: "center",
  },
});
