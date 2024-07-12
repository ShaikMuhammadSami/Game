// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const GameDetail = ({ route }) => {
//   const { game } = route.params;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{game.title}</Text>
//       <Text style={styles.description}>{game.description}</Text>
//       <Button title="Join" onPress={() => { /* Join game logic here */ }} />
//     </View>
//   );
// };

// export default GameDetail;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   description: {
//     fontSize: 18,
//     marginBottom: 20,
//   },  
// });
// screens/GameDetail.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GameDetail = ({ game }) => {
  const navigation = useNavigation();

  const handleJoinGame = () => {
    navigation.navigate('GameDashboard', { game });
  };
 
  return (
    <View style={styles.container}>
      <Image source={game.image} style={styles.image} />
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.description}>{game.description}</Text>
      <TouchableOpacity style={styles.joinButton} onPress={handleJoinGame}>
        <Text style={styles.joinButtonText}>Join Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      description: {
        fontSize: 18,
        marginBottom: 20,
      },  
  // ... (previous styles)
  joinButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  joinButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default GameDetail;
