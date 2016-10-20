var OrderList = React.createClass({displayName: "OrderList",

    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, null), 
                React.createElement(Header, {activeMenuID: "服务产品"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("div", null, 
                        React.createElement("div", {className: "pull-left w-222"}, 
                            React.createElement("div", {className: "list-group"}, 
                                React.createElement("a", {href: "service_list.html", className: "list-group-item active"}, "服务一览"), 

                                React.createElement("a", {href: "service_create.html", className: "list-group-item"}, "服务发布")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240 overflow-hidden "}, 
                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "dashboard.html"}, "服务机构")), 
                                React.createElement("li", null, React.createElement("a", {href: "service_list.html"}, "服务产品")), 
                                React.createElement("li", {className: "active"}, "服务一览")
                            ), 

                            React.createElement("ul", {className: "nav nav-tabs text-center", role: "tablist", style: {width:"100%"}}, 
                                React.createElement("li", {role: "presentation", className: "tab active", style: {width:"25%"}}, 
                                    React.createElement("a", {href: "#all", role: "tab", "data-toggle": "tab"}, "全部")
                                ), 
                                React.createElement("li", {role: "presentation", style: {width:"25%"}}, 
                                    React.createElement("a", {href: "#onSale", role: "tab", "data-toggle": "tab"}, "上架", 
                                        React.createElement("span", {className: "badge badge-success badge-sm ml-5"}, "5")
                                    )
                                ), 
                                React.createElement("li", {role: "presentation", style: {width:"25%"}}, 
                                    React.createElement("a", {href: "#inStock", role: "tab", "data-toggle": "tab"}, "下架", 
                                        React.createElement("span", {className: "badge badge-default badge-sm ml-5"}, "4")
                                    )

                                ), 
                                React.createElement("li", {role: "presentation", style: {width:"25%"}}, 
                                    React.createElement("a", {href: "#inApproval", role: "tab", "data-toggle": "tab"}, "申请中", 
                                        React.createElement("span", {className: "badge badge-danger badge-sm ml-5"}, "2"))
                                )
                            ), 
                            React.createElement("div", {className: "tab-content"}, 
                                React.createElement("div", {role: "tabpanel", className: "tab-pane active", id: "all"}, 
                                    React.createElement(ServiceSearchArea, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(Paging, null)
                                ), 
                                React.createElement("div", {role: "tabpanel", className: "tab-pane ", id: "onSale"}, 
                                    React.createElement(ServiceSearchArea, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(Paging, null)
                                ), 
                                React.createElement("div", {role: "tabpanel", className: "tab-pane ", id: "inStock"}, 
                                    React.createElement(ServiceSearchArea, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(Paging, null)
                                ), 
                                React.createElement("div", {role: "tabpanel", className: "tab-pane ", id: "inApproval"}, 
                                    React.createElement(ServiceSearchArea, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(Paging, null)
                                )
                            )
                        )
                    )
                )
            )
        );
    }
});

var ServiceItem = React.createClass({displayName: "ServiceItem",
    render: function () {
        return (
            React.createElement("div", {className: " panel panel-info"}, 
                React.createElement("div", {className: "panel-heading"}, 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("span", {className: "col-sm-4 panel-title"}, " 服务名称：XXXXX服务1"), 
                        React.createElement("span", {className: "col-sm-4"}, " 最后修改时间：2016-06-01 18:00:29"), 
                        React.createElement("span", {className: "col-sm-4"}, " 最近上架时间：2016-06-01 18:00:29")
                    )

                ), 
                React.createElement("div", {className: "panel-body"}, 
                    React.createElement("div", {className: "row"}), 
                    React.createElement("div", {className: "col-sm-2 mt-10"}, 
                        React.createElement("img", {src: "../../img/common/org-preview-small.jpg"})
                    ), 
                    React.createElement("div", {className: "col-sm-10 row"}, 

                        React.createElement("div", {className: "col-sm-3 border-right-dotted"}, 
                            React.createElement("div", {className: "row mt-20"}, 
                                React.createElement("strong", {className: "col-sm-5 pl-0 text-right"}, "大分类:"), 
                                React.createElement("span", {className: "col-sm-7 pl-0"}, "人才引培")), 
                            React.createElement("div", {className: "row mt-20 mb-20 "}, 
                                React.createElement("strong", {className: "col-sm-5 pl-0 text-right"}, "小分类:"), 
                                React.createElement("span", {className: "col-sm-7 pl-0"}, "高层培训")
                            )
                        ), 
                        React.createElement("div", {className: "col-sm-3 border-right-dotted"}, 
                            React.createElement("div", {className: "row mt-20"}, 
                                React.createElement("strong", {className: "col-sm-6 pl-0 text-right"}, "服务价格:"), 
                                React.createElement("span", {className: "col-sm-6 pl-0"}, "2000 元")), 
                            React.createElement("div", {className: "row mt-20 mb-20 "}, 
                                React.createElement("strong", {className: "col-sm-6 pl-0 text-right"}, "好评率:"), 

                                React.createElement("div", {className: "col-sm-6 pl-0 text-gold"}, 
                                    React.createElement("span", {className: "fa fa-star"}), React.createElement("span", {className: "fa fa-star"}), 
                                    React.createElement("span", {className: "fa fa-star"}), React.createElement("span", {className: "fa fa-star"}), 
                                    React.createElement("span", {className: "fa fa-star"})

                                )
                            )
                        ), 
                        React.createElement("div", {className: "col-sm-3 border-right-dotted"}, 
                            React.createElement("div", {className: "row mt-20"}, 
                                React.createElement("strong", {className: "col-sm-6 pl-0 text-right"}, "状态:"), 
                                React.createElement("span", {className: "col-sm-6 pl-0"}, "上架审核中")
                            ), 
                            React.createElement("div", {className: "row mt-20 mb-20 "}, 
                                React.createElement("strong", {className: "col-sm-6 pl-0 text-right"}, "申请数:"), 
                                React.createElement("span", {className: "col-sm-6 pl-0"}, "27 次")
                            )

                        ), 
                        React.createElement("div", {className: "col-sm-3  text-center"}, 
                            React.createElement("div", {className: "pl-0 row mt-20 "}, 
                                React.createElement("a", {href: "#", className: "col-sm-7 "}, "重新上架"), 
                                React.createElement("a", {href: "#", className: "col-sm-5 "}, "修改")
                            ), 
                            React.createElement("div", {className: "pl-0 row mt-20 mb-20 "}, 
                                React.createElement("a", {href: "#", className: "col-sm-7 "}, "详情"), 
                                React.createElement("a", {href: "#", className: "col-sm-5 "}, "删除")
                            )
                        )
                    )

                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(OrderList, null),
    document.getElementById('page')
);