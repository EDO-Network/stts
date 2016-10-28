var Header = React.createClass({displayName: "Header",
    componentDidMount: function () {
        var activeMenuID = this.props.activeMenuID;

        $("#" + activeMenuID).show();
        $("#" + activeMenuID).addClass("active");
    },

    render: function () {
        return (
            React.createElement("nav", {className: "navbar navbar-inverse", role: "navigation"}, 
                React.createElement("div", {className: "container"}, 
                    React.createElement("ul", {className: "nav navbar-nav"}, 
                        React.createElement("li", {id: "mainMenuIndex"}, React.createElement("a", {href: "index.html"}, "运营平台")), 
                        React.createElement("li", {id: "mainMenuCompany"}, React.createElement("a", {href: "company_list.html"}, "企业管理")), 
                        React.createElement("li", {id: "mainMenuOrg"}, React.createElement("a", {href: "org_list.html"}, "服务机构管理")), 
                        React.createElement("li", {id: "mainMenuCoupon"}, React.createElement("a", {href: "coupon_list.html"}, "服务券管理")), 
                        React.createElement("li", {id: "mainMenuOrder"}, React.createElement("a", {href: "order_list.html"}, "订单管理")), 
                        React.createElement("li", {id: "mainMenuSetting"}, React.createElement("a", {href: "setting.html"}, "系统设定"))
                    )
                )
            )
        );
    }
});