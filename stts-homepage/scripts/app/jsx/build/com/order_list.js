var OrderList = React.createClass({displayName: "OrderList",
    handleCondition: function () {
        var $moreConditionWrap = $("#moreConditionWrap");
        if ($moreConditionWrap.is(":visible")) {
            $("#moreConditionWrap").hide(1000);
            $("#btnCondition").text("更多筛选条件");
        } else {
            $("#moreConditionWrap").show(1000);
            $("#btnCondition").text("收起筛选条件");
        }
    },
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, null), 
                React.createElement(Header, {activeMenuID: "mainMenuOrder"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("ol", {className: "breadcrumb"}, 
                        React.createElement("li", null, "您所在的位置："), 
                        React.createElement("li", null, React.createElement("a", {href: "dashboard.html"}, "企业机构")), 
                        React.createElement("li", null, React.createElement("a", {href: "order_list.html"}, "我的订单")), 
                        React.createElement("li", {className: "active"}, "订单一览")
                    ), 

                    React.createElement("div", null, 
                        React.createElement("div", {className: "pull-left w-222"}, 
                            React.createElement("div", {className: "list-group"}, 
                                React.createElement("a", {href: "order_list.html", className: "list-group-item active"}, "全部订单"), 
                                React.createElement("a", {href: "order_list.html", className: "list-group-item"}, "待受理"), 
                                React.createElement("a", {href: "order_list.html", className: "list-group-item"}, "待评价"), 
                                React.createElement("a", {href: "order_list.html", className: "list-group-item"}, "已完成"), 
                                React.createElement("a", {href: "order_list.html", className: "list-group-item"}, "退款中")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240"}, 
                            React.createElement("div", {className: "panel panel-default"}, 
                                React.createElement("div", {className: "panel-heading"}, "订单一览"), 
                                React.createElement("div", {className: "panel-body"}, 
                                    React.createElement("div", {className: "row overflow-hidden mb-10"}, 
                                        React.createElement("div", {className: "col-sm-6"}, 
                                            React.createElement("div", {className: "input-group"}, 
                                                React.createElement("input", {type: "text", className: "form-control"}), 
                                              React.createElement("span", {className: "input-group-btn"}, 
                                                React.createElement("button", {className: "btn btn-default", type: "button"}, "搜 索")
                                              )
                                            )
                                        ), 
                                        React.createElement("div", {className: "col-sm-6"}, 
                                            React.createElement("button", {id: "btnCondition", className: "btn btn-default", 
                                                    onClick: this.handleCondition}, "更多筛选条件"
                                            )
                                        )
                                    ), 
                                    React.createElement("div", {id: "moreConditionWrap", style: {display:"none"}, 
                                         className: "form-horizontal overflow-hidden"}, 
                                        React.createElement("div", {className: "row"}, 
                                            React.createElement("div", {className: "col-sm-4"}, 
                                                React.createElement("div", {className: "form-group"}, 
                                                    React.createElement("div", {className: "control-label col-sm-4"}, 
                                                        React.createElement("label", null, "大分类")
                                                    ), 
                                                    React.createElement("div", {className: "col-sm-8"}, 
                                                        React.createElement("select", {className: "form-control"}
                                                        )
                                                    )
                                                )
                                            ), 
                                            React.createElement("div", {className: "col-sm-4"}, 
                                                React.createElement("div", {className: "form-group"}, 
                                                    React.createElement("div", {className: "control-label col-sm-4"}, 
                                                        React.createElement("label", null, "小分类")
                                                    ), 
                                                    React.createElement("div", {className: "col-sm-8"}, 
                                                        React.createElement("select", {className: "form-control"}
                                                        )
                                                    )
                                                )
                                            ), 
                                            React.createElement("div", {className: "col-sm-4"}, 
                                                React.createElement("div", {className: "form-group"}, 
                                                    React.createElement("div", {className: "control-label col-sm-4"}, 
                                                        React.createElement("label", null, "服务机构")
                                                    ), 
                                                    React.createElement("div", {className: "col-sm-8"}, 
                                                        React.createElement("input", {type: "text", className: "form-control"})
                                                    )
                                                )
                                            )
                                        ), 
                                        React.createElement("div", {className: "row"}, 
                                            React.createElement("div", {className: "col-sm-4"}, 
                                                React.createElement("div", {className: "form-group"}, 
                                                    React.createElement("div", {className: "control-label col-sm-4"}, 
                                                        React.createElement("label", null, "评价状态")
                                                    ), 
                                                    React.createElement("div", {className: "col-sm-8"}, 
                                                        React.createElement("select", {className: "form-control"}
                                                        )
                                                    )
                                                )
                                            ), 
                                            React.createElement("div", {className: "col-sm-4"}, 
                                                React.createElement("div", {className: "form-group"}, 
                                                    React.createElement("div", {className: "control-label col-sm-4"}, 
                                                        React.createElement("label", null, "交易状态")
                                                    ), 
                                                    React.createElement("div", {className: "col-sm-8"}, 
                                                        React.createElement("select", {className: "form-control"}
                                                        )
                                                    )
                                                )
                                            ), 
                                            React.createElement("div", {className: "col-sm-4"}, 
                                                React.createElement("div", {className: "form-group"}, 
                                                    React.createElement("div", {className: "control-label col-sm-4"}, 
                                                        React.createElement("label", null, "订单时间")
                                                    ), 
                                                    React.createElement("div", {className: "col-sm-8"}, 
                                                        React.createElement("select", {className: "form-control"}
                                                        )
                                                    )
                                                )
                                            )
                                        ), 
                                        React.createElement("div", {className: "row"}, 
                                            React.createElement("div", {className: "col-sm-4"}, 
                                                React.createElement("div", {className: "form-group"}, 
                                                    React.createElement("div", {className: "control-label col-sm-4"}, 
                                                        React.createElement("label", null, "下单时间")
                                                    ), 
                                                    React.createElement("div", {className: "col-sm-8"}, 
                                                        React.createElement("div", {className: "input-group"}, 
                                                            React.createElement("input", {type: "text", className: "form-control"}), 
                                                        React.createElement("span", {
                                                            className: "input-group-addon bg-clear border-clear"}, "~"), 
                                                            React.createElement("input", {type: "text", className: "form-control"})
                                                        )
                                                    )
                                                )
                                            ), 
                                            React.createElement("div", {className: "col-sm-4"}, 
                                                React.createElement("div", {className: "form-group"}, 
                                                    React.createElement("div", {className: "control-label col-sm-4"}, 
                                                        React.createElement("label", null, "成交时间")
                                                    ), 
                                                    React.createElement("div", {className: "col-sm-8"}, 
                                                        React.createElement("div", {className: "input-group"}, 
                                                            React.createElement("input", {type: "text", className: "form-control"}), 
                                                        React.createElement("span", {
                                                            className: "input-group-addon bg-clear border-clear"}, "~"), 
                                                            React.createElement("input", {type: "text", className: "form-control"})
                                                        )
                                                    )
                                                )
                                            ), 

                                            React.createElement("div", {className: "col-sm-4"}, 
                                                React.createElement("button", {type: "button", className: "btn btn-default"}, "搜 索")
                                            )
                                        )
                                    ), 
                                    React.createElement(OrderItem, null), 
                                    React.createElement(OrderItem, null), 
                                    React.createElement(OrderItem, null), 
                                    React.createElement(OrderItem, null), 
                                    React.createElement(OrderItem, null), 
                                    React.createElement(Paging, null)
                                )
                            )
                        )
                    )
                )
            )
        );
    }
});

