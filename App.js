import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppRoute from './src/routes';
import { navigationRef } from './src/routes/navigationServices';

export default function App() {
  return (
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
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
