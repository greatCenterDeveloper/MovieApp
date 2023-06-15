import React from 'react'
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

// Stack Navigator의 screen으로 등록된 컴포넌트에서 전달받을 props의 타입 지정
import { StackScreenProps } from '@react-navigation/stack'
import { RootScreenList } from './types'

// 모든 Stack Navigator 객체는 navigator 객체를 전달받으므로..
// 이 화면이 어떤 화면이다 라는 것을 명시해야 한다.
type IntroProps = StackScreenProps<RootScreenList, 'Intro'>


// functional component - 파라미터로 props { navigation, route } 객체 받음
// navigation - 화면 전환 능력을 가진 객체
// route      - putExtra 로 전달받은 데이터 객체
export default function Intro(props:IntroProps):JSX.Element {

    // 로그인한 적이 있는지 검사한 후 결과에 따라 LoginNav or MainNav로 이동
    // replace : 현재화면 바꿔치기.. 현재 화면을 없애고 이동
    AsyncStorage.getItem('email')
        .then((value)=>{
            if(value) props.navigation.replace('MainNav')
            else props.navigation.replace('LoginNav')
        })

    
    return (
        // 1. 화면 전환 테스트 목적으로 보여질 임시 화면
        // <View style={style.root}>
        //     <Text>Intro</Text>
        //     <Button title='go login'
        //             onPress={()=>props.navigation.navigate('LoginNav')}></Button>
        //     <Button title='go main'
        //             color='green'
        //             onPress={()=>props.navigation.navigate('MainNav')}></Button>
        // </View>

        // 2. AsyncStorage가 비동기방식이므로 읽어오는 사이에 잠시잠깐 보여질 수도 있는 화면이 있을 필요 있음 [데이터가 작은사이즈여서 거의 안 보일것임]
        <View style={style.root}>
            {/* color속성 없으면 색상이 안보임 */}
            <ActivityIndicator size="large" color="green"/>
        </View>
    )

    
}

const style = StyleSheet.create({
    root: {flex:1, justifyContent:'center', alignItems: 'center'}
})