import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

const Search = () => {
    return (
        <View style={s.container}>
            <View style={s.inputWrapper}>
                <TextInput style={s.input} placeholder='write something' />
            </View>
            <Pressable style={s.pressable}>
                <Feather name="filter" size={24} color="white" />
            </Pressable>
        </View>
    )
}

export default Search

const s = StyleSheet.create({
    container: {
        height: 50,
        // backgroundColor: 'red',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    inputWrapper: {
        height: '100%',
        flex: 1,
        marginRight: 15,
        paddingVertical: 5,
    },
    input: {
        flex: 1,
        borderRadius: 30,
        paddingLeft: 8,
        shadowColor: 'gray',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2, // <--- ეს მუშაობს მხოლოდ ანდროიდზე და საჭიროა ბექგრაუნდ ფერის გაწერაც
    },
    pressable: {
        backgroundColor: '#EE5D70',
        height: 45,
        width: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }
})