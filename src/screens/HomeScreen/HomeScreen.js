import React, { useState, } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Card, Title, Paragraph, IconButton, Colors } from 'react-native-paper'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import Toggle from 'react-native-toggle-element'
import HotToggle from '../../components/ToggleButton/ToggleButton';

export default function HomeScreen(props) {
    const [toggleValue, setToggleValue] = useState(false);
    const { extraData } = props;
    console.log('Home Screen: ', { extraData });
    return (
        <View style={styles.container}>

            <View style={styles.content} >
                <HotToggle />
                <Card style={styles.card}>
                    <Card.Cover source={{ uri: 'https://picsum.photos/id/237/400/600' }} />
                    <Card.Content>
                        <Title>Puppy Eyes</Title>
                        <Paragraph>Hes a good Boi</Paragraph>
                    </Card.Content>
                    
                </Card>
                <View style={styles.buttons}>
                    <IconButton icon="close" size={50} color="red" onPress={() => console.log('not so much')}/>
                    <IconButton icon="heart" size={50} color="green" onPress={() => console.log('I <3 you')}/>
                </View>
            </View>
            <View style={styles.bottom}>
                <BottomTabBar />
            </View>
        </View>
    )
}

const moveToBottom = (component) => {
    <View style={styles.bottom}>
        {component}
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 6,
        alignItems: 'center',
    },
    content: {
        flex: 1,
        flexGrow: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    card: {
        alignItems: "stretch",
        width: 350,
        marginTop: 20,
    },
    buttons: {
        flexDirection: 'row',

    },
    bottom: {
        flex: 1,
        flexGrow: 1,
        justifyContent: 'flex-end',
        marginBottom: 18,
    },
})

