import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import HeaderListFr from './HeaderListFr'

const ListFriend = () => {
  return (
    <FlatList 
        data={[1,2,3,4,5,6,7,8,9]}
        renderItem={(item) => (
            <View style={{
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingHorizontal:15,
                        paddingVertical:10
                    }}>
                        <View style={{
                        flexDirection:'row',
                        alignItems:'center',
                        gap:10
                        }}>
                        <Image 
                            source={require('../assets/ronaldo.jpg')}
                            style={{
                                width:65,
                                height:65,
                                borderRadius:100
                            }}
                            resizeMode='cover'
                            />
                            <Text style={{
                            fontWeight:'bold',
                            fontSize:17
                            }}>Anh 7</Text>
                        </View>
                        <Image 
                        source={require('../assets/chat-fr.png')}
                        style={{
                            width:25,
                            height:25
                        }}
                        resizeMode='contain'
                        />
            </View>
            
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom: 200,
          }}
          ListHeaderComponent={
            <>
                <HeaderListFr />
            </>
        }
    
    />
  )
}

export default ListFriend

const styles = StyleSheet.create({})