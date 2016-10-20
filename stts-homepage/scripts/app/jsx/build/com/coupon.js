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
                                React.createElement("a", {href: "coupon.html", className: "list-group-item active"}, "服务券汇总"), 
                                React.createElement("a", {href: "coupon_running.html", className: "list-group-item"}, "服务券流水")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240"}, 
                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "dashboard.html"}, "企业机构")), 
                                React.createElement("li", null, React.createElement("a", {href: "company.html"}, "服务券")), 
                                React.createElement("li", {className: "active"}, "服务券汇总")
                            ), 
                            React.createElement("div", {className: "panel panel-default"}, 
                                React.createElement("div", {className: "panel-heading"}, "服务券汇总"), 
                                React.createElement("div", {className: "panel-body"}, 
                                    React.createElement("div", {className: "alert alert-warning"}, 
                                        "2017年度服务券开始发放，请立即提交", 
                                        React.createElement("a", {href: "company.html"}, React.createElement("stong", null, "企业审核")), "，" + ' ' +
                                        "审核通过即发放服务券。"
                                    ), 
                                    React.createElement("div", {className: "row text-center"}, 
                                        React.createElement("div", {className: "col-sm-6"}, 
                                            React.createElement("img", {src: "../../img/coupon/coupon.png"})
                                        ), 
                                        React.createElement("div", {className: "col-sm-6"}, 
                                            React.createElement("img", {src: "../../img/coupon/coupon-1.png"})
                                        )
                                    )
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