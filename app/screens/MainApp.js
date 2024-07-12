// screens/MainApp.js


// import React from 'react';
// import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import { auth } from '../firebaseConfig';
// import GameCardFeed from './GameCardFeed';
// import GameDetail from './GameDetail'; // Import the GameDetail screen
// import GameDashboard from './GameDashboard';
// const Drawer = createDrawerNavigator();

// const CustomDrawerContent = (props) => (
//   <DrawerContentScrollView {...props}>
//     <DrawerItem
//       label="Sign Out"
//       onPress={() => {
//         auth.signOut();
//       }}
//     />
//   </DrawerContentScrollView>
// );


// export default function MainApp() {
//   return (
   
//       <Drawer.Navigator  drawerContent={props => <CustomDrawerContent {...props} />}>
//         <Drawer.Screen name="Game" component={GameCardFeed} />
//         <Drawer.Screen name="GameDetail" component={GameDetail} />
//       </Drawer.Navigator>
    
//   );
// }

import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
import { auth } from '../firebaseConfig';
import GameCardFeed from './GameCardFeed';
import GameDetail from './GameDetail';
import GameDashboard from './GameDashboard'

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <DrawerItem
      label="Home"
      onPress={() => props.navigation.navigate('GameCardFeed')}
    />
    <View style={{ flex: 1 }} />
    <DrawerItem
      label="Sign Out"
      onPress={() => {
        auth.signOut();
      }}
    />
  </DrawerContentScrollView>
);

const CustomAppBar = ({ navigation, title }) => (
  <Appbar.Header>
    <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} />
    <Appbar.Content title={title} />
  </Appbar.Header>
);

function GameCardFeedScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <CustomAppBar navigation={navigation} title="Games" />
      <GameCardFeed />
    </View>
  );
}

function GameDetailScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1 }}>
      <CustomAppBar navigation={navigation} title="Game Detail" />
      <GameDetail game={route.params.game} />
    </View>
  );
}
function GameDashboardScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1 }}>
      <CustomAppBar navigation={navigation} title="Game Dashboard" />
      <GameDashboard route={route} />
    </View>
  );
}
export default function MainApp() {
  return (
    
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen 
          name="GameCardFeed" 
          component={GameCardFeedScreen} 
          options={{ headerShown: false }}
        />
        <Drawer.Screen 
          name="GameDetail" 
          component={GameDetailScreen} 
          options={{ headerShown: false }}
        />
        <Drawer.Screen 
          name="GameDashboard" 
          component={GameDashboardScreen} 
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    
  );
}