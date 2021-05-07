import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faReply, faArchive } from '@fortawesome/free-solid-svg-icons'

const displayDate = (dateString) => {
  let date = new Date(Date.parse(dateString))
  return date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear()
}

export default function Message(props) {
  const [bodyActive, setActive] = useState(false)
  const [read, setRead] = useState(props.message.read)

  const handleOnPress = () => {
    if (bodyActive)
      setActive(false)
    else 
      setActive(true)
    
    setRead(true)
  }
  
  return (
    <View
      style={styles.container} 
      key={props.message.id}> 
      <TouchableOpacity   
        style={styles.msgContainer}
        onPress={handleOnPress}>
        <View style={styles.top}>
          <Text style={read ? styles.subject : styles.subjectBold}>
            {props.message.subject} {bodyActive}
          </Text> 
          <Text style={styles.date, read ? null : {fontWeight: 'bold'}}>
            {displayDate(props.message.sentDate)}
          </Text>
        </View>
        <Text style={bodyActive ? styles.body : styles.bodyActive, read ? null : {fontWeight: 'bold'}} 
              numberOfLines={bodyActive ? null : 1} ellipsizeMode='tail'>
          {props.message.body}
        </Text>
      </TouchableOpacity>

      <View style={bodyActive ? styles.options : {opacity:0, height:0}}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faReply} style={styles.icon} size={18}/>
        </TouchableOpacity> 
        <TouchableOpacity>
          <FontAwesomeIcon icon={faArchive} style={styles.icon} size={18}/>
        </TouchableOpacity> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    marginLeft:   10,
    marginRight:  10,
    color: '#000000',
    fontSize: 13,
    paddingBottom: 15, 
    borderBottomColor: "#999999",
    // borderBottomColor: "#999999",
    // borderBottomWidth: 1,
    borderBottomWidth: 1
  },
  msgContainer: {
    paddingLeft:  5,
    paddingRight: 5,
    paddingTop:   15,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontWeight: "bold"
  },
  subject: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
  },
  subjectBold: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  date: {
    alignSelf: "flex-end",
    fontWeight: "bold"
  },
  body: {
    overflow: 'hidden',
  },
  bodyActive: {
    overflow: 'visible',
    flexWrap: 'wrap',
  },
  icon: {
    marginTop: 2,
    marginLeft: 15
  },
  options: {
    opacity: 1, 
    marginTop: 5,
    flexDirection: "row",
    justifyContent: 'flex-end',
    marginRight: 5,
  }
});
