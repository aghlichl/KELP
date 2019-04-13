import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
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

    const splashImages = ['yelp_splash_1', 'yelp_splash_2', 'yelp_splash_3', 'yelp_splash_4', 'yelp_splash_5', 'yelp_splash_6', 'yelp_splash_7', 'yelp_splash_8', 'yelp_splash_9', 'yelp_splash_10'];
    const randomImage = splashImages[Math.floor(Math.random() * splashImages.length)];
    
    $('#background').css({
        'background-image': `url(${window.images[randomImage]})`
    });
});