var OrderItem = React.createClass({displayName: "OrderItem",
    render: function () {
        return (
            React.createElement("div", {className: "panel panel-info"}, 
                React.createElement("div", {className: "panel-heading"}, "2016-01-01 18:00:00  订单号：201601010001"), 
                React.createElement("div", {className: "panel-body"}, 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "col-sm-2"}, 
                            React.createElement("img", {src: "../../img/sample/service_small.jpg"})
                        ), 
                        React.createElement("div", {className: "col-sm-3 border-right-solid"}, 
                            React.createElement("div", null, React.createElement("a", {href: "#"}, "财务审计")), 
                            React.createElement("br", null), 
                            React.createElement("div", null, React.createElement("a", {href: "#"}, "中国出口信用保险公司"))
                        ), 
                        React.createElement("div", {className: "col-sm-2 border-right-solid"}, 
                            React.createElement("div", null, "总金额：2000元"), 
                            React.createElement("br", null), 
                            React.createElement("div", null, "服务券：1000元")
                        ), 
                        React.createElement("div", {className: "col-sm-2"}, 
                            React.createElement("div", null, "状态：服务中"), 
                            React.createElement("br", null), 
                            React.createElement("div", null, "倒计时：5天")
                        ), 
                        React.createElement("div", {className: "col-sm-3 border-left-solid"}, 
                            React.createElement("div", null, React.createElement("a", {href: "#"}, "取消"), " | ", React.createElement("a", {href: "#"}, "确认")), 
                            React.createElement("br", null), 
                            React.createElement("div", null, React.createElement("a", {href: "#"}, "退款"), " | ", React.createElement("a", {href: "order_detail.html"}, "详细"))
                        )
                    )
                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(OrderList, null),
    document.getElementById('page')
);