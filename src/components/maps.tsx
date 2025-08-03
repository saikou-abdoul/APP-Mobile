import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Mapbox from '@rnmapbox/maps';
import * as Location from 'expo-location';

Mapbox.setAccessToken('pk.eyJ1IjoibWRpYW5tYXJleWFoIiwiYSI6ImNtZGhhMGJzOTAxOGMyanNmZmljbmtwMmMifQ.GSjKISgKanx5Dbo0VkcFIQ');

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: 'tomato'
  },
  map: {
    flex: 1
  }
});

export default function Maps() {
//  ajout 
const [location,setLocation] = useState(null);
/*
useEffect(
  () => {
    const {status} = Location.requestForegroundPermissionsAsync();
  }
)*/

  return (
      <View style={styles.page}>
        <View style={styles.container}>
          <Mapbox.MapView style={styles.map} />
        </View>
      </View>
    );

}