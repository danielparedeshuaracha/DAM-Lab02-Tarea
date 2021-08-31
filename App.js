import React, {Component} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
    };
  }
  changeUserInput = text => {
    this.setState({user: text});
  };
  changePasswordInput = text => {
    this.setState({password: text});
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('./img/logo.png')} />
        <View style={styles.titulo}>
          <Text style={styles.titulo_text}>LOGIN</Text>
        </View>
        <TextInput
          style={{
            height: 40,
            borderColor: 'white',
            borderWidth: 1,
            color: 'white',
          }}
          onChangeText={text => this.changeUserInput(text)}
          value={this.state.user}
          placeholder="Nombre de Usuario"
          placeholderTextColor="white"
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'white',
            borderWidth: 1,
            color: 'white',
          }}
          onChangeText={text => this.changePasswordInput(text)}
          value={this.state.password}
          placeholder="Contraseña"
          placeholderTextColor="white"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            Alert.alert(
              `Usuario: ${this.state.user} \nContraseña: ${this.state.password}`,
            )
          }>
          <Text style={styles.button_text}>INGRESAR</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 100,
    backgroundColor: '#343B45',
  },
  titulo: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  titulo_text: {
    color: '#FFFFFF',
    fontSize: 35,
    fontWeight: 'bold',
  },
  button_text: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    top: 10,
    alignItems: 'center',
    backgroundColor: '#ED7F2E',
    padding: 10,
    color: '#FFFFFF',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  showData: {
    alignSelf: 'center',
    backgroundColor: 'white',
  },
});
