import { StyleSheet, Text, View,SafeAreaView, Platform, Image } from 'react-native'
import React from 'react'

const HeaderTitleFr = () => {
  return (

    <View style={{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:15,
        paddingTop:20,
        paddingBottom:5
      }}>
        <Text style={{
          fontWeight:'bold',
          fontSize:17
        }}>Lời mời kết bạn</Text>
        <Text style={{
          color:'blue'
        }}>Chấp nhận tất cả</Text>
      </View>
  )
}

export default HeaderTitleFr

const styles = StyleSheet.create({})