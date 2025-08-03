import Mapbox, {ShapeSource, LineLayer} from '@rnmapbox/maps';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { Alert, View } from 'react-native';
import type { Feature, LineString } from 'geojson';


Mapbox.setAccessToken('pk.eyJ1IjoibWRpYW5tYXJleWFoIiwiYSI6ImNtZGhhMGJzOTAxOGMyanNmZmljbmtwMmMifQ.GSjKISgKanx5Dbo0VkcFIQ');


export default function MapswhithLine() {
  const [location, setLocation] = useState(null);


  const villes = [
    { id: 'paris', name: 'Paris', coord: [2.3522, 48.8566] },
    { id: 'dakar', name: 'Dakar', coord: [-17.4439, 14.6928] },
    { id: 'newyork', name: 'New York', coord: [-74.006, 40.7128] },
    { id: 'thies', name: 'Thiès', coord: [-16.9256, 14.7910] },
    {id: 'SaintLouis', name: 'Saint Louis', coord: [-16.5087, 16.0179]}
  ];


  const handlePress = (ville) => {
    Alert.alert('Ville', `Vous avez cliqué sur ${ville.name}`);
  };


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;


      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    })();
  }, []);




  const routeGeoJSON: Feature<LineString> = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: [
        [-17.4439, 14.6928], // Dakar
        [-16.9256, 14.7910], // Thiès
      ],
    },  
  };


  const routeSaintLouisDakar: Feature<LineString> = {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: [
          [-16.9256, 14.7910], // Thiès
          [-16.5087, 16.0179], // Saint Louis
           
        ],
    },
     
  };


  return (
    <View style={{ flex: 1 }}>
      {location && (
        <Mapbox.MapView style={{ flex: 1 }}>
          <Mapbox.Camera
            zoomLevel={7}
            centerCoordinate={[-17.2, 14.75]}
          />


         
          {villes.map((ville) => (
            <Mapbox.PointAnnotation key={ville.id} id={ville.id} coordinate={ville.coord}>
              <View
                style={{
                  height: 20,
                  width: 20,
                  backgroundColor: 'blue',
                  borderRadius: 10,
                  borderColor: 'white',
                  borderWidth: 2,
                }}
                onTouchEnd={() => handlePress(ville)}
              />
            </Mapbox.PointAnnotation>
          ))}


          <Mapbox.ShapeSource id="routeLine" shape={routeGeoJSON}>
            <Mapbox.LineLayer
              id="lineLayer"
              style={{
                lineColor: 'red',
                lineWidth: 3,
              }}
            />
          </Mapbox.ShapeSource>


          <Mapbox.ShapeSource id="routeLineThiesSaintLouis" shape={routeSaintLouisDakar}>
            <Mapbox.LineLayer
              id="lineLayerTwo"
              style={{
                lineColor: 'yellow',
                lineWidth: 3,
              }}
            />
          </Mapbox.ShapeSource>


        </Mapbox.MapView>
      )}
    </View>
  );
}



