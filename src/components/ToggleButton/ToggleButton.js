
import React, { useState, } from 'react'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Toggle from 'react-native-toggle-element'

export default function HotToggle(props) {
    const [toggleValue, setToggleValue] = useState(true);
    const { extraData } = props;
    console.log('Home Screen: ', { extraData });
    return (
        <Toggle value={toggleValue} onPress={(val) => setToggleValue(val)}
            thumbActiveComponent={
                <Icon name="star-face" size={40} fill={'#3BD2B5'} color="white" />
            }
            thumbInActiveComponent={
                <Icon name="fire" size={40} fill={'#03452C'} color="coral"/>
            }
            thumbButton={{
                activeBackgroundColor: '#959797',
                inActiveBackgroundColor: '#959797',
              }}
            trackBar={{
                activeBackgroundColor: '#9ee3fb',
                inActiveBackgroundColor: '#3c4145',
                borderActiveColor: '#86c3d7',
                borderInActiveColor: '#1c1c1c',
                borderWidth: 5,
                width: 100,
            }} />
    )
}