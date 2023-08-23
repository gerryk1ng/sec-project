import React, { useEffect } from 'react';
import { View, Animated, Easing, StyleSheet, Text, Image } from 'react-native';

// Import your photo
import MyPhoto from './images/IMG_7318.jpg';

const App = () => {
  const opacity = new Animated.Value(0);
  const translateY = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  const cloudPositionX = new Animated.Value(-100);
  const cloudPositionY = new Animated.Value(50);

  const photoRotation = new Animated.Value(0); // Rotation for the photo

  useEffect(() => {
    const fadeAnimation = Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    });

    const cloudAnimation = Animated.timing(cloudPositionX, {
      toValue: 400,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: false,
    });

    const rotateAnimation = Animated.timing(photoRotation, {
      toValue: 360, // Rotate 360 degrees (1 full rotation)
      duration: 5000, // Rotate over 5 seconds
      easing: Easing.linear,
      useNativeDriver: false,
    });

    // Create a sequence of animations for the entire component
    const sequenceAnimation = Animated.sequence([fadeAnimation, cloudAnimation]);

    // Create an infinite loop of the sequence animation along with rotation
    const loopedAnimation = Animated.loop(
      Animated.parallel([sequenceAnimation, rotateAnimation]),
      { iterations: -1 }
    );

    // Start the looped animations
    loopedAnimation.start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Animated cloud */}
      <Animated.View style={[styles.cloud, { left: cloudPositionX, top: cloudPositionY }]}>
        <Animated.Image
          source={MyPhoto}
          style={[
            styles.photo,
            {
              width: 100,
              height: 50,
              transform: [
                { translateY }, // Add other transforms here if needed
                { rotate: photoRotation.interpolate({ inputRange: [0, 360], outputRange: ['0deg', '360deg'] }) },
              ],
            },
          ]}
        />
      </Animated.View>

      {/* Animated blue shape */}
      <Animated.View style={[styles.blueShape, { opacity, transform: [{ translateY }] }]} />

      <View style={styles.textContainer}>
        <Text style={styles.text}>Hello, I'm Fading In!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  textContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cloud: {
    position: 'absolute',
  },
  blueShape: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    position: 'absolute',
  },
  photo: {
    // Remove transformOrigin
  },
});

export default App;