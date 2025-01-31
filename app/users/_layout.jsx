import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Call, Camera, Messages, Setting2, Status } from "iconsax-react-native";

export default function _Layout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="status/index" options={{
                title: "Status",
                tabBarIcon: ({ focused }) => <Status variant={focused ? "Bold" : "Outline"} color={focused ? "dodgerblue" : "gray"} />
            }} />
            <Tabs.Screen name="calls/index" options={{
                title: "Calls",
                tabBarIcon: ({ focused }) => <Call variant={focused ? "Bold" : "Outline"} color={focused ? "dodgerblue" : "gray"} />
            }} />
            <Tabs.Screen name="camera/index" options={{
                title: "Camera",
                tabBarIcon: ({ focused }) => <Camera variant={focused ? "Bold" : "Outline"} color={focused ? "dodgerblue" : "gray"} />
            }} />
            <Tabs.Screen name="index" options={{
                title: "Chats",
                tabBarIcon: ({ focused }) => <Messages variant={focused ? "Bold" : "Outline"} color={focused ? "dodgerblue" : "gray"} />
            }} />
            <Tabs.Screen name="settings/index" options={{
                title: "Settings",
                tabBarIcon: ({ focused }) => <Setting2 variant={focused ? "Bold" : "Outline"} color={focused ? "dodgerblue" : "gray"} />
            }} />
        </Tabs>
    )
}