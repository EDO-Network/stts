var Qualification = React.createClass({displayName: "Qualification",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, null), 
                React.createElement(Header, {activeMenuID: "mainMenuCompany"}), 

                React.createElement("div", {className: "container"}, 

                    React.createElement("div", null, 
                        React.createElement("div", {className: "pull-left w-222"}, 
                            React.createElement("div", {className: "list-group"}, 
                                React.createElement("a", {href: "company.html", className: "list-group-item"}, "企业信息"), 
                                React.createElement("a", {href: "qualification.html", className: "list-group-item active"}, "资质审核")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240"}, 
                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "dashboard.html"}, "企业机构")), 
                                React.createElement("li", null, React.createElement("a", {href: "company.html"}, "资质审核")), 
                                React.createElement("li", {className: "active"}, "审核历史一览")
                            ), 
                            React.createElement("div", {className: "panel panel-default"}, 
                                React.createElement("div", {className: "panel-heading"}, "资质审核"), 
                                React.createElement("div", {className: "panel-body"}, 
                                    React.createElement("table", {className: "table table-hover"}, 
                                        React.createElement("thead", null, 
                                        React.createElement("tr", null, 
                                            React.createElement("th", null, "年度"), 
                                            React.createElement("th", null, "提审日期"), 
                                            React.createElement("th", null, "审核状态"), 
                                            React.createElement("th", null, "审核说明"), 
                                            React.createElement("th", null, "操作")
                                        )
                                        ), 
                                        React.createElement("tbody", null, 
                                        React.createElement("tr", null, 
                                            React.createElement("td", null, "2016"), 
                                            React.createElement("td", null, "2016-01-01"), 
                                            React.createElement("td", null, "审核未通过"), 
                                            React.createElement("td", null, "审核信息不全，请参照详细"), 
                                            React.createElement("td", null, React.createElement("a", {href: "javascript:void(0)"}, "详细"))
                                        ), 
                                        React.createElement("tr", null, 
                                            React.createElement("td", null, "2015"), 
                                            React.createElement("td", null, "2015-01-01"), 
                                            React.createElement("td", null, "审核通过"), 
                                            React.createElement("td", null, "审核认定未小微企业"), 
                                            React.createElement("td", null, React.createElement("a", {href: "javascript:void(0)"}, "详细"))
                                        )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(Qualification, null),
    document.getElementById('page')
);