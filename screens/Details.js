import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Details = ({ route }) => {
  const [products, setProducts] = useState([]);

  const data = route.params.data;
  const navigation = useNavigation();
  return (
    <View style={s.container}>
      <View style={s.imageWrapper}>
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={{ uri: `${data.images[0]}` }}
        >
          <View style={s.iconWrapper}>
            <View style={s.icon}>
              <Ionicons name="time-outline" size={24} color="red" />
            </View>
            <View style={s.icon}>
              <AntDesign name="hearto" size={24} color="red" />
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={s.categoryDescription}>
        <View>
          <Text style={s.title}>{data.title}</Text>
          <Text>{data.category.name}</Text>
        </View>
        <Text style={s.title}>${data.price}</Text>
      </View>
      <View style={s.description}>
        <Text>{data.description}</Text>
      </View>
      <View style={s.boxBuy}>
        <View>
          <Pressable
            style={s.buyNow}
            onPress={() => {
              navigation.navigate("CartStack");
            }}
          >
            <Text>Buy Now</Text>
          </Pressable>
        </View>
        <View style={s.cartIcon}>
          <Feather name="shopping-cart" size={24} color="red" />
        </View>
      </View>
    </View>
  );
};

export default Details;

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageWrapper: {
    flex: 5.5,
    borderRadius: 24,
    overflow: "hidden",
  },
  iconWrapper: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 55,
    paddingHorizontal: 30,
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryDescription: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    marginTop: 10,
    justifyContent: "center",
    height: 80,
    paddingHorizontal: 20,
  },
  boxBuy: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
  },
  buyNow: {
    backgroundColor: "#EC5668",
    width: 150,
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  cartIcon: {
    width: 60,
    height: 60,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
});
