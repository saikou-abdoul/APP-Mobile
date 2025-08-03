import {ActivityIndicator, Alert, ScrollView, StyleSheet, Text, TextInput, 
TouchableOpacity, View} from "react-native"; 
import {Ionicons} from "@expo/vector-icons"; 
import { createProduct } from "../services/productService"; 
import { useState } from "react"; 
 
export const AddProduct = ({navigation}) => { 
 
    const [loading, setLoading] = useState(false); 
    const [categorie, setCategorie] = useState(""); 
    const [designation, setDesignation] = useState(""); 
    const [quantite, setQuantite] = useState(0); 
 
    const handleAddProduct = () => { 
        setLoading(true); 
        createProduct({designation: designation, quantite: quantite, categorie: 
            categorie}).then((product) => { 
            Alert.alert("Produit ajouté avec success!"); 
            setLoading(false); 
            console.log(product); 
            navigation.navigate("ListProduct");
        }).catch((error) => { 
            console.log(error.code,error.message); 
            setLoading(false); 
        }) 
    } 
    return ( 
        <View style={styles.container}> 
            <ScrollView> 
                <Text style={styles.title}>Ajout d'un produit</Text> 
 
                <LabelledInput 
                    icon="text-outline" 
                    label="Designation" 
                    value={designation} 
                    onChangeText={setDesignation} 
                    placeholder="Ex: Ordinateur" 
                /> 
 
                <LabelledInput 
                    icon="text-outline" 
                    label="Categorie" 
                    value={categorie} 
                    onChangeText={setCategorie} 
                    placeholder="Ex: Fournitures de bureaux"
                                    /> 
 
                <LabelledInput 
                    icon="text-outline" 
                    label="Quantite" 
                    value={quantite} 
                    onChangeText={setQuantite} 
                    placeholder="0" 
                /> 
 
                <TouchableOpacity style={styles.button} 
onPress={handleAddProduct}> 
                    {loading ? ( 
                        <ActivityIndicator color="white" size={20} /> 
                    ) : ( 
                        <> 
                            <Ionicons name="add-circle-outline" size={20} 
color="#fff" style={styles.buttonIcon} /> 
                            <Text style={styles.buttonText}>Ajouter le 
produit</Text> 
                        </> 
                    )} 
                </TouchableOpacity> 
            </ScrollView> 
        </View> 
    ) 
} 
 
const LabelledInput = ({ icon, label, value, onChangeText, placeholder }) => ( 
    <View style={styles.inputGroup}> 
        <Text style={styles.inputLabel}>{label}</Text> 
        <View style={styles.inputContainer}> 
            <Ionicons name={icon} size={20} color="#666" style={styles.icon} /> 
            <TextInput 
                style={styles.inputField} 
                value={value} 
                onChangeText={onChangeText} 
                placeholder={placeholder} 
                placeholderTextColor="#999" 
                keyboardType="email-address" 
            /> 
        </View> 
    </View> 
); 
 
const styles = StyleSheet.create({ 
    container: { flex: 1, padding: 24, backgroundColor: '#fff' }, 
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 24, textAlign: 
'center', color: '#333' }, 
       inputGroup: { marginBottom: 16 }, 
    inputLabel: { marginBottom: 6, fontSize: 16, color: '#444', fontWeight: '500' 
}, 
    inputContainer: {flexDirection: 'row', alignItems: 'center', backgroundColor: 
'#f2f2f2', paddingHorizontal: 12, paddingVertical: 10, borderRadius: 10,}, 
    icon: { marginRight: 8 }, 
    inputField: { flex: 1, fontSize: 16, color: '#333' }, 
    button: {flexDirection: 'row', alignItems: 'center', justifyContent: 
'center', backgroundColor: '#007bff', padding: 14, borderRadius: 8, marginTop: 
12,}, 
    buttonIcon: { marginRight: 8 }, 
    buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }, 
}); 
