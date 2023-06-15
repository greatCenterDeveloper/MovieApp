import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

// props type [ TextInput 컴포넌트의 각 속성들을 전달받기 위한 타입 ]
type Props = {
    placeholder:string | undefined,
    secureTextEntry?: boolean | undefined,
    onChangeText?: (text:string)=>void | undefined
}

export default function InputComponent(props:Props):JSX.Element {
    return (
        <View style={style.container}>
            {/* placeholder : 컴포넌트를 사용하는 곳에서 힌트에 대한 property를 전달받아야함 */}
            {/* secureTextEntry : 컴포넌트를 사용하는 곳에서 secure 기능에 대한 property를 전달받아야 함 */}
            {/* onChangeText : 컴포넌트를 사용하는 곳에서 글씨 변경 이벤트 콜백 함수에 대한 property를 전달받아야 함 */}
            <TextInput
                placeholder = {props.placeholder}
                secureTextEntry = {props.secureTextEntry}
                onChangeText = {props.onChangeText}
                placeholderTextColor='#C3C2C8'
                style={style.input}></TextInput>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        paddingLeft: 16,
        paddingRight: 16,
        borderWidth: 1,
        borderColor: '#D3D3D3',
        borderRadius: 4,
        backgroundColor: '#FAFAFA',
        marginTop: 8,
        marginBottom: 8,
    },
    input: {
        flex: 1,        // TextInput의 높이를 container 높이 40에 맞게
        color: '#292929'
    },
})