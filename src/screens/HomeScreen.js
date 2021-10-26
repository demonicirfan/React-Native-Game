import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView style={{ padding: 20 }}>
        <View style={styles.ProfileView}>
          <Text style={styles.ProfileText}>Hello Irfan</Text>
          <ImageBackground
            source={require('../../assets/images/Altos-Odyssey.jpeg')}
            style={{ width: 35, height: 35 }}
            imageStyle={{ borderRadius: 25 }}
          />
        </View>

        <View style={styles.SearchBar}>
          <Feather
            name='search'
            size={20}
            color='#c6c6c6'
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder='Search'
            style={styles.TextInputStyle}
          ></TextInput>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ProfileView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ProfileText: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
  },
  TextInputStyle: {
    fontStyle: 'normal',
  },
  SearchBar: {
    flexDirection: 'row',
    borderColor: '#c6c6c6',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
});
