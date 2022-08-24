import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import mapMarker from './src/images/map-marker.png';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -12.9913412,
          longitude: -38.5165131,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        style={styles.map}
      >
        <Marker
          icon={mapMarker}
          coordinate={{
            latitude: -12.9913412,
            longitude: -38.5165131,
          }}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
