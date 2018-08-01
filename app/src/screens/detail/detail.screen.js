import React, { Component, ReactNode } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import PropTypes from "prop-types";
import RepositoryItem from "../repositories/repository-item";
import Api from "../../api/api";
import Text from "../../components/common/text";
import moment from "moment";
import CacheImage from "../../components/common/cache-image";
import { sizeWidth, sizeFont } from "../../helpers/size.helper";
import Button from "../../components/common/button";
import ToolBar from "../../components/common/toolbar";
import { navigateBack } from "../../actions/nav.action";
import { savedRepositoryComment } from "../../actions/repositories.action";
import { connect } from "react-redux";
import { text } from "../../constants/app.constant";

class DetailScreen extends Component {
  constructor(props) {
    super(props);
    let { repository } = this.props.navigation.state.params;
    this.state = {
      owner: {},
      comment: text.emptyString
    };
  }

  componentDidMount = async () => {
    let { repository } = this.props.navigation.state.params;
    const owner = await Api.fetchUser(repository.owner.login);
    this.setState({
      owner
    });
  };

  saveRepositoryComment = () => {
    const { repository } = this.props.navigation.state.params;
    const { comment } = this.state;
    this.props.savedRepositoryComment(repository, comment);
    this.props.navigateBack();
  };

  render(): ReactNode {
    const { repository } = this.props.navigation.state.params;
    const { owner, comment } = this.state;
    const createdAt =
      owner.created_at &&
      moment(owner.created_at).format("MMM Do YYYY hh:mm:ss a");
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <CacheImage style={styles.avatar} uri={repository.owner.avatar_url} />
          <View style={styles.content}>
            <Text style={styles.name}>{repository.owner.login}</Text>
            <Text>{repository.description}</Text>
            {repository.comment && (
              <Text>Your comment: {repository.comment}</Text>
            )}
          </View>
        </View>
        <View style={styles.more}>
          <Text>Public repos: {owner.public_repos}</Text>
          <Text>Followers: {owner.followers}</Text>
          <Text>Created at: {createdAt}</Text>
        </View>
        {!repository.comment && (
          <TextInput
            autoCapitalize="none"
            onChangeText={text => this.setState({ comment: text })}
            value={comment}
            defaultValue={repository.comment}
            placeholder="Enter your comment..."
            underlineColorAndroid="transparent"
            multiline={true}
            placeholderTextColor="rgb(107, 112, 115)"
            style={styles.input}
          />
        )}
        {!repository.comment && (
          <Button
            onPress={this.saveRepositoryComment}
            text="Save"
            style={styles.save}
          />
        )}
      </View>
    );
  }
}

export default connect(
  null,
  { savedRepositoryComment, navigateBack }
)(DetailScreen);

const styles = StyleSheet.create({
  save: {
    borderRadius: sizeWidth(0.55),
    width: sizeWidth(50),
    alignSelf: "center"
  },
  container: {
    flex: 1
  },
  input: {
    padding: 0,
    width: sizeWidth(70),
    height: sizeWidth(40),
    fontSize: sizeFont(3.73),
    alignSelf: "center",
    backgroundColor: "#eeeeee",
    marginBottom: sizeWidth(3),
    padding: sizeWidth(2)
  },
  avatar: {
    width: sizeWidth(20),
    height: sizeWidth(20),
    marginRight: sizeWidth(3)
  },
  content: {
    flex: 1,
    padding: sizeWidth(2)
  },
  name: {
    fontSize: sizeFont(4),
    fontWeight: "bold"
  },
  info: {
    flexDirection: "row"
  },
  more: {
    padding: sizeWidth(3)
  }
});
