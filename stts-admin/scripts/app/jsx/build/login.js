var Login = React.createClass({displayName: "Login",
    componentDidMount: function () {
        $.backstretch("../img/login/bg.jpg");
    },
    render: function () {
        return (
            React.createElement("div", {className: "top-content"}, 
                React.createElement("div", {id: "main", className: "container"}, 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "col-sm-8 col-sm-offset-2 text"}, 
                            React.createElement("h1", null, React.createElement("strong", null, "小微企业创业创新服务券网上平台")), 
                            React.createElement("h1", null, React.createElement("strong", null, "运营管理平台"))
                        )
                    ), 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "col-sm-6 col-sm-offset-3 form-box"}, 
                            React.createElement(LoginForm, null)
                        )
                    )
                )
            )
        );
    }
});


var LoginForm = React.createClass({displayName: "LoginForm",
    handleLogin: function () {
        location.href = "index.html";
    },
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("div", {className: "form-top"}, 
                    React.createElement("div", {className: "form-top-left"}, 
                        React.createElement("h3", null, "系统登录"), 

                        React.createElement("p", null, "请输入用户名和密码：")
                    ), 
                    React.createElement("div", {className: "form-top-right"}, 
                        React.createElement("i", {className: "fa fa-lock"})
                    )
                ), 
                React.createElement("div", {className: "form-bottom"}, 
                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("label", {className: "sr-only", htmlFor: "form-username"}, "用户名"), 
                        React.createElement("input", {ref: "inputUserName", type: "text", name: "form-username", placeholder: "请输入用户名", 
                               className: "form-username form-control"})
                    ), 
                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("label", {className: "sr-only", htmlFor: "form-password"}, "密码"), 
                        React.createElement("input", {ref: "inputPassword", type: "password", name: "form-password", placeholder: "请输入密码", 
                               className: "form-password form-control"})
                    ), 
                    React.createElement("button", {type: "button", className: "btn", onClick: this.handleLogin}, "登录")
                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(Login, null),
    document.getElementById('page')
);

