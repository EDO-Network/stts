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
                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "dashboard.html"}, "服务机构")), 
                                React.createElement("li", null, React.createElement("a", {href: "order_list.html"}, "订单处理")), 
                                React.createElement("li", {className: "active"}, "订单一览")
                            ), 
                            React.createElement("div", {className: "panel panel-default"}, 
                                React.createElement("div", {className: "panel-heading"}, "订单一览"), 
                                React.createElement("div", {className: "panel-body"}, 
                                    React.createElement("div", {className: "form-inline mb-10"}, 
                                        React.createElement("div", {className: "form-group"}, 
                                            React.createElement("label", null, "服务名称"), "  ", 
                                            React.createElement("input", {type: "text", className: "form-control"})
                                        ), 
                                        "    ", 
                                        React.createElement("div", {className: "form-group"}, 
                                            React.createElement("label", null, "订单时间"), " ", 
                                            React.createElement("select", {className: "form-control"}, 
                                                React.createElement("option", null, "1个月")
                                            )
                                        ), 
                                        "    ", 
                                        React.createElement("button", {type: "button", className: "btn btn-default"}, "搜 索"), 
                                        "    ", 
                                        React.createElement("a", {id: "btnCondition", className: "btn", onClick: this.handleCondition}, "更多筛选条件"
                                        )
                                    ), 
                                    React.createElement("div", {id: "moreConditionWrap", style: {display:"none"}, 
                                         className: "form-horizontal overflow-hidden"}, 
                                        React.createElement("div", {className: "row"}, 
                                            React.createElement("div", {className: "col-sm-4"}, 
                                                React.createElement("div", {className: "form-group"}, 
                                                    React.createElement("div", {className: "control-label col-sm-4"}, 
                                                        React.createElement("label", null, "服务大类")
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
                                                        React.createElement("label", null, "服务小类")
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
                                                        React.createElement("label", null, "企业名称")
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
                                                        React.createElement("label", null, "交易状态")
                                                    ), 
                                                    React.createElement("div", {className: "col-sm-8"}, 
                                                        React.createElement("select", {className: "form-control"}, 
                                                            React.createElement("option", null)
                                                        )
                                                    )
                                                )
                                            ), 

                                            React.createElement("div", {className: "col-sm-4"}, 
                                                React.createElement("button", {type: "button", className: "btn btn-default"}, "搜 索")
                                            )
                                        )
                                    ), 
                                    React.createElement("div", {className: "sort-row overflow-hidden"}, 
                                        React.createElement("div", {className: "sort-inner"}, 
                                            React.createElement("ul", {className: "sorts"}, 
                                                React.createElement("li", {className: "sort active"}, React.createElement("a", {href: "#"}, "默认")), 
                                                React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "订单时间")), 
                                                React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "服务分类")), 
                                                React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "价格"))
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
                ), 

                React.createElement(Footer, null)
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
                        React.createElement("div", {className: "col-sm-4 border-right-dotted"}, 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("img", {src: "../../img/sample/service_small.jpg"})
                            ), 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", null, React.createElement("a", {href: "#"}, "服务名称")), 
                                React.createElement("br", null), 

                                React.createElement("div", null, React.createElement("a", {href: "#"}, "企业名称"))
                            )
                        ), 
                        React.createElement("div", {className: "col-sm-2 border-right-dotted"}, 
                            React.createElement("div", null, "成交金额：2000元"), 
                            React.createElement("br", null), 

                            React.createElement("div", null, "已付服务券：1000元")
                        ), 
                        React.createElement("div", {className: "col-sm-2 border-right-dotted"}, 
                            React.createElement("div", null, "状态：服务中"), 
                            React.createElement("br", null), 

                            React.createElement("div", null, "人才引培-高层培训")
                        ), 
                        React.createElement("div", {className: "col-sm-2"}, 
                            React.createElement("div", null, "企业联系人：李蓉"), 
                            React.createElement("br", null), 

                            React.createElement("div", null, "企业联系电话：89991234")
                        ), 
                        React.createElement("div", {className: "col-sm-2 border-left-dotted"}, 
                            React.createElement("div", null, React.createElement("a", {href: "#"}, "受理"), " | ", React.createElement("a", {href: "#"}, "拒绝")), 
                            React.createElement("div", null, React.createElement("a", {href: "#"}, "同意退款/同意退单")), 

                            React.createElement("div", null, React.createElement("a", {href: "#"}, "申请仲裁"), " | ", React.createElement("a", {href: "#"}, "评价"), " | ", React.createElement("a", {href: "order_detail.html"}, "详细"))
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