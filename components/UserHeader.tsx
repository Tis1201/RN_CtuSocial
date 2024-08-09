import { StyleSheet, Text, View,Image, Pressable,Dimensions, useWindowDimensions } from 'react-native'
import React from 'react'


const UserHeader = () => {
    const widthScreen = useWindowDimensions().width;
    const pressableWidth = widthScreen * 3 / 5;
  return (
    <View style={styles.container}>
        <View style={{
            width:widthScreen *2/3,
            paddingLeft:5,
            flexDirection:'row',
            alignItems:'center',
            gap:10
            
            }}>
            <Image 
            source={{uri:'https://www.bing.com/th?id=OIP.1E8JgeiKI9AnV-mVKi4wXAHaFc&w=157&h=106&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'}}
            style={styles.img}
            resizeMode='cover'
            />
            <Pressable
            style={({ pressed }) => [
            {
                backgroundColor: pressed ? 'rgba(219, 219, 219, 0.8)' : 'white',
                width: '100%',
                height: 40,
            },
            styles.pressable,
            ]}
            > 
                <View style={styles.innerView}>
                <Text style={styles.text}>Bạn đang nghĩ gì?</Text>
                </View>
            </Pressable>
        </View>
   

      <View>
        
      </View >
      <View style={{width:widthScreen/3, marginLeft:60}}>
        <Image 
            source={require('../assets/stack.png')}
            style={styles.imgRight}
            resizeMode='contain'
            />
      </View>
   
    </View>
  )
}

export default UserHeader

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems:'center',
        padding:5
    },
    img:{
        width:40,
        height:40,
        borderRadius:100
    },
    pressable: {
        borderRadius: 7,
      },
      innerView: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
      },
      text: {
        fontSize: 15,
        
      },
      imgRight:{
        width:25,
        height:25,
      }
})