import React from 'react';
import styled from 'styled-components';
import ListItem from "./ListItem";
import { StyleSheet, FlatList} from "react-native";


const placeList = props => {
        return <FlatList
                style = {styles.listContainer}
                data={props.places}
                renderItem={(info)=>(
            <ListItem
                      placeName={info.item.name}
                      placeImage={info.item.image}
                      onItemPressed={()=>props.onItemSelected(info.item.key)}/>
                      )}
            />
};

export default placeList;

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});