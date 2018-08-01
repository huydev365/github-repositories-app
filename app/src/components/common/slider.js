import React, { Component, ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import ReactNativeSlider from "react-native-slider";
import Text from "./text";
import { sizeWidth, sizeFont } from "../../helpers/size.helper";

export default class Slider extends Component {
  render(): ReactNode {
    const {
      value,
      title,
      minText,
      maxText,
      color,
      onValueChange,
      max
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.text}>{minText}</Text>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{maxText}</Text>
        </View>
        <ReactNativeSlider
          trackStyle={styles.track}
          minimumValue={0}
          maximumValue={max}
          thumbStyle={[styles.thumb, { backgroundColor: color }]}
          minimumTrackTintColor={color}
          value={value}
          onValueChange={onValueChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizeWidth(3),
    marginVertical: sizeWidth(2)
  },
  top: {
    marginBottom: sizeWidth(2.13),
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between"
  },
  text: {
    fontSize: sizeFont(3.1)
  },
  track: {
    height: sizeWidth(0.66),
    backgroundColor: "rgb(199, 200, 204)"
  },
  title: {
    fontSize: sizeFont(4.4)
  },
  thumb: {
    width: sizeWidth(8),
    height: sizeWidth(8),
    borderRadius: sizeWidth(4)
  }
});
