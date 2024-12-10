import React, { FC, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { CustomDialogProps } from "./types";
import Animated from "react-native-reanimated";

const { width } = Dimensions.get("window");
export const CustomDialog: FC<CustomDialogProps> = ({
  isTitle,
  visible,
  onVisible,
  onConfirm,
  title,
  titleColor,
  titlePosition,
  titleFontSize,
  message,
  messageColor,
  messageFontSize,
  actionCancelText = "cancel",
  actionConfirmText = "ok",
  backgroundColor = "#FFF8E3",
  buttonCancelColor = "red",
  buttonTextCancelColor = "#FFFFFF",
  buttonConfirmColor = "#40A2D8",
  buttonTextConfirmColor = "#FFFFFF",
  fontSize = 24,
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
                backgroundColor: backgroundColor ? backgroundColor : "#FFFFFF",
                height: "auto",
                width: "97%",
                borderRadius: 10,
                padding: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Animated.View style={{ width: "90%" }}>
                {isTitle && (
                  <Animated.Text
                    style={{
                      position: "relative",
                      fontWeight: "bold",
                      fontSize: titleFontSize ? titleFontSize : 24,
                      color: titleColor ? titleColor : "#000000",
                      textAlign: titlePosition,
                      marginBottom: 20,
                    }}
                  >
                    {title ? title : "Dialog Title"}
                  </Animated.Text>
                )}
                <Animated.Text
                  style={{
                    position: "relative",
                    fontWeight: "bold",
                    fontSize: messageFontSize ? messageFontSize : 22,
                    color: messageColor ? messageColor : "#000000",
                    textAlign: "center",
                  }}
                >
                  {message ? message : "Dialog Messages"}
                </Animated.Text>
              </Animated.View>
            </Animated.View>
            <Animated.View style={{ marginTop: 5, width: "90%" }}>
              <Animated.View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    onVisible(false);
                  }}
                  style={{
                    width: "49%",
                    minHeight: 20,
                    padding: 10,
                    backgroundColor: buttonCancelColor
                      ? buttonCancelColor
                      : "red",
                    borderRadius: 10,
                  }}
                >
                  <Animated.Text
                    style={{
                      textAlign: "center",
                      fontSize: fontSize,
                      fontWeight: "700",
                      color: buttonTextCancelColor
                        ? buttonTextCancelColor
                        : "#FFFFFF",
                    }}
                  >
                    {actionCancelText ? actionCancelText : "cancel"}
                  </Animated.Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    onVisible(false);
                    onConfirm();
                  }}
                  style={{
                    width: "49%",
                    minHeight: 20,
                    padding: 10,
                    backgroundColor: buttonConfirmColor
                      ? buttonConfirmColor
                      : "#40A2D8",
                    borderRadius: 10,
                  }}
                >
                  <Animated.Text
                    style={{
                      textAlign: "center",
                      fontSize: fontSize,
                      fontWeight: "700",
                      color: buttonTextConfirmColor
                        ? buttonTextConfirmColor
                        : "#FFFFFF",
                    }}
                  >
                    {actionConfirmText ? actionConfirmText : "ok"}
                  </Animated.Text>
                </TouchableOpacity>
              </Animated.View>
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
