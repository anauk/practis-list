import React, {Component} from 'react';
import styled from 'styled-components';
import PlaceInput from './components/PlaceInput';
import PlaceList from './components/PlaceList';
import PlaceDetail from './components/PlaceDetail';
import {connect} from 'react-redux';
import {addPlace, deletePlace, deselectPlace, selectPlace} from './store/acrions/index';


class HomeScreen extends Component {

    placeAddedHandler = (placeName) => {
        this.props.onAddPlace(placeName);
    };
    placeSelectedHandler = key => {
       this.props.onSelectPlace(key);
    };
    placeDeletedHandler=()=>{
         this.props.onDeletePlace();
    };
    modalClosedHandler=()=>{
        this.props.onUnselectPlace();
    };

    render() {
        return (
            <Container>
                <PlaceDetail selectedPlace = {this.props.selectedPlace}
                             onItemDeleted={this.placeDeletedHandler}
                             onModalClosed={this.modalClosedHandler}/>
                <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
                <PlaceList places={this.props.places}
                           onItemSelected={this.placeSelectedHandler}/>
            </Container>
        );
    }
}

const Container = styled.View`
    flex: 1;
    padding: 20px;
    background-color: #fff;
   
 `;
const mapStateToProps = state=>{
    return {
        places: state.places.places,
        selectedPlace: state.places.selectedPlace
    }
};
const mapDispatchToProps = dispatch =>{
    return {
        onAddPlace:(name)=>dispatch(addPlace(name)),
        onDeletePlace: ()=>dispatch(deletePlace()),
        onSelectPlace: (key)=> dispatch(selectPlace(key)),
        onUnselectPlace: ()=>dispatch(deselectPlace)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);


