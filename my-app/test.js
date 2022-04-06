import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/Listitem";
import Form from "./components/Form";
import { gStyle } from "./styles/style";
import Main from "./components/Contact";

export default function AppList() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Купить молоко", key: "1" },
    { text: "Купить картошку", key: "2" },
    { text: "сдать на права", key: "3" },
    { text: "написать приложение", key: "4" },
  ]);

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random.toString(36).substring(7) },
        ...list,
      ];
    });
  };

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter((listOfItems) => listOfItems.key != key);
    });
  };

  return (
    <View style={gStyle.main}>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <ListItem el={item} deleteHandler={deleteHandler} />
          )}
        />
      </View>
    </View>
  );
}
