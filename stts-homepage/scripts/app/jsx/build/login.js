var Login = React.createClass({displayName: "Login",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, null), 
                React.createElement(Header, {activeMenuID: "mainMenuLogin"}), 
                React.createElement(LoginForm, null)
            )
        );
    }
});


var LoginForm = React.createClass({displayName: "LoginForm",
    render: function () {
        return (
            React.createElement("div", {className: "login-form hot-tab-wrap mt-20"}, 
                React.createElement("ul", {className: "nav nav-tabs login-tabs", role: "tablist"}, 
                    React.createElement("li", {role: "presentation", className: "active"}, React.createElement("a", {href: "#verify", role: "tab", "data-toggle": "tab"}, "验证码登录")
                    ), 
                    React.createElement("li", {role: "presentation"}, React.createElement("a", {href: "#password", role: "tab", "data-toggle": "tab"}, "密码登录"))
                ), 

                React.createElement("div", {className: "tab-content login-frame"}, 
                    React.createElement("div", {role: "tabpanel", className: "tab-pane active", id: "verify"}, 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", null, "手机号"), 
                            React.createElement("input", {type: "text", placeholder: "请输入手机号", className: "form-control"})
                        ), 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", null, "验证码"), 

                            React.createElement("div", {className: "input-group"}, 
                                React.createElement("input", {type: "text", placeholder: "请输入验证码", 
                                       className: "form-control"}), 
                                  React.createElement("span", {className: "input-group-btn"}, 
                                    React.createElement("button", {className: "btn btn-default", type: "button"}, "获取验证码")
                                  )
                            )
                        ), 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("button", {type: "button", className: "btn btn-primary btn-block", 
                                    onClick: this.handleLogin}, 
                                "登录"
                            )
                        )
                    ), 
                    React.createElement("div", {role: "tabpanel", className: "tab-pane", id: "password"}, 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", null, "手机号"), 
                            React.createElement("input", {type: "text", placeholder: "请输入手机号", className: "form-control"})
                        ), 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", null, "密码"), 

                            React.createElement("div", {className: "pull-right"}, 
                                React.createElement("a", {href: "#"}, "忘记密码？")
                            ), 
                            React.createElement("input", {ref: "inputPassword", type: "password", placeholder: "请输入密码", 
                                   className: "form-control"})
                        ), 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("button", {type: "button", className: "btn btn-primary btn-block", 
                                    onClick: this.handleLogin}, 
                                "登录"
                            )
                        )
                    )
                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(Login, null),
    document.getElementById('page')
);

