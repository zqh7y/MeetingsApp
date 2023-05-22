import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import Login from './Login';
import Signup from './Signup';
import Main from '../Social/Main';
import { useFonts } from 'expo-font';


export default function Log() {
  const [screen, setScreen] = useState('home');

  const handleShowLogin = () => { setScreen('login'); };
  const handleShowSignup = () => { setScreen('signup'); };
  const handlePassAsGuest = () => { setScreen('guest'); };

  let [fontsLoaded] = useFonts({
    'Mukta': require('../../fonts/Mukta.ttf'),
    'DancingScript': require('../../fonts/DancingScript.ttf'),
    'JosefinSansII': require('../../fonts/JosefinSans.ttf'),
  });

  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
      <>
      {screen === 'home' && (
        <ImageBackground style={styles.containerG} source={require('../../assets/BGImg05.jpg')}>
          <Text style={{
            position: 'absolute',
            top: 170,
            left: 30,
            fontSize: 37,
            textAlign: 'left',
            fontFamily: 'Mukta',
            color: '#fff',
          }}>Hello & Welcome, </Text>
          <Text style={{    
            fontSize: 47,
            marginBottom: 16, 
            position: 'absolute',
            top: 210,
            fontFamily: 'DancingScript',
            color: "#3f51b5"
          }}> Start your carrier!</Text>
          <Text style={styles.subtitle}> {'\n'} Meet {'\n'} Create {'\n'} Join {'\n'} Find {'\n'} Discover {'\n'} Celebrate {'\n'} Chat {'\n'} 
          </Text>
          <View style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer1} onPress={handleShowLogin}>
              <Text style={styles.buttonText1}>Log into exist account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText} onPress={handleShowSignup}>Create an new account</Text>
            </TouchableOpacity>
            <Text style={styles.linkText} onPress={handlePassAsGuest}>Continue as a guest</Text>
          </View>
        </ImageBackground>
      )}
      {screen === 'login' && <Login />}
      {screen === 'signup' && <Signup />}
      {screen === 'guest' && <Main />}
      </>
    );
  }
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerG: {
    marginTop: 1,
    width: windowWidth,
    height: windowHeight * 1.05,
    backgroundColor: '#fff',
  },
  subtitle2: {
    fontSize: 13,
    marginBottom: 28,
  },
  subtitle: {
    fontSize: 17,
    position: 'absolute',
    top: 350,
    width: 150,
    left: 10,
    paddingLeft: 20,
    color: '#fff',
    fontWeight: 'bold',
    padding: 20,
    borderRadius: 12,
  },
  buttonContainer1: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginVertical: 8,
    width: 300,
    marginTop: 600,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: .3, 
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  buttonContainer: {
    backgroundColor: '#3f51b5',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginVertical: 8,
    width: 300,
    marginTop: 5,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: .3, 
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  buttonText1: {
    color: '#3f51b5',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: 'white',
    marginBottom: -70,
  }
});