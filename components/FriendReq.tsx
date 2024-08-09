import { StyleSheet, Text, View,SafeAreaView, Platform, Image } from 'react-native'
import React from 'react'
interface Props{
  text:string;
  subtext:string
}
const FriendReq = ({text,subtext}:Props) => {
  return (
    <View style={{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        paddingHorizontal:10,
        paddingTop:5
      }}>
        <Image 
          source={require('../assets/ronaldo.jpg')}
          style={{
            width:75,
            height:75,
            borderRadius:100
          }}
          resizeMode='cover'
        />
        <View>
          <Text style={{
            fontWeight:'bold'
          }}>Ronaldo</Text>
          <Text style={{
            color:'gray'
          }}>Trường kinh tế</Text>
          <View style={{
            flexDirection:'row',
            alignItems:'center',
            gap:3,
            paddingTop:5,
            justifyContent:'flex-start',

            width:'100%',
            paddingRight: Platform.OS === 'android' ? 19 : 26
          }}>
            <View style={{
              width:'45%',
              height:35,
              backgroundColor:'rgba(49, 165, 247, 0.8)',
              alignItems:'center',
              justifyContent:'center',
              borderRadius:5,
            }}>
              <Text style={{
                color:'white',
                textAlign:'center'
              }}>{text}</Text>
            </View>
            <View style={{
              width:'45%',
              height:35,
              backgroundColor:'rgba(219, 219, 219, 0.8)',
              alignItems:'center',
              justifyContent:'center',
              borderRadius:5
            }}>
              <Text style={{
                fontWeight:'bold'
              }}>xóa</Text>
            </View>
          </View>
        </View>
      </View>
  )
}

export default FriendReq

const styles = StyleSheet.create({})