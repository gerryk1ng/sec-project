import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import data from './data.json';

const App = () => {
  const [expandedPostId, setExpandedPostId] = useState(null);

  const togglePostExpansion = postId => {
    if (expandedPostId === postId) {
      setExpandedPostId(null);
    } else {
      setExpandedPostId(postId);
    }
  };

  return (
    <ScrollView horizontal style={styles.container}>
      {data.map(post => (
        <View key={post.id} style={styles.postContainer}>
          <TouchableOpacity onPress={() => togglePostExpansion(post.id)}>
            <Image style={styles.image} source={{ uri: post.imageUrl }} />
          </TouchableOpacity>
          <Text style={styles.title}>{post.title}</Text>
          {expandedPostId === post.id && <Text style={styles.content}>{post.content}</Text>}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
  },
  postContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 3,
    height: 340,
    width: 240,
    padding: 12,
    marginRight: 16,
  },
  image: {
    width: 150,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    fontSize: 14,
  },
});

export default App;