import { Ionicons } from "@expo/vector-icons"
import { View, Text } from "react-native"


export default function UserBubble({ message }) {
    return (
        <View style={{backgroundColor: "#fff", maxWidth: "70%", alignSelf: "flex-start", paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8, flexDirection: "row", gap: 20}}>
            <Text style={{maxWidth: "80%"}}>{message}</Text>
            <View style={{flexDirection: "row", gap: 2, marginTop: 10}}>
                <Text style={{fontSize: 10, color: "gray"}}>10:10</Text>
            </View>
        </View>
    )
}