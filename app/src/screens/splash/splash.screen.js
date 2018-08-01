import React, { Component, ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { resetPage } from "../../actions/nav.action";
import { connect } from "react-redux";
import {
  getSession,
  getUsername,
  getPassword,
  saveSession
} from "../../helpers/storage.helper";
import Api from "../../api/api";

class SplashScreen extends Component {
  render() {
    return <View style={styles.container} />;
  }

  componentDidMount = async () => {
    this.props.resetPage("Repositories");
  };
}

export default connect(
  null,
  { resetPage }
)(SplashScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
