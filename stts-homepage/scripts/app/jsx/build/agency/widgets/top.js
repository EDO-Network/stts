var Top = React.createClass({displayName: "Top",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("div", {className: "container"}, 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "col-sm-6"}, 
                            React.createElement("ul", null, 
                                React.createElement("li", null, "您好，中大检测")
                            )
                        ), 
                        React.createElement("div", {className: "col-sm-6"})
                    )
                )
            )
        );
    }
});