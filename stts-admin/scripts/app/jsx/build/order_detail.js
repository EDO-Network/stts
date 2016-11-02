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
                                React.createElement("a", {href: "order_list.html", className: "list-group-item active"}, "全部订单"), 
                                React.createElement("a", {href: "order_arbitration_list.html", className: "list-group-item"}, "仲裁一览")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240"}, 
                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "order_list.html"}, "订单管理")), 
                                React.createElement("li", null, React.createElement("a", {href: "order_list.html"}, "订单一览")), 
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
                React.createElement("div", {className: "panel panel-info"}, 
                    React.createElement("div", {className: "panel-heading"}, 
                        "订单信息  订单号：201601011800001  状态：申请服务  ", 
                        React.createElement("a", {href: "order_arbitration.html", className: "pull-right"}, "查看退款/退单信息")
                    ), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("div", {className: "col-sm-4"}, 
                            React.createElement("p", null, "服务产品名：", React.createElement("a", {href: "#"}, "xxx 服务（快照）")), 

                            React.createElement("p", null, "申请时间：2016-01-01 18:00:00"), 

                            React.createElement("p", null, "附加条款：XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
                        ), 
                        React.createElement("div", {className: "col-sm-4"}, 
                            React.createElement("p", null, "服务分类：人才引培-高层培训"), 

                            React.createElement("p", null, "服务周期：2016-06-05 ～ 2016-09-30"), 

                            React.createElement("p", null, "附件：", React.createElement("img", {src: "#"}), " ", React.createElement("img", {src: "#"}), " ", React.createElement("img", {src: "#"}))

                        ), 
                        React.createElement("div", {className: "col-sm-4"}, 
                            React.createElement("p", null, "实际费用：10000 元"), 

                            React.createElement("p", null, "已支付服务券：3000 元"), 

                            React.createElement("p", null, React.createElement("a", {href: "#"}, "阅览合同"))
                        )
                    )
                ), 
                React.createElement("div", {className: "panel panel-info"}, 
                    React.createElement("div", {className: "panel-heading"}, "付券记录"), 
                    React.createElement("div", {className: "panel-body"}, 
                            "2016-01-01 18:00:00 买家付款 券 500元", React.createElement("br", null), 
                            "2016-02-01 18:00:00 买家付款 券 500元", React.createElement("br", null), 
                            "2016-02-02 18:00:00 买家申请退款 券 500元", React.createElement("br", null), 
                            "2016-02-02 18:00:00 卖家退款 券 500元"
                    )
                ), 
                React.createElement("div", {className: "panel panel-info"}, 
                    React.createElement("div", {className: "panel-heading"}, "企业信息"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("div", null, 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("p", null, "企业名称：", React.createElement("a", {href: "#"}, "宁波睿智信息技术有限公司（快照）")), 

                                React.createElement("p", null, "企业留言：" + ' ' +
                                    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + ' ' +
                                    "xxxxxxxxxxxxxxxxx" + ' ' +
                                    "xxxxxxxxxxxxxxxxxxxxxxx")
                            ), 
                            React.createElement("div", {className: "col-sm-3"}, 
                                React.createElement("p", null, "联系人：王睿智")
                            ), 
                            React.createElement("div", {className: "col-sm-3"}, 
                                React.createElement("p", null, "联系电话：1234323456")
                            )
                        )
                    )
                ), 
                React.createElement("div", {className: "panel panel-info"}, 
                    React.createElement("div", {className: "panel-heading"}, "服务机构信息"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("div", null, 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("p", null, "服务机构：", React.createElement("a", {href: "#"}, "中国出口信用保险公司（快照）")), 

                                React.createElement("p", null, "处理人员：赵四喜"), 

                                React.createElement("p", null, "服务机构留言：" + ' ' +
                                    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + ' ' +
                                    "xxxxxxxxxxxxxxxxx" + ' ' +
                                    "xxxxxxxxxxxxxxxxxxxxxxx")
                            ), 
                            React.createElement("div", {className: "col-sm-3"}, 
                                React.createElement("p", null, "类型：股份制企业"), 

                                React.createElement("p", null, "联系电话：1234323456")
                            ), 
                            React.createElement("div", {className: "col-sm-3"}, 
                                React.createElement("p", null, "负责人：金喜善")
                            )
                        )
                    )
                ), 
                React.createElement("div", {className: "panel panel-info"}, 
                    React.createElement("div", {className: "panel-heading"}, "互评信息"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("div", {className: "text-left"}, 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("h3", null, "对服务机构的评价"), 

                                React.createElement("p", null, "机构综合评分：", 
                                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"})
                                ), 

                                React.createElement("p", null, "服务态度：", 
                                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"})
                                ), 

                                React.createElement("p", null, "专业水平：", 
                                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"})
                                ), 

                                React.createElement("p", null, "描述是否相等：", 
                                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"})
                                ), 

                                React.createElement("p", null, "说明：本次服务非常满意")
                            ), 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("h3", null, "对企业的评价"), 

                                React.createElement("p", null, "企业综合评分：", 
                                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"})
                                ), 

                                React.createElement("p", null, "付款是否及时：", 
                                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"})
                                ), 

                                React.createElement("p", null, "说明：本次服务非常满意")
                            )
                        )
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