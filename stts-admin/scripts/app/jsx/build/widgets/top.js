var Top = React.createClass({displayName: "Top",
    getInitialState: function () {
        return {
            user: {
                company: "中国海峡人才市场宁波分部",
                userName: "jack",
            }
        };
    },
    render: function () {
        return (
            React.createElement("div", {className: "top-wrap"}, 
                React.createElement("div", {className: "container"}, 
                    React.createElement("ul", {className: "top-left-menu"}, 
                        React.createElement("li", null, "小微企业创业创新服务券网上平台-运营管理后台")
                    ), 
                    React.createElement("ul", {className: "top-right-menu"}, 
                        React.createElement("li", null, "您好：", this.state.user.userName), 
                        React.createElement("li", null), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "进入企服超市")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "帮助中心")), 
                        React.createElement("li", null, React.createElement("a", {href: "login.html"}, "退出"))
                    )
                )
            )
        );
    }
});
