import { Pressable, StyleSheet, Text, Image, View, Button } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header/Header'
import { AntDesign } from '@expo/vector-icons';

const Cart = ({navigation}) => {
    const [products, setProducts] = useState([]);
    
    const [number, setNumber] = useState(1)
const pressHandler =() => {
    navigation.goBack()
}
    const plus = () => {
        let num = number + 1;
        setNumber(num)
    }

    const minus = () => {
        let num = number - 1;
        setNumber(num)
    }

    return (
        <View style={s.container}>
            <Header title={'Cart'} />
            <Pressable style={s.itemContainer}>
                <View style={s.imageAndTitle}>
                    <Image style={s.image} source={{ uri: 'https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} />
                    <View style={s.textWrapper}>
                        <View>
                            <Text style={s.title}></Text>
                            <Text style={s.category}>Women</Text>
                        </View>
                        <Text style={s.price}>110$</Text>
                    </View>
                </View>
                <View style={s.buttonContainer}>
                    <View>
                        <AntDesign name="checkcircle" size={18} color="#FBB3BE" />
                    </View>
                    <View style={s.plusMinusContainer}>
                        <Pressable onPress={plus} style={s.button}>
                            <Text>+</Text>
                        </Pressable>
                        <Text style={s.numOfProducts}>{number}</Text>
                        <Pressable onPress={minus} style={s.button}>
                            <Text>-</Text>
                        </Pressable>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default Cart

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
    itemContainer: {
        height: 90,
        backgroundColor: 'white',
        marginHorizontal: 24,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 6,
        elevation: 10,
    },
    image: {
        height: 80,
        width: 60,
        borderRadius: 10,
        marginRight: 15,
    },
    imageAndTitle: {
        flexDirection: 'row'
    },
    textWrapper: {
        justifyContent: 'space-evenly'
    },
    title: {
        paddingTop: 2,
        fontSize: 11.5,
        fontWeight: '700',
        textTransform: 'uppercase'
    },
    category: {
        color: 'gray',
        fontSize: 10,
    },
    price: {
        fontSize: 13,
        textTransform: 'uppercase',
        fontWeight: '600',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'flex-end',
        height: 80,
        justifyContent: 'space-evenly'
    },
    plusMinusContainer: {
        flexDirection: 'row',
    },
    button: {
        width: 20,
        height: 20,
        alignItems: 'center'
    },
    numOfProducts: {
        fontSize: 13,
        textTransform: 'uppercase',
        fontWeight: '600',
    }
})