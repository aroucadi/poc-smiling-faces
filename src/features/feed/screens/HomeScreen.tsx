
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { posts, Post } from '../../../shared/api/apiMock';

const { width } = Dimensions.get('window');

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setActiveIndex(index);
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image source={{ uri: post.user.avatar }} style={styles.avatar} />
        <View>
          <Text style={styles.userName}>{post.user.name}</Text>
          <Text style={styles.userPractice}>{post.user.practice}</Text>
        </View>
      </View>

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={{ width: width - 32, borderRadius: 12 }}
      >
        {post.media.map((item, index) => (
          <Image key={index} source={{ uri: item.url }} style={styles.postImage} />
        ))}
      </ScrollView>
      
      {post.media.length > 1 && (
        <View style={styles.pagination}>
          {post.media.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, activeIndex === i ? styles.activeDot : {}]}
            />
          ))}
        </View>
      )}

      <View style={styles.captionContainer}>
        <Text style={styles.caption}>
          <Text style={{ fontWeight: 'bold', color: '#E2E8F0' }}>{post.user.name}</Text> {' '}
          {post.caption}
        </Text>
        <TouchableOpacity>
          <Text style={styles.seeMore}>see more</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.engagementStats}>
        <Text style={styles.engagementText}>{post.engagement.likes} Likes</Text>
        <Text style={styles.engagementText}>{post.engagement.comments} Comments</Text>
        {post.engagement.recommends && (
          <Text style={styles.engagementText}>{post.engagement.recommends} Recommends</Text>
        )}
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={[styles.actionButtonText, post.isLiked && { color: '#3ecaea' }]}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcdW078MpxeKiBgjTRdZwrX4Zb5MqrwLlroc-c433KBg8gj4MwgmTm04VAIWKzZnFThAfruVZanwj-YUoP9W0Na8vY031wtM0me2ck619dSKnp0ThXwo7rraUWfG_XAgdjHO5_Ggu7do7Mjq0L-pc_LqLl2M_MqWrbSxAdlodM4QsgMCaCF493Nrib6OFAlPfRF10gMdNrymsNkqiObCEb_uczwKORqU5KUibugUX2VX75kFow_4hOb3AV9KBMWmb9PKMzZh8X3_o' }} 
            style={styles.headerAvatar} 
        />
        <TouchableOpacity style={styles.createPostButton}>
            <Text style={styles.createPostButtonText}>Create Post</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={posts}
        renderItem={({ item }) => <PostCard post={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121d20',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1a2c30',
    backgroundColor: '#121d20',
  },
  headerAvatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
  },
  createPostButton: {
      backgroundColor: '#4ec0da',
      paddingHorizontal: 20,
      paddingVertical: 8,
      borderRadius: 20,
  },
  createPostButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 14,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#1a2c30',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userName: {
    color: '#E2E8F0',
    fontWeight: 'bold',
    fontSize: 16,
  },
  userPractice: {
    color: '#9cb4ba',
    fontSize: 12,
  },
  postImage: {
    width: width - 32,
    height: width - 32, 
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    top: 200,
    alignSelf: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#9cb4ba',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#3ecaea',
  },
  captionContainer: {
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  caption: {
    color: '#9cb4ba',
    fontSize: 14,
    lineHeight: 20,
  },
  seeMore: {
    color: '#3ecaea',
    paddingTop: 4,
  },
  engagementStats: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#121d20',
    marginTop: 10,
  },
  engagementText: {
    color: '#9cb4ba',
    fontSize: 12,
    marginRight: 16,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#121d20',
  },
  actionButton: {
    padding: 12,
  },
  actionButtonText: {
    color: '#9cb4ba',
    fontWeight: 'bold',
  },
});
