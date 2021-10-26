import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Gaming from './assets/gaming.svg';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Main}
          name='Main'
          options={{ headerShown: false }}
        />
        <Stack.Screen component={Home} name='Home' />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Main = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.SafeAreaStyles}>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.TextGameon}>GAMEON</Text>
      </View>
      <View style={styles.GamingView}>
        <Gaming width={300} height={300} />
      </View>
      <TouchableOpacity
        style={styles.TouchableStyles}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.TextLetsBegin}>Let's Begin</Text>
        <MaterialIcons name='arrow-forward-ios' size={22} color='#fff' />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const Home = () => {
  return (
    <View style={styles.HomeView}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  SafeAreaStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  TextGameon: {
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#20315f',
  },
  GamingView: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  TouchableStyles: {
    backgroundColor: '#AD40AF',
    padding: 20,
    width: '90%',
    borderRadius: 10,
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TextLetsBegin: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Roboto-MediumItalic',
  },
  HomeView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
