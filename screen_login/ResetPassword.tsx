import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, Image, Alert } from 'react-native'

// 공통 사용 컴포넌트 import
import InputComponent from '../components/InputComponent'
import TabComponent from '../components/TabComponent'

import { StackScreenProps } from '@react-navigation/stack'
import { LoginNavScreenList } from '../types'
type ResetPasswordProps = StackScreenProps<LoginNavScreenList, 'ResetPassword'>

// prop 객체 { navigation, route }
export default function ResetPassword(props:ResetPasswordProps):JSX.Element {

    // 1. 우선 테스트 목적의 화면
    // return (
    //     <View style={style.root}>
    //         <Text>RESET PASSWORD</Text>
    //     </View>
    // )

    // 탭에 따른 화면 구성을 위한 state 변수들
    const [tabs, setTabs] = useState<string[]>(['이메일1', '이메일2'])
    const [tabIndex, setTabIndex] = useState<number>(0)

    // 탭 선택에 따른 안내 메세지
    const message = [
        '이메일을 입력하면 임시 비밀번호를 보내드립니다.',
        '이메일을 입력하면 임시 비밀번호를 보내드립니다.'
    ]

    // 2. 비밀번호 재설정 화면
    return (
        <View style={style.root}>
            {/* 1. 콘텐츠 영역 */}
            <View style={style.content}>
                {/* 1.1 자물쇠 이미지 표시 영역 */}
                <View style={style.lockImageContainer}>
                    <Image source={require('../Images/lock.png')}></Image>
                </View>

                {/* 1.2 타이틀 안내문구 표시 */}
                <Text style={style.title}>로그인에 문제가 있나요?</Text>

                {/* 1.3 이메일 또는 전화번호 선택에 대한 안내 문구 */}
                <Text style={style.message}>{message[tabIndex]}</Text>

                {/* 1.4 탭 만들기 */}
                <View style={style.tabContainer}>
                    {
                        tabs.map((value, index)=>{
                            return <TabComponent
                                        label={tabs[index]}
                                        selected={index==tabIndex}
                                        onPress={()=>setTabIndex(index)}
                                        key={index}></TabComponent>
                        })
                    }
                </View>

                {/* 1.5 정보 입력 박스 */}
                <InputComponent placeholder={tabs[tabIndex]}></InputComponent>

                {/* 1.6 전송 버튼 */}
                <View style={{width:'100%', margin:16}}>
                    <Button title='전송'
                            onPress={()=>Alert.alert('임시비밀번호가 발송되었습니다.', 
                            '로그인 후 정보수정을 통해 안전한 비밀번호로 변경해 주시기 바랍니다.')}/>
                </View>
            </View>

            {/* 2. footer 영역 */}
            <View style={style.footer}>
                <Text style={style.goBack}
                      onPress={()=>props.navigation.goBack()}>
                    로그인화면으로 돌아가기
                </Text>
            </View>
        </View>
    )
}

// style sheet object
const style = StyleSheet.create({
    root: {flex:1, backgroundColor:'FEFFFF'},
    content: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        padding:32,
    },
    footer: {
        borderTopWidth: 1,
        borderTopColor: '#D3D3D3',
        padding: 8
    },
    goBack: {
        color: '#3796EF',
        textAlign:'center'
    },
    lockImageContainer: {
        padding: 24,
        borderWidth: 2,
        borderColor: '#292929',
        borderRadius: 100,
        margin: 16,
    },
    title: {
        fontSize: 16,
        marginBottom: 16,
    },
    message: {
        textAlign: 'center',
        marginBottom: 16,
        color: '#292929'
    },
    tabContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    }
})