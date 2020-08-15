import React from 'react'
import { Text, View } from 'react-native'

export default function HomeScreen(props) {
    const { extraData } = props;
    console.log('Home Screen: ', { extraData });
    return (
        <View>
            <Text>Home Screen, Welcome {extraData.fullName}</Text>
        </View>
    )
}