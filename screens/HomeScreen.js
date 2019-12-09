import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import IntroVideo from '../assets/videos/beser.mp4'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  WebView,
  Button
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { Video } from 'expo-av';
import { FlatList } from 'react-native-gesture-handler';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
      <Image style ={ {paddingTop: 50, width: 60, height: 30 }}source ={{ uri: 'https://be-ser.com/wp-content/uploads/2019/03/Beser_logo.png'}} />
      <ScrollView >
      <Video
  source={IntroVideo}
  rate={1.0}
  volume={0.1}
  isMuted={false}
  resizeMode="cover"
  shouldPlay
  isLooping
  style={{ width: '100%', height: 400 }}
/>

<Text style = {styles.bodyText}> BESER is a project that supports and enhance
the personal identity of the individual that consciously
choses to decorate the body through symbolic clothing.</Text>

<View style= {styles.imageCarouselFoot}>
  <Image style ={ {paddingTop: 50, width: '100%', height: 120 }} source={{ uri: 'https://be-ser.com/wp-content/uploads/2019/04/phonehead.jpg'}}/>
</View>
<FlatList >

</FlatList>

</ScrollView>
</View>

    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    padding: 10,
    color: '#fff',
    backgroundColor: 'black'
  },
  imageCarouselFoot: {
    width: '100%',
    height: 80,
    paddingTop: 10,
  },
  contentContainer: {
    paddingTop: 80,
  },
  WebViewStyle: {
    marginTop: 20
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});


