var AccountProfile = React.createClass({displayName: "AccountProfile",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, {isLogin: "true"}), 
                React.createElement(Header, {activeMenuID: "mainMenuAccountProfile"}), 

                React.createElement("div", {className: "container"}, 

                    React.createElement("div", null, 
                        React.createElement("div", {className: "pull-left w-222"}, 
                            React.createElement("div", {className: "list-group"}, 
                                React.createElement("a", {href: "account_profile.html", className: "list-group-item active"}, "用户信息"), 
                                React.createElement("a", {href: "account_safety.html", className: "list-group-item"}, "账户安全")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240"}, 

                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "index.html"}, "首页")), 
                                React.createElement("li", null, React.createElement("a", {href: "account_profile.html"}, "账户设置")), 
                                React.createElement("li", {className: "active"}, "用户信息")
                            ), 

                            React.createElement("div", {className: "panel panel-default"}, 
                                React.createElement("div", {className: "panel-heading"}, "用户信息"), 
                                React.createElement("div", {className: "panel-body"}, 
                                    React.createElement("div", {className: "row"}, 
                                        React.createElement("div", {className: "col-sm-2"}, 
                                            React.createElement("div", null, 
                                                React.createElement("img", {className: "w-200", src: "../img/common/org-preview-small.jpg"})
                                            ), 
                                            React.createElement("br", null), 
                                            React.createElement("div", {className: "text-center w-200"}, 
                                                React.createElement("button", {className: "btn btn-default", type: "button", 
                                                        onClick: this.handleSave}, "更换头像"
                                                )
                                            )
                                        ), 
                                        React.createElement("div", {className: "col-sm-10 form-horizontal"}, 

                                            React.createElement("div", {className: "form-group"}, 
                                                React.createElement("div", {className: "col-sm-3 control-label"}, 
                                                    React.createElement("label", null, "账户状态")
                                                ), 
                                                React.createElement("div", {className: "col-sm-9 pt-7"}, 
                                                    React.createElement("label", null, "正常 / 冻结")
                                                )
                                            ), 
                                            React.createElement("div", {className: "form-group"}, 
                                                React.createElement("div", {className: "col-sm-3 control-label"}, 
                                                    React.createElement("label", null, "姓名")
                                                ), 
                                                React.createElement("div", {className: "col-sm-9"}, 
                                                    React.createElement("input", {type: "text", className: "form-control"})
                                                )
                                            ), 
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
                                                    React.createElement("label", null, "邮箱")
                                                ), 
                                                React.createElement("div", {className: "col-sm-9"}, 
                                                    React.createElement("input", {type: "text", className: "form-control"})
                                                )
                                            ), 
                                            React.createElement("div", {className: "form-group"}, 
                                                React.createElement("div", {className: "col-sm-3 control-label"}, 
                                                    React.createElement("label", null, "职务")
                                                ), 
                                                React.createElement("div", {className: "col-sm-9"}, 
                                                    React.createElement("select", {className: "form-control"}
                                                    )
                                                )
                                            ), 
                                            React.createElement("div", {className: "form-group"}, 
                                                React.createElement("div", {className: "col-sm-3 control-label"}, 
                                                    React.createElement("label", null, "部门")
                                                ), 
                                                React.createElement("div", {className: "col-sm-9"}, 
                                                    React.createElement("select", {className: "form-control"}
                                                    )
                                                )
                                            ), 
                                            React.createElement("div", {className: "form-group"}, 
                                                React.createElement("div", {className: "col-sm-3 control-label"}, 
                                                    React.createElement("label", null, "注册时间")
                                                ), 
                                                React.createElement("div", {className: "col-sm-9 pt-7"}, 
                                                    React.createElement("label", null, "2016-01-01 19:21:14")
                                                )
                                            ), 
                                            React.createElement("div", {className: "form-group"}, 
                                                React.createElement("div", {className: "col-sm-3 control-label"}, 
                                                    React.createElement("label", null, "最后登录时间")
                                                ), 
                                                React.createElement("div", {className: "col-sm-9 pt-7"}, 
                                                    React.createElement("label", null, "2016-01-01 19:21:14")
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
        );
    }
});

ReactDOM.render(
    React.createElement(AccountProfile, null),
    document.getElementById('page')
);
