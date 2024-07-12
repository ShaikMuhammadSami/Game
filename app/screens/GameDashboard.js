// screens/GameDashboard.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Pedometer } from 'expo-sensors';

const GameDashboard = ({ route }) => {
  const { game } = route.params;
  const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
  const [pastStepCount, setPastStepCount] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState(0);

  useEffect(() => {
    let subscription;

    const subscribe = async () => {
      const isAvailable = await Pedometer.isAvailableAsync();
      setIsPedometerAvailable(String(isAvailable));

      if (isAvailable) {
        const end = new Date();
        const start = new Date();
        start.setDate(end.getDate() - 1);

        const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
        if (pastStepCountResult) {
          setPastStepCount(pastStepCountResult.steps);
        }

        subscription = Pedometer.watchStepCount(result => {
          setCurrentStepCount(result.steps);
        });
      }
    };

    subscribe();

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{game.title} Dashboard</Text>
      <Text style={styles.description}>{game.description}</Text>
      <View style={styles.statsContainer}>
        <Text style={styles.statsTitle}>Pedometer status:</Text>
        <Text style={styles.statsValue}>{isPedometerAvailable}</Text>
      </View>
      <View style={styles.statsContainer}>
        <Text style={styles.statsTitle}>Steps taken in the last 24 hours:</Text>
        <Text style={styles.statsValue}>{pastStepCount}</Text>
      </View>
      <View style={styles.statsContainer}>
        <Text style={styles.statsTitle}>Live step count:</Text>
        <Text style={styles.statsValue}>{currentStepCount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  statsContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statsValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});

export default GameDashboard;