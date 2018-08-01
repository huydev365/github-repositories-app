import React, { Component, ReactNode } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Animated
} from "react-native";
import Text from "../common/text";
import { sizeWidth, sizeFont } from "../../helpers/size.helper";
import { appColor } from "../../constants/app.constant";

export default class AnimateInput extends Component {
  constructor(props) {
    super(props);
  }

  render(): ReactNode {
    const {
      value,
      onChangeText,
      keyboardType,
      mandatory,
      otherIcon,
      secureTextEntry,
      style,
      editable
    } = this.props;
    let { placeholder, label } = this.props;
    placeholder = mandatory ? placeholder + " (*)" : placeholder;
    label = mandatory ? label + " (*)" : label;
    const inputStyle = !!value ? styles.input : styles.emptyInput;
    return (
      <View style={[styles.container, style]}>
        <View style={styles.inputWrap}>
          <View style={styles.body}>
            {!!value && <Text style={styles.label}>{label}</Text>}
            <TextInput
              editable={editable}
              value={value}
              editable={editable}
              autoCapitalize="none"
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}
              onChangeText={onChangeText}
              placeholder={placeholder}
              underlineColorAndroid="transparent"
              placeholderTextColor="rgb(107, 112, 115)"
              style={inputStyle}
            />
          </View>
          {otherIcon}
        </View>
        <View style={styles.line} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: sizeWidth(0)
  },
  inputWrap: {
    flexDirection: "row",
    height: sizeWidth(13),
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: sizeWidth(2.13)
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  input: {
    fontSize: sizeWidth(3.7),
    textAlign: "left",
    color: "black",
    textAlignVertical: "center",
    height: sizeWidth(4.06),
    padding: 0
  },
  emptyInput: {
    flex: 1,
    padding: 0,
    height: sizeWidth(13),
    textAlignVertical: "center",
    fontSize: sizeWidth(4),
    textAlign: "left",
    color: "#666666"
  },
  body: {
    flex: 1,
    justifyContent: "center",
    paddingRight: sizeWidth(2.13)
  },
  label: {
    color: appColor.primary,
    fontSize: sizeFont(2.8),
    marginBottom: sizeWidth(1)
  }
});
