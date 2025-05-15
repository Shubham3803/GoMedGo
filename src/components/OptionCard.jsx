import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
// import type { PropsWithChildren } from 'react'
import Icon from "react-native-vector-icons/FontAwesome"

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
          <Icon name={icon} size={28} color='#654edf'  />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>

        <View style={styles.right}>
          {showAlert && <Text style={styles.alert}>⚠️</Text>}
          {icon !== 'phone' && (
            <Icon name="angle-right" size={30} color="#000"  />
          )}
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
    width: 50,
    height: 50,
    backgroundColor: '#c1c1c1',
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  
  textContainer: {},
  title: {
    fontSize: 20,
    fontWeight: 700,
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