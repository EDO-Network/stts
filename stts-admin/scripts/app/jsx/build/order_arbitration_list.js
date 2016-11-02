var CouponList = React.createClass({displayName: "CouponList",

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

                        React.createElement("div", {className: "ml-240 overflow-hidden "}, 
                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "order_list.html"}, "订单管理")), 
                                React.createElement("li", {className: "active"}, "仲裁一览")
                            ), 

                            React.createElement(SearchArea, null), 

                            React.createElement("div", {className: "sort-row overflow-hidden"}, 
                                React.createElement("div", {className: "sort-inner"}, 
                                    React.createElement("ul", {className: "sorts"}, 
                                        React.createElement("li", {className: "sort active"}, React.createElement("a", {href: "#"}, "默认")), 
                                        React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "申请仲裁时间")), 
                                        React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "申请退券额")), 
                                        React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "服务分类"))
                                    )
                                )
                            ), 

                            React.createElement(TableInfo, null)
                        )
                    )
                ), 

                React.createElement(Footer, null)
            )

        );
    }
});


var SearchArea = React.createClass({displayName: "SearchArea",
    handleCondition: function () {
        var $moreConditionWrap = $("#moreConditionWrap");
        if ($moreConditionWrap.is(":visible")) {
            $("#moreConditionWrap").hide(500);
            $("#btnCondition").text("更多筛选条件");
        } else {
            $("#moreConditionWrap").show(500);
            $("#btnCondition").text("收起筛选条件");
        }
    },
    render: function () {
        return (
            React.createElement("div", {className: "panel panel-default overflow-hidden"}, 
                React.createElement("div", {className: "panel-body"}, 
                    React.createElement("div", {className: "form-inline mb-10"}, 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", null, "订单号"), "  ", 
                            React.createElement("input", {type: "text", className: "form-control"})
                        ), 
                        "    ", 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", null, "申请仲裁时间"), " ", 
                            React.createElement("select", {className: "form-control"}, 
                                React.createElement("option", null, "1个月"), 
                                React.createElement("option", null, "3个月"), 
                                React.createElement("option", null, "全部")
                            )
                        ), 
                        "    ", 
                        React.createElement("button", {type: "button", className: "btn btn-default"}, "搜 索"), 
                        "    ", 
                        React.createElement("a", {id: "btnCondition", className: "btn", onClick: this.handleCondition}, "更多筛选条件"
                        )
                    ), 
                    React.createElement("div", {id: "moreConditionWrap", style: {display: "none"}, 
                         className: "form-horizontal overflow-hidden font-size-12"}, 
                        React.createElement("hr", null), 
                        React.createElement("div", {className: "row"}, 
                            React.createElement("div", {className: "form-group col-sm-4"}, 
                                React.createElement("label", {className: "control-label col-sm-5"}, "服务名称"), 

                                React.createElement("div", {className: "col-sm-7"}, 
                                    React.createElement("input", {type: "text", className: "form-control"})
                                )
                            ), 
                            React.createElement("div", {className: "form-group col-sm-4"}, 
                                React.createElement("label", {className: "control-label col-sm-5"}, "状态"), 

                                React.createElement("div", {className: "col-sm-7"}, 
                                    React.createElement("select", {className: "form-control"}, 
                                        React.createElement("option", null)
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "form-group col-sm-4"}, 
                                React.createElement("label", {className: "control-label col-sm-5"}, "价格范围："), 

                                React.createElement("div", {className: " col-sm-7"}, 
                                    React.createElement("div", {className: "input-group input-group"}, 
                                        React.createElement("input", {type: "text", className: "form-control"}), 
                                        React.createElement("span", {className: "input-group-btn text-center font-size-12 width-10"}, "-"), 
                                        React.createElement("input", {type: "text", className: "form-control"})
                                    )
                                )
                            )
                        ), 
                        React.createElement("div", {className: "row"}, 
                            React.createElement("div", {className: "form-group col-sm-4"}, 
                                React.createElement("label", {className: "control-label col-sm-5"}, "买家名称（企业）"), 

                                React.createElement("div", {className: " col-sm-7"}, 
                                    React.createElement("input", {type: "text", className: "form-control"})
                                )
                            ), 
                            React.createElement("div", {className: "form-group col-sm-4"}, 
                                React.createElement("label", {className: "control-label col-sm-5"}, "卖家名称（服务机构）"), 

                                React.createElement("div", {className: " col-sm-7"}, 
                                    React.createElement("div", {className: "input-group input-group"}, 
                                        React.createElement("input", {type: "text", className: "form-control"}), 
                                        React.createElement("span", {className: "input-group-btn text-center font-size-12 width-10"}, "-"), 
                                        React.createElement("input", {type: "text", className: "form-control"})
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "form-group col-sm-4"}, 
                                React.createElement("label", {className: "control-label col-sm-5"}, "申请仲裁时间范围："), 

                                React.createElement("div", {className: " col-sm-7"}, 
                                    React.createElement("div", {className: "input-group input-group"}, 
                                        React.createElement("input", {type: "text", className: "form-control"}), 
                                        React.createElement("span", {className: "input-group-btn text-center font-size-12 width-10"}, "-"), 
                                        React.createElement("input", {type: "text", className: "form-control"})
                                    )
                                )
                            )
                        ), 
                        React.createElement("div", {className: "text-center"}, 
                            React.createElement("button", {className: "btn btn-sm btn-default"}, 
                                "清空条件"
                            ), 
                            "  ", 
                            React.createElement("button", {className: " btn btn-sm btn-primary"}, 
                                React.createElement("span", {className: "fa fa-search"}), " 搜索"
                            )
                        )
                    )
                )
            )
        );
    }
});


