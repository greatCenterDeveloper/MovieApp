import React from 'react'

// BottomTabNavigator 객체 생성
// [등록할 스크린 리스트 타입은 별도 types.tsx에서 작성]
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MainNavScreenList } from '../types'
const BottomTab = createBottomTabNavigator<MainNavScreenList>()

// 등록할 스크린 or 네비게이터 import
import MovieNav from './MovieNav'
import Favorite from '../screen_main/Favorite'
import Community from '../screen_main/Community'

export default function MainNav():JSX.Element {
    return (
        <BottomTab.Navigator screenOptions={{headerShown:false}}>
            <BottomTab.Screen name='MovieNav'  component={MovieNav}/>
            <BottomTab.Screen name='Favorite'  component={Favorite}/>
            <BottomTab.Screen name='Community' component={Community}/>
        </BottomTab.Navigator>
    )
}