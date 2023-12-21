/* eslint-disable prettier/prettier */
import React from 'react';
import {Animated, View, StyleSheet} from 'react-native';

const AudioVisualizer = () => {
  const barWidth = 4;
  const barSpacing = 3;
  const barHeight = 25;
  const colors = ['whitesmoke', 'whitesmoke']; // Adicione um array de cores

  const animatedValues = Array.from({length: 5}, () => new Animated.Value(0));

  React.useEffect(() => {
    const animations = animatedValues.map(value => {
      const animationDuration = Math.random() * 2000 + 500; // random duration between 500 and 2000 ms

      return Animated.loop(
        Animated.sequence([
          Animated.timing(value, {
            toValue: barHeight,
            duration: animationDuration,
            useNativeDriver: false,
          }),
          Animated.timing(value, {
            toValue: 0,
            duration: animationDuration,
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
              transform: [{translateY: Animated.divide(value, -2)}],
              backgroundColor: colors[index % colors.length], // Adicione esta linha
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
    height: 3,
  },
  bar: {
    borderRadius: 5,
  },
});

export default AudioVisualizer;