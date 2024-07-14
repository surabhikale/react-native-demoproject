

import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

const CustomButton = ({ onPress, title  }) => { 

  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 5,
        backgroundColor: '#4f9ce9',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
      },
      appButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase',
      }
});
export default CustomButton;