import React, { useReducer } from "react";
import { Text, View, StyleSheet, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function MessagesScreen({ route }) {
    const { itemId, otherParam, chat_name, messages1, messages2, messages3, profile } = route.params;


    return (
        <View>
            <Text>Messages screens </Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>

            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            <Text>{chat_name}</Text>
            <Text>{messages1}</Text>
            <Text>{messages2}</Text>
            <Text>{messages3}</Text>
            <Image style={styles.profilePhoto} source={{ uri: profile }} />

        </View>
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