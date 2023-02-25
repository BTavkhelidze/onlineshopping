import { StyleSheet, Text, ScrollView, View } from 'react-native'
import React from 'react'

const navData = [
    { id: 0, name: "All" },
    { id: 1, name: "Recent" },
    { id: 2, name: "Popular" },
    { id: 3, name: "Expensive" },
    { id: 4, name: "Cheap" }
]

const ScrollNav = () => {
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={s.scrollView}
        >

            {navData.map(item =>
                <View style={s.itemContainer} key={item.id}>
                    <Text style={s.itemTitle}>{item.name}</Text>
                </View>
            )}

        </ScrollView>
    )
}

export default ScrollNav

const s = StyleSheet.create({
    itemContainer: {
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 20,
        backgroundColor: '#EC5668',
        marginRight: 15,
    },
    scrollView: {
        height: 120,
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    itemTitle: {
        color: 'white',
        fontWeight: '600',
        textTransform: 'uppercase'
    }
})
