import * as React from 'react';
import { Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, Alert } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import { getObject, storeObject } from '../../util/Cache'

var message_data = []
getObject("Messages")
.then((result) => {
  message_data = result
})

export default function NewMessage({navigation}) {
	const [subjectValue, setSubjectValue] = React.useState('')
	const [bodyValue, setBodyValue] = React.useState('')  

	const id = message_data.reduce(function(prev, current) {
		return (prev.id > current.id) ? prev : current
	}).id + 1

	const threadId = message_data.reduce(function(prev, current) {
		return (prev.threadId > current.threadId) ? prev : current
	}).id + 1

  	React.useEffect(() => {
		navigation.setOptions({
			headerRight:() => 
			<TouchableOpacity 
				style={styles.sendBtn}
				onPress={handleSendButtonPress}>
				<FontAwesomeIcon icon={faPaperPlane} color={'white'} size={18}/>
			</TouchableOpacity>
		})
	})

	function handleSendButtonPress() {
		var dt = new Date()
		var message = {
			id: id,
			threadId: threadId,
			user: "ejones36",
			type: "sent",
			archived: "false",
			sentDate: dt.toISOString(),
			body: bodyValue,
			subject: subjectValue,
			read: true
		}

		message_data.push(message)
		storeObject("Messages", message_data)
		navigation.removeListener('beforeRemove', handleBackButtonPress)
		navigation.goBack()
	}

	React.useEffect(() => {
		navigation.addListener("beforeRemove", (e) => handleBackButtonPress(e), [navigation])
		return () => {
			navigation.removeListener('beforeRemove', handleBackButtonPress)
		}
	})
	
	function handleBackButtonPress(e) {
		if (subjectValue == "" && bodyValue == "") {
			return;
		}
		e.preventDefault();
		Alert.alert("Discard changes?", "Are you sure you want to exit? Your message will not be saved",
			[ { text: "Cancel", onPress: () => {}, style: "cancel" }, 
			{ text: "Continue", onPress: () => navigation.dispatch(e.data.action) }])
	}

  return (
    <SafeAreaView style={styles.container}>
        <TextInput
            style={styles.subject}
            value={subjectValue}
            onChangeText={text => setSubjectValue(text)}
            placeholder="Subject"></TextInput>
        
        <TextInput
            style={styles.body}
            value={bodyValue}
            onChangeText={text => setBodyValue(text)}
            multiline={true}
            placeholder="Body"></TextInput>

        <TouchableOpacity>
            <Text></Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },
  sendBtn: {
      marginRight: 20,
	  color: 'white'
  },
  subject: {
      borderBottomColor: "#888888",
      borderBottomWidth: 1,
      fontSize: 16
  },
  body: {
    borderBottomColor: "#888888",
    borderBottomWidth: 1,
    fontSize: 15,
    lineHeight: 20,
  }
});
