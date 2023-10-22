import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 15,
      paddingTop: 22,
      paddingBottom: 45,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 15,
    },
    readMoreContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
      marginTop: 30,
    },
    arrowIconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      width: 40,
      borderRadius: 30,
      backgroundColor: '#fff',
    },
    imageStyle: {
      width: '100%',
      marginTop: 20,
      borderRadius: 15,
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
  
export default styles;
