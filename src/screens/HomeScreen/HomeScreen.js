import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';

export default function HomeScreen(props) {
    const { extraData } = props;
    console.log('Home Screen: ', { extraData });
    return (
        <View>
            <Text>Home Screen, Welcome {extraData.fullName}</Text>
            <BottomTabBar/>
        </View>
    )
}

