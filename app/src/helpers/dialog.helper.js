import DialogManager, {
  ScaleAnimation
} from "../../../Libraries/react-native-dialog-component/src";
import { Keyboard, StyleSheet } from "react-native";
import React from "react";
import { sizeWidth } from "./size.helper";
import MessageDialog from "../components/dialog/message.dialog";

export default class DialogHelper {
  static dialogShown = false;

  static showConfirmDialog(
    title: string,
    content: string,
    confirmText: string,
    rejectText: string,
    onConfirmClick,
    onRejectClick
  ) {
    DialogHelper.showDialog(
      styles.DialogStyle,
      sizeWidth(90),
      <ConfirmDialog
        title={title}
        content={content}
        confirmText={confirmText}
        rejectText={rejectText}
        onConfirmClick={() => {
          this.dialogShown = false;
          if (onConfirmClick) {
            onConfirmClick();
          }
        }}
        onRejectClick={() => {
          this.dialogShown = false;
          if (onRejectClick) {
            onRejectClick();
          }
        }}
      />
    );
  }

  static showMessageDialog(
    title: string,
    content: string,
    confirmText: string,
    onConfirmClick
  ) {
    Keyboard.dismiss();
    DialogHelper.showDialog(
      styles.DialogStyle,
      sizeWidth(90),
      <MessageDialog
        title={title !== "" ? title : "Error"}
        content={content}
        confirmText={confirmText}
        onConfirmClick={() => {
          this.dialogShown = false;
          if (onConfirmClick) {
            onConfirmClick();
          }
        }}
      />
    );
  }

  static showAlertDialog(title: string, content: string) {
    Keyboard.dismiss();
    DialogHelper.showDialog(
      styles.DialogStyle,
      sizeWidth(90),
      <MessageDialog title={title} content={content} />
    );
  }

  static showDialog(dialogStyle, width, dialog) {
    if (this.dialogShown) return;
    this.dialogShown = true;
    DialogManager.show({
      animationDuration: 0,
      onDismissed: () => (this.dialogShown = false),
      width: width || sizeWidth(90),
      ScaleAnimation: new ScaleAnimation(),
      dialogStyle: dialogStyle || styles.DialogStyle,
      children: dialog
    });
  }

  static dismiss() {
    DialogManager.dismiss();
    this.dialogShown = false;
  }
}

const styles = StyleSheet.create({
  DialogStyle: {
    borderRadius: sizeWidth(1),
    alignItems: "center"
  }
});
