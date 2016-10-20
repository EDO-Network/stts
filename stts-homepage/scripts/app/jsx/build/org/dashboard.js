var Dashboard = React.createClass({displayName: "Dashboard",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, null), 
                React.createElement(Header, {activeMenuID: "mainMenuDashboard"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("ol", {className: "breadcrumb"}, 
                        React.createElement("li", null, "您所在的位置："), 
                        React.createElement("li", null, React.createElement("a", {href: "dashboard.html"}, "服务机构")), 
                        React.createElement("li", {className: "active"}, "服务机构平台")
                    )
                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(Dashboard, null),
    document.getElementById('page')
);