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
                                React.createElement("a", {href: "coupon.html", className: "list-group-item "}, "帐户统计"), 
                                React.createElement("a", {href: "coupon_list.html", className: "list-group-item active"}, "服务券一览"), 
                                React.createElement("a", {href: "coupon_excharge.html", className: "list-group-item"}, "服务券兑付")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240 overflow-hidden "}, 
                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "dashboard.html"}, "服务机构")), 
                                React.createElement("li", null, React.createElement("a", {href: "service_list.html"}, "服务券帐户")), 
                                React.createElement("li", {className: "active"}, "服务券一览")
                            ), 


                            React.createElement("div", {className: "panel panel-default overflow-hidden"}, 
                                React.createElement("div", {className: "panel-body"}, 
                                    React.createElement("div", {className: "form-horizontal"}, 

                                        React.createElement("div", {className: "row"}, 
                                            React.createElement("div", {className: " col-sm-5 form-group form-inline"}, 
                                                React.createElement("label", {className: "control-label col-sm-4"}, 
                                                    "结算状态"
                                                ), 

                                                React.createElement("div", {className: "col-sm-8"}, 
                                                    React.createElement("div", {className: "checkbox mr-10"}, 
                                                        React.createElement("label", null, 
                                                            React.createElement("input", {type: "checkbox"}), " 未兑付"
                                                        )
                                                    ), 

                                                    React.createElement("div", {className: "checkbox"}, 
                                                        React.createElement("label", null, 
                                                            React.createElement("input", {type: "checkbox"}), " 已兑付"
                                                        )
                                                    )
                                                )
                                            ), 
                                            React.createElement("div", {className: " col-sm-7 form-group-sm form-inline "}, 
                                                React.createElement("label", {className: "control-label col-sm-3"}, 
                                                    "期间"
                                                ), 

                                                React.createElement("div", {className: "col-sm-9"}, 
                                                    React.createElement("input", {type: "text", className: "form-control  input-sm"}), 
                                                    React.createElement("span", {className: "w-50 text-center"}, " ~ "), 
                                                    React.createElement("input", {type: "text", className: "form-control  input-sm"})
                                                )
                                            ), 
                                            React.createElement("div", {className: "row "}, 
                                                React.createElement("div", {className: "col-sm-6 col-sm-offset-3"}, 
                                                    React.createElement("div", {className: "col-sm-4"}, 
                                                        React.createElement("button", {className: "btn btn-sm btn-default col-sm-12"}, 
                                                            React.createElement("span", {className: "fa fa-clear"}), " 清空条件"
                                                        )
                                                    ), 
                                                    React.createElement("div", {className: "col-sm-4"}, 
                                                        React.createElement("button", {className: " btn btn-sm btn-primary col-sm-12"}, 
                                                            React.createElement("span", {className: "fa fa-search"}), " 搜索"
                                                        )
                                                    ), 
                                                    React.createElement("div", {className: "col-sm-4"}, 
                                                        React.createElement("button", {className: " btn btn-sm btn-warning col-sm-12"}, 
                                                            React.createElement("span", {className: "fa fa-file-text-o"}), " 导出"
                                                        )
                                                    )
                                                )
                                            )
                                        )
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
var TableItem = React.createClass({displayName: "TableItem",
    render: function () {
        return (
            React.createElement("tr", null, 
                React.createElement("td", null, React.createElement("a", {href: "#"}, "20160601001")), 
                React.createElement("td", null, "2016-01-01"), 
                React.createElement("td", null, "系统检测"), 
                React.createElement("td", null, "检验检测认证"), 
                React.createElement("td", null, "国际认证"), 
                React.createElement("td", null, "2016批次"), 
                React.createElement("td", null, "xxx企业"), 
                React.createElement("td", null, "2000"), 
                React.createElement("td", null, "3000"), 
                React.createElement("td", null, "已兑付"), 
                React.createElement("td", null, React.createElement("a", {href: "#"}, "查看"))
            )
        );
    }
});
var TableHeader = React.createClass({displayName: "TableHeader",
    render: function () {
        return (
            React.createElement("tr", null, 
                React.createElement("th", null, "关联订单号"), 
                React.createElement("th", null, "下单日期"), 
                React.createElement("th", null, "服务名称"), 
                React.createElement("th", null, "服务大分类"), 
                React.createElement("th", null, "服务小分类"), 
                React.createElement("th", null, "批次"), 
                React.createElement("th", null, "企业名称"), 
                React.createElement("th", null, "券额"), 
                React.createElement("th", null, "金额"), 
                React.createElement("th", null, "兑付状态"), 
                React.createElement("th", null, "发票")
            )
        );
    }
});
var TableInfo = React.createClass({displayName: "TableInfo",
    render: function () {
        return (
            React.createElement("div", {className: "mt-20"}, 
                React.createElement("table", {className: "table table-hover"}, 
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
ReactDOM.render(
    React.createElement(CouponList, null),
    document.getElementById('page')
);