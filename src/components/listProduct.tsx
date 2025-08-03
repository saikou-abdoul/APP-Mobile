import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getAllProduct } from "../services/productService";


export const ListProduct = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);


    const getUsersData = async () => {
        setLoading(true);
        try {
            const data = await getAllProduct();
            setProducts(data);
            setLoading(false);
        }
        catch (error) {
            console.log(error);
            setLoading(false);
        }
    };


    useEffect(() => {


        getUsersData().then(r => console.log(r, 'appelle')).catch(e => console.log(e.code, e.message));
    }, []);


    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.title}>{item.designation}</Text>
            <Text style={styles.detail}>Categorie : {item.categorie}</Text>
            <Text style={styles.detail}>Quantité : {item.quantite}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('detailProduit', { id: item.id })}>
                <Text>Voir détails</Text>
            </TouchableOpacity>
        </View>
    );


    if (loading) return <ActivityIndicator size="large" color="#007bff" style={{ marginTop: 30 }} />;


    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('AddProduct')}
            >
                <Text style={styles.addButtonText}>+ Ajouter un produit</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('qrCode')}
            >
                <Text style={styles.addButtonText}>Voir le qrCode</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('scanner')}
            >
                <Text style={styles.addButtonText}>Veiller Scanner</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('mapsItineraire')}
            >
                <Text style={styles.addButtonText}>la carte</Text>
            </TouchableOpacity>

            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    list: { padding: 16, },
    card: { backgroundColor: '#f9f9f9', padding: 16, borderRadius: 10, marginBottom: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 2, },
    title: { fontSize: 18, fontWeight: 'bold', marginBottom: 4, },
    detail: { fontSize: 14, color: '#555', },
    addButton: { backgroundColor: '#2196F3', padding: 12, margin: 10, borderRadius: 8, alignItems: 'center', },
    addButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold', },
});
