import { StyleSheet, Text, View,SafeAreaView, Platform, FlatList } from 'react-native'
import React from 'react'
import ListFriendReq from '../../../components/ListFriendReq'
import FriendReq from '../../../components/FriendReq'

const FriendSuggest = () => {
  return (
    <SafeAreaView style={styles.container}>

        <FlatList
        data={[1,2,3,4,5,6,7,8,9,10,11,12]}
        renderItem={(item) => <FriendReq text={'Thêm bạn bè'} subtext={'xóa'}/>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom: 200,
            gap:13
          }}
          ListHeaderComponent={
            <>
                    <Text style={{
                    fontWeight:'bold',
                    fontSize:20,
                    paddingLeft:10,
                    paddingTop:10,
                    paddingBottom:10
                }}>Bạn bè các trường gần đây</Text>
            </>
        }
      />
    </SafeAreaView>
  )
}

export default FriendSuggest

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        paddingTop: Platform.OS === 'android' ? 45 : 0,
    }
})