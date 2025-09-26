import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type CustomAlertProps = {
  isTitle?: boolean;
  visible: boolean;
  onVisible: any;
  onConfirm: () => void;
  title?: string;
  titleColor?: string;
  titlePosition?: "center" | "auto" | "left" | "right" | "justify";
  messageTextAlign?:
    | "auto"
    | "left"
    | "right"
    | "center"
    | "justify"
    | undefined;
  message: string | ReactNode;
  messageColor?: string;
  actionText?: string;
  fontSize?: number;
  backgroundColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  btnWidth?: number;
  btnHeight?: number;
  btnPadding?: number;
  btnBorderRadius?: number;
};

export type CustomDialogProps = {
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
};

export type CustomDialogInputProps = {
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
  children?: ReactNode;
  borderColor?: string;
  fontSize?: number;
};
