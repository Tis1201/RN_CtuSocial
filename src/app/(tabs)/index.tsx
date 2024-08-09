import { StyleSheet, Text, View, Image ,SafeAreaView, Platform} from 'react-native'
import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
import BodyFeed from '../../../components/BodyFeed'
import { StatusBar } from 'expo-status-bar'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>

      <BodyFeed />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    paddingTop: Platform.OS === 'android' ? 45 : 0

  },
  padSta:{
    
  }
  

})