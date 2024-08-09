import { StyleSheet, Text, View,SafeAreaView,Platform, Image,Dimensions, useWindowDimensions } from 'react-native'
import React from 'react'
import UserProfilePostFeed from '../../../components/UserProfilePostFeed';



const Profile = () => {
  const widthScreen = useWindowDimensions().width;

  return (
    <SafeAreaView style={styles.container}>
      {/* avatar and background*/}
      <UserProfilePostFeed />

    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    paddingTop: Platform.OS === 'android' ? 45 : 0
  },
  img:{
    width:140,
    height:140,
    borderRadius:100,

},
})