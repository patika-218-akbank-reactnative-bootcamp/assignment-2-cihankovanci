import React, { useState, useEffect } from "react";

import { View, StyleSheet, Button, Image, ScrollView, SafeAreaView, TextInput } from 'react-native';

import Message from "../components/message";
import MyMessage from "../components/myMessages.";

import { useNavigation } from "@react-navigation/native";


function MessagesScreen({ route }) {
    const { chat_name, messages1, messages2, messages3, messages4, messages5, messages6, messages7, messages8, messages9 } = route.params;

    const [text, onChangeText] = React.useState("Type...");

    const nav = useNavigation();
    useEffect(() => {
        nav.setOptions({
            headerRight: () => <Button title="Call" onPress={() => alert('Calling...')} />,
        });
    })

    return (
        <SafeAreaView>

            <ScrollView>

                <Message Message={messages1} Username={chat_name} />
                <MyMessage Message={messages2} />
                <Message Message={messages3} />
                <MyMessage Message={messages4} />
                <Message Message={messages5} />
                <MyMessage Message={messages6} />
                <Message Message={messages7} />
                <MyMessage Message={messages8} />
                <Message Message={messages9} />

                <View style={styles.sendComponent}>

                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Type..."

                    />

                    <Image style={styles.sendButton} />
                </View>
            </ScrollView>

        </SafeAreaView>

    );
};

export default MessagesScreen;

const styles = StyleSheet.create({
    profilePhoto: {
        width: 65,
        height: 65,
        borderRadius: 50,
        alignItems: 'center',
    },
    input: {
        height: 40,
        width: '80%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
    },
    sendButton: {
        height: 40,
        width: 40,
        borderWidth: 5,
        borderRadius: 8,
        paddingBottom: 30,
        marginVertical: 10,
        backgroundColor: 'rgb(55, 110, 255)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendComponent: {
        flexDirection: 'row',
        paddingRight: 10,
    }
});