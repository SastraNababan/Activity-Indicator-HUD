import React, { Component } from 'react';
import { View,Text,ActivityIndicator,StyleSheet,Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles'

export default class ActivityIndicatorHUD extends Component {
  state = { 
    containerHeight:Dimensions.get('window').height
   }
  
  text(str,style) {
    console.log(str);
    if (str){
      return (<Text style={style}>{str}</Text>)
     }
  } 
  render() {
    let height = Dimensions.get('window').height
    Dimensions.addEventListener('change', () => {
      height = Dimensions.get('window').height
      this.setState({'containerHeight':height})
      console.log(`dimension change ${height}`);
    });
    const {isVisible,title,message} = this.props
    if (!isVisible) return null
    return (
      <View style={[styles.container,{height:this.state.containerHeight}]}>
      <View style={styles.loadingContainer}>
        <View style={styles.spinnerContainer}>
          <ActivityIndicator
            animating={true}
            size='large'
            color="#000"
          />
        </View>
        {this.text(title,styles.loadingText)}
        {this.text(message)}
      </View>
      </View>
    );
  }
}

ActivityIndicatorHUD.defaultProps ={
  isVisible: false
}
ActivityIndicatorHUD.propTypes = {
  isVisible: PropTypes.bool,
  title: PropTypes.string
};
