//Import the react liabraies
import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar.js';

// Create component class named cat and fetch the properties of attr object in this. 
var ProfilePage = React.createClass({
  render: function () {
    return (
      <div>
		<NavBar />
        <h1>All About Me!</h1>
        <p>I like movies,singing and dancing</p>
      </div>
    );
  }
});

// Rendering ProfilePage component instance in html body
ReactDOM.render(<ProfilePage />,document.getElementById('app'));
