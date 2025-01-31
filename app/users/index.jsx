import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ArrowRight2 } from "iconsax-react-native";
import { useRef, useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import usersAndMessageDemo from "../../utils/usersAndMessageDemo";
import { Modalize } from 'react-native-modalize';


export default function Users() {

    const modalizeRef = useRef(null);

    const onOpen = () => {
        setTimeout(() => modalizeRef.current?.open(), 0);
    };

    const onClose = () => {
        modalizeRef.current?.close();
    };

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#f1f1f1"}}>
            <View style={{padding: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#f1f1f1"}}>
                <TouchableOpacity>
                    <Text style={{color: "dodgerblue", fontWeight: 500, fontSize: 15}}>Edit</Text>
                </TouchableOpacity>
                <Text style={{textAlign: "center", fontSize: 16, fontWeight: 600}}>Chats</Text>
                <TouchableOpacity>
                    <Ionicons name="create-outline" size={24} color="dodgerblue" />
                </TouchableOpacity>
            </View>

            <View style={{flex: 1, backgroundColor: "#fff"}}>
                <View style={{paddingVertical: 10, paddingHorizontal: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 0.5, borderColor: "#f1f1f1"}}>
                    <TouchableOpacity>
                        <Text style={{color: "dodgerblue", fontWeight: 400, fontSize: 15}}>Broadcast List</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{color: "dodgerblue", fontWeight: 400, fontSize: 15}}>New Group</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView>

                    {
                        usersAndMessageDemo.map(item => (
                            <UserCard 
                                message={item.message}
                                messageType={item.messageType}
                                name={item.name}
                                key={item.id}
                                dp={item.dp}
                                onLongPress={onOpen}
                                onPress={() => router.push("chat")}
                            />
                        ))
                    }
                </ScrollView>
            </View>

            <Modalize handleStyle={{ display: "none" }} snapPoint={450} modalStyle={{backgroundColor: "transparent"}}  ref={modalizeRef}>
                <View style={{backgroundColor:"#fff", marginHorizontal: 20, borderRadius: 10,}}>
                    <TouchableOpacity style={{padding: 20, borderBottomWidth: 0.5, borderColor: "#f1f1f1", justifyContent: "center", alignItems: "center"}}>
                        <Text style={{color: "dodgerblue", fontSize: 15}}>Mute</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding: 20, borderBottomWidth: 0.5, borderColor: "#f1f1f1", justifyContent: "center", alignItems: "center"}}>
                        <Text style={{color: "dodgerblue", fontSize: 15}}>Contact Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding: 20, borderBottomWidth: 0.5, borderColor: "#f1f1f1", justifyContent: "center", alignItems: "center"}}>
                        <Text style={{color: "dodgerblue", fontSize: 15}}>Export Chat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding: 20, borderBottomWidth: 0.5, borderColor: "#f1f1f1", justifyContent: "center", alignItems: "center"}}>
                        <Text style={{color: "dodgerblue", fontSize: 15}}>Clear Chat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding: 20, justifyContent: "center", alignItems: "center"}}>
                        <Text style={{color: "#d8392f", fontSize: 15}}>Delete Chat</Text>
                    </TouchableOpacity>
                </View>

                <View style={{backgroundColor:"#fff", marginHorizontal: 20, marginTop: 20, borderRadius: 10,}}>
                    <TouchableOpacity onPress={onClose} style={{padding: 20, justifyContent: "center", alignItems: "center"}}>
                        <Text style={{color: "dodgerblue", fontWeight: 500, fontSize: 15}}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </Modalize>
        </SafeAreaView>

    )
}

function UserCard({ messageType, message, name, dp, onLongPress, onPress }) {
    return (
        <TouchableOpacity 
        onPress={onPress}   
        onLongPress={(event) => {
            event.persist();
            onLongPress();
        }} 
        activeOpacity={0.8} style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, paddingVertical: 10, borderTopWidth: 0.5, borderBottomWidth: 0.5, borderColor: "#f1f1f1"}}>
            <View style={{flexDirection: "row", gap: 10, alignItems: "center"}}>
                <View style={{width: 55, height: 55, borderRadius: 100, backgroundColor: "#000"}}>
                    <Image style={{width: 55, height: 55, borderRadius: 100}} source={dp} />
                </View>
                <View style={{gap: 8, paddingRight: 16, flex: 1}}>
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <Text style={{fontWeight: 600, fontSize: 14}}>{name}</Text>
                        <Text style={{fontSize: 12, color: "gray"}}>20/09/23</Text>
                    </View>

                    <View style={{flexDirection: "row", alignItems: "center", gap: 4}}>
                        {
                            messageType === "message" ?
                            <Ionicons name="checkmark-done" size={16} color="dodgerblue" /> :
                            messageType === "vn" ?
                            <Ionicons name="mic" color="#00a65a" size={16} /> :
                            null
                        }
                        <Text style={{fontSize: 13, color: "gray"}}>{message}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity>
                <ArrowRight2 size={16} color="lightgray" />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}