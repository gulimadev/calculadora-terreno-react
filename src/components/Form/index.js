import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultTerreno from "../ResultTerreno";



export default function Form (){

    const[frente, setFrente] = useState(null)
    const[fundo, setFundo] = useState(null)
    const[esquerda, setEsquerda] = useState(null)
    const[direita, setDireita] = useState(null)
    const[textButton, setTextButton] = useState("Calcular")
    const[messageTerreno, setMessageTerreno] = useState("preencha todos os campos")
    function terrenoCalculador(){
        return setMetrosQuadrados((
            ((frente + fundo) / 2 ) * ((esquerda + direita) / 2)
        )).toFixed(2)
    }
    function validadorCalculador(){
        if (frente != null && fundo != null && esquerda != null && direita != null){
            terrenoCalculador()
            setMessageTerreno("Seu Terreno tem: ")
            setTextButton("Calcular Novamente")
        } 
    }

    return(
    <View>
        <View>
        <Text>Calculadora Terreno 1.0</Text>
        <Text>Frente</Text>
        <TextInput
            onChangeText={setFrente}
            value={frente}
            placeholder="10.00"
            keyboardType="numeric"
            >
                </TextInput>
        <Text>Fundo</Text>
        <TextInput
        onChangeText={setFundo}
        value={fundo}
        placeholder="10.00"
        keyboardType="numeric"
        ></TextInput>
        <Text>Esquerda</Text>
        <TextInput
        onChangeText={setEsquerda}
        value={esquerda}
        placeholder="10.00"
        keyboardType="numeric"
        ></TextInput>
        <Text>Direita</Text>
        <TextInput
        onChangeText={setDireita}
        value={direita}
        placeholder="10.00"
        keyboardType="numeric"
        ></TextInput>
        <Button 
        onPress={()=> validadorCalculador()}
        title={textButton}
          
          />
        </View>
        < ResultTerreno messageResultTerreno={ResultTerreno} ResultTerreno={terreno}/>
    </View>
)};