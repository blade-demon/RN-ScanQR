import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default class Register extends React.Component {
  _onPressButton() {
    alert('You tapped the button!');
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView>
        <Text>注册</Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigate('Login')}
            title="已有账号？去登录"
            color="#841584"
          />
          <Button onPress={this._onPressButton} title="注册" color="#841584" />
        </View>
      </SafeAreaView>
    );
  }
}
