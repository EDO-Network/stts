var OrgCard = React.createClass({displayName: "OrgCard",
    render: function () {
        return (
            React.createElement("div", {className: "org-preview-wrap text-center clearfix mb-10"}, 
                React.createElement("div", null, 
                    React.createElement("div", null, React.createElement("img", {className: "w-per-100", src: "../img/sample/org-preview.png"})), 
                    React.createElement("div", {className: "mt-5 mb-5"}, "中国信保")
                ), 
                React.createElement("div", null, 
                    React.createElement("div", null, "好评率：", 
                        React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                        React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                        React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                        React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                        React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"})
                    ), 
                    React.createElement("div", null, "认证信息：已认证"), 
                    React.createElement("div", null, "服务次数：150次")
                )
            )
        );
    }
});