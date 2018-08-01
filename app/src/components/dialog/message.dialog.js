import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";
import DialogManager from "../../../../Libraries/react-native-dialog-component/src";
import WrapText from "../common/wrap-text";
import { sizeFont, sizeWidth } from "../../helpers/size.helper";
import { appColor } from "../../constants/app.constant";

export default class MessageDialog extends Component {
  onConfirmClick = () => {
    const { onConfirmClick } = this.props;
    DialogManager.dismiss();
    if (onConfirmClick) {
      onConfirmClick();
    }
  };

  renderTitle = title => {
    const { confirmText } = this.props;
    const colorTitle = !confirmText && { color: "#2690FD" };
    if (title) {
      return (
        <WrapText style={[styles.TitleText, colorTitle]}>{title}</WrapText>
      );
    }
  };

  render() {
    const { confirmText, title, content } = this.props;
    return (
      <View style={styles.Container}>
        <View style={styles.ContentWrapper}>
          {this.renderTitle(title)}
          {!confirmText && (
            <View
              style={[styles.VerticalSeparator, { marginBottom: sizeWidth(3) }]}
            />
          )}
          <WrapText style={styles.ContentText}>{content}</WrapText>
        </View>
        {confirmText && this.renderConfirmContainer(confirmText)}
      </View>
    );
  }

  renderConfirmContainer = confirmText => (
    <View>
      <View style={styles.VerticalSeparator} />
      <View style={styles.ActionContainer}>
        <TouchableOpacity
          style={styles.ActionWrapper}
          onPress={this.onConfirmClick}
        >
          <Text style={styles.ActionText}>{confirmText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

MessageDialog.propTypes = {
  confirmText: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
  onConfirmClick: PropTypes.func
};

const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
    overflow: "hidden"
  },
  ContentWrapper: {
    paddingHorizontal: sizeWidth(3.2),
    paddingVertical: sizeWidth(6),
    alignItems: "center"
  },
  TitleText: {
    fontSize: sizeFont(4.8),
    marginBottom: 10,
    fontWeight: "bold",
    color: "#000"
  },
  ContentText: {
    fontSize: sizeFont(4)
  },
  ActionContainer: {
    flexDirection: "row"
  },
  VerticalSeparator: {
    height: 1,
    width: sizeWidth(90),
    backgroundColor: "#DDDDDD"
  },
  HorizontalSeparator: {
    width: 1,
    backgroundColor: "#DDDDDD"
  },
  ActionWrapper: {
    flex: 1,
    padding: sizeWidth(4),
    justifyContent: "center",
    alignItems: "center"
  },
  ActionText: {
    color: appColor.primary,
    fontSize: sizeFont(3.73)
  }
});
