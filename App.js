
import React,{useState, useEffect} from 'react';
import 'react-native-gesture-handler'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image} from "react-native"
import {Provider} from 'react-redux';
import store from './Redux/Store'
import Dashboard from './Components/Dashboard/Dashboard'
import Report from './Components/Report/Report'
import Profile from './Components/Profile/Profile'
import Categories from './Components/Dashboard/Categories'
import List from './Components/Dashboard/List'
import Product from './Components/Dashboard/Product'

import Cart from './Screens/Cart/Cart'
import Checkout from './Screens/Checkout/Checkout'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function DashboardStack() {
  return (
    <Stack.Navigator>         

          <Stack.Screen name="Dashboard" component={Dashboard}/>  
          <Stack.Screen name="Categories" component={Categories}/>   
          <Stack.Screen name="Selected_Category" component={Categories}/>   
          <Stack.Screen name="lists" component={List}/> 
          <Stack.Screen name="Product" component={Product}/>
          <Stack.Screen name="Cart" component={Cart}/>    
          <Stack.Screen name="Checkout" component={Checkout}/>    

   </Stack.Navigator>
  );
  }
const App = () => { 

  return (   
    <Provider store={store}>
    <NavigationContainer>      
      <Tab.Navigator>
      <Tab.Screen options={{tabBarIcon: () => (
              <Image
                source={   require('./Assets/Home.png')}                                               
                style={{
                  width: 30,
                  height: 30,              
                }}
              />),}}
      
      name="Home" component={DashboardStack} />
      <Tab.Screen options={{tabBarIcon: () => (
              <Image
                source={   require('./Assets/Repurchase.png')}                                               
                style={{
                  width: 30,
                  height: 30,              
                }}
              />),}}
      name="Report" component={Report} />
      <Tab.Screen 
      options={{tabBarIcon: () => (
        <Image
          source={   require('./Assets/Cart.png')}                                               
          style={{
            width: 30,
            height: 30,              
          }}
        />),}} name="Cart" component={Cart} />
      <Tab.Screen 
      options={{tabBarIcon: () => (
        <Image
          source={   require('./Assets/Customer.png')}                                               
          style={{
            width: 30,
            height: 30,              
          }}
        />),}}name="Profile" component={Profile} />


    </Tab.Navigator>
    </NavigationContainer>
    </Provider>
 
  )
}




export default App;

  