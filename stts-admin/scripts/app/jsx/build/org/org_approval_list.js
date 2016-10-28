var OrgApprovalList = React.createClass({displayName: "OrgApprovalList",

    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, null), 
                React.createElement(Header, {activeMenuID: "mainMenuCoupon"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("div", null, 
                        React.createElement("div", {className: "pull-left w-222"}, 
                            React.createElement("div", {className: "list-group"}, 
                                React.createElement("a", {href: "org_info.html", className: "list-group-item "}, "服务机构信息"), 
                                React.createElement("a", {href: "org_approval_list.html", className: "list-group-item active"}, "服务机构资质审核")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240 overflow-hidden "}, 
                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "dashboard.html"}, "服务机构")), 
                                React.createElement("li", null, React.createElement("a", {href: "org_info.html"}, "资质审核")), 
                                React.createElement("li", {className: "active"}, "服务机构资质审核")
                            ), 


                            React.createElement(TableInfo, null)
                        )
                    )
                ), 
                React.createElement(Footer, null)
            )

        );
    }
});
var TableItem = React.createClass({displayName: "TableItem",
    render: function () {
        return (
            React.createElement("tr", null, 
                React.createElement("td", null, "2016"), 
                React.createElement("td", null, "2016-01-01 18:00:00"), 
                React.createElement("td", null, "审核通过"), 
                React.createElement("td", null, "服务机构认证通过"), 

                React.createElement("td", null

                )
            )
        );
    }
});
var TableItemx = React.createClass({displayName: "TableItemx",
    render: function () {
        return (
            React.createElement("tr", null, 

                React.createElement("td", null, "2016"), 
                React.createElement("td", null, "2016-01-01 18:00:00"), 
                React.createElement("td", null, "审核失败"), 
                React.createElement("td", null, "服务机构信息不属实"), 
                React.createElement("td", null, 
                    React.createElement("button", {className: "btn btn-info btn-xs mr-10"}, " 修改"), 
                    React.createElement("button", {className: "btn btn-warning btn-xs"}, " 再提出")
                )
            )
        );
    }
});
var TableHeader = React.createClass({displayName: "TableHeader",
    render: function () {
        return (
            React.createElement("tr", null, 
                React.createElement("th", null, "年度"), 
                React.createElement("th", null, "提出日期"), 
                React.createElement("th", null, "审核状态"), 
                React.createElement("th", null, "审核说明"), 
                React.createElement("th", null, "操作")
            )
        );
    }
});
var TableInfo = React.createClass({displayName: "TableInfo",
    render: function () {
        return (
            React.createElement("div", {className: "mt-20"}, 
                React.createElement("table", {className: "table table-hover"}, 
                    React.createElement("thead", null, 
                    React.createElement(TableHeader, null)
                    ), 
                    React.createElement("tbody", null, 
                    React.createElement(TableItem, null), 
                    React.createElement(TableItem, null), 
                    React.createElement(TableItem, null), 
                    React.createElement(TableItemx, null)
                    )
                ), 
                React.createElement(Paging, null)
            )
        );
    }
});

ReactDOM.render(
    React.createElement(OrgApprovalList, null),
    document.getElementById('page')
);