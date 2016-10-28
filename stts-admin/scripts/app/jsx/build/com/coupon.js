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
                                    
                                        //<div className="alert alert-warning">
                                        //    2017年度服务券开始发放，请立即提交
                                        //    <a href="company.html">
                                        //        <stong>企业审核</stong>
                                        //    </a>，
                                        //    审核通过即发放服务券。
                                        //</div>
                                    
                                    React.createElement("div", {className: "row text-center"}, 
                                        React.createElement("div", {className: "col-sm-6"}, 
                                            React.createElement("img", {src: "../../img/coupon/coupon.png"})
                                        ), 
                                        React.createElement("div", {className: "col-sm-6"}, 
                                            React.createElement("img", {src: "../../img/coupon/coupon-1.png"})
                                        )
                                    ), 

                                    React.createElement("div", {className: "text-center"}, 
                                        React.createElement("h2", null, "本年度申请 批次：A2017"), 

                                        React.createElement("p", null, "开始时间：2016-01-01  结束时间：2016-06-01"), 

                                        React.createElement("p", null, "倒计时：100天"), 

                                        React.createElement("button", {className: "btn btn-warning"}, "申请／申请中"), 
                                        React.createElement("hr", null), 
                                        React.createElement("h2", null, "本批次：A2017"), 

                                        React.createElement("p", null, "全网服务券实时统计")
                                    ), 
                                    React.createElement("div", {className: "statistics-wrap"}, 
                                        React.createElement("div", {className: "col-sm-4 text-center"}, 
                                            React.createElement("div", {className: "mini-stat clearfix bx-shadow bg-info"}, 
                                                React.createElement("span", {className: "mini-stat-icon"}, 
                                                    React.createElement("i", {className: "fa fa-money", "aria-hidden": "true"})
                                                ), 
                                                React.createElement("div", {className: "mini-stat-info text-right"}, 
                                                    React.createElement("span", {className: "counter"}, "324.1780 " + ' ' +
                                                        "万元"), 
                                                    "剩余总额"
                                                )
                                            )
                                        ), 
                                        React.createElement("div", {className: "col-sm-4 text-center"}, 
                                            React.createElement("div", {className: "mini-stat clearfix bx-shadow bg-purple"}, 
                                                React.createElement("span", {className: "mini-stat-icon"}, 
                                                    React.createElement("i", {className: "fa fa-money", "aria-hidden": "true"})
                                                ), 
                                                React.createElement("div", {className: "mini-stat-info text-right"}, 
                                                    React.createElement("span", {className: "counter"}, "324.1780 " + ' ' +
                                                        "万元"), 
                                                    "交易总额"
                                                )
                                            )
                                        ), 
                                        React.createElement("div", {className: "col-sm-4 text-center"}, 
                                            React.createElement("div", {className: "mini-stat clearfix bx-shadow bg-success"}, 
                                                React.createElement("span", {className: "mini-stat-icon"}, 
                                                    React.createElement("i", {className: "fa fa-money", "aria-hidden": "true"})
                                                ), 
                                                React.createElement("div", {className: "mini-stat-info text-right"}, 
                                                    React.createElement("span", {className: "counter"}, "324.1780 " + ' ' +
                                                        "万元"), 
                                                    "兑付总额"
                                                )
                                            )
                                        )
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
    React.createElement(Coupon, null),
    document.getElementById('page')
);