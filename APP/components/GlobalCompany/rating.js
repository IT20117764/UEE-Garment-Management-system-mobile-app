
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image,TouchableOpacity } from 'react-native';

const Rating = () => {

  const [defaultRating, setDefaultRating] = useState(2);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const starImageFilled = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
  const starImageCorner = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? { uri: starImageFilled }
                    : { uri: starImageCorner }
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <CustomRatingBar />
        <Text>{defaultRating} / {Math.max.apply(null, maxRating)}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 2,
    justifyContent: 'center',
    textAlign: 'center',
  },
  customRatingBarStyle: {
    // justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 1,
  },
  starImageStyle: {
    width: 15,
    height: 15,
    resizeMode: 'cover',
  
  },
});
