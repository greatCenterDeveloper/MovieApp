import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import { MovieInfo } from '../types'

type Props = {
    title:string,
    url:string,
    onPress?: (id:string)=>void | undefined
}

export default function SmallCatalogList(props:Props):JSX.Element {

    // 영화들의 정보를 가지는 state 변수
    const [movies, setMovies] = useState<MovieInfo[]>([])

    // 영화 정보 받아오는 기능 메소드
    const loadData = ()=>{
        // 전달받은 URL을 통해 json으로 인기 영화 정보들 읽어오기
        fetch(props.url)
            .then(res => res.json())
            .then(json => setMovies(json.data.movies))
    }

    // 화면이 처음 보여지거나 갱신될 때 자동 호출되는 Hooks 기술 메소드
    useEffect(()=>loadData())

    return (
        <View style={style.container}>
            {/* 서브 타이틀 제목 표시 */}
            <Text style={style.title}>{props.title}</Text>
            <FlatList
                horizontal={true}
                data={movies}
                renderItem={({item, index})=>{ // obj 객체 : {item, index}
                    return (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={{paddingLeft:4, paddingRight:4}}
                            onPress={()=>props.onPress!!(item.id)}>
                            <Image
                                source={{uri:item.large_cover_image}}
                                style={{width:140, height:200}}></Image>
                        </TouchableOpacity>
                    )
                }}></FlatList>
        </View>
    )
}

const style = StyleSheet.create({
    container: {marginTop:8, marginBottom:8},
    title: {padding:8, fontSize:16, fontWeight: 'bold'},
})