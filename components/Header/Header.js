import { StyleSheet, Text, View, Image,Pressable } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
const Header = ({ title }) => {
    const navigation = useNavigation();
    return (
        <View style={s.header}>
            <View style={s.iconWrapper}>
                <Entypo name="menu" size={21} color="#FBB3BE" />
            </View>
            <View style={s.greeting}>
                <Text style={s.greetingText}>{title}</Text>

            </View>
            <Pressable style={s.imageWrapper}
           onPress={()=>{
          
            navigation.navigate('Settings')
          }}>
                <Image style={s.image} source={{ uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80' }} />
            </Pressable>
        </View>
    )
}

export default Header

const s = StyleSheet.create({
    header: {
        width: '100%',
        height: 120,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 24,
        paddingTop: 35
    },
    iconWrapper: {
        paddingHorizontal: 1,
        borderRadius: 40,
        backgroundColor: "white"
    },
    greeting: {
        alignItems: 'center'
    },
    greetingText: {
        fontFamily: 'monospace',
        fontSize: 16,
        fontWeight: '500',
    },
    profileName: {
        paddingTop: 4,
        fontFamily: 'monospace',
        fontSize: 18,
        fontWeight: '550',
    },
    imageWrapper: {
        backgroundColor: 'red',
        width: 40,
        height: 40,
        borderRadius: 20,
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        width: '100%',
    }
})