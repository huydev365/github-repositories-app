import React, { Component, ReactNode } from "react";
import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import PropTypes from "prop-types";
import CacheImage from "../../components/common/cache-image";
import Text from "../../components/common/text";
import Button from "../../components/common/button";
import { sizeWidth, sizeFont } from "../../helpers/size.helper";
import { appColor, text } from "../../constants/app.constant";

export default class RepositoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: text.emptyString
    };
  }

  render(): ReactNode {
    const { item, onAvatarPress, onSaveComment } = this.props;
    const { comment } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => onAvatarPress(item)}>
          <CacheImage style={styles.avatar} uri={item.owner.avatar_url} />
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.name}>{item.owner.login}</Text>
          <Text>{item.description}</Text>
          <View style={styles.comment}>
            {!item.comment && (
              <TextInput
                autoCapitalize="none"
                value={comment}
                onChangeText={text => this.setState({ comment: text })}
                placeholder="Enter your comment..."
                underlineColorAndroid="transparent"
                placeholderTextColor="rgb(107, 112, 115)"
                style={styles.input}
              />
            )}
            {item.comment && (
              <Text style={styles.commentText}>
                Your comment: {item.comment}
              </Text>
            )}
            {!item.comment && (
              <Button
                onPress={() => {
                  onSaveComment(item, this.state.comment);
                }}
                textStyle={styles.buttonText}
                style={styles.save}
                text="Save"
              />
            )}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  comment: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: sizeWidth(2)
  },
  save: {
    borderRadius: sizeWidth(0.55),
    height: sizeWidth(7),
    paddingHorizontal: 0,
    paddingVertical: 0,
    width: sizeWidth(20)
  },
  input: {
    flex: 1,
    padding: 0,
    fontSize: sizeFont(3.73)
  },
  commentText: {
    flex: 1,
    fontSize: sizeFont(3.73)
  },
  avatar: {
    width: sizeWidth(20),
    height: sizeWidth(20),
    marginRight: sizeWidth(3)
  },
  buttonText: {
    fontSize: sizeFont(3)
  },
  content: {
    flex: 1,
    padding: sizeWidth(2)
  },
  name: {
    fontSize: sizeFont(4),
    fontWeight: "bold"
  }
});
