import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar"
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

enableScreens();

export default function _Layout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar style="dark" backgroundColor="#f1f1f1" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="users" />
        <Stack.Screen name="chat/index" />
      </Stack>
    </GestureHandlerRootView>
  )
}