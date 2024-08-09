import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import FriendReq from './FriendReq'
import HeaderAddFr from './HeaderAddFr'
import HeaderTitleFr from '../components/HeaderTitleFr'

const ListFriendReq = () => {
  return (
    <View>
      <FlatList 
        data={[1,2,3,4,5,6,7,8,9,10,11,12]}
        renderItem={(item) => <FriendReq text={'xác nhận'} subtext={'xóa'}/>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom: 200,
            gap:13
          }}
          ListHeaderComponent={
            <>
            <HeaderAddFr />
            <HeaderTitleFr />
            </>
        }
      />
    </View>
  )
}

export default ListFriendReq

const styles = StyleSheet.create({})