import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

export default function ContractingInfo() {
  const [showBookmark, setShow] = useState(true)

  const handleOnPress = () => {
    if (showBookmark)
      setShow(false)
    else 
      setShow(true)
    
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.hdr}>Family Housing Waiting List</Text>
      <View style={styles.secContainer}>
        <TouchableOpacity style={styles.secText}>
          <Text>The waiting list for Family Housing is for students who would like a dwelling that is not currently available</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secText}>
          <Text>As dwellings become available, Campus Accommodations will offer them to students on the waiting list</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secText}>
          <Text>Rent charges begin as of the availability date of the dwelling</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secText} onPress={handleOnPress}>
          <Text style={styles.text}>Students have four hours from the time they receive an offer notification to accept the dwelling on hold and complete Part 1 of the agreement. Upon completing Part 1, the student's spouse/fiance has 24 hours to complete Part 2.</Text>
				  {showBookmark ? <FontAwesomeIcon icon={faBookmark} color={"#002E5D"} size={18}/> : <View></View>}
        </TouchableOpacity>
        <TouchableOpacity style={styles.secText}>
          <Text>Holds on dwellings will expire if they are not contracted for in the allotted time. Students cannot contract for an expired offer.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secText}>
          <Text>Students are removed from the waiting list when their hold expires. Students with expired holds must renew their place on the waiting list in order to be considered for additional openings (there is no limit to the number of times students can renew their place on the waiting list).</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.hdr}>Updating Waiting List Preferences</Text>
      <View style={styles.secContainer}>
        <TouchableOpacity style={styles.secText}>
          <Text>Students may update their preferences by resubmitting a Waiting List Request with updated preferences.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secText}>
          <Text>Students who resubmit their Waiting List Request retain the priority of their first submitted Waiting List Request within the past six months.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secText}>
          <Text>Waiting List Requests which have been submitted within six months of a previous Waiting List Request retain the same six-month waiting list termination date.</Text>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 12,
    paddingRight: 12
  },
  hdr: {
    color: "#002E5D",
    textAlign: 'left',
    fontSize: 20,
    marginBottom: 15,
    marginTop: 15
  },
  secText: {
    // marginBottom: 2.5,
    // marginTop: 2.5,
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 5,
    paddingRight: 18,
    borderTopColor: 'grey',
    borderBottomColor: 'grey',
    borderTopWidth: 1,
    // borderBottomWidth: 1,
    flexDirection: 'row'
  },
  text: {
    paddingRight: 5
  }

});
