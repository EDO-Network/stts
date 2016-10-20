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
                                React.createElement("a", {href: "order_list.html", className: "list-group-item"}, "待受理"), 
                                React.createElement("a", {href: "order_list.html", className: "list-group-item"}, "待评价"), 
                                React.createElement("a", {href: "order_list.html", className: "list-group-item"}, "已完成"), 
                                React.createElement("a", {href: "order_list.html", className: "list-group-item"}, "退款中")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240"}, 
                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "dashboard.html"}, "企业机构")), 
                                React.createElement("li", null, React.createElement("a", {href: "order_list.html"}, "我的订单")), 
                                React.createElement("li", {className: "active"}, "订单号：201601010001")
                            ), 
                            React.createElement(Order, null)
                        )
                    )
                )
            )
        );
    }
});

var Order = React.createClass({displayName: "Order",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("div", {className: "order-process"}, 
                    React.createElement("div", {className: "node"}, 
                        React.createElement("div", null, React.createElement("i", {className: "icon fa fa-shopping-basket", "aria-hidden": "true"})), 
                        React.createElement("div", null, "服务申请"), 
                        React.createElement("div", null, "2016-01-01"), 
                        React.createElement("div", null, "18:00:00")
                    ), 
                    React.createElement("div", {className: "node process"}, 
                        React.createElement("div", {className: "arrow"}), 
                        React.createElement("div", null), 
                        React.createElement("div", null), 
                        React.createElement("div", null)
                    ), 
                    React.createElement("div", {className: "node"}, 
                        React.createElement("div", null, React.createElement("i", {className: "icon fa fa-legal", "aria-hidden": "true"})), 
                        React.createElement("div", null, "服务受理"), 
                        React.createElement("div", null), 
                        React.createElement("div", null)
                    ), 
                    React.createElement("div", {className: "node process"}, 
                        React.createElement("div", {className: "arrow"}), 
                        React.createElement("div", null), 
                        React.createElement("div", null), 
                        React.createElement("div", null)
                    ), 
                    React.createElement("div", {className: "node"}, 
                        React.createElement("div", null, React.createElement("i", {className: "icon fa fa-credit-card", "aria-hidden": "true"})), 
                        React.createElement("div", null, "完成并付款"), 
                        React.createElement("div", null), 
                        React.createElement("div", null)
                    ), 
                    React.createElement("div", {className: "node process"}, 
                        React.createElement("div", {className: "arrow"}), 
                        React.createElement("div", null), 
                        React.createElement("div", null), 
                        React.createElement("div", null)
                    ), 
                    React.createElement("div", {className: "node"}, 
                        React.createElement("div", null, React.createElement("i", {className: "icon fa fa-commenting", "aria-hidden": "true"})), 
                        React.createElement("div", null, "服务评价"), 
                        React.createElement("div", null), 
                        React.createElement("div", null)
                    ), 
                    React.createElement("div", {className: "node process"}, 
                        React.createElement("div", {className: "arrow"}), 
                        React.createElement("div", null), 
                        React.createElement("div", null), 
                        React.createElement("div", null)
                    ), 
                    React.createElement("div", {className: "node"}, 
                        React.createElement("div", null, React.createElement("i", {className: "icon fa fa-check-square", "aria-hidden": "true"})), 
                        React.createElement("div", null, "交易完成"), 
                        React.createElement("div", null), 
                        React.createElement("div", null)
                    )
                ), 
                React.createElement("div", {className: "panel panel-info"}, 
                    React.createElement("div", {className: "panel-heading"}, "订单信息"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("div", {className: "col-sm-4"}, 
                            React.createElement("p", null, "服务产品：", React.createElement("a", {href: "#"}, "财务审计（快照）")), 

                            React.createElement("p", null, "申请时间：2016-01-01 18:00:00"), 

                            React.createElement("p", null, "服务周期：2016-06-05 ～ 2016-09-30")
                        ), 
                        React.createElement("div", {className: "col-sm-4"}, 
                            React.createElement("p", null, "服务价格：1.2 万元"), 

                            React.createElement("p", null, "实际费用：10000 元"), 

                            React.createElement("p", null, "服务券额：3000 元")
                        ), 
                        React.createElement("div", {className: "col-sm-4"}, 
                            React.createElement("p", null, "状态：待受理"), 

                            React.createElement("p", null, React.createElement("a", {href: "#"}, "阅览合同"))
                        )
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
                                React.createElement("p", null, "类型：小升规"), 

                                React.createElement("p", null, "负责人：金喜善")
                            ), 
                            React.createElement("div", {className: "col-sm-3"}, 
                                React.createElement("p", null, "联系电话：1234323456")
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

                                React.createElement("p", null, "综合评价：", 
                                    React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"})
                                ), 

                                React.createElement("p", null, "服务态度：", 
                                    React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"})
                                ), 

                                React.createElement("p", null, "专业水平：", 
                                    React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"})
                                ), 

                                React.createElement("p", null, "描述属实：", 
                                    React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"})
                                ), 

                                React.createElement("p", null, "补充说明：xxxxxxxxxxxxxxxxxxxxxxx")
                            ), 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("h3", null, "对企业的评价"), 

                                React.createElement("p", null, "综合评价：", 
                                    React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"})
                                ), 

                                React.createElement("p", null, "付款及时：", 
                                    React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                                    React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"})
                                ), 

                                React.createElement("p", null, "补充说明：xxxxxxxxxxxxxxxxxxxxxxx")
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