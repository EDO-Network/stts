var AccountSafety = React.createClass({displayName: "AccountSafety",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, {isLogin: "true"}), 
                React.createElement(Header, {activeMenuID: "mainMenuAccountProfile"}), 

                React.createElement("div", {className: "container"}, 

                    React.createElement("ol", {className: "breadcrumb"}, 
                        React.createElement("li", null, "您所在的位置："), 
                        React.createElement("li", null, React.createElement("a", {href: "index.html"}, "首页")), 
                        React.createElement("li", null, React.createElement("a", {href: "account_profile.html"}, "账户设置")), 
                        React.createElement("li", {className: "active"}, "账户安全")
                    ), 

                    React.createElement("div", null, 
                        React.createElement("div", {className: "pull-left w-222"}, 
                            React.createElement("div", {className: "list-group"}, 
                                React.createElement("a", {href: "account_profile.html", className: "list-group-item"}, "用户信息"), 
                                React.createElement("a", {href: "account_safety.html", className: "list-group-item active"}, "账户安全")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240"}, 
                            React.createElement("div", {className: "panel panel-default"}, 
                                React.createElement("div", {className: "panel-heading"}, "账户安全"), 
                                React.createElement("div", {className: "panel-body"}, 
                                    React.createElement("div", null, 
                                        React.createElement("ul", {className: "nav nav-tabs", role: "tablist"}, 
                                            React.createElement("li", {role: "presentation", className: "active"}, React.createElement("a", {href: "#password", role: "tab", 
                                                                                          "data-toggle": "tab"}, "修改密码")
                                            ), 
                                            React.createElement("li", {role: "presentation"}, React.createElement("a", {href: "#mobile", role: "tab", 
                                                                       "data-toggle": "tab"}, "绑定手机")), 
                                            React.createElement("li", {role: "presentation"}, React.createElement("a", {href: "#mail", role: "tab", 
                                                                       "data-toggle": "tab"}, "绑定邮箱"))
                                        ), 

                                        React.createElement("div", {className: "tab-content w-400"}, 
                                            React.createElement("div", {role: "tabpanel", className: "tab-pane active", id: "password"}, 
                                                React.createElement("div", {className: "form-horizontal"}, 
                                                    React.createElement("div", {className: "form-group"}, 
                                                        React.createElement("div", {className: "col-sm-3 control-label"}, 
                                                            React.createElement("label", null, "当前密码")
                                                        ), 
                                                        React.createElement("div", {className: "col-sm-9"}, 
                                                            React.createElement("input", {type: "password", className: "form-control"})
                                                        )
                                                    ), 

                                                    React.createElement("div", {className: "form-group"}, 
                                                        React.createElement("div", {className: "col-sm-3 control-label"}, 
                                                            React.createElement("label", null, "新密码")
                                                        ), 
                                                        React.createElement("div", {className: "col-sm-9"}, 
                                                            React.createElement("input", {type: "password", className: "form-control"})
                                                        )
                                                    ), 

                                                    React.createElement("div", {className: "form-group"}, 
                                                        React.createElement("div", {className: "col-sm-3 control-label"}, 
                                                            React.createElement("label", null, "确认密码")
                                                        ), 
                                                        React.createElement("div", {className: "col-sm-9"}, 
                                                            React.createElement("input", {type: "password", className: "form-control"})
                                                        )
                                                    ), 

                                                    React.createElement("div", {className: "text-center"}, 
                                                        React.createElement("button", {className: "btn btn-primary", type: "button", 
                                                                onClick: this.handleSave}, "提 交"
                                                        ), 
                                                        " ", 
                                                        React.createElement("button", {className: "btn btn-default", type: "button", 
                                                                onClick: this.handleSave}, "返 回"
                                                        )
                                                    )
                                                )
                                            ), 
                                            React.createElement("div", {role: "tabpanel", className: "tab-pane", id: "mobile"}, 
                                                React.createElement("div", {className: "form-horizontal"}, 
                                                    React.createElement("div", {className: "form-group"}, 
                                                        React.createElement("div", {className: "col-sm-3 control-label"}, 
                                                            React.createElement("label", null, "手机号")
                                                        ), 
                                                        React.createElement("div", {className: "col-sm-9"}, 
                                                            React.createElement("input", {type: "text", className: "form-control"})
                                                        )
                                                    ), 
                                                    React.createElement("div", {className: "form-group"}, 
                                                        React.createElement("div", {className: "col-sm-3 control-label"}, 
                                                            React.createElement("label", null, "验证码")
                                                        ), 
                                                        React.createElement("div", {className: "col-sm-9"}, 
                                                            React.createElement("div", {className: "input-group"}, 
                                                                React.createElement("input", {type: "text", placeholder: "请输入验证码", 
                                                                       className: "form-control"}), 
                                                              React.createElement("span", {className: "input-group-btn"}, 
                                                                React.createElement("button", {className: "btn btn-default", type: "button"}, 
                                                                    "获取验证码"
                                                                )
                                                              )
                                                            )
                                                        )
                                                    ), 

                                                    React.createElement("div", {className: "text-center"}, 
                                                        React.createElement("button", {className: "btn btn-primary", type: "button", 
                                                                onClick: this.handleSave}, "提 交"
                                                        ), 
                                                        " ", 
                                                        React.createElement("button", {className: "btn btn-default", type: "button", 
                                                                onClick: this.handleSave}, "返 回"
                                                        )
                                                    )
                                                )
                                            ), 
                                            React.createElement("div", {role: "tabpanel", className: "tab-pane", id: "mail"}, 
                                                React.createElement("div", {className: "form-horizontal"}, 
                                                    React.createElement("div", {className: "form-group"}, 
                                                        React.createElement("div", {className: "col-sm-3 control-label"}, 
                                                            React.createElement("label", null, "邮箱")
                                                        ), 
                                                        React.createElement("div", {className: "col-sm-9"}, 
                                                            React.createElement("input", {type: "text", className: "form-control"})
                                                        )
                                                    ), 
                                                    React.createElement("div", {className: "form-group"}, 
                                                        React.createElement("div", {className: "col-sm-3 control-label"}, 
                                                            React.createElement("label", null, "验证码")
                                                        ), 
                                                        React.createElement("div", {className: "col-sm-9"}, 
                                                            React.createElement("div", {className: "input-group"}, 
                                                                React.createElement("input", {type: "text", placeholder: "请输入验证码", 
                                                                       className: "form-control"}), 
                                                              React.createElement("span", {className: "input-group-btn"}, 
                                                                React.createElement("button", {className: "btn btn-default", type: "button"}, 
                                                                    "获取验证码"
                                                                )
                                                              )
                                                            )
                                                        )
                                                    ), 

                                                    React.createElement("div", {className: "text-center"}, 
                                                        React.createElement("button", {className: "btn btn-primary", type: "button", 
                                                                onClick: this.handleSave}, "提 交"
                                                        ), 
                                                        " ", 
                                                        React.createElement("button", {className: "btn btn-default", type: "button", 
                                                                onClick: this.handleSave}, "返 回"
                                                        )
                                                    )
                                                )
                                            )
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
    React.createElement(AccountSafety, null),
    document.getElementById('page')
);
