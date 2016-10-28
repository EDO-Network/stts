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
                                React.createElement("a", {href: "evaluate_receive.html", className: "list-group-item "}, "我收到的评价"), 
                                React.createElement("a", {href: "evaluate_send.html", className: "list-group-item active"}, "我发出的评价")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240"}, 
                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "dashboard.html"}, "服务机构")), 
                                React.createElement("li", null, React.createElement("a", {href: "order_list.html"}, "我的评价")), 
                                React.createElement("li", {className: "active"}, "我发出的评价")
                            ), 
                            React.createElement("div", {className: "panel panel-default"}, 
                                React.createElement("div", {className: "panel-heading"}, "我发出的评价"), 
                                React.createElement("div", {className: "panel-body"}, 
                                    React.createElement("table", {className: "table table-hover"}, 
                                        React.createElement("thead", null, 
                                        React.createElement("tr", null, 
                                            React.createElement("th", null, "评价星级"), 
                                            React.createElement("th", null, "评价内容"), 
                                            React.createElement("th", null, "企业"), 
                                            React.createElement("th", null, "服务产品"), 
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
                React.createElement("td", null, "2016-01-01 18:00:01")
            )
        );
    }
});

ReactDOM.render(
    React.createElement(Evaluate, null),
    document.getElementById('page')
);