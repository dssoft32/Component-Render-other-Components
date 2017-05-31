//Import the react liabrary
import React from 'react';

//Create NavBar class for creating navigation menu
var NavBar = React.createClass({
  render: function () {
    var pages = ['home', 'blog', 'bio', 'about', 'contact'];
    var navLinks = pages.map(function(page){
      return (
        <a href={'/' + page}>
         {page}
        </a>
      );
    });

    return <nav>{navLinks}</nav>;
  }
});

// When you need to import only a specific part of a file into another file.
module.exports = NavBar;
