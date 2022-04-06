import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableHighlight, Button } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/Listitem";
import Form from "./components/Form";
import {gStyle} from "./styles/style";
import AppList from "./test";
import Contact from "./components/Contact";

export default function App() {
   return(
     <View style={gStyle.main}>
       <AppList></AppList>
     </View>
   )
  const styles = StyleSheet.create({
    container: {
  
      flex: 1,
      backgroundColor: "#fff",
      padding:40
    }
  });
}
