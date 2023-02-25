import { StyleSheet, Text, ScrollView, View } from "react-native";
import React from "react";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Ads from "../components/Ads/Ads";
import ScrollNav from "../components/ScrollNav/ScrollNav";
import Item from "../components/ProductItem/Item";

const Home = () => {
  return (
    <ScrollView contentContainerStyle={s.container}>
      <View style={{flex: 1}}>
        <Header title={"Hello"} />
        <Search />
        <Ads />
        <ScrollNav />
        <Item />
      </View>
    </ScrollView>
  );
};

export default Home;

const s = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "red",
  },
});
