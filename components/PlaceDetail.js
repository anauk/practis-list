import React from 'react';
import styled from 'styled-components';
import { Modal } from "react-native";

const placeDetail = props=> {
    let modalContent = null;
    if(props.selectedPlace){
        modalContent=(
            <Container>
                <Avatar source={props.selectedPlace.image}/>
                <Title>{props.selectedPlace.name}</Title>
            </Container>
        )
    }
    return (
        <Modal
        onRequestClose={props.onModalClosed}
            visible={props.selectedPlace !== null}
        animationType="slide">
            <Container>
                {modalContent}
                <CoverBtn>
                    <AddButton title="DELETE" onPress={props.onItemDeleted} />
                    <DeleteButton title="CLOSE" onPress={props.onModalClosed} />
                </CoverBtn>
            </Container>
        </Modal>
    )
};

export default placeDetail;

const Container = styled.View`
margin-top: 20px;
`;
const Avatar = styled.Image`
width: 100%;
height: 200px;`;
const Title = styled.Text`
text-align: center;
font-size: 28px;
`;
const CoverBtn = styled.View`
margin-top: 50px;`;
const AddButton = styled.Button`
color: red;
margin-top: 100px;`;
const DeleteButton = styled.Button``;
