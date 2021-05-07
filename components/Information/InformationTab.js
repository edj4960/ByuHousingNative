import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-elements'

const LinkCard = (props) => {
  const navigation = useNavigation()

  return  <TouchableOpacity 
    style={styles.listEl}
    onPress={() => navigation.navigate('ContractingInfo')}>
      <Icon
          iconStyle={styles.icon}
          containerStyle={styles.iconContainer}
          name={props.icon}
          type='font-awesome-5'
          color='#002E5D' 
        />
      <Text style={styles.sqrText}>{props.title}</Text>
    </TouchableOpacity>  
}

export default function InformationTab() {
  const navigation = useNavigation()
  return (
    <View>
      <Text style={styles.hdr}>Info Tabs</Text>
      <View style={styles.container}>
        <LinkCard title={"Contracting"} pageName={"ContractingInfo"} icon={"file-contract"}  />
        <LinkCard title={"Meal Plans"} pageName={"MealPlansInfo"} icon={"utensils"} />
        <LinkCard title={"Waiting List"} pageName={"WaitingListInfo"} icon={'list-ul'} />
        <LinkCard title={"Rates"} pageName={"RatesInfo"} icon={'dollar-sign'} />
        <LinkCard title={"Moving In"} pageName={"MovingInInfo"} icon={'suitcase'} />
      </View>
      <Text style={styles.hdr}>Saved Info</Text>
      <TouchableOpacity style={styles.listEl}>
         <Text style={{fontWeight: "bold"}}>Students have four hours from the time they receive an offer notification to accept the dwelling on hold and complete Part 1 of the agreement. Upon completing Part 1, the student's spouse/fiance has 24 hours to complete Part 2. - Waiting List</Text>
      </TouchableOpacity>
    </View>

  );
}


const styles = StyleSheet.create({
  hdr: {
    color: 'gray',
    fontWeight: 'bold',
    paddingLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: .75,
    marginBottom: 5
  },
  listEl: {
    width: '100%',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    padding: 5,
    paddingLeft: 15,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    // backgroundColor: '#002E5D',
  },
  sqrText: {
    // color: 'white',
    color: 'black',
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: "auto"
  },
  iconContainer: {
    width: 50,
  },
  icon: {
    // marginTop: 15,
    fontSize: 30,
    // backgroundColor: 'blue',
    textAlign: 'center',
    marginRight: 10,
    // width: 10,
    alignSelf: 'center'
  },
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginBottom: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
  },
  secHdr: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 20,
    width: '100%',
    marginTop: 10,
  },
  secHdr2: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 18,
    width: '100%',
    marginTop: 5,
    marginBottom: 0,
    color: 'grey'
  },
  secContent: {
    width: '100%',
    paddingLeft:  18,
    paddingRight: 18
  },
  topBar: {
    color: '#002E5D',
    fontSize: 18,
    fontWeight: "bold",
    margin: 10
  },
  btn: {
    marginLeft: 5,
    marginTop: 8,
    color: '#002E5D'
  }
});
