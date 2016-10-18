var OrgPreview = React.createClass({displayName: "OrgPreview",
    render: function () {
        return (
            React.createElement("div", {className: "org-preview-wrap text-center clearfix"}, 
                React.createElement("div", null, 
                    React.createElement("div", null, React.createElement("img", {className: "w-per-100", src: "img/common/org-preview.png"})), 
                    React.createElement("div", {className: "mt-5 mb-5"}, "中国信保")
                ), 
                React.createElement("div", null, 
                    React.createElement("div", null, "好评率：⭐️⭐️⭐️⭐️⭐️"), 
                    React.createElement("div", null, "认证信息：已认证"), 
                    React.createElement("div", null, "服务次数：150次")
                )
            )
        );
    }
});