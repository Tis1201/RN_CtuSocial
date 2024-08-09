import { StyleSheet, Text, View,SafeAreaView, Platform, Image,Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'; 
import { useNavigation } from '@react-navigation/native';

const HeaderListFr = () => {
    const navigation = useNavigation();

    const handlePress = () => {
      navigation.goBack();
    };
  return (
    <View>
        <View>
        <Pressable onPress={handlePress} style={{paddingLeft:15, paddingTop:15}}>
        <Image 
          source={require('../assets/left-arrow.png')}
          style={{
            width:20,
            height:20,
            // top:15,
            // left:15
          }}
          resizeMode='contain'
        />
        </Pressable>
        <Text style={{
          fontWeight:'bold',
          fontSize:25,
          textAlign:'center'
        }}>Bạn bè</Text>
        <View style={{
          width:'100%',
          paddingVertical:15,
          paddingHorizontal:35

        }}>
          <View style={{
              backgroundColor:'rgba(250, 248, 249, 1)',
              borderRadius:25,
              flexDirection:'row',
              height:40,
              alignItems:'center',
              gap:10,
              paddingLeft:15
          }}>
            <Image 
              source={require('../assets/search-chat.png')}
              style={{
                width:23,
                height:23,
                resizeMode:'contain',
                
              }}
            />
            <Text style={{
              color:'gray',
              fontSize:17
            }}>Tìm kiếm bạn bè</Text>
          </View>

        </View>
        </View>

        <View style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            paddingHorizontal:15
        }}>
            <Text style={{
            fontWeight:'bold',
            fontSize:17
            }}>483 bạn bè</Text>
            <Text style={{
            color:'blue'
            }}>Sắp xếp</Text>
        </View>
    </View>
  )
}

export default HeaderListFr

const styles = StyleSheet.create({})