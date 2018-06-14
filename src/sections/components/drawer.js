import React from 'react';
import {
  ScrollView,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
} from 'react-native';
import { DrawerItems } from 'react-navigation';

function Drawer(props) {
  return (
    <ScrollView>
      <SafeAreaView
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
        />
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain',
    marginVertical: 20,
    marginLeft: 10
  },
})

export default Drawer;
