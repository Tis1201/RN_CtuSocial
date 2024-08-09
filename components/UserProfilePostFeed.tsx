import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import Post from './Post'
import Profile from '../src/app/(tabs)/profile'
import ProfileAvtBg from './ProfileAvtBg'
import DetailProfile from './DetailProfile'

const UserProfilePostFeed = () => {
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
                <ProfileAvtBg />
                <DetailProfile />
            </>
        }
        />
      )
}

export default UserProfilePostFeed

const styles = StyleSheet.create({})