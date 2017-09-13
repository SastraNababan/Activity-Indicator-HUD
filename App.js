import React from 'react';
import { StyleSheet,ActivityIndicator,Dimensions,Platform,Text } from 'react-native';
import ActivityIndicatorHUD from './src/ActivityIndicatorHUD'
import {Container,Header,Content,Title,Button} from 'native-base'

    const dim=Dimensions.get('screen')
    const {scale,height,width,fontScale} = dim
    const msp = (limit) => (
      (scale * width) >= limit || (scale * height) >= limit
    )
    const isPortrait = () => {
      const {scale,height,width,fontScale} = dim
      return (height >= width)
    }
    const isLandscape = () => ( width >= height)
    const isTablet = () => (
        ((scale < 2 && msp(1000)) || (scale >= 2 && msp(1900)))
    )
    const isPhone = () => (!isTablet())
    
 
export default class App extends React.Component {
  state={
    orientation: isPortrait() ? 'portrait' : 'landscape',
    devicetype: isTablet() ? 'tablet' : 'phone'
  }
  render() {
    Dimensions.addEventListener('change', () => {
      this.setState({
          orientation: isPortrait() ? 'portrait' : 'landscape',
          devicetype: isTablet() ? 'tablet' : 'phone'
      });
    });

    return (
      <Container>
        <Header>
          <Title>
            <Text>Activity Indicator HUD</Text>
          </Title>
        </Header>
        <Content style={{backgroundColor:'bisque'}}>
        {/* <Text style={styles.instructions}> */}
            {/* Dimensions = {JSON.stringify(Dimensions.get('screen'))}{'\n'}
            orientation = {JSON.stringify(this.state.orientation)}{'\n'}
            devicetype: {JSON.stringify(this.state.devicetype)} */}
            {/* isPortrait = {isPortrait() ? 'true\n' : 'false\n'} */}
            {/* isLandscape = {isLandscape() ? 'true\n' : 'false\n'} */}
            {/* isPhone = {isPhone() ? 'true\n' : 'false\n'} */}
            {/* isTablet = {isTablet() ? 'true\n' : 'false\n'} */}
        {/* </Text> */}
          
          <ActivityIndicatorHUD 
            isVisible={true} 
            title="Loading"
            message="Please wait a moment"/>
          {/* <Button>
            <Text>Simple Indicator 1</Text>
          </Button>
          <Button>
            <Text>Simple Indicator 2</Text>
          </Button>   */}



        </Content>
      </Container>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
