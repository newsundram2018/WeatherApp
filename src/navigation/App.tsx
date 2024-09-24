import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import {HomeScreen,ForecastScreen} from "../components"
export default function App() {
  return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Forecast" component={ForecastScreen} />
        </Stack.Navigator>
  );
}