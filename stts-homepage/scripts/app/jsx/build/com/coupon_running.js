var Coupon = React.createClass({displayName: "Coupon",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, null), 
                React.createElement(Header, {activeMenuID: "mainMenuCoupon"}), 

                React.createElement("div", {className: "container"}, 

                    React.createElement("div", null, 
                        React.createElement("div", {className: "pull-left w-222"}, 
                            React.createElement("div", {className: "list-group"}, 
                                React.createElement("a", {href: "coupon.html", className: "list-group-item"}, "服务券汇总"), 
                                React.createElement("a", {href: "coupon_running.html", className: "list-group-item active"}, "服务券流水")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240"}, 
                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "dashboard.html"}, "企业机构")), 
                                React.createElement("li", null, React.createElement("a", {href: "company.html"}, "服务券")), 
                                React.createElement("li", {className: "active"}, "服务券流水")
                            ), 
                            React.createElement("div", {className: "panel panel-default"}, 
                                React.createElement("div", {className: "panel-heading"}, "服务券流水"), 
                                React.createElement("div", {className: "panel-body"}, 
                                    React.createElement("div", {className: "row form-horizontal"}, 
                                        React.createElement("div", {className: "col-sm-3"}, 
                                            React.createElement("div", {className: "form-group"}, 
                                                React.createElement("div", {className: "control-label col-sm-4"}, 
                                                    React.createElement("label", null, "时间")
                                                ), 
                                                React.createElement("div", {className: "col-sm-8"}, 
                                                    React.createElement("select", {className: "form-control"}, 
                                                        React.createElement("option", null, "全部"), 
                                                        React.createElement("option", null, "1年以内"), 
                                                        React.createElement("option", null, "2年以内"), 
                                                        React.createElement("option", null, "3年以内")
                                                    )
                                                )
                                            )
                                        ), 
                                        React.createElement("div", {className: "col-sm-3"}, 
                                            React.createElement("div", {className: "form-group"}, 
                                                React.createElement("div", {className: "control-label col-sm-4"}, 
                                                    React.createElement("label", null, "流向")
                                                ), 
                                                React.createElement("div", {className: "col-sm-8"}, 
                                                    React.createElement("select", {className: "form-control"}, 
                                                        React.createElement("option", null, "全部"), 
                                                        React.createElement("option", null, "收入"), 
                                                        React.createElement("option", null, "支出")
                                                    )
                                                )
                                            )
                                        ), 
                                        React.createElement("div", {className: "col-sm-4"}, 
                                            React.createElement("div", {className: "form-group"}, 
                                                React.createElement("div", {className: "control-label col-sm-4"}, 
                                                    React.createElement("label", null, "金额")
                                                ), 

                                                React.createElement("div", {className: "col-sm-8"}, 
                                                    React.createElement("div", {className: "input-group"}, 
                                                        React.createElement("input", {type: "text", className: "form-control"}), 
                                                        React.createElement("span", {
                                                            className: "input-group-addon bg-clear border-clear"}, "~"), 
                                                        React.createElement("input", {type: "text", className: "form-control"}), 
                                                        React.createElement("span", {
                                                            className: "input-group-addon bg-clear border-clear"}, "元")
                                                    )
                                                )
                                            )
                                        ), 
                                        React.createElement("div", {className: "col-sm-2"}, 
                                            React.createElement("button", {type: "button", className: "btn btn-default"}, "搜 索")
                                        )
                                    ), 
                                    React.createElement("table", {className: "table table-hover"}, 
                                        React.createElement("thead", null, 
                                        React.createElement("tr", null, 
                                            React.createElement("th", null, "日期"), 
                                            React.createElement("th", null, "批次"), 
                                            React.createElement("th", null, "收入"), 
                                            React.createElement("th", null, "支出"), 
                                            React.createElement("th", null, "说明"), 
                                            React.createElement("th", null, "关联订单号")
                                        )
                                        ), 
                                        React.createElement("tbody", null, 
                                        React.createElement("tr", null, 
                                            React.createElement("td", null, "2016-10-01"), 
                                            React.createElement("td", null, "2016-1"), 
                                            React.createElement("td", null), 
                                            React.createElement("td", null, "1000"), 
                                            React.createElement("td", null, "购买服务"), 
                                            React.createElement("td", null, React.createElement("a", {href: "javascript:void(0)"}, "201610010001"))
                                        ), 
                                        React.createElement("tr", null, 
                                            React.createElement("td", null, "2016-09-01"), 
                                            React.createElement("td", null, "2016-1"), 
                                            React.createElement("td", null), 
                                            React.createElement("td", null, "1000"), 
                                            React.createElement("td", null, "购买服务"), 
                                            React.createElement("td", null, React.createElement("a", {href: "javascript:void(0)"}, "201610010001"))
                                        ), 
                                        React.createElement("tr", null, 
                                            React.createElement("td", null, "2016-09-01"), 
                                            React.createElement("td", null, "2016-1"), 
                                            React.createElement("td", null), 
                                            React.createElement("td", null, "1000"), 
                                            React.createElement("td", null, "购买服务"), 
                                            React.createElement("td", null, React.createElement("a", {href: "javascript:void(0)"}, "201610010001"))
                                        ), 
                                        React.createElement("tr", null, 
                                            React.createElement("td", null, "2016-09-01"), 
                                            React.createElement("td", null, "2016-1"), 
                                            React.createElement("td", null), 
                                            React.createElement("td", null, "1000"), 
                                            React.createElement("td", null, "购买服务"), 
                                            React.createElement("td", null, React.createElement("a", {href: "javascript:void(0)"}, "201610010001"))
                                        ), 
                                        React.createElement("tr", null, 
                                            React.createElement("td", null, "2016-09-01"), 
                                            React.createElement("td", null, "2016-1"), 
                                            React.createElement("td", null), 
                                            React.createElement("td", null, "1000"), 
                                            React.createElement("td", null, "购买服务"), 
                                            React.createElement("td", null, React.createElement("a", {href: "javascript:void(0)"}, "201610010001"))
                                        ), 
                                        React.createElement("tr", null, 
                                            React.createElement("td", null, "2016-09-01"), 
                                            React.createElement("td", null, "2016-1"), 
                                            React.createElement("td", null), 
                                            React.createElement("td", null, "1000"), 
                                            React.createElement("td", null, "购买服务"), 
                                            React.createElement("td", null, React.createElement("a", {href: "javascript:void(0)"}, "201610010001"))
                                        ), 
                                        React.createElement("tr", null, 
                                            React.createElement("td", null, "2016-09-01"), 
                                            React.createElement("td", null, "2016-1"), 
                                            React.createElement("td", null), 
                                            React.createElement("td", null, "1000"), 
                                            React.createElement("td", null, "购买服务"), 
                                            React.createElement("td", null, React.createElement("a", {href: "javascript:void(0)"}, "201610010001"))
                                        ), 
                                        React.createElement("tr", null, 
                                            React.createElement("td", null, "2016-09-01"), 
                                            React.createElement("td", null, "2016-1"), 
                                            React.createElement("td", null), 
                                            React.createElement("td", null, "1000"), 
                                            React.createElement("td", null, "购买服务"), 
                                            React.createElement("td", null, React.createElement("a", {href: "javascript:void(0)"}, "201610010001"))
                                        ), 
                                        React.createElement("tr", null, 
                                            React.createElement("td", null, "2016-09-01"), 
                                            React.createElement("td", null, "2016-1"), 
                                            React.createElement("td", null), 
                                            React.createElement("td", null, "1000"), 
                                            React.createElement("td", null, "购买服务"), 
                                            React.createElement("td", null, React.createElement("a", {href: "javascript:void(0)"}, "201610010001"))
                                        ), 
                                        React.createElement("tr", null, 
                                            React.createElement("td", null, "2016-01-01"), 
                                            React.createElement("td", null, "2016-1"), 
                                            React.createElement("td", null, "1000"), 
                                            React.createElement("td", null), 
                                            React.createElement("td", null, "系统发放服务券"), 
                                            React.createElement("td", null, React.createElement("a", {href: "javascript:void(0)"}))
                                        )
                                        )
                                    ), 
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

ReactDOM.render(
    React.createElement(Coupon, null),
    document.getElementById('page')
);