var OrgList = React.createClass({displayName: "OrgList",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, {isLogin: "true"}), 
                React.createElement(Header, {activeMenuID: "mainMenuOrg"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("div", {className: "pull-left w-222"}, 
                        React.createElement(OrgHot, null)
                    ), 
                    React.createElement("div", {className: "ml-240"}, 
                        React.createElement("ol", {className: "breadcrumb"}, 
                            React.createElement("li", null, "您所在的位置："), 
                            React.createElement("li", null, React.createElement("a", {href: "index.html"}, "首页")), 
                            React.createElement("li", null, React.createElement("a", {href: "service_org.html"}, "服务机构")), 
                            React.createElement("li", {className: "active"}, "服务机构一览")
                        ), 
                        React.createElement(OrgSearchArea, null), 
                        React.createElement(OrgItem, null), 
                        React.createElement(OrgItem, null), 
                        React.createElement(OrgItem, null), 
                        React.createElement(OrgItem, null), 
                        React.createElement(OrgItem, null), 
                        React.createElement(Paging, null)
                    )
                )
            )
        );
    }
});

var OrgHot = React.createClass({displayName: "OrgHot",
    render: function () {
        return (
            React.createElement("div", {className: "panel panel-info"}, 
                React.createElement("div", {className: "panel-heading"}, "热门机构"), 
                React.createElement("div", {className: "panel-body"}, 
                    React.createElement(OrgPreview, null), 
                    React.createElement(OrgPreview, null), 
                    React.createElement(OrgPreview, null), 
                    React.createElement(OrgPreview, null), 
                    React.createElement(OrgPreview, null)
                )
            )
        );
    }
});

var OrgSearchArea = React.createClass({displayName: "OrgSearchArea",
    render: function () {
        return (
            React.createElement("div", {className: "panel panel-default overflow-hidden"}, 
                React.createElement("div", {className: "panel-body"}, 
                    React.createElement("div", {className: "row mb-10"}, 
                        React.createElement("div", {className: "col-sm-6"}, 
                            React.createElement("div", {className: "input-group"}, 
                                React.createElement("input", {type: "text", className: "form-control"}), 
                                    React.createElement("span", {className: "input-group-btn"}, 
                                    React.createElement("button", {className: "btn btn-default", type: "button"}, "搜 索")
                                    )
                            )
                        )
                    )
                )
            )
        );
    }
});


var OrgItem = React.createClass({displayName: "OrgItem",
    render: function () {
        return (
            React.createElement("div", {className: "overflow-hidden border-bottom-dotted mb-10 pv-10"}, 
                React.createElement("div", {className: "col-sm-2"}, 
                    React.createElement("img", {src: "../img/sample/org_small.jpg"})
                ), 
                React.createElement("div", {className: "col-sm-4 border-right-dotted"}, 
                    React.createElement("div", null, React.createElement("a", {href: "#"}, "中国出口信用保险公司")), 
                    React.createElement("br", null), 

                    React.createElement("div", null, "宁波市海曙区中山东路145号")
                ), 
                React.createElement("div", {className: "col-sm-3 border-right-dotted"}, 
                    React.createElement("div", null, "服务产品数：6个"), 
                    React.createElement("br", null), 

                    React.createElement("div", null, "服务次数：114次")
                ), 
                React.createElement("div", {className: "col-sm-3"}, 
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
    React.createElement(OrgList, null),
    document.getElementById('page')
);