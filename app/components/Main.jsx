var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
        return (
            <div>
                <Nav />
                <p>Main.jsx here</p>
                {props.children}
            </div>
        );  
}

module.exports = Main;