import React, { useEffect } from 'react';
import { View, Animated, Easing, StyleSheet, Text } from 'react-native';

const App = () => {
  const opacity = new Animated.Value(0);
  const translateY = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <Animated.Text style={[styles.text, { transform: [{ translateY }] }]}>
        Hello, I'm Fading In!
      </Animated.Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;