var TableInfo = React.createClass({displayName: "TableInfo",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("table", {className: "table table-hover font-size-12"}, 
                    React.createElement("thead", null, 
                    React.createElement(TableHeader, null)
                    ), 
                    React.createElement("tbody", null, 
                    React.createElement(TableItem, null), 
                    React.createElement(TableItem, null), 
                    React.createElement(TableItem, null), 
                    React.createElement(TableItem, null)
                    )
                ), 
                React.createElement(Paging, null)
            )
        );
    }
});

var TableHeader = React.createClass({displayName: "TableHeader",
    render: function () {
        return (
            React.createElement("tr", null, 
                React.createElement("th", null, "订单号"), 
                React.createElement("th", null, "服务名称"), 
                React.createElement("th", null, "状态"), 
                React.createElement("th", null, "实际价格"), 
                React.createElement("th", null, "已支付券额"), 
                React.createElement("th", null, "申请退券额"), 
                React.createElement("th", null, "买家（企业）"), 
                React.createElement("th", null, "申请原因分类"), 
                React.createElement("th", null, "卖家（服务机构）"), 
                React.createElement("th", null, "拒绝原因分类"), 
                React.createElement("th", null, "申请仲裁时间"), 
                React.createElement("th", null, "操作")
            )
        );
    }
});

var TableItem = React.createClass({displayName: "TableItem",
    render: function () {
        return (
            React.createElement("tr", null, 
                React.createElement("td", null, "201601010001"), 
                React.createElement("td", null, "xxxxx1"), 
                React.createElement("td", null, "退券仲裁中"), 
                React.createElement("td", null, "1000元"), 
                React.createElement("td", null, "500元"), 
                React.createElement("td", null, "500元"), 
                React.createElement("td", null, "XXXXXX"), 
                React.createElement("td", null, "误操作"), 
                React.createElement("td", null, "XXXXXX"), 
                React.createElement("td", null, "已产生成本"), 
                React.createElement("td", null, "2016-10-01 10:20:30"), 
                React.createElement("td", null, React.createElement("a", {href: "order_arbitration.html"}, "详细"))
            )
        );
    }
});
ReactDOM.render(
    React.createElement(CouponList, null),
    document.getElementById('page')
);