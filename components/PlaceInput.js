import React, { Component } from 'react';
import styled from 'styled-components';

class PlaceInput extends Component{
    state = {
        placeName: ''
    };
    placeNameChangeHandler = (value) => {
        this.setState({
            placeName: value
        })
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }
        this.props.onPlaceAdded(this.state.placeName)
    };
    render(){
        return(
            <Cover>
                <Enter
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangeHandler}
                    placeholder="write more"
                />
                <AddButton
                    title="ADD"
                    onPress={this.placeSubmitHandler}/>
            </Cover>
        )
    }
}

export default PlaceInput;

const Enter = styled.TextInput`
width: 70%;
margin: 20px 0px;
padding: 20px 20px;
border: 1px solid black ;
`;
const AddButton = styled.Button`
width: 30%;
`;
const Cover = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;