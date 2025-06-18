import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
// import type { PropsWithChildren } from 'react'
import Icon from "react-native-vector-icons/FontAwesome"
// import Entypo from 'react-native-vector-icons/Entypo';

// type Icon = PropsWithChildren<{
//   icon: string;
//   title: string;
//   subtitle: string;
//   showAlert?: boolean;
//   onPress?: () => void;

// }>

export default function OptionCard({ icon, title, subtitle, showAlert, onPress }) {
  return (

    <TouchableOpacity style={styles.card} onPress={onPress}>
        

        <View style={styles.iconBox}>
          <Icon name={icon} size={25} color='#007299'  />
          
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>



          
        </View>

        <View style={styles.right}>
          {showAlert && <Text style={styles.alert}>⚠️</Text>}
          { <Icon name="angle-right" size={25} color="#000"  />}
        </View>

   
      </TouchableOpacity>


  )
}

const styles = StyleSheet.create({

  card: {
    flex: 1,
    flexDirection: "row",
    gap: 12,
    padding: 15,  
    alignItems: 'center', 
  },
  iconBox: {
    width: 40,
    height: 40,
    // backgroundColor: '#e5e5e5',
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  
  textContainer: {},
  title: {
    fontSize: 16,
    fontWeight: 400,
  },
  subtitle: {
    fontSize: 15,

  },
  right: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between"

  },
  alert: {
    fontSize: 20
  },

})