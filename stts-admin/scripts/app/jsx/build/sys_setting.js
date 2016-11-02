var CouponList = React.createClass({displayName: "CouponList",

    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, null), 
                React.createElement(Header, {activeMenuID: "mainMenuSetting"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("div", null, 
                        React.createElement("div", {className: "pull-left w-222"}, 
                            React.createElement("div", {className: "list-group"}, 
                                React.createElement("a", {href: "sys_setting.html", className: "list-group-item active"}, "系统设定")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240 overflow-hidden "}, 
                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "sys_setting.html"}, "系统设定")), 
                                React.createElement("li", {className: "active"}, "系统设定")
                            ), 

                            React.createElement("div", {className: "panel panel-default overflow-hidden"}, 
                                React.createElement("div", {className: "panel-heading"}, "系统设定"), 
                                React.createElement("div", {className: "panel-body"}, 
                                    React.createElement("table", {className: "table table-bordered mb-20"}, 
                                        React.createElement("thead", null, 
                                        React.createElement("tr", null, 
                                            React.createElement("th", null, "No"), 
                                            React.createElement("th", null, "设置项目名"), 
                                            React.createElement("th", null, "当前设定值"), 
                                            React.createElement("th", null, "变更后设定值"), 
                                            React.createElement("th", null, "上次修改时间")
                                        )
                                        ), 
                                        React.createElement("tbody", null, 
                                        React.createElement("tr", null, 
                                            React.createElement("th", null, "1"), 
                                            React.createElement("td", null, "订单受理时限"), 
                                            React.createElement("td", null, "3天"), 
                                            React.createElement("td", null, React.createElement("input", {type: "text", defaultValue: "5"})), 
                                            React.createElement("td", null, "2016-10-01 16:44:00")
                                        ), 
                                        React.createElement("tr", null, 
                                            React.createElement("th", null, "2"), 
                                            React.createElement("td", null, "交易时限"), 
                                            React.createElement("td", null, "不限"), 
                                            React.createElement("td", null, React.createElement("input", {type: "text"})), 
                                            React.createElement("td", null, "2016-10-01 16:44:00")
                                        ), 
                                        React.createElement("tr", null, 
                                            React.createElement("th", null, "3"), 
                                            React.createElement("td", null, "评价时限"), 
                                            React.createElement("td", null, "7天"), 
                                            React.createElement("td", null, React.createElement("input", {type: "text"})), 
                                            React.createElement("td", null, "2016-10-01 16:44:00")
                                        ), 
                                        React.createElement("tr", null, 
                                            React.createElement("th", null, "4"), 
                                            React.createElement("td", null, "小微企业服务券支付比例"), 
                                            React.createElement("td", null, "50%"), 
                                            React.createElement("td", null, React.createElement("input", {type: "text"})), 
                                            React.createElement("td", null, "2016-10-01 16:44:00")
                                        ), 
                                        React.createElement("tr", null, 
                                            React.createElement("th", null, "5"), 
                                            React.createElement("td", null, "小微企业服务券最大发放额"), 
                                            React.createElement("td", null, "5000元"), 
                                            React.createElement("td", null, React.createElement("input", {type: "text"})), 
                                            React.createElement("td", null, "2016-10-01 16:44:00")
                                        ), 
                                        React.createElement("tr", null, 
                                            React.createElement("th", null, "6"), 
                                            React.createElement("td", null, "小升规企业服务券最大发放额"), 
                                            React.createElement("td", null, "10000元"), 
                                            React.createElement("td", null, React.createElement("input", {type: "text"})), 
                                            React.createElement("td", null, "2016-10-01 16:44:00")
                                        ), 
                                        React.createElement("tr", null, 
                                            React.createElement("th", null, "7"), 
                                            React.createElement("td", null, "XXXX"), 
                                            React.createElement("td", null, "XXXX"), 
                                            React.createElement("td", null, React.createElement("input", {type: "text"})), 
                                            React.createElement("td", null, "2016-10-01 16:44:00")
                                        ), 
                                        React.createElement("tr", null, 
                                            React.createElement("th", null, "8"), 
                                            React.createElement("td", null, "XXXX"), 
                                            React.createElement("td", null, "XXXX"), 
                                            React.createElement("td", null, React.createElement("input", {type: "text"})), 
                                            React.createElement("td", null, "2016-10-01 16:44:00")
                                        ), 
                                        React.createElement("tr", null, 
                                            React.createElement("th", null, "9"), 
                                            React.createElement("td", null, "XXXX"), 
                                            React.createElement("td", null, "XXXX"), 
                                            React.createElement("td", null, React.createElement("input", {type: "text"})), 
                                            React.createElement("td", null, "2016-10-01 16:44:00")
                                        )
                                        )
                                    ), 
                                    React.createElement("div", {className: "text-center"}, 
                                        React.createElement("button", {type: "button", className: "btn btn-primary"}, "提交"), 
                                        "  ", 
                                        React.createElement("button", {type: "button", className: "btn btn-default"}, "返回")
                                    )
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

ReactDOM.render(
    React.createElement(CouponList, null),
    document.getElementById('page')
);