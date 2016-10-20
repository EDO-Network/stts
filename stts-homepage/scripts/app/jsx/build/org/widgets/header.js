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
                    React.createElement("div", {className: "menu-main"}, 
                        React.createElement("ul", {className: "clearfix"}, 
                            React.createElement("li", {className: "title"}, 
                                React.createElement("i", {className: "fa fa-shopping-cart", "aria-hidden": "true"}), 
                                " 企服超市 ", 
                                React.createElement("span", {className: "service-icon"}, "服务机构")
                            ), 
                            React.createElement("li", {id: "mainMenuDashboard"}, React.createElement("a", {href: "dashboard.html"}, "服务机构平台")), 
                            React.createElement("li", {id: "mainMenuOrgShow"}, React.createElement("a", {href: "order_list.html"}, "机构展示")), 
                            React.createElement("li", {id: "mainMenuOrder"}, React.createElement("a", {href: "company.html"}, "订单处理")), 
                            React.createElement("li", {id: "mainMenuService"}, React.createElement("a", {href: "coupon.html"}, "服务产品")), 
                            React.createElement("li", {id: "mainMenuCoupon"}, React.createElement("a", {href: "coupon.html"}, "服务券帐户"))
                        )
                    )
                )
            )
        );
    }
});