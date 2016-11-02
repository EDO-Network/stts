var OrderDetail = React.createClass({displayName: "OrderDetail",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, null), 
                React.createElement(Header, {activeMenuID: "mainMenuOrder"}), 

                React.createElement("div", {className: "container"}, 

                    React.createElement("div", null, 
                        React.createElement("div", {className: "pull-left w-222"}, 
                            React.createElement("div", {className: "list-group"}, 
                                React.createElement("a", {href: "order_list.html", className: "list-group-item"}, "全部订单"), 
                                React.createElement("a", {href: "order_arbitration_list.html", className: "list-group-item active"}, "仲裁一览")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240"}, 
                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "order_list.html"}, "订单管理")), 
                                React.createElement("li", null, React.createElement("a", {href: "order_list.html"}, "仲裁一览")), 
                                React.createElement("li", {className: "active"}, "订单号：201601010001")
                            ), 
                            React.createElement("div", {className: "panel panel-default"}, 
                                React.createElement("div", {className: "panel-heading"}, "订单详细"), 
                                React.createElement("div", {className: "panel-body"}, 
                                    React.createElement(Order, null)
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

var Order = React.createClass({displayName: "Order",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(OrderProcess, {step: "1"}), 

                React.createElement("h3", null, "等待服务机构受理中，倒计时还剩 5天。"), 

                React.createElement("div", {className: "text-center mb-10"}, 
                    React.createElement("button", {className: "btn btn-default"}, "支持退券"), 
                    "  ", 
                    React.createElement("button", {className: "btn btn-default"}, "支持退单"), 
                    "  ", 
                    React.createElement("button", {className: "btn btn-default"}, "不支持退券"), 
                    "  ", 
                    React.createElement("button", {className: "btn btn-default"}, "不支持退单")
                ), 
                React.createElement("div", {className: "panel panel-info"}, 
                    React.createElement("div", {className: "panel-heading"}, 
                        "订单基本信息"
                    ), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("div", null, 
                            React.createElement("div", {className: "col-sm-4"}, 
                                React.createElement("p", null, "订单号：", React.createElement("a", {href: "#"}, "201601011800001"))
                            ), 
                            React.createElement("div", {className: "col-sm-4"}, 
                                React.createElement("p", null, "状态：退券申请中")
                            )
                        ), 
                        React.createElement("div", null, 
                            React.createElement("div", {className: "col-sm-4"}, 
                                React.createElement("p", null, "服务产品名：", React.createElement("a", {href: "#"}, "xxx 服务（快照）"))
                            ), 
                            React.createElement("div", {className: "col-sm-4"}, 
                                React.createElement("p", null, "实际费用：10000 元")
                            ), 
                            React.createElement("div", {className: "col-sm-4"}, 
                                React.createElement("p", null, "已支付服务券：3000 元")
                            )
                        )
                    )
                ), 
                React.createElement("div", {className: "panel panel-info"}, 
                    React.createElement("div", {className: "panel-heading"}, "买家（企业）"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("div", null, 
                            React.createElement("div", {className: "col-sm-4"}, 
                                React.createElement("p", null, "提出退券额：2000")
                            ), 
                            React.createElement("div", {className: "col-sm-4"}, 
                                React.createElement("p", null, "申请时间：2016-06-01 18:00:00")
                            ), 
                            React.createElement("div", {className: "col-sm-4"}, 
                                React.createElement("p", null, "撤消时间：2016-06-01 18:00:00")
                            )
                        ), 
                        React.createElement("div", null, 
                            React.createElement("div", {className: "col-sm-4"}, 
                                React.createElement("p", null, "退券补充说明：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + ' ' +
                                    "xxxxxxxxxxxxxxxxx" + ' ' +
                                    "xxxxxxxxxxxxxxxxxxxxxxx")
                            ), 
                            React.createElement("div", {className: "col-sm-4"}, 
                                React.createElement("p", null, "理由分类：误操作")
                            ), 
                            React.createElement("div", {className: "col-sm-4"}, 
                                React.createElement("p", null, "证据照片：", React.createElement("img", {src: "#"}), " ", React.createElement("img", {src: "#"}), " ", React.createElement("img", {src: "#"}), " ", 
                                    React.createElement("a", {className: "btn"}, "上传证据图片"))
                            )
                        )
                    )
                ), 
                React.createElement("div", {className: "panel panel-info"}, 
                    React.createElement("div", {className: "panel-heading"}, "卖家（服务机构）"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("div", null, 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("p", null, "受理时间：2016-06-01 18:00:00")
                            ), 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("p", null, "受理分类：同意")
                            )
                        ), 
                        React.createElement("div", null, 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("p", null, "受理补充说明：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + ' ' +
                                    "xxxxxxxxxxxxxxxxx" + ' ' +
                                    "xxxxxxxxxxxxxxxxxxxxxxx")
                            ), 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("p", null, "证据照片：", React.createElement("img", {src: "#"}), " ", React.createElement("img", {src: "#"}), " ", React.createElement("img", {src: "#"}), " ", 
                                    React.createElement("a", {className: "btn"}, "上传证据图片"))
                            )
                        )
                    )
                ), 
                React.createElement("div", {className: "panel panel-info"}, 
                    React.createElement("div", {className: "panel-heading"}, "仲裁方（运营机构）"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("p", null, "仲裁时间：2016-06-01 18:00:00"), 
                        React.createElement("p", null, "仲裁分类：支持退券"), 
                        React.createElement("p", null, "仲裁补充说明：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + ' ' +
                            "xxxxxxxxxxxxxxxxx" + ' ' +
                            "xxxxxxxxxxxxxxxxxxxxxxx")
                    )
                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(OrderDetail, null),
    document.getElementById('page')
);