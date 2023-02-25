import {
  StyleSheet,
  Text,
  Image,
  View,
  FlatList,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Item = () => {
  const navigation = useNavigation();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((result) => result.json())
      .then((res) => setProducts(res));
  }, []);

  return (
    <View style={s.flatlistStyle}>
      {products.length > 0 &&
        products.map((item) => (
          <Pressable
            onPress={() => {
              navigation.navigate("Details", { data: item });
            }}
            key={item.id}
            style={s.itemWrapper}
          >
            <Image style={s.image} source={{ uri: `${item.images[0]}` }} />
            <View style={s.textAndIconWrapper}>
              <View>
                <Text style={s.title}>{item.title}</Text>
                <Text style={s.price}>{item.price}$</Text>
              </View>
              <Feather name="heart" size={20} color="#EC5668" />
            </View>
          </Pressable>
        ))}
    </View>
  );
};

export default Item;

const s = StyleSheet.create({
  flatlistStyle: {
    paddingTop: 10,
    paddingBottom: 150,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 24,
    justifyContent: "space-between",
  },
  itemWrapper: {
    height: 300,
    width: 170,
    borderRadius: 24,
    overflow: "hidden",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "80%",
    borderRadius: 24,
  },
  textAndIconWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  title: {
    paddingTop: 2,
    fontSize: 11.5,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  price: {
    paddingLeft: 3,
    color: "gray",
    fontSize: 13,
  },
});
