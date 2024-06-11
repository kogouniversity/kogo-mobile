import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import PostDetail from '../../../components/post/PostDetail';
import CommentsList from '../../../components/post/PostCommentsPreview/comments';
import { PostDetailsRouteProp, PostDetailsNavigationProp } from '../../../navigator/types';

function PostDetails(): JSX.Element {
    const route = useRoute<PostDetailsRouteProp>();
    const navigation = useNavigation<PostDetailsNavigationProp>();
    const { postID } = route.params;

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={{ flex: 1 }}>
                <PostDetail postID={postID} />
                {/* <CommentsList postID={postID} /> */}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    spacing: {
        height: 10,
    },
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default PostDetails;
