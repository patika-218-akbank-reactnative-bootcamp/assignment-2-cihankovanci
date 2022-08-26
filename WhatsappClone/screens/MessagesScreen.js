import React, { useReducer } from "react";
import { Text, View, StyleSheet, Image, MyAppHeaderText, ScrollView } from 'react-native';

import Message from "../components/message";
import MyMessage from "../components/myMessages.";




function MessagesScreen({ route }) {
    const { itemId, otherParam, chat_name, messages1, messages2, messages3, messages4, messages5, messages6, messages7, messages8, messages9, profile } = route.params;


    return (


        <ScrollView>

            <Message Message={messages1} Username={chat_name} />
            <MyMessage Message={messages2} Username={chat_name} />
            <Message Message={messages3} Username={chat_name} />
            <MyMessage Message={messages4} Username={chat_name} />
            <Message Message={messages5} Username={chat_name} />
            <MyMessage Message={messages6} Username={chat_name} />
            <Message Message={messages7} Username={chat_name} />
            <MyMessage Message={messages8} Username={chat_name} />
            <Message Message={messages9} Username={chat_name} />

        </ScrollView>

    );
};

export default MessagesScreen;

const styles = StyleSheet.create({
    profilePhoto: {
        width: 65,
        height: 65,
        borderRadius: 50,
        alignItems: 'center',


    }
});