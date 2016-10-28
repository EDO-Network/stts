var Dashboard = React.createClass({displayName: "Dashboard",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, null), 
                React.createElement(Header, {activeMenuID: "mainMenuDashboard"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("ol", {className: "breadcrumb"}, 
                        React.createElement("li", null, "您所在的位置："), 
                        React.createElement("li", null, React.createElement("a", {href: "dashboard.html"}, "企业机构")), 
                        React.createElement("li", {className: "active"}, "我的平台")
                    ), 
                    React.createElement("div", {className: "text-center"}, 
                        React.createElement("div", {className: "row mb-20"}, 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("img", {src: "../../img/com/dashboard_1.png"}), 

                                React.createElement("p", null, "过期预警：2000 元服务券即将在2006年12月31日过期")
                            ), 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("img", {src: "../../img/com/dashboard_2.png"})
                            )
                        ), 

                        React.createElement("div", {className: "mb-20"}, 
                            React.createElement("div", {className: "panel panel-info"}, 
                                React.createElement("div", {className: "panel-heading"}, "最新消息"), 
                                React.createElement("div", {className: "panel-body"}, 

                                    React.createElement(NoticeItem, null), 
                                    React.createElement(NoticeItem, null), 
                                    React.createElement(NoticeItem, null), 
                                    React.createElement(NoticeItem, null)
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

var NoticeItem = React.createClass({displayName: "NoticeItem",
    render: function () {
        return (
            React.createElement("div", {className: "panel panel-default"}, 
                React.createElement("div", {className: "panel-heading"}, "2016-01-01 18:18:10"), 
                React.createElement("div", {className: "panel-body"}, 
                    React.createElement("div", null, "系统维护通知"), 
                    React.createElement("hr", null), 
                    React.createElement("div", null, "2016-01-01 23:00:00 系统进入升级维护，请务进行敏感操作。")
                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(Dashboard, null),
    document.getElementById('page')
);