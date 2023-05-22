import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Dimensions } from "react-native";
import Signup from "./Signup";
import Main from "../Social/Main";
import { useFonts } from "expo-font";


export default function Login() {
  const [loginPassword, setLoginPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isInsultWordDetected, setIsInsultWordDetected] = useState(false);
  const [screen, setScreen] = useState('home');


  const insultWords = [ 
    "sex", "fuck", "bitch", "ass", "porn", "dick", "vagina", "bastard", "whore", "shit", "cock", "cunt", "penis", "boobs", "pussy", "motherfucker", "idiot", "stupid", "moron", "jackass", "dumbass", "dipshit", "bullshit", "asshole", "damn", "jerk" 
  ];
  
  const handleInputChange = (text) => {
    setUsername(text);
    const space = text.replace(/\s+/g, '');
    setUsername(space);

    const insultWordFound = insultWords.some((insult) =>
      text.toLowerCase().includes(insult)
    );

    setIsInsultWordDetected(insultWordFound);
  };

  const handlePassword = (text) => { setPassword(text); };

  const [fontsLoaded] = useFonts({
    "DancingScript": require('../../fonts/DancingScript.ttf'),
    "Pacifico": require('../../fonts/Pacifico.ttf'),
    "Mukta": require('../../fonts/Mukta.ttf'),
  });

  const handleSignup = () => { setScreen('signup'); };
  const handleExplore = () => { setScreen('explore'); };

  if (!fontsLoaded) {
    <View />;
  } else {
    return (
      <>
        {screen === 'home' && (
          <ImageBackground source={require('../../assets/BGImg05.jpg')} style={styles.imageContainer}>
            <View style={{
              width: windowWidth,
              height: windowHeight * .5,
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 24,
              backgroundColor: "#fff",
              resizeMode: 'cover',
              elevation: 10,
            }}>
              <Text style={{ fontSize: 21, color: '#333', textAlign: 'center', marginBottom: 10, fontFamily: 'Pacifico' }}>Welcome back!</Text>
              <Text style={{ fontSize: 16, textAlign: "center", marginBottom: 24, color: '#000', width: 300, fontFamily: 'Mukta'}}>Please enter your username/email while then password</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter an account username"
                keyboardType="default"
                autoCapitalize="none"
                maxLength={20}
                onChangeText={handleInputChange}
                value={username}
              />
              {isInsultWordDetected ? (
                <Text style={styles.warningText}>Insult words are not allowed</Text>
              ) : null}
              <TextInput
                style={styles.input}
                maxLength={120}
                placeholder="Enter an account password"
                secureTextEntry={true}
                value={password}
                autoCapitalize="none"
                onChangeText={handlePassword}
              />
              <TouchableOpacity
                style={[
                  styles.buttonContainer,
                  isInsultWordDetected ? styles.buttonContainerDisabled : null
                ]}
                disabled={isInsultWordDetected}
                onPress={handleExplore}
              >
                <Text style={styles.buttonText}>Explore!</Text>
              </TouchableOpacity>
              <Text style={styles.linkText} onPress={handleSignup}>New account? Signup!</Text>
              <Text style={styles.safeText}>Your privacy is safe with us.</Text>
            </View>
          </ImageBackground>
        )}
        {screen === 'explore' && <Main />}
        {screen === 'signup' && <Signup />}
      </>
    );
  }
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  safeText: {
    fontSize: 11,
    position: 'absolute',
    bottom: 0,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 24,
    color: '#000',
    fontWeight: 'bold',
    width: 300,
  },
  input: {
    width: 260,
    height: 40,
    borderColor: "#000",
    borderWidth: .2,
    borderRadius: 2,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#fff'
  },
  buttonContainer: {
    backgroundColor: "#3f51b5",
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginVertical: 8,
    width: 230,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 0,
    letterSpacing: 2,
  },
  linkText: {
    color: "#000",
    fontSize: 16,
    marginTop: 0,
    fontWeight: 'bold',
  },
  warningText: {
    color: 'red',
  },
  imageContainer: {
    width: windowWidth,
    height: windowHeight * 1.07,
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});