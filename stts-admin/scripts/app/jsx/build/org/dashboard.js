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
                    ), 
                    React.createElement("div", {className: "text-center"}, 
                        React.createElement("div", {className: "row mb-20"}, 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("img", {src: "../../img/org/dashboard_1.png"})
                            ), 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("img", {src: "../../img/org/dashboard_2.png"})
                            )
                        ), 
                        React.createElement("div", {className: "row mb-20"}, 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("img", {src: "../../img/org/dashboard_3.png"})
                            ), 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("img", {src: "../../img/org/dashboard_4.png"})
                            )
                        ), 
                        React.createElement("div", {className: "row mb-20"}, 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("img", {src: "../../img/org/dashboard_5.png"})
                            )
                        )
                    ), 
                    React.createElement("div", null, 

                        React.createElement("div", {className: "mb-20"}, 
                            React.createElement("div", {className: "panel panel-info"}, 
                                React.createElement("div", {className: "panel-heading"}, "待处理订单"), 
                                React.createElement("div", {className: "panel-body"}, 
                                    React.createElement("table", {className: "table table-hover"}, 
                                        React.createElement("thead", null, 
                                        React.createElement("tr", null, 
                                            React.createElement("th", null, "订单号"), 
                                            React.createElement("th", null, "服务对象"), 
                                            React.createElement("th", null, "金额"), 
                                            React.createElement("th", null, "状态"), 
                                            React.createElement("th", null, "操作")
                                        )
                                        ), 
                                        React.createElement("tbody", null, 
                                        React.createElement(OrderItem, null), 
                                        React.createElement(OrderItem, null), 
                                        React.createElement(OrderItem, null), 
                                        React.createElement(OrderItem, null), 
                                        React.createElement(OrderItem, null)
                                        )
                                    )
                                )
                            )
                        )


                    )
                ), 
                React.createElement(Footer, null)
            )
        );
    }
});

var OrderItem = React.createClass({displayName: "OrderItem",
    render: function () {
        return (
            React.createElement("tr", null, 
                React.createElement("td", null, 
                    "2016010118000001"
                ), 
                React.createElement("td", null, "xxx 股份有限公司"), 
                React.createElement("td", null, "2000"), 
                React.createElement("td", null, "已下单"), 
                React.createElement("td", null, React.createElement("a", {href: "order_detail.html"}, "查看详细"))
            )
        );
    }
});

ReactDOM.render(
    React.createElement(Dashboard, null),
    document.getElementById('page')
);