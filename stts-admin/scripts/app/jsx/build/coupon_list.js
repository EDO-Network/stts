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
                                React.createElement("a", {href: "coupon_list.html", className: "list-group-item active"}, "服务券一览"), 
                                React.createElement("a", {href: "coupon_list.html", className: "list-group-item"}, "服务券发放"), 
                                React.createElement("a", {href: "coupon_exchange.html", className: "list-group-item"}, "服务券兑付审核")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240 overflow-hidden "}, 
                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "coupon_list.html"}, "服务券管理")), 
                                React.createElement("li", {className: "active"}, "在库服务券一览")
                            ), 

                            React.createElement("div", {className: "panel panel-default overflow-hidden"}, 
                                React.createElement("div", {className: "panel-body"}, 
                                    React.createElement("div", {className: "form-inline"}, 
                                        React.createElement("div", {className: "form-group"}, 
                                            React.createElement("label", {className: "control-label"}, 
                                                "批次"
                                            ), "    ", 

                                            React.createElement("select", {className: "form-control"}, 
                                                React.createElement("option", null, "2016"), 
                                                React.createElement("option", null, "2015"), 
                                                React.createElement("option", null, "2014")
                                            ), "    ", 
                                            React.createElement("button", {className: " btn btn-primary btn-sm"}, 
                                                React.createElement("span", {className: "fa fa-search"}), " 搜索"
                                            )
                                        )
                                    )
                                )
                            ), 

                            React.createElement("div", {className: "sort-row overflow-hidden"}, 
                                React.createElement("div", {className: "sort-inner"}, 
                                    React.createElement("ul", {className: "sorts"}, 
                                        React.createElement("li", {className: "sort active"}, React.createElement("a", {href: "#"}, "默认")), 
                                        React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "批次")), 
                                        React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "发放日期")), 
                                        React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "发放额度"))
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
                React.createElement("th", null, "批次"), 
                React.createElement("th", null, "发放日期"), 
                React.createElement("th", null, "使用有效期"), 
                React.createElement("th", null, "兑付有效期"), 
                React.createElement("th", null, "说明"), 
                React.createElement("th", null, "发放总额"), 
                React.createElement("th", null, "余额"), 
                React.createElement("th", null, "失效金额"), 
                React.createElement("th", null, "已使用金额"), 
                React.createElement("th", null, "未兑付金额"), 
                React.createElement("th", null, "操作")
            )
        );
    }
});

var TableItem = React.createClass({displayName: "TableItem",
    render: function () {
        return (
            React.createElement("tr", null, 
                React.createElement("td", null, "A2015NO2"), 
                React.createElement("td", null, "2016-01-01"), 
                React.createElement("td", null, "2016-06-01~" + ' ' +
                    "2016-12-31"
                ), 
                React.createElement("td", null, "2016-06-01~" + ' ' +
                    "2016-12-31"
                ), 
                React.createElement("td", null, "2015年度服务券统一" + ' ' +
                    "回收后补充发放"
                ), 
                React.createElement("td", null, "5000万"), 
                React.createElement("td", null, "3000万"), 
                React.createElement("td", null, "0万"), 
                React.createElement("td", null, "2000万"), 
                React.createElement("td", null, "500万"), 
                React.createElement("td", null, React.createElement("a", {href: "coupon_detail.html"}, "详细"))
            )
        );
    }
});
ReactDOM.render(
    React.createElement(CouponList, null),
    document.getElementById('page')
);