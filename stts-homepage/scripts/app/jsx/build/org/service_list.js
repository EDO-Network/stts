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
                                    React.createElement(SearchArea, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(Paging, null)
                                ), 
                                React.createElement("div", {role: "tabpanel", className: "tab-pane ", id: "onSale"}, 
                                    React.createElement(SearchArea, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(Paging, null)
                                ), 
                                React.createElement("div", {role: "tabpanel", className: "tab-pane ", id: "inStock"}, 
                                    React.createElement(SearchArea, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(ServiceItem, null), 
                                    React.createElement(Paging, null)
                                ), 
                                React.createElement("div", {role: "tabpanel", className: "tab-pane ", id: "inApproval"}, 
                                    React.createElement(SearchArea, null), 
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
var SearchArea = React.createClass({displayName: "SearchArea",
    handleCondition: function () {
        var $moreConditionWrap = $("#moreConditionWrap");
        if ($moreConditionWrap.is(":visible")) {
            $("#moreConditionWrap").hide(1000);
            $("#btnCondition").text("更多筛选条件");
        } else {
            $("#moreConditionWrap").show(500);
            $("#btnCondition").text("收起筛选条件");
        }
    },
    render: function () {
        return (
            React.createElement("div", {className: "panel panel-default"}, 
                React.createElement("div", {className: "panel-body"}, 
                    React.createElement("div", {className: "row  mb-10"}, 
                        React.createElement("div", {className: "col-sm-6"}, 
                            React.createElement("div", {className: "input-group"}, 
                                React.createElement("input", {type: "text", className: "form-control"}), 
                                    React.createElement("span", {className: "input-group-btn"}, 
                                    React.createElement("button", {className: "btn btn-default", type: "button"}, "搜 索")
                                    )
                            )
                        ), 
                        React.createElement("div", {className: "col-sm-6"}, 
                            React.createElement("button", {id: "btnCondition", className: "btn btn-default", 
                                    onClick: this.handleCondition}, "更多筛选条件"
                            )
                        )
                    ), 
                    React.createElement("div", {id: "moreConditionWrap", style: {display: "none"}, 
                         className: "form-horizontal overflow-hidden font-size-12"}, 
                        React.createElement("hr", null), 
                        React.createElement("div", {className: "row"}, 
                            React.createElement("div", {className: "form-group col-sm-4"}, 
                                React.createElement("label", {className: "control-label col-sm-4"}, "服务名称"), 

                                React.createElement("div", {className: " col-sm-8"}, 
                                    React.createElement("input", {className: "form-control input-sm", type: "text"})
                                )
                            ), 
                            React.createElement("div", {className: "form-group col-sm-3"}, 
                                React.createElement("label", {className: "control-label col-sm-4"}, "状态"), 

                                React.createElement("div", {className: " col-sm-8"}, 
                                    React.createElement("select", {className: "form-control input-sm"}, 
                                        React.createElement("option", null), 
                                        React.createElement("option", null, "上架审核中")
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "form-group col-sm-5"}, 
                                React.createElement("label", {className: "control-label col-sm-4"}, "修改时间"), 

                                React.createElement("div", {className: " col-sm-8 "}, 
                                    React.createElement("div", {className: "input-group input-group-sm"}, 
                                        React.createElement("input", {type: "text", className: "form-control input-sm ", 
                                               defaultValue: "2016-10-23"}), 
                                        React.createElement("span", {className: "input-group-btn font-size-12 width-10 text-center"}, "-"), 
                                        React.createElement("input", {type: "text", className: "form-control input-sm", defaultValue: "2016-12-23"})
                                    )
                                )
                            )
                        ), 
                        React.createElement("div", {className: "row"}, 
                            React.createElement("div", {className: "form-group col-sm-4"}, 
                                React.createElement("label", {className: "control-label col-sm-4"}, "大分类"), 

                                React.createElement("div", {className: " col-sm-8"}, 
                                    React.createElement("select", {className: "form-control input-sm"}, 
                                        React.createElement("option", null), 
                                        React.createElement("option", null, "大分类1")
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "form-group col-sm-3"}, 
                                React.createElement("label", {className: "control-label col-sm-4 pl-0"}, "小分类"), 

                                React.createElement("div", {className: " col-sm-8"}, 
                                    React.createElement("select", {className: "form-control input-sm"}, 
                                        React.createElement("option", null), 
                                        React.createElement("option", null, "小分类1")
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "form-group col-sm-5"}, 
                                React.createElement("label", {className: "control-label col-sm-4"}, "服务费用"), 

                                React.createElement("div", {className: " col-sm-8 "}, 
                                    React.createElement("div", {className: "input-group input-group-sm"}, 

                                        React.createElement("input", {type: "text", className: "form-control input-sm text-right", 
                                               defaultValue: "100"}), 

                                        React.createElement("span", {className: "input-group-btn text-center font-size-12 width-10"}, "-"), 


                                        React.createElement("input", {type: "text", className: "form-control input-sm text-right", 
                                               defaultValue: "500"})
                                    )
                                )
                            )
                        ), 
                        React.createElement("div", {className: "row "}, 
                            React.createElement("div", {className: "col-sm-6 col-sm-offset-3"}, 
                                React.createElement("div", {className: "col-sm-4"}, 
                                    React.createElement("button", {className: "btn btn-sm btn-default col-sm-12"}, 
                                        React.createElement("span", {className: "fa fa-clear"}), "清空条件"
                                    )
                                ), 
                                React.createElement("div", {className: "col-sm-4"}, 
                                    React.createElement("button", {className: " btn btn-sm btn-primary col-sm-12"}, 
                                        React.createElement("span", {className: "fa fa-search"}), "搜索"
                                    )
                                ), 
                                React.createElement("div", {className: "col-sm-4"}, 
                                    React.createElement("button", {className: " btn btn-sm btn-warning col-sm-12"}, 
                                        React.createElement("span", {className: "fa fa-file-text-o"}), "导出"
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