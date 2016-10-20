var ServiceDetail = React.createClass({displayName: "ServiceDetail",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, {isLogin: "true"}), 
                React.createElement(Header, {activeMenuID: "mainMenuService"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("ol", {className: "breadcrumb"}, 
                        React.createElement("li", null, "您所在的位置："), 
                        React.createElement("li", null, React.createElement("a", {href: "index.html"}, "首页")), 
                        React.createElement("li", null, React.createElement("a", {href: "service_list.html"}, "服务产品")), 
                        React.createElement("li", {className: "active"}, "服务详细")
                    ), 
                    React.createElement("div", {className: "left-area-wrap"}
                    ), 
                    React.createElement("div", {className: "right-area-wrap"}
                    )
                )
            )
        );
    }
});

var ServiceItem = React.createClass({displayName: "ServiceItem",
    render: function () {
        return (
            React.createElement("div", {className: "overflow-hidden border-bottom-dotted mb-10 pv-10"}, 
                React.createElement("div", {className: "col-sm-2"}, 
                    React.createElement("img", {src: "../img/sample/service_small.jpg"})
                ), 
                React.createElement("div", {className: "col-sm-4 border-right-dotted"}, 
                    React.createElement("div", null, React.createElement("a", {href: "#"}, "财务审计")), 
                    React.createElement("br", null), 
                    React.createElement("div", null, React.createElement("a", {href: "#"}, "中国出口信用保险公司"))
                ), 
                React.createElement("div", {className: "col-sm-3 border-right-dotted"}, 
                    React.createElement("div", null, "服务分类：财务指导"), 
                    React.createElement("br", null), 
                    React.createElement("div", null, "服务价格：1000元")
                ), 
                React.createElement("div", {className: "col-sm-3"}, 
                    React.createElement("div", null, "申请次数：14次"), 
                    React.createElement("br", null), 
                    React.createElement("div", null, "好评率：", 
                        React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                        React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                        React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                        React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"}), 
                        React.createElement("i", {className: "fa fa-star text-gold", "aria-hidden": "true"})
                    )
                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(ServiceDetail, null),
    document.getElementById('page')
);