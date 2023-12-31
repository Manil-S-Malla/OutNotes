import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from 'react-redux';

import AppRoute from './src/routes';
import { navigationRef } from './src/routes/navigationServices';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.root}>
        <StatusBar
          barStyle="light-content"
          translucent={false}
          backgroundColor={'#1982C4'}
        />
        <NavigationContainer ref={navigationRef}>
          <AppRoute />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
