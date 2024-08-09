import { StyleSheet, Text, View, Image ,Pressable} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'; 

const HeaderFeed = () => {
  const router = useRouter(); 
  const handlePress = () => {
    router.navigate('/(stack)/SwipeAddFr');  // Use router.push to navigate
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerCon}>
    <Image 
      source={require('../assets/logo-home-blue.jpg')}
      style={styles.img}
      resizeMode='contain'
    />
    <View style={styles.headerConRight}>
      <View style={styles.borderGroup}>
        <Image 
          source={require('../assets/add-header.png')}
          style={styles.group}
          resizeMode='contain'
        />
      </View>
      <Pressable onPress={handlePress}>
        <View style={styles.borderGroup} >
          <Image 
            source={require('../assets/group.png')}
            style={styles.group}
            resizeMode='contain'
            
          />
        </View>
      </Pressable>

      <View style={styles.borderGroup}>
        <Image 
          source={require('../assets/search-header.png')}
          style={styles.group}
          resizeMode='contain'
        />
      </View>
    </View>
  </View>
    </View>

  )
}

export default HeaderFeed

const styles = StyleSheet.create({
    container:{
      padding:10
    },
    headerCon:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    headerConRight:{
      flexDirection:'row',
      alignItems:'center',
      gap:10
    },
    img:{
      width:150,
      height:50
    },
    group:{
      width:25,
      height:25
    },
    borderGroup:{
      width:35,
      height:35,
      borderRadius:100,
      backgroundColor: 'rgba(219, 219, 219, 0.8)',
      alignItems:'center',
      justifyContent:'center',
    }
  
  })