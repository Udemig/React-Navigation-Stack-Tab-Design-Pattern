import { AppColors } from "../../theme/appColors";

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
      flex: 1,
      backgroundColor: '#fff',
      padding: 5,
      borderWidth: 0.5,
      borderColor: AppColors.GRAY,
      flexDirection: 'row',
      marginVertical:5
    },
    title: {
      fontSize: 16,
      fontWeight: '500',
    },
    description: {
      fontSize: 14,
      fontWeight: '300',
      marginTop: 5,
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