var Index = React.createClass({displayName: "Index",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, null), 
                React.createElement(Header, {activeMenuID: "mainMenuIndex"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("div", null, 
                        React.createElement("div", {className: "pull-left w-222"}, 
                            React.createElement("div", {className: "list-group"}, 
                                React.createElement("a", {href: "index.html", className: "list-group-item active"}, "统计分析"), 
                                React.createElement("a", {href: "user_list.html", className: "list-group-item"}, "用户一览"), 
                                React.createElement("a", {href: "notice_list.html", className: "list-group-item"}, "全网通知")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240"}, 
                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "dashboard.html"}, "运营平台")), 
                                React.createElement("li", {className: "active"}, "统计分析")
                            ), 
                            React.createElement("div", {className: "panel panel-default"}, 
                                React.createElement("div", {className: "panel-heading"}, "统计分析"), 
                                React.createElement("div", {className: "panel-body"}, 
                                    React.createElement("div", {className: "row"}, 
                                        React.createElement("div", {className: "col-sm-6"}, 
                                            React.createElement("img", {src: "../img/index/statistics_1.png"})
                                        ), 
                                        React.createElement("div", {className: "col-sm-6"}, 
                                            React.createElement("img", {src: "../img/index/statistics_2.png"})
                                        )
                                    ), 
                                    React.createElement("br", null), 
                                    React.createElement("div", null, 
                                        React.createElement("img", {src: "../img/index/statistics_3.png"})
                                    ), 
                                    React.createElement("br", null), 
                                    React.createElement("div", null, 
                                        React.createElement("img", {src: "../img/index/statistics_4.png"})
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
    React.createElement(Index, null),
    document.getElementById('page')
);