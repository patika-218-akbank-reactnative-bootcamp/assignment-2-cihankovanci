import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatsListScreen from "./screens/ChatsListScreen";
import MessagesScreen from "./screens/MessagesScreen";

import Chats from "./components/Chats";


const Stack = createNativeStackNavigator();

export default function App() {


  return (


    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="ChatsList" component={ChatsListScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} options={({ route }) => ({ title: route.params.chat_name })} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}