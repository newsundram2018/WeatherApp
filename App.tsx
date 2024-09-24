import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import Myapp from './src/navigation/App'
const App = () => {
  return (
   
    <NavigationContainer>
         <Provider store={store}>
            <Myapp/>
        </Provider>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})