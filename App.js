import React from 'react';
import {Provider} from 'react-redux';
import HomeScreen from './HomeScreen';
import configureStore from './store/configureStore';
const store = configureStore();

const App = () => (
    <Provider store = {store}>
        <HomeScreen/>
    </Provider>
);


export default App;