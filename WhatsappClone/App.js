import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatsScreen from "./screens/ChatsScreen";
import MessagesScreen from "./screens/MessagesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>

      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Chats" component={ChatsScreen} />
          <Stack.Screen name="Messages" component={MessagesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}