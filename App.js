/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,

} from 'react-native';


export default class App extends React.Component { 


    constructor(props) {
      super(props)
      this.state = {
        massa: 0,
        altura: 0,
        resultado: 0,
        resultadoText: ''};
      this.calcular = this.calcular.bind(this)
      
    }

    calcular() {
      var imc = this.state.massa / (this.state.altura * this.state.altura)
      var s = this.state
      s.resultado = imc
      
      if (imc <= 16) {
        s.resultadoText = 'Você é magro demais'
      } else if (imc <= 24) {
        s.resultadoText = 'Você é Normal'
      } else if (imc <= 28) {
        s.resultadoText = 'Você está obeso'
      } else {
        s.resultadoText = 'Baleia assasina kkkj'
      }
      this.setState(s)
    }
    

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.entradas}>
            <TextInput placeholder='Massa' keyboardType='numeric' style={styles.input} onChangeText={(massa) => {this.setState({massa})}}></TextInput>
            <TextInput placeholder='Altura' keyboardType='numeric' style={styles.input} onChangeText={(altura) => {this.setState({altura})}}></TextInput>
          </View>
          <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.button}>Calcular</Text></TouchableOpacity>
          <Text style={styles.resultado}>{this.state.resultado.toFixed(2)} kg/m2</Text>
          <Text style={[styles.resultado, {fontSize: 25}]}>{this.state.resultadoText}</Text>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  entradas: {
    flexDirection: 'row'
  },
  input: {
    height: 80,
    textAlign: 'center',
    width: "50%",
    fontSize: 50,
    marginTop: 20,
  },
  button: {
    fontSize: 50,
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    backgroundColor: "#80ced6",
    color: "#0080FF"
  },
  resultado: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 40,
    color: 'gray'

  }
});

