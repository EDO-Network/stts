var ServiceListContent = React.createClass({displayName: "ServiceListContent",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(ServiceSearchArea, null), 
                React.createElement(ServiceItem, null), 
                React.createElement(ServiceItem, null), 
                React.createElement(ServiceItem, null), 
                React.createElement(ServiceItem, null), 
                React.createElement(ServiceItem, null)
            )
        );
    }
});