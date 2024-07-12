// // App.js
import React, { useState, useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { auth } from './firebaseConfig';
import AuthScreen from './screens/AuthScreen';
import MainApp from './screens/MainApp'; // Create this component for your main app screens

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <PaperProvider>
      {user ? <MainApp /> : <AuthScreen />}
    </PaperProvider>
  );
}