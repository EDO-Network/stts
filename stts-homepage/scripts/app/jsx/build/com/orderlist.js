var OrderList = React.createClass({displayName: "OrderList",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, null), 
                React.createElement(Header, null), 
                React.createElement("div", null

                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(OrderList, null),
    document.getElementById('page')
);