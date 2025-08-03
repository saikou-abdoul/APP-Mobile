import Ionicons from "@expo/vector-icons/Ionicons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { ActivityIndicator, Alert, TextInput, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { authfirebase } from "../config/firebaseConfig";




export default function Auth({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setIsLoading] = useState(false);

    const connexion = () => {
        if (email === "" && password === "") {
            Alert.alert("Champs vides", "Veuillez remplir les champs");
            return;
        }
        setIsLoading(true)
        signInWithEmailAndPassword(authfirebase, email, password).then(
            (userConnected) => {
               
                const user = userConnected.user;
                console.log(user);
                navigation.navigate("listProduct");
            }
        ).catch(
            (error) => {
                console.log(error.code, error.message);
            }
        ).finally(
            () => {
                setIsLoading(false)
            }
        )
    }

    const handlingSignUp = () => {
        navigation.navigate("Inscription");
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Connexion</Text>

            <View style={styles.inputContainer}>

                <Ionicons
                    name="mail-outline"
                    size={20} color="#666"
                    style={styles.icon} />

                <TextInput
                    style={styles.inputField}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email"
                    keyboardType="email-address"
                    placeholderTextColor="#999" />
            </View>

            <View style={styles.inputContainer}>
                <Ionicons
                    name="lock-closed-outline"
                    size={20} color="#666"
                    style={styles.icon} />
                <TextInput
                    style={styles.inputField}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Mot de passe"
                    secureTextEntry
                    placeholderTextColor="#999" />
            </View>

            <TouchableOpacity style={styles.button} onPress={connexion}>
                {
                    loading ? (
                        <ActivityIndicator color='white' size={20} />
                    ) : (
                        <>
                            <Ionicons
                                name="person"
                                size={20}
                                color="#fff"
                                style={styles.buttonIcon} />

                            <Text style={styles.buttonText}>
                                Se connecter </Text>
                        </>
                    )
                }
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonSecondary}
                onPress={handlingSignUp} >
                <Ionicons
                    name="person-add-outline"
                    size={20} color="#007bff"
                    style={styles.buttonIcon} />
                <Text
                    style={styles.buttonSecondaryText}>
                    S'inscrire
                </Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', padding: 24, backgroundColor:
            '#fff',
    },
    title: {
        fontSize: 28, fontWeight: 'bold', marginBottom: 32, textAlign:
            'center', color: '#333',
    },
    inputContainer: {
        flexDirection: 'row', alignItems: 'center', backgroundColor:
            '#f2f2f2', paddingHorizontal: 12, paddingVertical: 10, borderRadius:
            10, marginBottom: 16,
    },
    icon: { marginRight: 8, },
    inputField: { flex: 1, fontSize: 16, color: '#333', },
    button: {
        flexDirection: 'row', alignItems: 'center', justifyContent:
            'center', backgroundColor: '#007bff', padding: 14, borderRadius: 8, marginTop:
            8, marginBottom: 12,
    },
    buttonIcon: { marginRight: 8, },
    buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16, },
    buttonSecondary: {
        flexDirection: 'row', alignItems: 'center', justifyContent:
            'center', borderWidth: 2, borderColor: '#007bff', padding: 12, borderRadius: 8,
    },
    buttonSecondaryText: { color: '#007bff', fontWeight: 'bold', fontSize: 16, },
});





















