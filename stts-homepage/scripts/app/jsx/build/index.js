var Index = React.createClass({displayName: "Index",
    render: function () {
        return (
            React.createElement("div", {id: "container"}, 
                React.createElement(Top, null), 
                React.createElement(Header, null), 
                React.createElement(Menu, null)
            )
        );
    }
});

ReactDOM.render(
    React.createElement(Index, null),
    document.getElementById('page')
);