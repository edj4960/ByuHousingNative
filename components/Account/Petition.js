import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const displayDate = (dateString) => {
  let date = new Date(Date.parse(dateString))
  return date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear()
}

export default function Petition(props) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.topText}>
          {props.topic}
        </Text> 
        <Text style={styles.topText}>
          {displayDate(props.creationDate)}
        </Text> 
      </View>
      <Text style={styles.addressText}>
        {props.reason}
      </Text>
    </View>
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
    width: 270,
    fontSize: 15,
    color: 'white'
  }
});
