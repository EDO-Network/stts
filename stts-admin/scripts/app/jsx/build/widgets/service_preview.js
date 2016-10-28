var ServicePreview = React.createClass({displayName: "ServicePreview",
    render: function () {
        return (
            React.createElement("div", {className: "service-preview-wrap text-center clearfix"}, 
                React.createElement("div", null, 
                    React.createElement("div", null, 
                        React.createElement("a", {href: "service_detail.html"}, 
                            React.createElement("img", {className: "w-per-100", src: "../img/common/service-preview.png"})
                        )
                    ), 
                    React.createElement("div", {className: "mt-5 mb-5"}, React.createElement("a", {href: "service_detail.html"}, "服务名称"))
                ), 
                React.createElement("div", null, 
                    React.createElement("div", {className: "pull-left"}, 
                        React.createElement("img", {className: "w-60", src: "../img/common/org-preview-small.jpg"})
                    ), 
                    React.createElement("div", {className: "ml-80 text-left"}, 
                        React.createElement("div", null, "服务费用：1000元"), 
                        React.createElement("div", null, "申请次数：100次"), 
                        React.createElement("div", {className: "text-over-ellipsis"}, "服务机构名称")
                    )
                )
            )
        );
    }
});