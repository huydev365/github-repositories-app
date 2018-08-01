import React, { Component, ReactNode } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import PropTypes from "prop-types";
import Api from "../../api/api";
import RepositoryItem from "./repository-item";
import { connect } from "react-redux";
import { navigateToPage } from "../../actions/nav.action";
import {
  fetchRepositories,
  savedRepositoryComment
} from "../../actions/repositories.action";

class RepositoriesScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.fetchRepositories();
  };

  renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  render(): ReactNode {
    const { repositories } = this.props.repositories;
    return (
      <View style={styles.container}>
        <FlatList
          bounces={false}
          data={repositories}
          ItemSeparatorComponent={this.renderSeparator}
          keyExtractor={item => item.id.toString()}
          renderItem={this.renderRepositoryItem}
        />
      </View>
    );
  }

  onSaveComment = (repository, comment) => {
    this.props.savedRepositoryComment(repository, comment);
  };

  onAvatarPress = repository => {
    this.props.navigateToPage("Detail", { repository });
  };

  renderRepositoryItem = ({ item }) => {
    return (
      <RepositoryItem
        onSaveComment={this.onSaveComment}
        onAvatarPress={this.onAvatarPress}
        item={item}
      />
    );
  };
}

export default connect(
  state => ({
    repositories: state.repositories
  }),
  { navigateToPage, fetchRepositories, savedRepositoryComment }
)(RepositoriesScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    width: "100%",
    backgroundColor: "#cccccc"
  }
});
