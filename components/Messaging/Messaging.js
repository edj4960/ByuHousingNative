import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

import Message from './Message';

import { getObject } from '../../util/Cache'


export default function Messaging(props) {
  const navigation = useNavigation()
  const [messages, setMessages] = React.useState([])
  
  React.useEffect(() => {
    getObject("Messages")
    .then((message_data) => {
      
      setMessages(
        message_data.map((message) => {
          if (message.type === props.inbox) {
            return <Message key={message.id} message={message}/>
          }
        })
      );
    })
  })
      
  return (
    <View style={styles.container}>
      <ScrollView>
        {messages}
      </ScrollView>
      <TouchableOpacity 
        style={styles.composeBtn}
        onPress={() => navigation.navigate('NewMessage')}>
        <FontAwesomeIcon icon={faPen} color={'white'} style={styles.icon} size={18}/>
        <Text style={styles.composeText}>Compose</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  composeBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 120,
    fontWeight: 'bold',
    position: "absolute",
    right: 18,
    bottom: 18,
    backgroundColor: '#002E5D',
    padding: 15,
    borderRadius: 25,
    textAlign: 'center',
  },
  composeText: {
    fontWeight:'bold',
    color: 'white',
    fontSize: 15
  }
});
