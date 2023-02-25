import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import {
  Ionicons,
  Entypo,
  MaterialIcons,
  EvilIcons,
  Feather,
  AntDesign,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Settings = () => {
  const navigation = useNavigation();
  return (
    <View style={s.container}>
      <View style={s.heading}>
        <Pressable
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
        <Text>My Profile</Text>
      </View>
      <View style={s.profile}>
        <View style={s.imageWrapper}>
          <Image
            style={s.image}
            source={{
              uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            }}
          />
        </View>
        <View style={s.profileName}>
          <View>
            <Text style={s.text}>Jhonson King</Text>
            <Text>jhonking@gmail.com</Text>
          </View>
          <View style={s.editProfileWrapper}>
            <Text style={s.editProfile}>Edit profile</Text>
          </View>
        </View>
      </View>
      <View style={s.profileList}>
        <View style={s.boxWrapper}>
          <View style={s.box1Wrapper}>
            <AntDesign name="hearto" size={24} color="black" />
            <Text style={s.text1}>Favourites</Text>
          </View>
          <Feather name="arrow-right" size={24} color="black" />
        </View>
        <View style={s.borderBottom}>
          <View style={s.boxWrapper}>
            <View style={s.box1Wrapper}>
              <Feather name="download" size={24} color="black" />
              <Text style={s.text1}>Downloads</Text>
            </View>
            <Feather name="arrow-right" size={24} color="black" />
          </View>
        </View>
        <View style={s.boxWrapper}>
          <View style={s.box1Wrapper}>
            <MaterialIcons name="language" size={24} color="black" />
            <Text style={s.text1}>Language</Text>
          </View>
          <Feather name="arrow-right" size={24} color="black" />
        </View>
        <View style={s.boxWrapper}>
          <View style={s.box1Wrapper}>
            <EvilIcons name="location" size={26} color="black" />
            <Text style={s.text1}>Location</Text>
          </View>
          <Feather name="arrow-right" size={24} color="black" />
        </View>

        <View style={s.borderBottom}>
          <View style={s.boxWrapper}>
            <View style={s.box1Wrapper}>
              <AntDesign name="creditcard" size={25} color="black" />
              <Text style={s.text1}>Subscription</Text>
            </View>
            <Feather name="arrow-right" size={24} color="black" />
          </View>
        </View>
        <View style={s.boxWrapper}>
          <View style={s.box1Wrapper}>
            <Ionicons name="ios-trash-bin-outline" size={25} color="black" />
            <Text style={s.text1}>Clear Cache</Text>
          </View>
          <Feather name="arrow-right" size={24} color="black" />
        </View>
        <View style={s.boxWrapper}>
          <View style={s.box1Wrapper}>
            <Entypo name="log-out" size={25} color="black" />
            <Text style={s.text1}>Log Out</Text>
          </View>
          <Feather name="arrow-right" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

export default Settings;

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  heading: {
    backgroundColor: "white",
    width: "100%",
    height: 90,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingRight: 100,
    paddingTop: 40,
  },
  profile: {
    marginTop: 30,
    flexDirection: "row",
    height: 150,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  imageWrapper: {
    width: 100,
    height: 100,
    borderRadius: 60,
    overflow: "hidden",
    backgroundColor: "red",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  profileName: {
    height: "100%",
    justifyContent: "space-evenly",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
  editProfileWrapper: {
    backgroundColor: "green",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
  },
  editProfile: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
  profileList: {
    margin: 20,
    justifyContent: "space-between",
    flex: 1,
  },
  boxWrapper: {
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 20,
  },
  box1Wrapper: {
    flexDirection: "row",
    width: 150,
    justifyContent: "space-between",
    marginLeft: 40,
    alignItems: "center",
  },
  text1: {
    fontSize: 16,
    width: 100,
  },
  borderBottom: {
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
  },
});
