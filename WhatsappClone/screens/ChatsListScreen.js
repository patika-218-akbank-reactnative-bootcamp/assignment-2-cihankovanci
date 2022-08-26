import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import Chats from '../components/Chats';

import VirtualizedScrollView from '../components/VirtualizedScrollView';

import Chat_data from '../Chat_data.json';
import Header from '../components/Header';
import HeaderTop from '../components/HeaderTop';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChatsListScreen = props => {
    const renderChats = ({ item }) => <Chats chat={item} />;
    /*I had an error due to using ScrollView component so i created another custom component */
    return (
        <SafeAreaView>
            <HeaderTop />
            <VirtualizedScrollView style={styles.container}>
                <Header />
                <TouchableOpacity>
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
