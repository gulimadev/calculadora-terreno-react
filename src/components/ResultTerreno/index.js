import React from "react";
import { View, Text, TextInput, Button } from "react-native";



export default function ResultTerreno (props){
    return(
    <View>
        <Text>
            {props.ResultTerreno}
        </Text>
    <Text>
        {props.messageResultTerreno}
    </Text>
    </View>
)};