import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Splash from '../screens/Splash';
import NoteList from '../screens/NoteList';
import NoteAdd from '../screens/NoteAdd';

const AppRoutes = () => {
    return (
        <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="NoteList" component={NoteList} />
            <Stack.Screen name="NoteAdd" component={NoteAdd} />
        </Stack.Navigator>
    );
};

export default AppRoutes;
