var Top = React.createClass({displayName: "Top",
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
                        React.createElement("li", null, "您好：", React.createElement("a", {href: "#"}, this.state.user.userName)), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "企服超市")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "我是服务机构")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "帮助中心")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "退出"))
                    )
                )
            )
        );
    }
});