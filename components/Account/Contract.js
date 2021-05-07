import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Touchable } from 'react-native';

const displayDate = (dateString) => {
  let date = new Date(Date.parse(dateString))
  return date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear()
}

export default function Contract(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.topText}>
          {props.aptType}
        </Text>
        <Text style={styles.topText}>
          {displayDate(props.startDate)} - {displayDate(props.endDate)}
        </Text>
      </View> 
      <Text style={styles.addressText}>
        {props.address}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#002E5D',
    width: '100%',
    marginTop: 5,
    borderRadius: 15,
    paddingTop: 8,
    color: '#919191'
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 6,
    
  },
  topText: {
    color: 'white',
    fontSize: 13,

  },
  addressText: {
    fontWeight: "bold",
    width: 200,
    fontSize: 15,
    color: 'white'
  }
});
