var Top = React.createClass({displayName: "Top",
    render: function () {

        var top = React.createElement(TopLogout, null)
        if(this.props.isLogin == "true"){
            top = React.createElement(TopLogin, null);
        }

        return (
            top
        );
    }
});

var TopLogout = React.createClass({displayName: "TopLogout",
    render: function () {
        return (
            React.createElement("div", {className: "top-wrap"}, 
                React.createElement("div", {className: "container"}, 
                    React.createElement("ul", {className: "top-right-menu"}, 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "欢迎您")), 
                        React.createElement("li", null, React.createElement("a", {href: "page/login.html"}, "请登录")), 
                        React.createElement("li", null, React.createElement("a", {href: "page/register_user.html"}, "免费注册")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "忘记密码"))
                    )
                )
            )
        );
    }
});

var TopLogin = React.createClass({displayName: "TopLogin",
    getInitialState: function () {
        return {
            user: {
                userName: "jack",
            }
        };
    },
    render: function () {
        return (
            React.createElement("div", {className: "top-wrap"}, 
                React.createElement("div", {className: "container"}, 
                    React.createElement("ul", {className: "top-right-menu"}, 
                        React.createElement("li", null, "您好：", this.state.user.userName), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "我的平台")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "我是服务机构")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "帮助中心")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "退出"))
                    )
                )
            )
        );
    }
});