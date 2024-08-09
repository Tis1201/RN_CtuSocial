import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';  // Import useRouter

const UserChatOut = () => {
  const router = useRouter();  // Initialize the router

  const handlePress = () => {
    router.push('/(stack)/UserChatIn');  // Use router.push to navigate
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
      onPress={handlePress}  // Add onPress handler
    >
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
      }}>
        <Image
          source={{uri: 'https://th.bing.com/th/id/OIP.M6TAuNj3gyT6sh4QXLK8yQHaJQ?w=178&h=223&c=7&r=0&o=5&pid=1.7'}}
          style={{
            width: 60,
            height: 60,
            borderRadius: 100
          }}
          resizeMode='cover'
        />
        <View>
          <View style={{
              flexDirection:'row',
              alignItems:'center',
              gap:3
          }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 17,
              paddingBottom: 2
            }}>Thùy Trang</Text>
              <Image 
              source={require('../../../assets/dot-green.png')}
              style={{
                width:15,
                height:15
              }}
              resizeMode='contain'
            />
          </View>

          <View style={{
            flexDirection: 'row',
            gap: 20,
            alignItems: 'center'
          }}>
            <Text style={{
              fontSize: 13,
              color: 'gray'
            }}>Anh đang làm gì đó</Text>
            <Text style={{
              fontSize: 13,
              color: 'gray'
            }}>2:00 PM</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserChatOut;

const styles = StyleSheet.create({
  container: {
    padding: 15
  }
});
