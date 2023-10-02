import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { useState } from 'react';

export default function App() {
  const [markers, setMarkers] = useState([])
  const [region, setRegion] = useState({
    latitude: 62,
    longitude: -7,
    latitudeDelta: 2,
    longitudeDelta: 2
  })

  function addMarker(data){
    const {latitude, longitude} = data.nativeEvent.coordinate
    const newMarker = {
      coordinate: {latitude, longitude},
      key: data.timeStamp,
      title: "Great place"
    }

    setMarkers([...markers, newMarker])
  }

  function onMarkerPressedText(text){
    alert(`you pressed ${text}`)
  }


  return (
    <View>
      <MapView style={styles.map}
       region={region}
       onLongPress={addMarker}>
        {markers.map(marker => (
        <Marker coordinate={marker.coordinate}
        key={marker.key}
        title={marker.title}
        onPress={() => onMarkerPressedText(marker.title)}
        />
       ))}
       </MapView>
       
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%"
  },
});
