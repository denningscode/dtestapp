import { Ionicons } from "@expo/vector-icons"
import { View, Text } from "react-native"


export default function SenderBubble({message}) {
    return (
        <View style={{backgroundColor: "#DCF7C5", maxWidth: "70%", alignSelf: "flex-end", paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8, flexDirection: "row", gap: 20}}>
            <Text>{message}</Text>

            <View style={{flexDirection: "row", gap: 2, marginTop: 10}}>
                <Text style={{fontSize: 10, color: "gray"}}>10:10</Text>
                <Ionicons name="checkmark-done" color="dodgerblue" size={14} />
            </View>
        </View>
    )
}