import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => (
    <View style={s.header}>
        <Text style={s.headerTitle}>{props.title}</Text>
    </View>
)
export default Header;

const s = StyleSheet.create({
    header:{
        width:'100%',
        height:90,
        paddingTop:36,
        backgroundColor:'#f7287b',
        alignItems:'center',
        justifyContent:'center'
    },
    headerTitle:{
        color:'black',
        fontSize:18,
    }
})

