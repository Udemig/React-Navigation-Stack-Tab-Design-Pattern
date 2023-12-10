import { AppColors } from "../../theme/appColors";
import { windowWidth } from "../../utils/constans";

const { StyleSheet } = require("react-native");

// define your styles
const homeScreenStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });
  
  const productItemStyles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      padding: 5,
      borderWidth: 0.5,
      borderColor: AppColors.GRAY,
      margin:5,
      width:windowWidth/2-20,
      borderRadius:5
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical:15
    },
    description: {
      fontSize: 14,
      fontWeight: '300',
      marginVertical:15,
    },
    infoContainer: {
      flex: 2,
    },
    imageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  export {homeScreenStyles,productItemStyles}