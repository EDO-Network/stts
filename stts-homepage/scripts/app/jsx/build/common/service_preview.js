var Service = React.createClass({displayName: "Service",
    render: function () {
        return (
            React.createElement("div", {className: "service-wrap"}, 
                React.createElement("div", null, 
                    React.createElement("img", {src: "img/common/service-preview.png"}), 
                    React.createElement("div", null, "财务审计")
                ), 
                React.createElement("div", null, 
                    React.createElement("div", {className: "pull-left"}, 
                        React.createElement("img", {src: "img/common/service-preview.png"})
                    ), 
                    React.createElement("div", {className: "pull-right"})
                )
            )
        );
    }
});