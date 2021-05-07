import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Contract from './Contract';
import Petition from './Petition'

export default function AccountTab(props) {
  
  const contracts = props.contracts.map((contract) => {
    return <Contract 
              key={contract.id}
              address={contract.address}
              startDate={contract.startDate}
              endDate={contract.endDate}
              aptType={contract.aptType}/>
  });

  const petitions = props.petitions.map((petition) => {
    return <Petition
              key={petition.id}
              topic={petition.topic}
              creationDate={petition.creationDate}
              reason={petition.reason}/>
  });


  return (
    <View style={styles.container}>
      <Text style={styles.secHdr}>Current Contract</Text>
      <View style={styles.secContent}>
        {contracts}
        <TouchableOpacity style={styles.btn}>
          <Text>View Past/Future Contracts</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.secHdr}>Pending Petitions</Text>      
      <View style={styles.secContent}>
        <Text style={styles.emptyText}>No Pending Petitions</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>View Completed Petitions</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.secHdr}>Current Waiting List Request</Text>      
      <View style={styles.secContent}>
        <Petition
              topic={"Family Housing"}
              creationDate={"2015-10-03T00:00:00.511Z"}
              reason={"Options: 1 Bedroom, 2 Bedroom"}/>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text>View past requests</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.secHdr}>Current Meal Plan</Text>      
      <View style={styles.secContent}>
        <Text style={styles.emptyText}>No Current Meal Plan</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>View Past Meal Plans</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    paddingTop: 12,
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
    paddingRight: 24,
    marginBottom: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingBottom: 10
  },
  topBar: {
    color: '#002E5D',
    fontSize: 18,
    fontWeight: "bold",
    margin: 10
  },
  emptyText: {
    backgroundColor: '#aaaaaa',
    color: '#444444',
    padding: 10,
    borderRadius: 10,
    fontSize: 15,
    marginTop: 4
  },
  btn: {
    marginLeft: 10,
    marginTop: 8,
    color: '#002E5D',
    textAlign: 'left'
  },
  btnText: {
    textAlign: 'left'
  }
});
