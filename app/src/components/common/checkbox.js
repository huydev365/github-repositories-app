import React, { Component, ReactNode } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Fontello from "./font-tello";
import Text from "./text";
import { sizeFont, sizeWidth } from "../../helpers/size.helper";
import { appColor } from "../../constants/app.constant";

export default class Checkbox extends Component {
  render(): ReactNode {
    const { label, checked, onCheck } = this.props;
    const icon = checked ? "ic_check" : "ic_not_check";
    const iconStyle = checked ? styles.activeIcon : styles.icon;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onCheck} style={styles.body}>
          <Fontello style={iconStyle} name={icon} />
          <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
        <View style={styles.line} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: sizeWidth(0)
  },
  body: {
    flexDirection: "row",
    height: sizeWidth(13),
    alignItems: "center",
    paddingHorizontal: sizeWidth(2.13)
  },
  icon: {},
  activeIcon: {
    color: appColor.primary
  },
  text: {
    fontSize: sizeFont(4),
    marginLeft: sizeWidth(2.13),
    color: "#666666"
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#cccccc"
  }
});
