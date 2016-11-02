var CouponList = React.createClass({displayName: "CouponList",

    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, null), 
                React.createElement(Header, {activeMenuID: "mainMenuCoupon"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("div", null, 
                        React.createElement("div", {className: "pull-left w-222"}, 
                            React.createElement("div", {className: "list-group"}, 
                                React.createElement("a", {href: "coupon_list.html", className: "list-group-item"}, "服务券一览"), 
                                React.createElement("a", {href: "coupon_create.html", className: "list-group-item"}, "服务券发放"), 
                                React.createElement("a", {href: "coupon_exchange.html", className: "list-group-item active"}, "服务券兑付审核")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240 overflow-hidden "}, 
                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "coupon_list.html"}, "服务券管理")), 
                                React.createElement("li", {className: "active"}, "服务券兑付审核")
                            ), 

                            React.createElement(SearchArea, null), 

                            React.createElement("div", {className: "sort-row overflow-hidden"}, 
                                React.createElement("div", {className: "sort-inner"}, 
                                    React.createElement("ul", {className: "sorts"}, 
                                        React.createElement("li", {className: "sort active"}, React.createElement("a", {href: "#"}, "默认")), 
                                        React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "兑付申请时间")), 
                                        React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "服务机构")), 
                                        React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "服务标签")), 
                                        React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "券额")), 
                                        React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "状态"))
                                    ), 

                                    React.createElement("div", {className: "sort-style"}, 
                                        React.createElement("button", {className: "btn btn-default"}, "导出"), 
                                        "  ", 
                                        React.createElement("button", {className: "btn btn-default"}, "导出并报审批")
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
                            React.createElement("label", null, "兑付申请时间"), "  ", 
                            React.createElement("select", {className: "form-control"}, 
                                React.createElement("option", null, "1个月"), 
                                React.createElement("option", null, "3个月"), 
                                React.createElement("option", null, "全部")
                            )
                        ), 
                        "    ", 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", null, "状态"), " ", 
                            React.createElement("select", {className: "form-control"}, 
                                React.createElement("option", null, "待兑付"), 
                                React.createElement("option", null, "已兑付")
                            )
                        ), 
                        "    ", 
                        React.createElement("button", {type: "button", className: "btn btn-default"}, "搜 索"), 
                        "    ", 
                        React.createElement("a", {id: "btnCondition", className: "btn", onClick: this.handleCondition}, "更多筛选条件"
                        )
                    ), 
                    React.createElement("div", {id: "moreConditionWrap", style: {display: "none"}, 
                         className: "form-horizontal overflow-hidden"}, 
                        React.createElement("hr", null), 
                        React.createElement("div", {className: "row"}, 
                            React.createElement("div", {className: "form-group col-sm-6"}, 
                                React.createElement("label", {className: "control-label col-sm-4"}, "服务大类"), 

                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("select", {className: "form-control"}, 
                                        React.createElement("option", null)
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "form-group col-sm-6"}, 
                                React.createElement("label", {className: "control-label col-sm-4"}, "服务小类"), 

                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("select", {className: "form-control"}, 
                                        React.createElement("option", null)
                                    )
                                )
                            )
                        ), 
                        React.createElement("div", {className: "row"}, 
                            React.createElement("div", {className: "form-group col-sm-6"}, 
                                React.createElement("label", {className: "control-label col-sm-4"}, "兑付申请期间"), 

                                React.createElement("div", {className: " col-sm-8"}, 
                                    React.createElement("div", {className: "input-group input-group"}, 
                                        React.createElement("input", {type: "text", className: "form-control"}), 
                                        React.createElement("span", {className: "input-group-btn text-center font-size-12 width-10"}, "-"), 
                                        React.createElement("input", {type: "text", className: "form-control"})
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "form-group col-sm-6"}, 
                                React.createElement("label", {className: "control-label col-sm-4"}, "服务机构名称"), 

                                React.createElement("div", {className: " col-sm-8"}, 
                                    React.createElement("input", {type: "text", className: "form-control"})
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
                React.createElement("th", null, "#"), 
                React.createElement("th", null, "兑付申请时间"), 
                React.createElement("th", null, "服务机构"), 
                React.createElement("th", null, "服务名称"), 
                React.createElement("th", null, "发票预览"), 
                React.createElement("th", null, "服务标签"), 
                React.createElement("th", null, "满意度"), 
                React.createElement("th", null, "批次"), 
                React.createElement("th", null, "券额"), 
                React.createElement("th", null, "成交金额"), 
                React.createElement("th", null, "关联订单号"), 
                React.createElement("th", null, "状态")
            )
        );
    }
});

var TableItem = React.createClass({displayName: "TableItem",
    render: function () {
        return (
            React.createElement("tr", null, 
                React.createElement("td", null, 
                    React.createElement("input", {type: "checkbox"})
                ), 
                React.createElement("td", null, "2016-01-01 18:00"), 
                React.createElement("td", null, "xx服务公司"), 
                React.createElement("td", null, "系统检测"), 
                React.createElement("td", null, React.createElement("img", {src: "#"})), 
                React.createElement("td", null, "人才引培-高层培训"), 
                React.createElement("td", null, React.createElement("div", {className: "text-danger"}, 

                    React.createElement("span", {className: "fa fa-star"}), React.createElement("span", {className: "fa fa-star"}), 
                    React.createElement("span", {className: "fa fa-star"}), React.createElement("span", {className: "fa fa-star"}), 
                    React.createElement("span", {className: "fa fa-star"})
                )), 
                React.createElement("td", null, "2016批次"), 
                React.createElement("td", null, "2000元"), 
                React.createElement("td", null, "2000元"), 
                React.createElement("td", null, React.createElement("a", {href: "order_detail.html"}, "20160601001")), 
                React.createElement("td", null, "待兑付")
            )
        );
    }
});
ReactDOM.render(
    React.createElement(CouponList, null),
    document.getElementById('page')
);