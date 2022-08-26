import React from "react";
import { Text, View, StyleSheet, FlatList, Pressable, TouchableOpacity, ScrollView } from 'react-native';

import Chats from "../components/Chats";
import chatList from "../chatList";
import VirtualizedScrollView from "../components/VirtualizedScrollView";


import Chat_data from "../Chat_data.json";
import Header from "../components/Header";
import HeaderTop from "../components/HeaderTop";
import { SafeAreaView } from "react-native-safe-area-context";




const ChatsListScreen = (props) => {

    const renderChats = ({ item }) =>
        <Chats chat={item} />;




    return (

        <SafeAreaView>
            <HeaderTop />
            <VirtualizedScrollView style={styles.container}>

                <Header />
                <TouchableOpacity >
                    <View>

                        <FlatList
                            data={Chat_data}
                            renderItem={renderChats}
                            keyExtractor={item => item.id}



                        />
                    </View>
                </TouchableOpacity>

            </VirtualizedScrollView>
        </SafeAreaView>

    );
};

export default ChatsListScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginBottom: 40,
    },
});