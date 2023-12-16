/* eslint-disable prettier/prettier */
import React from 'react';
import {Animated, View, StyleSheet} from 'react-native';

const AudioVisualizer = () => {
  const barWidth = 3;
  const barSpacing = 1;
  const barHeight = 12;

  const animatedValues = Array.from({length: 5}, () => new Animated.Value(0));

  React.useEffect(() => {
    const animations = animatedValues.map(value => {
      const animationDuration = Math.random() * 2000 + 900; // random duration between 500 and 1500 ms

      return Animated.loop(
        Animated.sequence([
          Animated.timing(value, {
            toValue: barHeight,
            duration: animationDuration / 2,
            useNativeDriver: false,
          }),
          Animated.timing(value, {
            toValue: 0,
            duration: animationDuration / 2,
            useNativeDriver: false,
          }),
        ]),
      );
    });

    Animated.parallel(animations).start();
  }, [animatedValues]);

  return (
    <View style={styles.container}>
      {animatedValues.map((value, index) => (
        <Animated.View
          key={index}
          style={[
            styles.bar,
            {
              height: value,
              width: barWidth,
              marginLeft: index === 0 ? 0 : barSpacing,
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 35,
    paddingLeft: 10,
  },
  bar: {
    backgroundColor: 'white',
    borderTopLeftRadius: 5, // Adicione esta linha
    borderTopRightRadius: 5,
  },
});

export default AudioVisualizer;
