var MessageList = React.createClass({displayName: "MessageList",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, null), 
                React.createElement(Header, {activeMenuID: "mainMenuMessage"}), 

                React.createElement("div", {className: "container"}, 

                    React.createElement("ol", {className: "breadcrumb"}, 
                        React.createElement("li", null, "您所在的位置："), 
                        React.createElement("li", null, React.createElement("a", {href: "dashboard.html"}, "服务机构")), 
                        React.createElement("li", null, React.createElement("a", {href: "order_list.html"}, "我的消息"))
                    ), 
                    React.createElement("div", {className: "panel panel-default"}, 
                        React.createElement("div", {className: "panel-heading"}, "我的消息"), 
                        React.createElement("div", {className: "panel-body"}, 
                            React.createElement("div", null, 
                                React.createElement("a", {href: "#"}, "10"), " 条未读消息    ", 
                                React.createElement("button", {className: "btn btn-default"}, "清空"), 
                                "  ", 
                                React.createElement("button", {className: "btn btn-default"}, "全部标记为已读")
                            ), 
                            React.createElement("table", {className: "table table-hover"}, 
                                React.createElement("thead", null, 
                                React.createElement("tr", null, 
                                    React.createElement("th", null, "状态"), 
                                    React.createElement("th", null, "标题"), 
                                    React.createElement("th", null, "内容"), 
                                    React.createElement("th", null, "时间")
                                )
                                ), 
                                React.createElement("tbody", null, 
                                React.createElement(MessageItem, null), 
                                React.createElement(MessageItem, null), 
                                React.createElement(MessageItem, null), 
                                React.createElement(MessageItem, null), 
                                React.createElement(MessageItem, null)
                                )
                            ), 
                            React.createElement(Paging, null)
                        )
                    )
                ), 
                React.createElement(Footer, null)
            )
        );
    }
});

var MessageItem = React.createClass({displayName: "MessageItem",
    render: function () {
        return (
            React.createElement("tr", null, 
                React.createElement("td", null, 
                    "未读"
                ), 
                React.createElement("td", null, "［全网公告］服务器维护通知"), 
                React.createElement("td", null, "xxxxxxxxxxxxxxxxx"), 
                React.createElement("td", null, "2016-01-01 18:00:01")
            )
        );
    }
});

ReactDOM.render(
    React.createElement(MessageList, null),
    document.getElementById('page')
);