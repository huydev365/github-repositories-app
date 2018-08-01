import React, { Component, ReactNode } from "react";
import { View, StyleSheet, Switch } from "react-native";
import PropTypes from "prop-types";
import Text from "./text";
import { sizeFont, sizeWidth } from "../../helpers/size.helper";

export default class SwitchPicker extends Component {
  render(): ReactNode {
    const { value, label, onValueChange } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <Switch
          value={value}
          onValueChange={onValueChange}
          style={styles.switch}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: sizeWidth(3),
    paddingVertical: sizeWidth(1.5),
    alignItems: "center"
  },
  label: {
    flex: 1,
    color: "black",
    fontSize: sizeFont(4.1)
  },
  switch: {}
});
