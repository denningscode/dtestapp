import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ArrowLeft2, Call, Camera } from "iconsax-react-native";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import SenderBubble from "../../components/SenderBubble";
import UserBubble from "../../components/UserBubble";

export default function Chats() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar backgroundColor="#fff" style="dark" />
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, paddingVertical: 20, backgroundColor: "#fff"}}>

                <View style={{flexDirection: "row", gap: 12, alignItems: "center",}}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <ArrowLeft2 size={24} color="dodgerblue"  />
                    </TouchableOpacity>

                    <View style={{flexDirection: "row", gap: 10, alignItems: "center"}}>
                        <View style={{width: 40, height: 40, borderRadius: 100, backgroundColor: "#000"}}>
                            <Image style={{width: 40, height: 40, borderRadius: 100}} source={require("../../assets/images/user2.jpg")} />
                        </View>
                        <View>
                            <Text style={{fontWeight: 600}}>Elena Peters</Text>
                            <Text style={{fontSize: 12, color: "gray"}}>tap here for contact info</Text>
                        </View>
                    </View>
                </View>
              
                <View style={{flexDirection: "row", gap: 15, alignItems: "center"}}>
                    <TouchableOpacity>
                        <Ionicons name="videocam-outline" size={24} color="dodgerblue" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="call-outline" size={24} color="dodgerblue" />
                    </TouchableOpacity>
                </View>

            </View>

            <ImageBackground source={require("../../assets/images/chat.jpg")} style={{flex: 1, paddingVertical: 20, paddingHorizontal: 10, gap: 5}}>
                <SenderBubble message="Good morning!" />
                <SenderBubble message="How was your night" />
                <UserBubble message="It was okay." />
                <UserBubble message="How was yours?" />
                <UserBubble message="Are you texting for the job?" />
                <SenderBubble message="Yes!!!" />
                <UserBubble message="Nice you are good" />
                <UserBubble message="We will be very glad to have you work with us!" />
                <SenderBubble message="Thank you" />
                <SenderBubble message="👍 " />
            </ImageBackground>

            <View style={{paddingHorizontal: 20, paddingVertical: 12, borderTopWidth: 1, alignItems: "center", gap: 10, backgroundColor: "#fff", borderColor: "#f1f1f1", flexDirection: "row"}}>
                <TouchableOpacity>
                    <Ionicons name="add" size={24} color="dodgerblue" />
                </TouchableOpacity>
                <TextInput style={{padding: 8, borderRadius: 100, backgroundColor: "#fff", borderWidth: 1, borderColor: "#f1f1f1", flex: 1}} />

                <View style={{flexDirection: "row", gap: 10, alignItems: "center"}}>
                    <TouchableOpacity>
                        <Ionicons name="camera-outline" size={24} color="dodgerblue" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="mic-outline" size={24} color="dodgerblue" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}