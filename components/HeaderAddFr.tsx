import { StyleSheet, Text, View,SafeAreaView, Platform, Image, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'; 

const HeaderAddFr = () => {
  const router = useRouter(); 
  const handlePress = () => {
    router.navigate('/(stack)/FriendSuggest');  // Use router.push to navigate
  };
  const PageFriend = () => {
    router.navigate('/(stack)/FriendPage');  // Use router.push to navigate
  };
  return (
    <View>  
    <Text style={{
          fontWeight:'bold',
          fontSize:30,
          paddingLeft:10
        }}>Bạn bè</Text>
    <View style={{
      flexDirection:'row',
      alignItems:'center',
      gap:7,
      paddingTop:5,
      paddingLeft:10
    }}>
      <Pressable onPress={handlePress}>
      <View style={{
        width:70,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(219, 219, 219, 0.8)',
        borderRadius:15,
        
      }}>
        <Text style={{
          fontWeight:'bold',
          fontSize:16
        }}>Gợi ý</Text>
      </View>
      </Pressable>

      <Pressable onPress={PageFriend}>
      <View style={{
        width:90,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(219, 219, 219, 0.8)',
        borderRadius:15,
      }}>
        <Text style={{
          fontWeight:'bold',
          fontSize:16
        }}>Bạn bè</Text>
      </View>
      </Pressable>

    </View>
  </View>
  )
}

export default HeaderAddFr

const styles = StyleSheet.create({})