import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigation from './DrawerNavigation';
//import {observer,inject} from 'mobx-react'
import Home from '../screen/Home';
import Login from '../screen/Login';
import SignIn from '../screen/SignIn';
const RootStack = createStackNavigator();
const NavigationTab = (props) => {
  const{navigation,listStore}=props;
  const[connecter,SetConnecte]=React.useState(false);
  if (!connecter) {
    return (
        <RootStack.Navigator >
          <RootStack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
              headerShown: false
              })}
          
            />
          <RootStack.Screen
            name="Login"
            component={Login}
            options={({ navigation }) => ({
              headerShown: false
              })}
            />
           <RootStack.Screen
            name="SignIn"
            component={SignIn}
            options={({ navigation }) => ({
              headerShown: false
              })}
            />
        </RootStack.Navigator>
      );
  } else {
        <RootStack.Navigator >
        <RootStack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={({ navigation }) => ({
            title: 'Bienvenue',
            })}
        />
    </RootStack.Navigator>
  }

}
export default NavigationTab