import { StyleSheet, Text, View,SafeAreaView, Platform, Image } from 'react-native'
import React from 'react'
import ListFriend from '../../../components/ListFriend'

const FriendPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ListFriend />


    </SafeAreaView>
  )
}

export default FriendPage

const styles = StyleSheet.create({
    container:{
      backgroundColor:'white',
      paddingTop: Platform.OS === 'android' ? 45 : 0,
      flex:1
    }
})