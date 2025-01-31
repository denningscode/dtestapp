import { router } from "expo-router";
import { ArrowRight2 } from "iconsax-react-native";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Auth() {

    const [isButtonActive, setIsButtonActive] = useState(false)

    const [phone, setPhone] = useState("")

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#f1f1f1"}}>
            <View style={{paddingVertical: 20, flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: "#f1f1f1"}}>
                <Text style={{textAlign: "center", fontSize: 16, fontWeight: 600}}>Phone number</Text>

                <TouchableOpacity onPress={() => router.push("users")} style={{position: "absolute", right: 10}}>
                    <Text style={{color: phone.length > 0 ? "dodgerblue" : "gray", fontSize: 14, fontWeight: 500}}>Done</Text>
                </TouchableOpacity>
            </View>

            <View style={{flex: 1, backgroundColor: "#fff"}}>
                <View style={{paddingVertical: 20, paddingHorizontal: 60}}>
                    <Text style={{textAlign: "center"}}>Please confirm your country code and enter your phone number</Text>
                </View>
                <View style={{padding: 10, borderTopWidth: 0.5,  borderBottomWidth: 0.5, borderColor: "lightgray", flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={{color: "dodgerblue"}}>United States</Text>

                    <ArrowRight2 size={16} color="gray" />
                </View>
                <View style={{ borderBottomWidth: 0.5, borderColor: "lightgray", flexDirection: "row", gap: 10}}>
                    <View style={{paddingHorizontal: 10, paddingHorizontal: 10, borderRightWidth: 0.5, borderColor: "lightgray", justifyContent: "center", alignItems: "center"}}>
                        <Text>+1</Text>
                    </View>
              
                    <TextInput onChangeText={value => setPhone(value)} keyboardType="number-pad" placeholder="Phone number" style={{padding: 10, flex: 1}} />
                </View>
            </View>
        </SafeAreaView>
    )
}