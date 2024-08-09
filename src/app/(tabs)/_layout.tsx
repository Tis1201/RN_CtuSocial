import { StyleSheet, Image } from 'react-native';
import React from 'react';
import { Link, Tabs,router } from 'expo-router';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: 'Home',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../../../assets/homepage-blue.png') : require('../../../assets/homepage-nofill.png')}
              style={{ width: 26, height: 26 }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerTitle: 'Search',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../../../assets/search-blue.png') : require('../../../assets/search1.png')}
              style={{ width: 26, height: 26 }}
              resizeMode="contain"
            />
          ),
        }}
        
      />


        <Tabs.Screen
        name="chat"
        options={{
          headerTitle: 'Chat',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../../../assets/chat-blue.png') : require('../../../assets/chat-nofill.png')}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          ),
        }} 
        
      />



        <Tabs.Screen
        name="notification"
        options={{
          headerTitle: 'Notificatio',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../../../assets/bell-ring-fill.png') : require('../../../assets/bell-ring-nofill.png')}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          ),
        }}
      />
        <Tabs.Screen
        name="profile"
        options={{
          headerTitle: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../../../assets/user-blue.png') : require('../../../assets/user-nofill.png')}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
