import React from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import * as Icon from '@expo/vector-icons';

const ListItem = props => (
    <TouchableOpacity onPress={props.onItemPressed}>
    <Container>
        <Avatar soutce={props.placeImage}/>
    <Title>{props.placeName}</Title>
        <Name>{props.name}</Name>
        <Icon.Ionicons
            name="ios-arrow-forward"
            size={32}
            color="#b8bece"
            style={{position:"absolute", right: 20, top: 15}}/>
    </Container>
    </TouchableOpacity>
);
export default ListItem;

const Avatar = styled.Image`
width: 44px;
height: 44px;
background: black;
border-radius: 22px;
margin-right: 8px
`;

const Title = styled.Text`
font-size: 16px;
color: #b8bece;
font-weight: 500;
margin-left: 10px;
`;
const Name = styled.Text`
color: #3c4560;
font-weight: 500;
`;

const Container = styled.View`
width: 100%;
padding: 10px;
margin-bottom: 5px;
background: #eee;
flex-direction:row;
align-items: center;
`;