import { StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'

const Ads = () => {
  return (
    <View style={s.conatainer}>
      <View style={s.imageWrapper}>
        <Image style={s.image} source={require('../../assets/adsGirl.png')} />
      </View>
      <View style={s.textWrapper}>
        <Text style={s.title}>Big Sale</Text>
        <Text style={s.desc}>Get the trendy fashion at a discount up to 50%</Text>
      </View>
    </View>
  )
}

export default Ads

const s = StyleSheet.create({
  conatainer: {
    height: 130,
    backgroundColor: '#E6606F',
    marginHorizontal: 24,
    borderRadius: 30,
    flexDirection: 'row',
    marginTop: 25,
  },
  imageWrapper: {
    flex: 1,
  },
  image: {
    position: 'absolute',
    width: '80%',
    height: '120%',
    bottom: 0,
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
    // fontFamily: 'monospace',
    paddingBottom: 4
  },
  desc: {
    fontSize: 14,
    color: 'white',
    // fontFamily: 'monospace',
    paddingRight: 25,
    lineHeight: 14
  }
})