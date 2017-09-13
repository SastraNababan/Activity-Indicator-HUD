import { Dimension,View,Text } from 'react-native';
import React, { Component } from 'react';

export default class Orientation extends Component {
  state = {  }
  render() {
    /**
    *
    * @param {ScaledSize} dim the dimensions object
    * @param {*} limit the limit on the scaled dimension
    */

   const msp = (dim, limit) => {
       return (dim.scale * dim.width) >= limit || (dim.scale * dim.height) >= limit;
   };
    
   /**
    * Returns true if the screen is in portrait mode
    */
   const isPortrait = () => {
       const dim = Dimensions.get('screen');
       return dim.height >= dim.width;
   };
    
   /**
    * Returns true of the screen is in landscape mode
    */
   const isLandscape = () => {
       const dim = Dimensions.get('screen');
       return dim.width >= dim.height;
   };
    
   /**
    * Returns true if the device is a tablet
    */
   const isTablet = () => {
       const dim = Dimensions.get('screen');
       return ((dim.scale < 2 && msp(dim, 1000)) || (dim.scale >= 2 && msp(dim, 1900)));
   };
    
   /**
    * Returns true if the device is a phone
    */
   const isPhone = () => { return !isTablet(); }
    
   export default {
       isPortrait,
       isLandscape,
       isTablet,
       isPhone
   };

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
            Dimensions = {JSON.stringify(Dimensions.get('screen'))}{'\n'}
            isPortrait = {Platform.isPortrait() ? 'true\n' : 'false\n'}
            isLandscape = {Platform.isLandscape() ? 'true\n' : 'false\n'}
            isPhone = {Platform.isPhone() ? 'true\n' : 'false\n'}
            isTablet = {Platform.isTablet() ? 'true\n' : 'false\n'}
        </Text>
      </View>
    );
  }
}