import React, { useEffect } from 'react';
import { View, Animated, Easing, StyleSheet, Text } from 'react-native';

const App = () => {
  const opacity = new Animated.Value(0);
  const translateY = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  const cloudPositionX = new Animated.Value(-100);

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

    // Create a sequence of animations
    const sequenceAnimation = Animated.sequence([fadeAnimation, cloudAnimation]);

    // Create an infinite loop of the sequence animation
    const loopedAnimation = Animated.loop(sequenceAnimation, { iterations: -1 });

    // Start the looped animation
    loopedAnimation.start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.cloud, { left: cloudPositionX }]}>
        {/* Cloud SVG or Image Here */}
      </Animated.View>
      <Animated.View style={[styles.textContainer, { opacity, transform: [{ translateY }] }]}>
        <Text style={styles.text}>Hello, I'm Fading In!</Text>
      </Animated.View>
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
    top: 50,
    width: 100,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 50,
  },
  blueShape: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    position: 'absolute',
  },
});

export default App;