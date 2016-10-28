var Header = React.createClass({displayName: "Header",
    componentDidMount: function () {
        var activeMenuID = this.props.activeMenuID;

        $("#" + activeMenuID).show();
        $("#" + activeMenuID).addClass("active");
    },

    render: function () {
        return (
            React.createElement("div", {className: "header-wrap"}, 
                React.createElement("div", {className: "container"}, 
                    React.createElement("h2", null, 
                        React.createElement("i", {className: "fa fa-shopping-cart", "aria-hidden": "true"}), 
                        " 小微企业创业创新服务券网上平台 ", 
                        React.createElement("span", {className: "service-icon"}, "服务机构")
                    ), 
                    React.createElement("div", {className: "menu-main"}, 
                        React.createElement("ul", {className: "clearfix"}, 
                            React.createElement("li", {id: "mainMenuDashboard"}, React.createElement("a", {href: "dashboard.html"}, "服务机构平台")), 
                            React.createElement("li", {id: "mainMenuOrgShow"}, React.createElement("a", {href: "org_show.html"}, "机构展示")), 
                            React.createElement("li", {id: "mainMenuOrder"}, React.createElement("a", {href: "order_list.html"}, "订单处理")), 
                            React.createElement("li", {id: "mainMenuService"}, React.createElement("a", {href: "service_list.html"}, "服务产品")), 
                            React.createElement("li", {id: "mainMenuCoupon"}, React.createElement("a", {href: "coupon.html"}, "服务券帐户")), 
                            React.createElement("li", {id: "mainMenuEvaluate"}, React.createElement("a", {href: "evaluate_receive.html"}, "服务评价")), 
                            React.createElement("li", {id: "mainMenuMessage"}, React.createElement("a", {href: "message_list.html"}, "服务消息")), 
                            React.createElement("li", {id: "mainMenuOrgInfo"}, React.createElement("a", {href: "org_info.html"}, "资质审核"))
                        )
                    )
                )
            )
        );
    }
});