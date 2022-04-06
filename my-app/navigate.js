import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableHighlight, Button } from "react-native";
import Contact from "./components/Contact";
import AppList from "./test";
 
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate(){
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
               name='test'
               component={AppList}
            />
            <Stack.Screen
               name='Contact'
               component={Contact}
            />
        </Stack.Navigator>
    </NavigationContainer>;
}