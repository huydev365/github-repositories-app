import React, { Component, ReactNode } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";
import Text from "./text";
import { sizeFont, sizeWidth } from "../../helpers/size.helper";
import { appColor } from "../../constants/app.constant";

export default class ValueAdjust extends Component {
  render(): ReactNode {
    const { label, value, max } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
        {this.renderAdjust()}
      </View>
    );
  }

  onMinusPress = () => {
    const { value, min, max, onValueChange } = this.props;
    if (value > min) onValueChange(value - 1);
  };

  onPlusPress = () => {
    const { value, max, onValueChange } = this.props;
    if (value < max) onValueChange(value + 1);
  };

  renderAdjust = () => {
    return (
      <View style={styles.adjust}>
        <TouchableOpacity
          onPress={this.onMinusPress}
          style={[styles.action, styles.separatorRight]}
        >
          <Image
            style={styles.symbol}
            source={require("../../../res/image/minus-symbol.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.onPlusPress}
          style={[styles.action, styles.separatorLeft]}
        >
          <Image
            style={styles.symbol}
            source={require("../../../res/image/plus-symbol.png")}
          />
        </TouchableOpacity>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: sizeWidth(2),
    paddingHorizontal: sizeWidth(3)
  },
  label: {
    fontSize: sizeFont(4.1),
    color: "black",
    flex: 1
  },
  value: {
    fontSize: sizeFont(4.1),
    color: "rgb(139, 139, 145)",
    marginHorizontal: sizeWidth(3)
  },
  adjust: {
    flexDirection: "row",
    borderWidth: 1,
    width: sizeWidth(27),
    borderColor: appColor.primary,
    borderRadius: sizeWidth(0.77)
  },
  action: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    height: sizeWidth(7)
  },
  symbol: {
    height: sizeWidth(4),
    width: sizeWidth(4),
    tintColor: appColor.primary
  },
  separatorRight: {
    borderRightWidth: 0.5,
    borderColor: appColor.primary
  },
  separatorLeft: {
    borderLeftWidth: 0.5,
    borderColor: appColor.primary
  }
});
