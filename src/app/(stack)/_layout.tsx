import React from 'react';
import { Stack } from 'expo-router';



const StackLayout = () => {

  return (
    <Stack>
      <Stack.Screen
        name="UserChatOut"
        options={{ title: 'Chat Out' }}
      />
      <Stack.Screen
        name="UserChatIn"
        options={{ 
          title: 'Chat In', 
          headerShown:false
        
        }}
      />
      <Stack.Screen
        name="SwipeAddFr"
        options={{ 
          title: 'Add friend', 
          headerShown:false,
          gestureEnabled:false
        
        }}
      />
      <Stack.Screen
        name="FriendSuggest"
        options={{ 
          title: 'Suggest friend', 
          headerShown:false,
          gestureEnabled:false
        
        }}
      />
      <Stack.Screen
        name="FriendPage"
        options={{ 
          title: 'Friend Page', 
          headerShown:false,
          gestureEnabled:false
        
        }}
      />
    </Stack>
  );
}

export default StackLayout;
