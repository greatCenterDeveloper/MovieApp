import React from 'react'

// stack Navigator 객체 생성
// [MovieList, MovieDetail 화면 등록]
import { createStackNavigator } from '@react-navigation/stack'
import { MovieNavScreenList } from '../types'
const Stack = createStackNavigator<MovieNavScreenList>()

// 등록할 스크린 컴포넌트 import
import MovieList from '../screen_main/MovieList'
import MovieDetail from '../screen_main/MovieDetail'

export default function MovieNav():JSX.Element {
    return (
        <Stack.Navigator>
            <Stack.Screen name='MovieList' component={MovieList}/>
            <Stack.Screen name='MovieDetail' component={MovieDetail}/>
        </Stack.Navigator>
    )
}