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
                                React.createElement("a", {href: "index.html", className: "list-group-item"}, "统计分析"), 
                                React.createElement("a", {href: "user_list.html", className: "list-group-item active"}, "用户一览")
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
                                    React.createElement("a", {href: "#", className: "pull-right"}, "添加新用户")
                                ), 
                                React.createElement("div", {className: "panel-body"}, 
                                    React.createElement(SearchArea, null)
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
                    React.createElement("th", null, "用户ID"), 
                    React.createElement("th", null, "用户名"), 
                    React.createElement("th", null, "性别"), 
                    React.createElement("th", null, "手机号"), 
                    React.createElement("th", null, "邮箱"), 
                    React.createElement("th", null, "微信号"), 
                    React.createElement("th", null, "创建时间"), 
                    React.createElement("th", null, "更新时间")
                )
                ), 
                React.createElement("tbody", null, 
                this.props.userList.map(function (item, index) {
                    return React.createElement(UsersTableRow, {key: item.userID, siteUser: item})
                })
                )
            )
        );
    }
});

var UsersTableRow = React.createClass({displayName: "UsersTableRow",
    handleLink: function (userID) {
        sessionStorage.setItem(SessionKey.userID, userID);
        location.href = SiteProperties.clientURL + Page.user;
    },
    render: function () {
        return (
            React.createElement("tr", null, 
                React.createElement("td", null, this.props.siteUser.user.loginID), 
                React.createElement("td", null, React.createElement("a", {href: "javascript:void(0)", 
                       onClick: this.handleLink.bind(null, this.props.siteUser.userID)}, this.props.siteUser.user.userName)
                ), 
                React.createElement("td", null, SexMap[this.props.siteUser.user.sex]), 
                React.createElement("td", null, this.props.siteUser.user.mobile), 
                React.createElement("td", null, this.props.siteUser.user.email), 
                React.createElement("td", null, this.props.siteUser.user.weixinID), 
                React.createElement("td", null, new Date(this.props.siteUser.user.createTime).format('yyyy-MM-dd hh:mm:ss')), 
                React.createElement("td", null, new Date(this.props.siteUser.user.updateTime).format('yyyy-MM-dd hh:mm:ss'))
            )
        );
    }
});

ReactDOM.render(
    React.createElement(UserList, null),
    document.getElementById('page')
);