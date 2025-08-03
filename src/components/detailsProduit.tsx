import { RouteProp, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, View, Text, StyleSheet  } from "react-native";
import { getProductById } from "../services/productService";
import QRCode from "react-native-qrcode-svg";


type ProductDetailRouteParams = {
  id: string;
};


export const DetailProduct = () => {


    const route = useRoute<RouteProp<Record<string, ProductDetailRouteParams>, string>>();
    const { id } = route.params;


    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {


        const fetchProduct = async () => {
            try {
                const result = await getProductById(id);
                setProduct(result);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };


        fetchProduct();
    }, [id]);


    if (loading) {
        return <ActivityIndicator size="large" color="#007bff" style={{ marginTop: 30 }} />;
    }


    if (!product) {
        return (
        <View style={styles.container}>
            <Text style={styles.notFound}>Produit introuvable</Text>
        </View>
        );
    }
    // conversion de l'objet en Json
const ProductData= JSON.stringify(product)
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>{product.designation}</Text>
                <Text style={styles.detail}>Catégorie : {product.categorie}</Text>
                <Text style={styles.detail}>Quantité : {product.quantite}</Text>
            </View>
             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
               <QRCode value={ProductData}  size={200} />
          </View>
        </View>
    );
};


const styles = StyleSheet.create({
  container:  {flex: 1,padding: 16,},
  notFound: { fontSize: 16, textAlign: 'center', marginTop: 20,color: 'red',},
  card: { backgroundColor: '#f9f9f9', padding: 16, borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2,elevation: 2,},
  title: {fontSize: 20, fontWeight: 'bold', marginBottom: 8, },
  detail: { fontSize: 16, color: '#555',marginBottom: 4,},
});
