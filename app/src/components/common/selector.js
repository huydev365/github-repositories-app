import React, { Component, ReactNode } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";
import Text from "../../components/common/text";
import { sizeWidth, sizeFont } from "../../helpers/size.helper";

export default class Selector extends Component {
  render(): ReactNode {
    const { label, value, icon, style } = this.props;
    return (
      <View style={style}>
        <View style={styles.container}>
          <Image style={styles.icon} source={icon} />
          <TouchableOpacity style={styles.content}>
            <View style={styles.body}>
              <Text style={styles.value}>{value || label}</Text>
            </View>
            <Image
              style={styles.rightArrow}
              source={require("../../../res/image/right-arrow.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: sizeWidth(3),
    paddingHorizontal: sizeWidth(2.13),
    flexDirection: "row",
    alignItems: "center"
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    width: sizeWidth(6),
    height: sizeWidth(6),
    tintColor: "rgb(209, 209, 209)"
  },
  rightArrow: {
    width: sizeWidth(2.5),
    height: sizeWidth(4),
    tintColor: "rgb(209, 209, 209)"
  },
  body: {
    flex: 1
  },
  value: {
    textAlignVertical: "center",
    fontSize: sizeFont(4),
    marginLeft: sizeWidth(3),
    textAlign: "left",
    color: "black"
  },
  label: {
    color: "black",
    fontSize: sizeFont(2.6)
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#CCCCCC"
  }
});
