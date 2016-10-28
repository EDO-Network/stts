var CouponExcharge = React.createClass({displayName: "CouponExcharge",

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
                                React.createElement("a", {href: "coupon_list.html", className: "list-group-item "}, "服务券一览"), 
                                React.createElement("a", {href: "coupon_excharge.html", className: "list-group-item active"}, "服务券兑付")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240 overflow-hidden "}, 
                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "dashboard.html"}, "服务机构")), 
                                React.createElement("li", null, React.createElement("a", {href: "service_list.html"}, "服务券帐户")), 
                                React.createElement("li", {className: "active"}, "服务券兑付")
                            ), 


                            React.createElement("div", {className: "col-sm-12"}, 
                                React.createElement("div", {className: "col-sm-4"}, 
                                    React.createElement("button", {className: "btn btn-info btn-sm w-100 mr-10", "data-toggle": "modal", "data-target": "#addModal"}, 
                                        React.createElement("span", {className: "fa fa-ticket mr-10"}), "兑付申请"
                                    )

                                ), 
                                React.createElement("div", {className: "col-sm-8 text-right text-pink"}, 
                                    React.createElement("span", {className: "fa fa-exclamation"}), " 必须包括服务券和现金发票"
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
                React.createElement("td", null, React.createElement("input", {type: "checkbox"})), 
                React.createElement("td", null, React.createElement("a", {href: "#"}, "20160601001")), 
                React.createElement("td", null, "2016-01-01"), 
                React.createElement("td", null, "系统检测"), 
                React.createElement("td", null, "检验检测认证"), 
                React.createElement("td", null, "国际认证"), 
                React.createElement("td", null, "2016批次"), 
                React.createElement("td", null, "xxx企业"), 
                React.createElement("td", null, React.createElement("a", {href: "#"}, "上传")), 
                React.createElement("td", null, "2000")
            )
        );
    }
});
var TableHeader = React.createClass({displayName: "TableHeader",
    render: function () {
        return (
            React.createElement("tr", null, 
                React.createElement("th", null), 
                React.createElement("th", null, "关联订单号"), 
                React.createElement("th", null, "下单日期"), 
                React.createElement("th", null, "服务名称"), 
                React.createElement("th", null, "服务大类"), 
                React.createElement("th", null, "服务小类"), 
                React.createElement("th", null, "批次"), 
                React.createElement("th", null, "企业名称"), 
                React.createElement("th", null, "发票"), 
                React.createElement("th", null, "券额")
            )
        );
    }
});
var TableInfo = React.createClass({displayName: "TableInfo",
    render: function () {
        return (
            React.createElement("div", {className: "mt-20 col-sm-12"}, 
                React.createElement("table", {className: "table table-hover"}, 
                    React.createElement("thead", null, 
                    React.createElement(TableHeader, null)
                    ), 
                    React.createElement("tbody", null, 
                    React.createElement(TableItem, null), 
                    React.createElement(TableItem, null), 
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
    React.createElement(CouponExcharge, null),
    document.getElementById('page')
);