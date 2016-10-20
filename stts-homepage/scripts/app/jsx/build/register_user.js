var Register = React.createClass({displayName: "Register",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, {isLogin: "false"}), 
                React.createElement(Header, {activeMenuID: "mainMenuRegisterUser"}), 

                React.createElement("div", {id: "registerForm", className: "container"}, 
                    React.createElement("h3", {className: "text-center"}, 
                        React.createElement("stong", null, "企服超市新用户注册")
                    ), 
                    React.createElement("div", {className: "registerFrame"}, 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", null, "用户名"), 
                            React.createElement("input", {ref: "inputUserName", type: "text", placeholder: "请输入用户名", className: "form-control"})
                        ), 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", null, "手机号"), 
                            React.createElement("input", {ref: "inputUserName", type: "text", placeholder: "请输入用户名", className: "form-control"})
                        ), 
                        React.createElement("div", {id: "divSendVerifyCode", className: "form-group"}, 
                            React.createElement("label", null, "验证码"), 
                            React.createElement("div", {className: "form-inline"}, 
                                React.createElement("input", {ref: "inputVerifyCode", type: "text", placeholder: "请输入验证码", className: "form-control"}), 
                                React.createElement("button", {id: "btnSendVerifyCode", type: "button", className: "btn btn-warning  width-per-40", onClick: this.handleSendVerifyCode}, 
                                    "发送验证码"
                                )
                            )
                        ), 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", null, "常用邮箱"), 
                            React.createElement("input", {ref: "inputEmail", type: "email", placeholder: "请输入邮箱地址", className: "form-control"})
                        ), 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", null, "新密码"), 
                            React.createElement("input", {ref: "inputPassword", type: "password", placeholder: "请输入密码", 
                                   className: "form-control"})
                        ), 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", null, "确认密码"), 
                            React.createElement("input", {ref: "inputPassword", type: "password", placeholder: "请再次输入密码", 
                                   className: "form-control"})
                        ), 
                        React.createElement("div", {className: "checkbox text-center"}, 
                            React.createElement("input", {type: "checkbox"}), "同意", React.createElement("a", {href: "#"}, "《企服超市平台会员服务协议》")
                        ), 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("a", {href: "login.html", className: "btn btn-primary  btn-block"}, 
                                "注册"
                            )
                        ), 

                        React.createElement("div", null, 
                            React.createElement("div", {className: "text-right"}, 
                                React.createElement("label", null, "已有账号？"), React.createElement("a", {href: "login.html"}, "立即登陆")
                            )
                        )
                    )
                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(Register, null),
    document.getElementById('page')
);

