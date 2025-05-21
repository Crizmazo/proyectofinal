import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

const Historia4 = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 4.6561,        
          longitude: -74.0596,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation={true}   
        zoomEnabled={true}         
        scrollEnabled={true}      
      />
    </View>
  );
};
export default Historia4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});