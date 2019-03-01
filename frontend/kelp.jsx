import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
    // let images = ["url('/Users/ag/Desktop/KELP/skeleton/kelp/app/assets/images/yelp_splash_1.jpg')", "url('/Users/ag/Desktop/KELP/skeleton/kelp/app/assets/images/yelp_splash_2.jpg')", "url('/Users/ag/Desktop/KELP/skeleton/kelp/app/assets/images/yelp_splash_3.jpg')"];
    // let random = Math.floor(Math.random() * 3) + 0;
    // document.getElementById("background").style.backgroundImage = images[random]
});