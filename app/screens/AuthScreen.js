// screens/AuthScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Title, Switch, Text } from 'react-native-paper';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export default function AuthScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = async () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('Logged in successfully');
        // Navigate to main app screen or update app state
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log('Signed up successfully');
        // Navigate to main app screen or update app state
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>{isLogin ? 'Login' : 'Sign Up'}</Title>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        mode="outlined"
      />
      <Button mode="contained" onPress={handleAuth} style={styles.button}>
        {isLogin ? 'Login' : 'Sign Up'}
      </Button>
      <View style={styles.switchContainer}>
        <Text>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
        </Text>
        <Switch
          value={!isLogin}
          onValueChange={() => setIsLogin(!isLogin)}
        />
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color:'blue'
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor:'green'
  },
});