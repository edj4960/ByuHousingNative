import AsyncStorage from '@react-native-async-storage/async-storage'

module.exports.storeObject = storeObject;
module.exports.getObject = getObject;

async function storeObject(key, value) {
    try {
        const jsonValue = JSON.stringify(value)
        // console.log("Storing:", jsonValue)
        await AsyncStorage.setItem(key, jsonValue) 
        // console.log("Storing Complete!")
    } catch (e) {
        console.log("Error storing object:", e)
    }
}
    
async function getObject(key) {
    try {
        // console.log("Retrieving:", key)
        const jsonValue = await AsyncStorage.getItem(key)
        // console.log("Retrieving Complete!")
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        console.log("Error retrieving object:", e)
    }
}
