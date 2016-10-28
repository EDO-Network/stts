var OrgCard = React.createClass({displayName: "OrgCard",
    render: function () {
        return (

        React.createElement("div", {className: "panel panel-info"}, 
            React.createElement("div", {className: "panel-heading"}, "服务机构名片"), 
            React.createElement("div", {className: "panel-body"}, 
                React.createElement("p", null, React.createElement("img", {className: "w-per-100", src: "../img/sample/org_preview.png"})), 
                React.createElement("p", null, "累计评价：", 
                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"})
                ), 
                React.createElement("p", null, "联系地址：宁波市海曙区中山东路145号"), 
                React.createElement("p", null, "机构名称：中国出口信用保险公司"), 
                React.createElement("p", null, "认证状态：", React.createElement("span", {className: "label label-success"}, "已认证")), 
                React.createElement("a", {href: "org_detail.html", className: "btn btn-default btn-block"}, "进入服务机构主页")
            )
        )
        );
    }
});