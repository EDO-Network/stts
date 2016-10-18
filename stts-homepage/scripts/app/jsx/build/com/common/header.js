var Header = React.createClass({displayName: "Header",
    render: function () {
        return (
            React.createElement("nav", {className: "navbar", role: "navigation"}, 
                React.createElement("div", {className: "navbar-inner container"}, 
                    React.createElement("div", {className: "navbar-header width-240"}, 
                        React.createElement("div", {className: "navbar-brand"}, 
                            React.createElement("span", null, "企服超市"), React.createElement("span", null, "企业机构")
                        )
                    ), 
                    React.createElement("div", {id: "navbar", className: "navbar-collapse collapse"}, 
                        React.createElement(MainMenu, {activeMenuID: this.props.activeMenuID})
                    )
                )
            )
        );
    }
});


var MainMenu = React.createClass({displayName: "MainMenu",
    componentDidMount: function () {
        var activeMenuID = this.props.activeMenuID;
        $("#" + activeMenuID).addClass("active");
    },
    render: function () {
        return (
            React.createElement("ul", {className: "nav navbar-nav"}, 
                React.createElement("li", {id: "mainMenuDashboard"}, 
                    React.createElement("a", {href: SiteProperties.webURL + Page.creditSearch}, "我的平台")
                ), 
                React.createElement("li", {id: "mainMenuOrder"}, 
                    React.createElement("a", {href: SiteProperties.webURL + Page.creditSearch}, "我的订单")
                ), 
                React.createElement("li", {id: "mainMenuComment"}, 
                    React.createElement("a", {href: SiteProperties.webURL + Page.creditSearch}, "我的评价")
                ), 
                React.createElement("li", {id: "mainMenuMessage"}, 
                    React.createElement("a", {href: SiteProperties.webURL + Page.creditSearch}, "我的消息")
                ), 
                React.createElement("li", {id: "mainMenuAccount"}, 
                    React.createElement("a", {href: SiteProperties.webURL + Page.creditSearch}, "账户设置")
                )
            )
        );
    }
});