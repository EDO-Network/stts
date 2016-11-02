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
                                React.createElement("a", {href: "coupon_create.html", className: "list-group-item"}, "服务券发放"), 
                                React.createElement("a", {href: "coupon_exchange.html", className: "list-group-item"}, "服务券兑付审核")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240 overflow-hidden "}, 
                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "coupon_list.html"}, "服务券管理")), 
                                React.createElement("li", null, React.createElement("a", {href: "coupon_list.html"}, "在库服务券一览")), 
                                React.createElement("li", {className: "active"}, "服务券详细")
                            ), 

                            React.createElement("div", {className: "panel panel-default overflow-hidden"}, 
                                React.createElement("div", {className: "panel-heading"}, "服务券详细"), 
                                React.createElement("div", {className: "panel-body"}, 
                                    React.createElement("h2", {className: "text-center"}, "批次：A1600"), 

                                    React.createElement("p", null, "发放日期：2016-10-01 10:00:26"), 

                                    React.createElement("p", null, "使用有效期：2016-10-01 ~ 2016-10-01"), 

                                    React.createElement("p", null, "兑付有效期：2016-10-01 ~ 2016-10-01"), 

                                    React.createElement("p", {className: "text-info"}, "说明：2015年度服务券统一回收后补充发放"), 

                                    React.createElement(SummaryTable, null), 
                                    React.createElement(DetailTable, null)
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

var SummaryTable = React.createClass({displayName: "SummaryTable",

    render: function () {
        return (
            React.createElement("div", {className: "mb-20"}, 
                React.createElement("div", {className: "text-right"}, "单位：元"), 
                React.createElement("table", {className: "table table-bordered"}, 
                    React.createElement("thead", null, 
                    React.createElement("tr", null, 
                        React.createElement("th", null, "汇总"), 
                        React.createElement("th", null, "发放总额"), 
                        React.createElement("th", null, "已使用"), 
                        React.createElement("th", null, "已兑付"), 
                        React.createElement("th", null, "未兑付"), 
                        React.createElement("th", null, "使用失效"), 
                        React.createElement("th", null, "交付失效"), 
                        React.createElement("th", null, "余额")
                    )
                    ), 
                    React.createElement("tbody", null, 
                    React.createElement("tr", null, 
                        React.createElement("th", null, "金额"), 
                        React.createElement("td", null, "5000"), 
                        React.createElement("td", null, "3000"), 
                        React.createElement("td", null, "1000"), 
                        React.createElement("td", null, "2000"), 
                        React.createElement("td", null, "200"), 
                        React.createElement("td", null, "200"), 
                        React.createElement("td", null, "500")
                    )
                    )
                )
            )

        );
    }
});

var DetailTable = React.createClass({displayName: "DetailTable",

    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("div", {className: "text-right"}, "单位：元"), 
                React.createElement("table", {className: "table table-bordered"}, 
                    React.createElement("thead", null, 
                    React.createElement("tr", null, 
                        React.createElement("th", null, "分类"), 
                        React.createElement("th", null, "分配额"), 
                        React.createElement("th", null, "已使用"), 
                        React.createElement("th", null, "已兑付"), 
                        React.createElement("th", null, "未兑付"), 
                        React.createElement("th", null, "余额"), 
                        React.createElement("th", null, "配额调整")
                    )
                    ), 
                    React.createElement("tbody", null, 
                    React.createElement("tr", null, 
                        React.createElement("th", null, "人才引培"), 
                        React.createElement("td", null, "500"), 
                        React.createElement("td", null, "200"), 
                        React.createElement("td", null, "100"), 
                        React.createElement("td", null, "100"), 
                        React.createElement("td", null, "300"), 
                        React.createElement("td", null, React.createElement("input", {type: "text"}))
                    ), 
                    React.createElement("tr", null, 
                        React.createElement("th", null, "技术创新"), 
                        React.createElement("td", null, "500"), 
                        React.createElement("td", null, "200"), 
                        React.createElement("td", null, "100"), 
                        React.createElement("td", null, "100"), 
                        React.createElement("td", null, "300"), 
                        React.createElement("td", null, React.createElement("input", {type: "text"}))
                    ), 
                    React.createElement("tr", null, 
                        React.createElement("th", null, "财务指导"), 
                        React.createElement("td", null, "500"), 
                        React.createElement("td", null, "200"), 
                        React.createElement("td", null, "100"), 
                        React.createElement("td", null, "100"), 
                        React.createElement("td", null, "300"), 
                        React.createElement("td", null, React.createElement("input", {type: "text"}))
                    ), 
                    React.createElement("tr", null, 
                        React.createElement("th", null, "法律维权"), 
                        React.createElement("td", null, "500"), 
                        React.createElement("td", null, "200"), 
                        React.createElement("td", null, "100"), 
                        React.createElement("td", null, "100"), 
                        React.createElement("td", null, "300"), 
                        React.createElement("td", null, React.createElement("input", {type: "text"}))
                    ), 
                    React.createElement("tr", null, 
                        React.createElement("th", null, "市场拓展"), 
                        React.createElement("td", null, "500"), 
                        React.createElement("td", null, "200"), 
                        React.createElement("td", null, "100"), 
                        React.createElement("td", null, "100"), 
                        React.createElement("td", null, "300"), 
                        React.createElement("td", null, React.createElement("input", {type: "text"}))
                    ), 
                    React.createElement("tr", null, 
                        React.createElement("th", null, "管理咨询"), 
                        React.createElement("td", null, "500"), 
                        React.createElement("td", null, "200"), 
                        React.createElement("td", null, "100"), 
                        React.createElement("td", null, "100"), 
                        React.createElement("td", null, "300"), 
                        React.createElement("td", null, React.createElement("input", {type: "text"}))
                    ), 
                    React.createElement("tr", null, 
                        React.createElement("th", null, "检验检测认证"), 
                        React.createElement("td", null, "500"), 
                        React.createElement("td", null, "200"), 
                        React.createElement("td", null, "100"), 
                        React.createElement("td", null, "100"), 
                        React.createElement("td", null, "300"), 
                        React.createElement("td", null, React.createElement("input", {type: "text"}))
                    ), 
                    React.createElement("tr", null, 
                        React.createElement("th", null, "知识产权保护"), 
                        React.createElement("td", null, "500"), 
                        React.createElement("td", null, "200"), 
                        React.createElement("td", null, "100"), 
                        React.createElement("td", null, "100"), 
                        React.createElement("td", null, "300"), 
                        React.createElement("td", null, React.createElement("input", {type: "text"}))
                    ), 
                    React.createElement("tr", null, 
                        React.createElement("th", null, "创业辅导"), 
                        React.createElement("td", null, "500"), 
                        React.createElement("td", null, "200"), 
                        React.createElement("td", null, "100"), 
                        React.createElement("td", null, "100"), 
                        React.createElement("td", null, "300"), 
                        React.createElement("td", null, React.createElement("input", {type: "text"}))
                    ), 
                    React.createElement("tr", null, 
                        React.createElement("th", null, "公共服务"), 
                        React.createElement("td", null, "500"), 
                        React.createElement("td", null, "200"), 
                        React.createElement("td", null, "100"), 
                        React.createElement("td", null, "100"), 
                        React.createElement("td", null, "300"), 
                        React.createElement("td", null, React.createElement("input", {type: "text"}))
                    ), 
                    React.createElement("tr", null, 
                        React.createElement("th", null, "其他"), 
                        React.createElement("td", null, "500"), 
                        React.createElement("td", null, "200"), 
                        React.createElement("td", null, "100"), 
                        React.createElement("td", null, "100"), 
                        React.createElement("td", null, "300"), 
                        React.createElement("td", null, React.createElement("input", {type: "text"}))
                    )
                    )
                ), 
                React.createElement("div", {className: "text-right text-danger"}, "目前剩余配额值：5000元"), 
                React.createElement("div", {className: "text-center"}, 
                    React.createElement("button", {type: "button", className: "btn btn-primary"}, "立即调整")
                )
            )

        );
    }
});

ReactDOM.render(
    React.createElement(CouponList, null),
    document.getElementById('page')
);