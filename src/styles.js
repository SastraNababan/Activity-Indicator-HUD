import { StyleSheet,Dimensions } from 'react-native';


export default StyleSheet.create({
   container: {
      // flex: 1,
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'rgba(0,0,0,0.0)',
      flexDirection:'row',
      zIndex:2,
      // backgroundColor:'blue'
      // left: (Dimensions.get('window').width / 2) - 25,
      // top: (Dimensions.get('window').height/3) 
   },

   loadingContainer: {
     padding: 12,
     backgroundColor: '#FFF',
     borderRadius: 8,
     opacity: .9,
     justifyContent: 'center',
     alignItems: 'center'
   },

   loadingText: {
     fontWeight: 'bold',
    //  color: '#000',
    //  textAlign: 'center',
    //  fontSize: 22,
   },

   spinnerContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 4,
      marginTop: 4,
   },
});