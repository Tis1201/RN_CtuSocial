import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import Post from './Post'
import HeaderFeed from './HeaderFeed'
import UserHeader from './UserHeader'

const BodyFeed = () => {
  return (  
    <FlatList 
    data={[1,2,3,4,5]}
    renderItem={({item}) => <Post />}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{
      paddingBottom: 0,
    }}

    ListHeaderComponent={
        <>
              <HeaderFeed/>
              <UserHeader />
        </>
    }
    />
  )
}

export default BodyFeed

const styles = StyleSheet.create({})