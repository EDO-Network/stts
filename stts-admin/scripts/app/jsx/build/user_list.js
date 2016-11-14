var UserList = React.createClass({displayName: "UserList",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, null), 
                React.createElement(Header, {activeMenuID: "mainMenuIndex"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("div", null, 
                        React.createElement("div", {className: "pull-left w-222"}, 
                            React.createElement("div", {className: "list-group"}, 
                                React.createElement("a", {href: "index.html", className: "list-group-item"}, "运营平台"), 
                                React.createElement("a", {href: "user_list.html", className: "list-group-item active"}, "用户一览"), 
                                React.createElement("a", {href: "notice_list.html", className: "list-group-item"}, "全网通知")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240"}, 
                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "dashboard.html"}, "运营平台")), 
                                React.createElement("li", {className: "active"}, "用户一览")
                            ), 
                            React.createElement("div", {className: "panel panel-default"}, 
                                React.createElement("div", {className: "panel-heading"}, 
                                    "用户一览", 
                                    React.createElement("a", {href: "user_create.html", className: "pull-right"}, "添加新用户")
                                ), 
                                React.createElement("div", {className: "panel-body"}, 
                                    React.createElement(SearchArea, null), 
                                    React.createElement(UsersTable, null), 
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

var SearchArea = React.createClass({displayName: "SearchArea",
    render: function () {
        return (
            React.createElement("div", {className: "row form-horizontal font-size-12"}, 
                React.createElement("div", {className: "col-sm-3 form-group"}, 
                    React.createElement("label", {className: "control-label col-sm-5"}, "用户级别"), 

                    React.createElement("div", {className: "col-sm-7"}, 
                        React.createElement("select", {className: "form-control"}, 
                            React.createElement("option", null, "普通用户"), 
                            React.createElement("option", null, "一般管理员"), 
                            React.createElement("option", null, "系统管理员")
                        )
                    )
                ), 
                React.createElement("div", {className: "col-sm-3 form-group"}, 
                    React.createElement("label", {className: "control-label col-sm-5"}, "用户名"), 

                    React.createElement("div", {className: "col-sm-7"}, 
                        React.createElement("input", {type: "text", className: "form-control"})
                    )
                ), 
                React.createElement("div", {className: "col-sm-3 form-group"}, 
                    React.createElement("label", {className: "control-label col-sm-5"}, "真实姓名"), 

                    React.createElement("div", {className: "col-sm-7"}, 
                        React.createElement("input", {type: "text", className: "form-control"})
                    )
                ), 
                React.createElement("div", {className: "col-sm-3 form-group"}, 
                    React.createElement("label", {className: "control-label col-sm-5"}, "手机号"), 

                    React.createElement("div", {className: "col-sm-7"}, 
                        React.createElement("input", {type: "text", className: "form-control"})
                    )
                ), 
                React.createElement("button", {type: "button", className: "btn btn-default btn-sm"}, "搜 索")
            )
        );
    }
});

var UsersTable = React.createClass({displayName: "UsersTable",
    render: function () {
        return (
            React.createElement("table", {className: "table table-hover"}, 
                React.createElement("thead", null, 
                React.createElement("tr", null, 
                    React.createElement("th", null, "用户名"), 
                    React.createElement("th", null, "真实姓名"), 
                    React.createElement("th", null, "绑定手机号"), 
                    React.createElement("th", null, "用户级别"), 
                    React.createElement("th", null, "是否激活"), 
                    React.createElement("th", null, "操作")
                )
                ), 
                React.createElement("tbody", null, 
                React.createElement(AdminRow, null), 
                React.createElement(UsersTableRow, null), 
                React.createElement(UsersTableRow, null), 
                React.createElement(UsersTableRow, null), 
                React.createElement(UsersTableRow, null)
                )
            )
        );
    }
});

var AdminRow = React.createClass({displayName: "AdminRow",
    render: function () {
        return (
            React.createElement("tr", null, 
                React.createElement("td", null, "administrator［当前用户］"), 
                React.createElement("td", null, "张XX"), 
                React.createElement("td", null, "13512341234"), 
                React.createElement("td", null, "系统管理员"), 
                React.createElement("td", null, "是"), 
                React.createElement("td", {className: "text-mute"}, 
                    "修改 |" + ' ' +
                    "升级 |" + ' ' +
                    "降级 |" + ' ' +
                    "激活 |" + ' ' +
                    "禁止 |" + ' ' +
                    "删除"
                )
            )
        );
    }
});

var UsersTableRow = React.createClass({displayName: "UsersTableRow",
    render: function () {
        return (
            React.createElement("tr", null, 
                React.createElement("td", null, "xxx"), 
                React.createElement("td", null, "李XX"), 
                React.createElement("td", null, "13512341234"), 
                React.createElement("td", null, "一般管理员"), 
                React.createElement("td", null, "是"), 
                React.createElement("td", null, 
                    React.createElement("a", {href: "user_detail.html"}, "修改"), " |", 
                    React.createElement("a", {href: "#"}, "升级"), " |", 
                    React.createElement("a", {href: "#"}, "降级"), " |", 
                    React.createElement("a", {href: "#"}, "激活"), " |", 
                    React.createElement("a", {href: "#"}, "禁止"), " |", 
                    React.createElement("a", {href: "#"}, "删除")
                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(UserList, null),
    document.getElementById('page')
);