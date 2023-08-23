
import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import data from './data.json'; // Import the data from the JSON file

const App = () => {
  return (
    <ScrollView horizontal style={styles.container}>
      {data.map(post => (
        <View key={post.id} style={styles.postContainer}>
          <Image style={styles.image} source={{ uri: post.imageUrl }} />
          <Text style={styles.title}>{post.title}</Text>
          <Text style={styles.content}>{post.content}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
  },
  postContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 12,
    marginRight: 16,
  },
  image: {
    width: 150,
    height: 100,
    marginBottom: 8,
    marginTop: 40, // Add marginTop for padding at the top
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    fontSize: 14,
  },
});

export default App; // Make sure this line is present