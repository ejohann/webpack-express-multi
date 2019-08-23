import HelloWorldButton from './components/hello-world-button/hello-world-button';
import Heading from './components/heading/heading.js';
import React from 'react'

const heading = new Heading();
const helloWorldButton = new HelloWorldButton();

heading.render('hello world');
helloWorldButton.render();

if(process.env.NODE_ENV === 'production'){
    console.log('production mode');
}
else if(process.env.NODE_ENV === 'development'){
    console.log('development mode');
}
