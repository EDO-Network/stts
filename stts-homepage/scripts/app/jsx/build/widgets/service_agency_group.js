/**
 * 服务分组
 */
var ServiceAgencyCard = React.createClass({displayName: "ServiceAgencyCard",
    render: function () {
        return (
            React.createElement("div", {className: "panel panel-primary"}, 
                React.createElement("div", {className: "panel-heading"}, "服务分组"), 
                React.createElement("div", {className: "panel-body"}
                )
            )
        );
    }
});
