var ServiceList = React.createClass({displayName: "ServiceList",

    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, null), 
                React.createElement(Header, {activeMenuID: "mainMenuOrg"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("div", null, 
                        React.createElement("div", {className: "pull-left w-222"}, 
                            React.createElement("a", {href: "org_list.html", className: "list-group-item"}, "服务机构一览"), 
                            React.createElement("a", {href: "org_qualification_list.html", className: "list-group-item"}, "服务机构资质审核"), 
                            React.createElement("a", {href: "service_list.html", className: "list-group-item active"}, "服务产品一览"), 
                            React.createElement("a", {href: "service_qualification_list.html", className: "list-group-item"}, "服务产品上架")
                        ), 

                        React.createElement("div", {className: "ml-240"}, 

                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "org_list.html"}, "服务机构管理")), 
                                React.createElement("li", {className: "active"}, "服务产品一览")
                            ), 
                            React.createElement("div", {className: "overflow-hidden"}, 
                                React.createElement(ServiceListContent, null), 
                                React.createElement(Paging, null)
                            )
                        )
                    )
                ), 

                React.createElement(Footer, null)
            )
        );
    }
});

ReactDOM.render(
    React.createElement(ServiceList, null),
    document.getElementById('page')
);