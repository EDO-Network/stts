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
                        React.createElement("span", {className: "service-icon"}, "企业机构")
                    ), 
                    React.createElement("div", {className: "menu-main"}, 
                        React.createElement("ul", {className: "clearfix"}, 
                            React.createElement("li", {id: "mainMenuDashboard"}, React.createElement("a", {href: "dashboard.html"}, "我的平台")), 
                            React.createElement("li", {id: "mainMenuOrder"}, React.createElement("a", {href: "order_list.html"}, "我的订单")), 
                            React.createElement("li", {id: "mainMenuEvaluate"}, React.createElement("a", {href: "evaluate_receive.html"}, "我的评价")), 
                            React.createElement("li", {id: "mainMenuMessage"}, React.createElement("a", {href: "message_list.html"}, "我的消息")), 
                            React.createElement("li", {id: "mainMenuCompany"}, React.createElement("a", {href: "company.html"}, "资质审核")), 
                            React.createElement("li", {id: "mainMenuCoupon"}, React.createElement("a", {href: "coupon.html"}, "服务券"))
                        )
                    )
                )
            )
        );
    }
});