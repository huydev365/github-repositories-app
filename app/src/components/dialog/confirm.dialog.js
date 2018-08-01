import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppText from "../common/text";
import { sizeWidth } from "../../helpers/size.helper";
import DialogHelper from "../../helpers/dialog.helper";
import { appColor } from "../../constants/app.constant";

export default class ConfirmDialog extends Component {
  render() {
    const { notification, onPressCancel, onPressConfirm } = this.props;
    return (
      <View style={styles.container}>
        <AppText style={styles.title}>THÔNG BÁO</AppText>
        <AppText style={styles.notification}>{notification}</AppText>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={onPressConfirm}>
            <AppText style={styles.text_button}>Đồng ý</AppText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancel}
            onPress={() => DialogHelper.dismiss()}
          >
            <AppText style={styles.textCancel}>Huỷ</AppText>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: sizeWidth(90),
    padding: sizeWidth(2),
    alignItems: "center"
  },
  row: {
    flexDirection: "row"
  },
  title: {
    color: appColor.primary
  },
  notification: {
    marginVertical: sizeWidth(2)
  },
  button: {
    flex: 1,
    backgroundColor: appColor.primary,
    marginHorizontal: sizeWidth(3),
    borderRadius: sizeWidth(2),
    alignItems: "center",
    marginTop: sizeWidth(2)
  },
  cancel: {
    flex: 1,
    backgroundColor: "#eeeeee",
    marginHorizontal: sizeWidth(3),
    borderRadius: sizeWidth(2),
    alignItems: "center",
    marginTop: sizeWidth(2)
  },
  text_button: {
    color: "white",
    fontWeight: "bold",
    margin: sizeWidth(2)
  },
  textCancel: {
    fontWeight: "bold",
    color: "#333333",
    margin: sizeWidth(2)
  }
});
