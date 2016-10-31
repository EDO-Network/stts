var User = React.createClass({displayName: "User",
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
                                React.createElement("a", {href: "user_list.html", className: "list-group-item active"}, "用户一览")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240"}, 
                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "dashboard.html"}, "运营平台")), 
                                React.createElement("li", null, React.createElement("a", {href: "user_list.html"}, "用户一览")), 
                                React.createElement("li", {className: "active"}, "用户详细")
                            ), 
                            React.createElement("div", {className: "panel panel-default"}, 
                                React.createElement("div", {className: "panel-heading"}, "用户详细"), 

                                React.createElement("div", {className: "panel-body"}, 
                                    React.createElement(UserForm, null)
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

var UserForm = React.createClass({displayName: "UserForm",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("div", {className: "col-sm-6 form-horizontal"}, 
                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("label", {className: "col-sm-3 control-label"}, "用户ID"), 

                        React.createElement("div", {className: "col-sm-9 pt-7"}, 
                            "ABC123"
                        )
                    ), 
                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("label", {className: "col-sm-3 control-label"}, "用户名"), 

                        React.createElement("div", {className: "col-sm-9 pt-7"}, 
                            "ABC123"
                        )
                    ), 
                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("label", {className: "col-sm-3 control-label"}, "真实姓名"), 

                        React.createElement("div", {className: "col-sm-9 pt-7"}, 
                            "张XX"
                        )
                    ), 
                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("label", {className: "col-sm-3 control-label"}, "手机号"), 

                        React.createElement("div", {className: "col-sm-9"}, 
                            React.createElement("input", {type: "text", className: "form-control"})
                        )
                    ), 
                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("label", {className: "col-sm-3 control-label"}, "密码"), 

                        React.createElement("div", {className: "col-sm-9"}, 
                            React.createElement("input", {type: "password", className: "form-control"})
                        )
                    ), 
                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("label", {className: "col-sm-3 control-label"}, "确认密码"), 

                        React.createElement("div", {className: "col-sm-9"}, 
                            React.createElement("input", {type: "password", className: "form-control"})
                        )
                    ), 
                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("label", {className: "col-sm-3 control-label"}, "帐号级别"), 

                        React.createElement("div", {className: "col-sm-9"}, 
                            React.createElement("label", {className: "radio-inline"}, 
                                React.createElement("input", {type: "radio", name: "radioUserRole"}), " 系统管理员"
                            ), 
                            React.createElement("label", {className: "radio-inline"}, 
                                React.createElement("input", {type: "radio", name: "radioUserRole"}), " 一般管理员"
                            ), 
                            React.createElement("label", {className: "radio-inline"}, 
                                React.createElement("input", {type: "radio", name: "radioUserRole"}), " 普通用户"
                            )
                        )
                    ), 
                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("label", {className: "col-sm-3 control-label"}, "是否激活"), 

                        React.createElement("div", {className: "col-sm-9"}, 
                            React.createElement("label", {className: "radio-inline"}, 
                                React.createElement("input", {type: "radio", name: "radioUserEffective"}), " 激活"
                            ), 
                            React.createElement("label", {className: "radio-inline"}, 
                                React.createElement("input", {type: "radio", name: "radioUserEffective"}), " 禁止"
                            )
                        )
                    ), 
                    React.createElement("div", {className: "form-group text-center"}, 
                        React.createElement("button", {type: "button", className: "btn btn-primary"}, "保存修改")
                    )
                ), 

                React.createElement("div", {className: "col-sm-6 form-horizontal"}, 
                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("label", {className: "col-sm-3 control-label"}, "头像"), 

                        React.createElement("div", {className: "col-sm-9"}, 
                            React.createElement("img", {src: "../img/sample/photo.jpg", className: "w-100"})
                        )
                    ), 

                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("label", {className: "col-sm-3 control-label"}), 

                        React.createElement("div", {className: "col-sm-9"}, 
                            React.createElement("img", {src: "../img/sample/photo.jpg", className: "w-50"}), "  ", 
                            React.createElement("img", {src: "../img/sample/photo.jpg", className: "w-50"}), "  ", 
                            React.createElement("img", {src: "../img/sample/photo.jpg", className: "w-50"}), "  ", 
                            React.createElement("img", {src: "../img/sample/photo.jpg", className: "w-50"}), "  ", 
                            React.createElement("img", {src: "../img/sample/photo.jpg", className: "w-50"})
                        )
                    ), 
                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("label", {className: "col-sm-3 control-label"}), 

                        React.createElement("div", {className: "col-sm-9"}, 
                            React.createElement("button", {type: "button", className: "btn btn-default"}, "上传")
                        )
                    )
                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(User, null),
    document.getElementById('page')
);
