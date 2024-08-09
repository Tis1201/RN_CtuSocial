import { StyleSheet, Text, View, Image, Dimensions, useWindowDimensions, Platform, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react';
import posts from '../assets/data/posts.json';
import { SafeAreaView } from 'react-native-safe-area-context';

const post1 = posts[0];

const Post = () => {
    const widthScreen = useWindowDimensions().width;
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        Image.getSize(post1.image_url, (width, height) => {
            setImageSize({ width, height });
        });
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <View style={styles.conImg}>
                    <Image
                        source={{ uri: post1.user.image_url }}
                        resizeMode='cover'
                        style={styles.img}
                    />
                </View>
                <View style={styles.containerText}>
                    <Text
                        style={styles.textName}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {post1.user.username}
                    </Text>
                    <Text style={styles.textDay}>3 ngày</Text>
                </View>
                <View style={styles.conIcon}>
                    <Image
                        source={require('../assets/menu-dot.png')}
                        style={styles.imgIcon}
                        resizeMode='contain'
                    />
                    <Image
                        source={require('../assets/x.png')}
                        style={styles.imgIconX}
                        resizeMode='contain'
                    />
                </View>

            </View>
            <View style={{ paddingTop: 10, paddingLeft:10 , paddingBottom: Platform.OS === 'android' ? 10 : 0}}>
                <Text>{post1.caption}</Text>
            </View>
            <View style={{ paddingBottom: 10, width: '100%', height: 250 }}>
                <Image
                    source={{ uri: post1.image_url }}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode='contain'
                />
            </View>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                paddingLeft:10
            
            }}>
                <Text>100 lượt thích</Text>
            <View style={{
                flexDirection:'row',
                justifyContent:'flex-end',
                gap:10,
                paddingRight:10
            }}>
                <Text>4 bình luận</Text>
                <Text>5 lượt chia sẻ</Text>
            </View>
            </View>

            <View style={styles.actionContainer}>
            <Pressable
                    style={styles.actionButton}
                    onPress={() => setIsLiked(!isLiked)}
                >
                    <Image
                        source={isLiked ? require('../assets/like-blue.png') : require('../assets/like.png')}
                        resizeMode='contain'
                        style={styles.actionIcon}
                    />
                    <Text style={styles.actionText}>Thích</Text>
                </Pressable>
                <View style={styles.actionButton}>
                    <Image
                        source={require('../assets/comment.png')}
                        resizeMode='contain'
                        style={styles.actionIcon}
                    />
                    <Text style={styles.actionText}>Bình luận</Text>
                </View>
                <View style={styles.actionButton}>
                    <Image
                        source={require('../assets/share.png')}
                        resizeMode='contain'
                        style={styles.actionIcon}
                    />
                    <Text style={styles.actionText}>Chia sẻ</Text>
                </View>
            </View>
        </View>
    );
};

export default Post;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 0,
        marginHorizontal: 0,
        borderTopWidth:1,
        borderTopColor:'gray',
        borderBottomColor:'gray',
        borderBottomWidth:1,

    },
    containerHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal:7
    },
    img: {
        width: 40,
        height: 40,
        borderRadius: 100,
    },
    conImg: {
        width: 45,
        height: 45,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'rgba(219, 219, 219, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textName: {
        fontWeight: 'bold',
        flexShrink: 1,
    },
    textDay: {
        color: 'gray',
    },
    containerText: {
        paddingLeft: 7,
        paddingRight: Platform.OS === 'ios' ? 40 : 100,
        flex: 1,
    },
    imgIcon: {
        width: 20,
        height: 20,
    },
    imgIconX: {
        width: 15,
        height: 15,
    },
    conIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 25,
        paddingBottom: 25,
        paddingRight: 10,
    },
    actionContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:10
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    actionIcon: {
        width: 20,
        height: 20,
    },
    actionText: {
        textAlign: 'center',
        fontSize: 17,
    },
});
