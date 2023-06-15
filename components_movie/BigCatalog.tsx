import React from 'react'
import {View, Text, TouchableOpacity, Image, StyleSheet, Dimensions} from 'react-native'

import { MovieInfo } from '../types'

type Props = {
    movie:MovieInfo,
    onPress?: (id:string)=>void | undefined
}

export default function BigCatalog(props:Props):JSX.Element {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={()=>props.onPress!!(props.movie.id)}>
            <Image
                source={{uri:props.movie.large_cover_image}}
                // 화면의 가로 사이즈를 얻어와서 이미지의 가로 사이즈로 지정
                style={{width: Dimensions.get('window').width, height:300}}></Image>
            {/* 영화 제목, 개봉일, 장르 등의 정보를 보여주기 */}
            {/* 이미지와 겹쳐서 배치 - absolute 속성을 배치 */}
            <View style={style.infoContainer}>
                <Text style={style.labelYear}>{props.movie.year}년 개봉</Text>
                <View style={style.labelContainer}>
                    <Text style={style.labelTitle}>{props.movie.title}</Text>
                    <Text style={style.labelGenres}>{props.movie.genres.join(', ')}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    infoContainer: {
        position: 'absolute',
        bottom:0,
        width:'100%',
        alignItems: 'flex-start',
    },
    labelYear: {
        color: '#FFFFFF',
        padding:8,
        fontWeight: 'bold',
        marginLeft: 4,
        backgroundColor: '#E70915'
    },
    labelContainer: {
        backgroundColor: '#141414',
        width: '100%',
        padding: 8,
        opacity:0.8,
    },
    labelTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        padding: 8,
    },
    labelGenres: {
        fontSize: 12,
        color: '#FFFFFF',
        padding: 8,
    }
})