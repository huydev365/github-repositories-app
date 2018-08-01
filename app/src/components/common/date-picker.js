import React, { Component, ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import ReactNativeDatePicker from "react-native-datepicker";
import { sizeWidth, sizeFont } from "../../helpers/size.helper";
import Fontello from "./font-tello";
import Text from "./text";
import { appColor } from "../../constants/app.constant";

export default class DatePicker extends Component {
  render(): ReactNode {
    const { onDateChange, date, mode, mandatory, format } = this.props;
    let { label } = this.props;
    label = mandatory ? label + " (*)" : label;
    return (
      <View style={styles.container}>
        {date ? <Text style={styles.label}>{label}</Text> : null}
        <View style={date ? styles.body : styles.bodyEmpty}>
          <ReactNativeDatePicker
            style={styles.date}
            mode={mode || "date"}
            date={date}
            showIcon={false}
            placeholder={label}
            format={format || "DD/MM/YYYY"}
            onDateChange={onDateChange}
            confirmBtnText="Chọn"
            cancelBtnText="Huỷ"
            customStyles={{
              dateInput: {
                borderWidth: 0,
                alignItems: "flex-start",
                justifyContent: "center",
                paddingHorizontal: sizeWidth(2.13),
                height: sizeWidth(9.06)
              },
              dateTouchBody: {
                height: sizeWidth(9.06)
              },
              dateText: {
                fontSize: sizeWidth(3.7),
                textAlign: "left",
                color: "black"
              },
              placeholderText: {
                fontSize: sizeWidth(4),
                textAlign: "left",
                color: "#888888"
              }
            }}
          />
          <Fontello style={styles.icon} name={"ic_calendar"} />
        </View>
        <View style={styles.line} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  bodyEmpty: {
    paddingRight: sizeWidth(2.13),
    height: sizeWidth(13),
    flexDirection: "row",
    alignItems: "center"
  },
  body: {
    paddingRight: sizeWidth(2.13),
    height: sizeWidth(9.06),
    flexDirection: "row",
    alignItems: "center"
  },
  label: {
    color: appColor.primarys,
    paddingHorizontal: sizeWidth(2.13),
    fontSize: sizeFont(2.8),
    marginTop: sizeWidth(2.13)
  },
  date: {
    flex: 1,
    height: sizeWidth(9.06),
    marginRight: sizeWidth(2)
  },
  icon: {
    color: "#cccccc"
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#cccccc"
  }
});
