import React from "react";
import Inscription from "../components/Inscription";
import Connexion from "../components/connexion";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListProduct } from "../components/listProduct";
import { AddProduct } from "../components/AddProduct";
import { MyqrCode } from "../components/qrCode";
import { DetailProduct } from "../components/detailsProduit";
import Scanner from "../components/scanner";
import App from "../components/maps";
import maps from "../components/maps";
import Maps from "../components/maps";
import MapswhithLine from "../components/mapsItineraire";



const Stack = createNativeStackNavigator();

export default function RootStack() {
    return (
    <Stack.Navigator initialRouteName="connexion">
            <Stack.Screen 
                name="connexion" 
                component={Connexion} 
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name="Inscription" 
                component={Inscription} 
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
               name="listProduct" 
               component={ListProduct} 
               options={{ headerShown: false }} 
             />
            <Stack.Screen 
               name="AddProduct" 
               component={AddProduct} 
               options={{ headerShown: false }} 
            />
              <Stack.Screen 
               name="qrCode" 
               component={MyqrCode} 
               options={{ headerShown: false }} 
            />
                <Stack.Screen 
             name="detailProduit" 
             component={DetailProduct} 
             options={{ headerShown: false }}
            />
                 <Stack.Screen 
               name="scanner" 
               component={Maps} 
               />
                  <Stack.Screen 
                name="maps" 
                component={Scanner} 
                />
                  <Stack.Screen 
                name="mapsItineraire" 
                component={MapswhithLine} 
                />
    </Stack.Navigator>
    );
}
