var Evaluate = React.createClass({displayName: "Evaluate",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, null), 
                React.createElement(Header, {activeMenuID: "mainMenuEvaluate"}), 

                React.createElement("div", {className: "container"}, 

                    React.createElement("div", null, 
                        React.createElement("div", {className: "pull-left w-222"}, 
                            React.createElement("div", {className: "list-group"}, 
                                React.createElement("a", {href: "evaluate_receive.html", className: "list-group-item active"}, "我收到的评价"), 
                                React.createElement("a", {href: "evaluate_send.html", className: "list-group-item"}, "我发出的评价")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240"}, 
                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "dashboard.html"}, "服务机构")), 
                                React.createElement("li", null, React.createElement("a", {href: "order_list.html"}, "我的评价")), 
                                React.createElement("li", {className: "active"}, "我收到的评价")
                            ), 
                            React.createElement("div", {className: "panel panel-default"}, 
                                React.createElement("div", {className: "panel-heading"}, "我收到的评价"), 
                                React.createElement("div", {className: "panel-body"}, 
                                    React.createElement(EvaluateStatistics, null), 
                                    React.createElement("table", {className: "table table-hover"}, 
                                        React.createElement("thead", null, 
                                        React.createElement("tr", null, 
                                            React.createElement("th", null, "评分"), 
                                            React.createElement("th", null, "评价内容"), 
                                            React.createElement("th", null, "评价企业"), 
                                            React.createElement("th", null, "服务产品"), 
                                            React.createElement("th", null, "服务分类"), 
                                            React.createElement("th", null, "评价时间")
                                        )
                                        ), 
                                        React.createElement("tbody", null, 
                                        React.createElement(EvaluateItem, null), 
                                        React.createElement(EvaluateItem, null), 
                                        React.createElement(EvaluateItem, null), 
                                        React.createElement(EvaluateItem, null), 
                                        React.createElement(EvaluateItem, null)
                                        )
                                    ), 
                                    React.createElement(Paging, null)
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

var EvaluateItem = React.createClass({displayName: "EvaluateItem",
    render: function () {
        return (
            React.createElement("tr", null, 
                React.createElement("td", null, 
                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"})
                ), 
                React.createElement("td", null, "非常优秀的企业，愉快的合作"), 
                React.createElement("td", null, "xxx 信息技术服务中心"), 
                React.createElement("td", null, "检验检测"), 
                React.createElement("td", null, "人才引培-高层培训"), 
                React.createElement("td", null, "2016-01-01 18:00:01")
            )
        );
    }
});

var EvaluateStatistics = React.createClass({displayName: "EvaluateStatistics",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("div", {className: "alert alert-success", role: "alert"}, 
                    "共30分  共10人  同行平均得分：", 
                    React.createElement("span", {className: "text-danger"}, 
                        React.createElement("i", {className: "fa fa-star", "aria-hidden": "true"}), 
                        React.createElement("i", {className: "fa fa-star", "aria-hidden": "true"}), 
                        React.createElement("i", {className: "fa fa-star", "aria-hidden": "true"}), 
                        React.createElement("i", {className: "fa fa-star", "aria-hidden": "true"}), 
                        React.createElement("i", {className: "fa fa-star", "aria-hidden": "true"})
                    )
                ), 
                React.createElement("div", {className: "col-sm-6 mb-20"}, 
                    React.createElement("table", {className: "table table-hover"}, 
                        React.createElement("tbody", null, 
                        React.createElement("tr", null, 
                            React.createElement("td", null, React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), " 5分"
                            ), 
                            React.createElement("td", null, 
                                "十分满意"
                            ), 
                            React.createElement("td", null, 
                                "4人"
                            ), 
                            React.createElement("td", null, 
                                "30%"
                            )
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                React.createElement("i", {className: "fa fa-star text-mute", "aria-hidden": "true"}), " 4分"
                            ), 
                            React.createElement("td", null, 
                                "较满意"
                            ), 
                            React.createElement("td", null, 
                                "3人"
                            ), 
                            React.createElement("td", null, 
                                "20%"
                            )
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                React.createElement("i", {className: "fa fa-star text-mute", "aria-hidden": "true"}), 
                                React.createElement("i", {className: "fa fa-star text-mute", "aria-hidden": "true"}), " 3分"
                            ), 
                            React.createElement("td", null, 
                                "一般"
                            ), 
                            React.createElement("td", null, 
                                "2人"
                            ), 
                            React.createElement("td", null, 
                                "10%"
                            )
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                React.createElement("i", {className: "fa fa-star text-mute", "aria-hidden": "true"}), 
                                React.createElement("i", {className: "fa fa-star text-mute", "aria-hidden": "true"}), 
                                React.createElement("i", {className: "fa fa-star text-mute", "aria-hidden": "true"}), " 2分"
                            ), 
                            React.createElement("td", null, 
                                "稍差"
                            ), 
                            React.createElement("td", null, 
                                "1人"
                            ), 
                            React.createElement("td", null, 
                                "0%"
                            )
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                                React.createElement("i", {className: "fa fa-star text-mute", "aria-hidden": "true"}), 
                                React.createElement("i", {className: "fa fa-star text-mute", "aria-hidden": "true"}), 
                                React.createElement("i", {className: "fa fa-star text-mute", "aria-hidden": "true"}), " 1分"
                            ), 
                            React.createElement("td", null, 
                                "特别不满意"
                            ), 
                            React.createElement("td", null, 
                                "0人"
                            ), 
                            React.createElement("td", null, 
                                "00%"
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
    React.createElement(Evaluate, null),
    document.getElementById('page')
);