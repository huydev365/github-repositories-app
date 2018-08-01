import PropTypes from "prop-types";
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { sizeFont, sizeHeight } from "../../helpers/size.helper";
import Text from "./text";
import { appColor } from "../../constants/app.constant";

export default class ToolBar extends Component {
  static propTypes = {
    left: PropTypes.object,
    center: PropTypes.object,
    right: PropTypes.object,
    left_right: PropTypes.object,
    title: PropTypes.string
  };

  render() {
    const { left, center, right, left_right, title } = this.props;
    if (title) {
      return (
        <View>
          <View style={styles.statusBar} />
          <View style={styles.default}>
            <Text numberOfLines={1} style={styles.toolBarText}>
              {title}
            </Text>
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <View style={styles.statusBar} />
          <View style={styles.container}>
            <View style={styles.left}>{left}</View>
            <View style={styles.center}>{center}</View>
            {this.renderRight(right)}
          </View>
        </View>
      );
    }
  }

  renderRight = right => {
    return <View style={styles.right}>{right}</View>;
  };
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: appColor.primary
  },
  container: {
    height: sizeHeight(6.9),
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: appColor.primary,
    alignItems: "center"
  },
  default: {
    height: sizeHeight(6.9),
    flexDirection: "row",
    backgroundColor: appColor.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  left: {
    width: "12%",
    justifyContent: "center",
    alignItems: "center"
  },
  right: {
    width: "12%",
    justifyContent: "center",
    alignItems: "center"
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  toolBarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: sizeFont(4.4)
  }
});
