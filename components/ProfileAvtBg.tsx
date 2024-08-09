import { StyleSheet, Text, View,SafeAreaView,Platform, Image,Dimensions, useWindowDimensions } from 'react-native'
import React from 'react'

const ProfileAvtBg = () => {
    const widthScreen = useWindowDimensions().width;
  return (
    <View style={{
        width:'100%',
        height:200,
        backgroundColor:'rgba(219, 219, 219, 0.8)',
        position:'relative'
        
      }}>
        <View style={{
          width:150,
          height:150,
          backgroundColor:'white',
          borderRadius:100,
          alignItems:'center',
          justifyContent:'center',
          position:'absolute',
          top:90,
          left:15
        }}>
          <Image 
              source={{uri:'https://www.bing.com/th?id=OIP.1E8JgeiKI9AnV-mVKi4wXAHaFc&w=157&h=106&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'}}
              style={styles.img}
              resizeMode='cover'
              />
        </View>

            <View style={{
                width:40,
                height:40,
                backgroundColor:'white',
                borderRadius:100,
                position:'absolute',
                top:185,
                left:130,
                alignItems:'center',
                justifyContent:'center'
            }}>
            <View style={{
                  width:35,
                  height:35,
                  backgroundColor:'rgba(219, 219, 219, 0.8)',
                  borderRadius:100,
                  alignItems:'center',
                  justifyContent:'center',

            }}>
                  <Image 
                  source={require('../assets/camera.png')}
                  resizeMode='contain'
                  style={{
                    width:20,
                    height:20
                  }}
                  />
            </View>
            </View>
            <View style={{
                width:40,
                height:40,
                backgroundColor:'white',
                borderRadius:100,
                position:'absolute',
                top:150,
                right:15,
                alignItems:'center',
                justifyContent:'center'
            }}>
            <View style={{
                  width:35,
                  height:35,
                  backgroundColor:'rgba(219, 219, 219, 0.8)',
                  borderRadius:100,
                  alignItems:'center',
                  justifyContent:'center',

            }}>
                  <Image 
                  source={require('../assets/camera.png')}
                  resizeMode='contain'
                  style={{
                    width:20,
                    height:20
                  }}
                  />
            </View>
            </View>
      </View>
  )
}

export default ProfileAvtBg

const styles = StyleSheet.create({
    img:{
        width:140,
        height:140,
        borderRadius:100,
    
    },
})