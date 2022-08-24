import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';

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
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
          coordinate={{
            latitude: -12.9913412,
            longitude: -38.5165131,
          }}
        >
          <Callout tooltip onPress={() => {}}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Be Happy</Text>
            </View>
          </Callout>
        </Marker>
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
  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },
  calloutText: {
    color: '#0089a5',
    fontSize: 14,
  },
});
