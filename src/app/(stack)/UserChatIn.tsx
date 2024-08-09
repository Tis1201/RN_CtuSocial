import { Image, StyleSheet, Text, View,SafeAreaView, Platform  } from 'react-native'
import React from 'react'
// import { SafeAreaVi`ew } from 'react-native-safe-area-context'

const UserChatIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingRight:15
      }}>
      <View style={{
        flexDirection:'row',
        alignItems:'center',
        gap:25,
        paddingLeft:20
      }}>
        <Image 
          source={require('../../../assets/left-arrow.png')}
          style={{
            width:20,
            height:20
          }}
          resizeMode='contain'
        />
        <View style={{
          flexDirection:'row',
          alignItems:'center',
          gap:10,
          justifyContent:'space-between'
        }}>
        <Image
          source={{uri: 'https://th.bing.com/th/id/OIP.M6TAuNj3gyT6sh4QXLK8yQHaJQ?w=178&h=223&c=7&r=0&o=5&pid=1.7'}}
          style={{
            width: 40,
            height: 40,
            borderRadius: 100
          }}
          resizeMode='cover'
        />
        <View>
          <View style={{
            flexDirection:'row',
            alignItems:'center',
            gap:3
          }}>
              <Text style={{
            fontWeight: 'bold',
            fontSize: 15,
            paddingBottom: 2
          }}>Thùy Trang</Text>
              <Image 
              source={require('../../../assets/dot-green.png')}
              style={{
                width:15,
                height:15
              }}
              resizeMode='contain'
            />
          </View>

          <Text style={{
              fontSize: 13,
              color: 'gray'
            }}>Đang hoạt động</Text>
            
        </View>

        </View>
         
      </View>
      <Image 
          source={require('../../../assets/menu.png')}
          style={{
            width:25,
            height:25
          }}
          resizeMode='contain'
        />
      </View>

    </SafeAreaView>
  )
}

export default UserChatIn

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    flex:1,
    paddingTop: Platform.OS === 'android' ? 45 : 0
  }
})