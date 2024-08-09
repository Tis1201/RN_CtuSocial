import { StyleSheet, Text, View,SafeAreaView,Platform, Image,Dimensions, useWindowDimensions } from 'react-native'
import React from 'react'

const DetailProfile = () => {
    const widthScreen = useWindowDimensions().width;
  return (
    <View>
        <View style={{
        paddingTop:55,
        paddingLeft:25
      }}>
        <Text style={{
          fontWeight:'bold',
          fontSize:20,
          paddingBottom:7
        }}>Hoài Vũ</Text>
        <Text style={{
          fontWeight:'bold'
        }}>200  <Text style={
          {
            color:'gray',fontSize:14
          }
        }>người bạn</Text> </Text>
      </View>

      <View style={{
        flexDirection:'row',
        alignItems:'center',
        paddingTop:30,
        gap:10,
        width:'100%',
        justifyContent:'center',
        paddingBottom:15
      
      }}>

            <View style={{
              flexDirection:'row',
              alignItems:'center',
              gap:5,
              backgroundColor:'rgba(219, 219, 219, 0.8)',
              height:40,
              width:widthScreen * 3/5,
              justifyContent:'center',
              borderRadius:10
            }}>
              <Image 
                source={require('../assets/pen.png')}
                style={{
                  width:16,
                  height:16
                }}
                resizeMode='contain'
              />
              <Text style={{
                fontWeight:'bold',
                fontSize:13
              }}>Chỉnh sửa thông tin cá nhân</Text>
            </View>
            <View style={{
              width:widthScreen * 1/8,
              backgroundColor:'rgba(219, 219, 219, 0.8)',
              height:40,
              alignItems:'center',
              justifyContent:'center',
              borderRadius:10
            }}>
              <Image 
                source={require('../assets/option.png')}
                style={{
                  width:25,
                  height:25,
                }}
                resizeMode='contain'
              />
            </View>
            </View>

      
      <View style={{
          paddingLeft:10,
          justifyContent:'center',
          gap:10
         }}>
          <Text style={{
            fontWeight:'bold',
            fontSize:17
          }}>Chi tiết </Text>
          <View style={{
            flexDirection:'row',
            alignItems:'center',
            gap:7
          }}>
            <Image 
              source={require('../assets/school.png')}
              style={{
                width:20,
                height:20
              }}
              resizeMode='contain'
            />
            <Text style={{
                fontWeight:'bold',
                fontSize:15
              }}
                numberOfLines={1}
                ellipsizeMode="tail"
            
            >Trường Công nghệ Thông tin & Truyền thông</Text>
          </View>
          <View style={{
            flexDirection:'row',
            alignItems:'center',
            gap:7
          }}>
            <Image
              source={require('../assets/book.png')}
              style={{
                width:20,
                height:20
              }}
            />
            <Text style={{
                fontSize:15
            }}>Khóa 47</Text>
          </View>
          <View style={{
            flexDirection:'row',
            alignItems:'center',
            gap:7
          }}>
            <Image 
              source={require('../assets/old.png')}
              style={{
                width:20,
                height:20
              }}
              resizeMode='contain'
              />
            <Text>22 tuổi</Text>
          </View>
          <View style={{
            flexDirection:'row',
            alignItems:'center',
            gap:7
          }}>
            <Image 
              source={require('../assets/position.png')}
              style={{
                width:20,
                height:20
              }}
              resizeMode='contain'
            />
            <Text>Cần Thơ</Text>
          </View>
      </View>

      
      <View style={{
        paddingTop:20,
        paddingLeft:10,
        paddingBottom:10
      }}>
      <View style={{
        width:75,
        height:30,
        alignItems:'center',
        backgroundColor:'rgba(219, 219, 219, 0.8)',
        justifyContent:'center',
        borderRadius:24,
        
      }}>
        <Text style={{
          fontWeight:'bold',
          fontSize:14
        }}>Bài viết</Text>
      </View>
      </View>

    </View>
  )
}

export default DetailProfile

const styles = StyleSheet.create({})