var Footer = React.createClass({displayName: "Footer",
    render: function () {
        return (
            React.createElement("footer", {className: "footer bg-dark pv-10"}, 
                    React.createElement("p", {className: "text-white text-center"}, "主办：宁波市小微企业创业创新基地城市示范工作领导小组办公室"), 
                    React.createElement("p", {className: "text-white text-center"}, "技术支持：宁波中小在线信息服务有限公司")
            )
        );
    }
});