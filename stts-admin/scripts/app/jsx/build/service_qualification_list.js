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
                            React.createElement("a", {href: "service_list.html", className: "list-group-item"}, "服务产品一览"), 
                            React.createElement("a", {href: "service_qualification_list.html", className: "list-group-item active"}, "服务产品上架")
                        ), 

                        React.createElement("div", {className: "ml-240"}, 

                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "org_list.html"}, "服务机构管理")), 
                                React.createElement("li", {className: "active"}, "服务产品上架审核一览")
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

var ServiceListContent = React.createClass({displayName: "ServiceListContent",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(ServiceSearchArea, null), 
                React.createElement(ServiceTable, null)
            )
        );
    }
});

var ServiceSearchArea = React.createClass({displayName: "ServiceSearchArea",
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
            React.createElement("div", null, 
                React.createElement("div", {className: "panel panel-default overflow-hidden"}, 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("div", {className: "form-inline mb-10"}, 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("label", null, "服务名称"), "  ", 

                                React.createElement("input", {type: "text", className: "form-control"})
                            ), 
                            "    ", 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("label", null, "审核状态"), "  ", 

                                React.createElement("select", {className: "form-control"}, 
                                    React.createElement("option", null, "待审核"), 
                                    React.createElement("option", null, "审核通过"), 
                                    React.createElement("option", null, "审核未通过")
                                )
                            ), 
                            "    ", 
                            React.createElement("button", {type: "button", className: "btn btn-default"}, "搜 索"), 
                            "    ", 
                            React.createElement("a", {id: "btnCondition", className: "btn", 
                               onClick: this.handleCondition}, "更多筛选条件"
                            )
                        ), 
                        React.createElement("div", {id: "moreConditionWrap", style: {display: "none"}, 
                             className: "form-horizontal overflow-hidden font-size-12"}, 
                            React.createElement("hr", null), 
                            React.createElement("div", {className: "row"}, 
                                React.createElement("div", {className: "form-group col-sm-4"}, 
                                    React.createElement("label", {className: "control-label col-sm-4"}, "服务大类"), 

                                    React.createElement("div", {className: " col-sm-8"}, 
                                        React.createElement("select", {className: "form-control"}, 
                                            React.createElement("option", null)
                                        )
                                    )
                                ), 
                                React.createElement("div", {className: "form-group col-sm-4"}, 
                                    React.createElement("label", {className: "control-label col-sm-4"}, "服务小类"), 

                                    React.createElement("div", {className: " col-sm-8"}, 
                                        React.createElement("select", {className: "form-control"}, 
                                            React.createElement("option", null)
                                        )
                                    )
                                ), 
                                React.createElement("div", {className: "form-group col-sm-4"}, 
                                    React.createElement("label", {className: "control-label col-sm-4"}, "审核申请时间"), 

                                    React.createElement("div", {className: " col-sm-8"}, 
                                        React.createElement("select", {className: "form-control"}, 
                                            React.createElement("option", null, "1个月"), 
                                            React.createElement("option", null, "3个月"), 
                                            React.createElement("option", null, "全部")
                                        )
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "row"}, 

                                React.createElement("div", {className: "form-group col-sm-4"}, 
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
                                ), 

                                React.createElement("div", {className: "form-group col-sm-4"}, 
                                    React.createElement("label", {className: "control-label col-sm-4"}, "修改时间"), 

                                    React.createElement("div", {className: " col-sm-8 "}, 
                                        React.createElement("div", {className: "input-group input-group-sm"}, 
                                            React.createElement("input", {type: "text", className: "form-control input-sm ", 
                                                   defaultValue: "2016-10-23"}), 
                                            React.createElement("span", {className: "input-group-btn font-size-12 width-10 text-center"}, "-"), 
                                            React.createElement("input", {type: "text", className: "form-control input-sm", 
                                                   defaultValue: "2016-12-23"})
                                        )
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "row "}, 
                                React.createElement("div", {className: "col-sm-6 col-sm-offset-3"}, 
                                    React.createElement("div", {className: "col-sm-4"}, 
                                        React.createElement("button", {className: "btn btn-sm btn-default col-sm-12"}, 
                                            React.createElement("span", {className: "fa fa-clear"}), " 清空条件"
                                        )
                                    ), 
                                    React.createElement("div", {className: "col-sm-4"}, 
                                        React.createElement("button", {className: " btn btn-sm btn-primary col-sm-12"}, 
                                            React.createElement("span", {className: "fa fa-search"}), " 搜索"
                                        )
                                    ), 
                                    React.createElement("div", {className: "col-sm-4"}, 
                                        React.createElement("button", {className: " btn btn-sm btn-warning col-sm-12"}, 
                                            React.createElement("span", {className: "fa fa-file-text-o"}), " 导出"
                                        )
                                    )
                                )
                            )
                        )
                    )
                ), 

                React.createElement("div", {className: "sort-row overflow-hidden"}, 
                    React.createElement("div", {className: "sort-inner"}, 
                        React.createElement("ul", {className: "sorts"}, 
                            React.createElement("li", {className: "sort active"}, React.createElement("a", {href: "#"}, "默认")), 
                            React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "修改时间")), 
                            React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "服务分类")), 
                            React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "价格"))
                        )
                    )
                )
            )
        );
    }
});

var ServiceTable = React.createClass({displayName: "ServiceTable",
    render: function () {
        return (
            React.createElement("table", {className: "table table-hover font-size-12"}, 
                React.createElement("thead", null, 
                React.createElement("tr", null, 
                    React.createElement("th", null, "机构名称"), 
                    React.createElement("th", null, "服务名称"), 
                    React.createElement("th", null, "服务分类"), 
                    React.createElement("th", null, "服务价格"), 
                    React.createElement("th", null, "状态"), 
                    React.createElement("th", null, "服务次数"), 
                    React.createElement("th", null, "好评率"), 
                    React.createElement("th", null, "上架申请时间"), 
                    React.createElement("th", null, "最后修改时间"), 
                    React.createElement("th", null, "操作")
                )
                ), 
                React.createElement("tbody", null, 
                React.createElement(ServiceTableRow, null), 
                React.createElement(ServiceTableRow, null), 
                React.createElement(ServiceTableRow, null), 
                React.createElement(ServiceTableRow, null), 
                React.createElement(ServiceTableRow, null)
                )
            )
        );
    }
});

var ServiceTableRow = React.createClass({displayName: "ServiceTableRow",
    render: function () {
        return (
            React.createElement("tr", null, 
                React.createElement("td", null, "xxxx 服务机构"), 
                React.createElement("td", null, "xxxxx1"), 
                React.createElement("td", null, "人才引培-高层培训"), 
                React.createElement("td", null, "1000-5000元"), 
                React.createElement("td", null, "上架审核中"), 
                React.createElement("td", null, "5次"), 
                React.createElement("td", null, 
                    React.createElement("div", {className: "text-danger"}, 

                        React.createElement("span", {className: "fa fa-star"}), React.createElement("span", {className: "fa fa-star"}), 
                        React.createElement("span", {className: "fa fa-star"}), React.createElement("span", {className: "fa fa-star"}), 
                        React.createElement("span", {className: "fa fa-star"})
                    )
                ), 
                React.createElement("td", null, "2016-10-01 10:20:30"), 
                React.createElement("td", null, "2016-10-01 10:20:30"), 
                React.createElement("td", null, React.createElement("a", {href: "service_qualification.html"}, "详情"))
            )
        );
    }
});

ReactDOM.render(
    React.createElement(ServiceList, null),
    document.getElementById('page')
);