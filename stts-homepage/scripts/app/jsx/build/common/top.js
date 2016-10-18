var Top = React.createClass({displayName: "Top",
    render: function () {
        return (
            React.createElement("div", {className: "top-wrap"}, 
                React.createElement("div", {className: "container"}, 
                    React.createElement("ul", {className: "top-right-menu"}, 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "欢迎您")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "请登录")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "免费注册")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "忘记密码"))
                    )
                )
            )
        );
    }
});