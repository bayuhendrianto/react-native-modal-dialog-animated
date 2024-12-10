import React, { FC } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { CustomDialogInputProps } from "./types";
import Animated from "react-native-reanimated";

const { width } = Dimensions.get("window");
export const CustomDialogInput: FC<CustomDialogInputProps> = ({
  isTitle,
  isMessage,
  visible,
  onVisible,
  onConfirm,
  title,
  titleColor,
  titleFontSize,
  titlePosition,
  message,
  messageColor,
  messageFontSize,
  messagePosition,
  actionCancelText = "cancel",
  actionConfirmText = "ok",
  backgroundColor = "#FFF8E3",
  buttonCancelColor = "red",
  buttonTextCancelColor = "#FFFFFF",
  buttonConfirmColor = "#40A2D8",
  buttonTextConfirmColor = "#FFFFFF",
  fontSize = 24,
  children,
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
                width: "90%",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Animated.View style={{ width: "100%" }}>
                <Animated.View style={{ padding: 15 }}>
                  {isTitle && (
                    <Animated.Text
                      style={{
                        position: "relative",
                        fontWeight: "bold",
                        fontSize: titleFontSize,
                        color: titleColor,
                        textAlign: titlePosition,
                        marginBottom: 2,
                      }}
                    >
                      {title}
                    </Animated.Text>
                  )}

                  {isMessage && (
                    <Animated.Text
                      style={{
                        fontSize: messageFontSize,
                        color: messageColor,
                        textAlign: messagePosition,
                      }}
                    >
                      {message}
                    </Animated.Text>
                  )}
                </Animated.View>
                {children}
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
    zIndex: 100,
  },
  modalContainer: {
    width: width,
    borderRadius: 10,
    alignItems: "center",
  },
});
