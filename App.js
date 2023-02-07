import React from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  Text,
  View,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Swiper from 'react-native-swiper';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import { welcomeScreensJson } from './data';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    paddingTop: 10,
    marginHorizontal: 30,
  },
  img: {
    alignSelf: 'center',
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    height: h * 0.5,
    width: w * 0.9,
  },
  title: {
    fontFamily: 'Montserrat_700Bold',
    marginTop: 60,
    marginHorizontal: 10,
    fontSize: 32,
  },
  text: {
    color: '#767676',
    fontFamily: 'Montserrat_400Regular',
    marginTop: 20,
    fontSIze: 32,
    lineHeight: 25,
    marginLeft: 10,
  },
});

const Card = ({ imageUrl, cardtitle, description }) => (
  <View style={styles.slide}>
    <Image source={imageUrl} style={styles.img} />
    <Text style={styles.title}>{cardtitle}</Text>
    <Text style={styles.text}>{description}</Text>
  </View>
);

const SwipperButton = ({ icon }) => (
  <View
    style={{
      height: 60,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      width: 60,
      backgroundColor: '#8A56AC',
      marginHorizontal: 10,
    }}
  >
    <AntDesign name={icon} size={22} color='#FFF' />
  </View>
);

const App = () => {
  let [fontLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontLoaded) {
    return null;
  } else {
    return (
      <Swiper
        buttonWrapperStyle={{
          backgroundColor: 'transparent',
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          left: 0,
          flex: 1,
          paddingHorizontal: 30,
          paddingVertical: 20,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}
        style={styles.wrapper}
        showsButtons={true}
        paginationStyle={{
          marginRight: w * 0.7,
          marginBottom: h * 0.02,
        }}
        activeDotColor='#BA56AC'
        dotColor='#998FA2'
        nextButton={<SwipperButton icon='arrowright' />}
        prevButton={<SwipperButton icon='arrowleft' />}
      >
        {welcomeScreensJson &&
          welcomeScreensJson.map((item) => (
            <Card
              imageUrl={item.image}
              cardtitle={item.title}
              description={item.description}
            />
          ))}
      </Swiper>
    );
  }
};

export default App;
