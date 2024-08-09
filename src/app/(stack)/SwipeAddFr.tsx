import { StyleSheet, Text, View,SafeAreaView, Platform, Image } from 'react-native'
import React from 'react'
import HeaderAddFr from '../../../components/HeaderAddFr'
import ListFriendReq from '../../../components/ListFriendReq'
import HeaderTitleFr from '../../../components/HeaderTitleFr'

const SwipeAddFr = () => {
  return (
      <SafeAreaView style={styles.container}>
        <ListFriendReq />

      </SafeAreaView>
  )
}

export default SwipeAddFr

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    paddingTop: Platform.OS === 'android' ? 45 : 0,
    flex:1
  }
})