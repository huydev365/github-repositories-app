import { BaseComponent } from "../base-component";
import { sizeFont, sizeWidth } from "../../helpers/size.helper";
import { connect } from "react-redux";
import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { navigateBack } from "../../actions/nav.action";

class BackIcon extends BaseComponent {
  render() {
    const { navigateBack } = this.props;
    return (
      <TouchableOpacity
        style={styles.Container}
        onPress={() => navigateBack()}
        hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
      >
        <Fontello
          style={{ fontSize: sizeFont(5), color: "white" }}
          name={"ic_back"}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    padding: sizeWidth(2.13)
  }
});

export default connect(
  null,
  { navigateBack }
)(BackIcon);
