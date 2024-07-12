import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GameDetail from './GameDetail';

const gamesData = [
  { id: 1, title: 'Game 1', description: 'Description for Game 1', image: require('../assets/game1.png') },
  { id: 2, title: 'Game 2', description: 'Description for Game 2', image: require('../assets/game2.png') },
  // Add more game data as needed
];

const GameCard = ({ game }) => {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('GameDetail', { game })}>
      <Image source={game.image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{game.title}</Text>
        <Text>{game.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function GameCardFeed() {
  const renderGameCard = ({ item }) => <GameCard game={item} />;

  return (
    <FlatList
      data={gamesData}
      renderItem={renderGameCard}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={{ paddingVertical: 10 }}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  content: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
