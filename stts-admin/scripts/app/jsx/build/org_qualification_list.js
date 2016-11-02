var CompanyList = React.createClass({displayName: "CompanyList",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, null), 
                React.createElement(Header, {activeMenuID: "mainMenuOrg"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("div", {className: "pull-left w-222"}, 
                        React.createElement("div", {className: "list-group"}, 
                            React.createElement("a", {href: "org_list.html", className: "list-group-item"}, "服务机构一览"), 
                            React.createElement("a", {href: "org_qualification_list.html", className: "list-group-item active"}, "服务机构资质审核"), 
                            React.createElement("a", {href: "service_list.html", className: "list-group-item"}, "服务产品一览"), 
                            React.createElement("a", {href: "service_qualification_list.html", className: "list-group-item"}, "服务产品上架")
                        )
                    ), 
                    React.createElement("div", {className: "ml-240"}, 
                        React.createElement("ol", {className: "breadcrumb"}, 
                            React.createElement("li", null, "您所在的位置："), 
                            React.createElement("li", null, React.createElement("a", {href: "org_list.html"}, "服务机构管理")), 
                            React.createElement("li", {className: "active"}, "服务机构资质审核")
                        ), 
                        React.createElement(SearchArea, null), 

                        React.createElement("div", {className: "sort-row overflow-hidden"}, 
                            React.createElement("div", {className: "sort-inner"}, 
                                React.createElement("ul", {className: "sorts"}, 
                                    React.createElement("li", {className: "sort active"}, React.createElement("a", {href: "#"}, "默认")), 
                                    React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "企业类型")), 
                                    React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "服务次数")), 
                                    React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "已获得服务券额")), 
                                    React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "上架产品总数")), 
                                    React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "所属区域")), 
                                    React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "好评率"))
                                )
                            )
                        ), 
                        React.createElement(CompanyTable, null), 
                        React.createElement(Paging, null)
                    )
                ), 
                React.createElement(Footer, null)
            )
        );
    }
});

var SearchArea = React.createClass({displayName: "SearchArea",
    handleCondition: function () {
        var $moreConditionWrap = $("#moreConditionWrap");
        if ($moreConditionWrap.is(":visible")) {
            $("#moreConditionWrap").hide(500);
            $("#btnCondition").text("更多筛选条件");
        } else {
            $("#moreConditionWrap").show(500);
            $("#btnCondition").text("收起筛选条件");
        }
    },
    render: function () {
        return (
            React.createElement("div", {className: "panel panel-default overflow-hidden"}, 
                React.createElement("div", {className: "panel-body"}, 
                    React.createElement("div", {className: "form-inline mb-10"}, 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", null, "服务机构名称"), "  ", 
                            React.createElement("input", {type: "text", className: "form-control"})
                        ), 
                        "    ", 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", {className: "control-label"}, "审核状态"), " ", 

                            React.createElement("select", {className: "form-control"}, 
                                React.createElement("option", null, "待审核"), 
                                React.createElement("option", null, "审核通过"), 
                                React.createElement("option", null, "审核未通过")
                            )
                        ), 
                        "    ", 
                        React.createElement("button", {type: "button", className: "btn btn-default"}, "搜 索"), 
                        "    ", 
                        React.createElement("a", {id: "btnCondition", className: "btn", onClick: this.handleCondition}, "更多筛选条件"
                        )
                    ), 
                    React.createElement("div", {id: "moreConditionWrap", style: {display: "none"}, 
                         className: "form-horizontal font-size-12 overflow-hidden"}, 
                        React.createElement("hr", null), 
                        React.createElement("div", {className: "row"}, 
                            React.createElement("div", {className: "form-group col-sm-8"}, 
                                React.createElement("label", {className: "control-label col-sm-3"}, "企业类型"), 

                                React.createElement("div", {className: "col-sm-9"}, 
                                    React.createElement("label", {className: "checkbox-inline"}, 
                                        React.createElement("input", {type: "checkbox"}), " 企业"
                                    ), " ", 
                                    React.createElement("label", {className: "checkbox-inline"}, 
                                        React.createElement("input", {type: "checkbox"}), " 事业单位"
                                    ), " ", 
                                    React.createElement("label", {className: "checkbox-inline"}, 
                                        React.createElement("input", {type: "checkbox"}), " 社会团体"
                                    ), " ", 
                                    React.createElement("label", {className: "checkbox-inline"}, 
                                        React.createElement("input", {type: "checkbox"}), " 个体工商户"
                                    ), " ", 
                                    React.createElement("label", {className: "checkbox-inline"}, 
                                        React.createElement("input", {type: "checkbox"}), " 其他"
                                    )
                                )
                            ), 


                            React.createElement("div", {className: "form-group col-sm-4"}, 
                                React.createElement("label", {className: "control-label col-sm-4"}, "账户状态"), 

                                React.createElement("div", {className: " col-sm-8"}, 
                                    React.createElement("select", {className: "form-control"}, 
                                        React.createElement("option", null, "有效"), 
                                        React.createElement("option", null, "冻结"), 
                                        React.createElement("option", null, "查封")
                                    )
                                )
                            )
                        ), 
                        React.createElement("div", {className: "row"}, 
                            React.createElement("div", {className: "form-group col-sm-8"}, 
                                React.createElement("label", {className: "control-label col-sm-3"}, "注册／联系地址"), 

                                React.createElement("div", {className: "col-sm-9"}, 
                                    React.createElement("input", {type: "text", className: "form-control", placeholder: "注册地址或者联系地址"})
                                )
                            ), 
                            React.createElement("div", {className: "form-group col-sm-4"}, 
                                React.createElement("label", {className: "control-label col-sm-5"}, "所在区域"), 

                                React.createElement("div", {className: "col-sm-7"}, 
                                    React.createElement("select", {className: "form-control input-sm"}, 
                                        React.createElement("option", null)
                                    )
                                )
                            )
                        ), 
                        React.createElement("div", {className: "row"}, 
                            React.createElement("div", {className: "form-group col-sm-4"}, 
                                React.createElement("label", {className: "control-label col-sm-6"}, "联系电话"), 

                                React.createElement("div", {className: "col-sm-6"}, 
                                    React.createElement("input", {type: "text", className: "form-control"})
                                )
                            ), 
                            React.createElement("div", {className: "form-group col-sm-4"}, 
                                React.createElement("label", {className: "control-label col-sm-6"}, "联系电话"), 

                                React.createElement("div", {className: "col-sm-6"}, 
                                    React.createElement("input", {type: "text", className: "form-control"})
                                )
                            ), 
                            React.createElement("div", {className: "form-group col-sm-4"}, 
                                React.createElement("label", {className: "control-label col-sm-6"}, "注册时间"), 

                                React.createElement("div", {className: "col-sm-6"}, 
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
                                React.createElement("label", {className: "control-label col-sm-6"}, "机构标签"), 

                                React.createElement("div", {className: " col-sm-6"}, 
                                    React.createElement("select", {className: "form-control"}, 
                                        React.createElement("option", null, "联营"), 
                                        React.createElement("option", null, "示范")
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "form-group col-sm-4"}, 
                                React.createElement("label", {className: "control-label col-sm-6"}, "审核申请时间"), 

                                React.createElement("div", {className: "col-sm-6"}, 
                                    React.createElement("select", {className: "form-control"}, 
                                        React.createElement("option", null, "1个月"), 
                                        React.createElement("option", null, "3个月"), 
                                        React.createElement("option", null, "全部")
                                    )
                                )
                            )
                        ), 
                        React.createElement("div", {className: "row"}, 
                            React.createElement("div", {className: "form-group col-sm-8"}, 
                                React.createElement("label", {className: "control-label col-sm-3"}, "已使用服务券额"), 

                                React.createElement("div", {className: " col-sm-9"}, 
                                    React.createElement("div", {className: "input-group input-group"}, 
                                        React.createElement("input", {type: "text", className: "form-control"}), 
                                        React.createElement("span", {className: "input-group-btn text-center font-size-12 width-10"}, "-"), 
                                        React.createElement("input", {type: "text", className: "form-control"})
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "form-group col-sm-4"}, 
                                React.createElement("label", {className: "control-label col-sm-4"}, "交易次数"), 

                                React.createElement("div", {className: " col-sm-8"}, 
                                    React.createElement("div", {className: "input-group input-group"}, 
                                        React.createElement("input", {type: "text", className: "form-control"}), 
                                        React.createElement("span", {className: "input-group-btn text-center font-size-12 width-10"}, "-"), 
                                        React.createElement("input", {type: "text", className: "form-control"})
                                    )
                                )
                            )
                        ), 
                        React.createElement("div", {className: "row"}, 
                            React.createElement("div", {className: "form-group col-sm-8"}, 
                                React.createElement("label", {className: "control-label col-sm-3"}, "未兑付服务券额"), 

                                React.createElement("div", {className: " col-sm-9"}, 
                                    React.createElement("div", {className: "input-group input-group"}, 
                                        React.createElement("input", {type: "text", className: "form-control"}), 
                                        React.createElement("span", {className: "input-group-btn text-center font-size-12 width-10"}, "-"), 
                                        React.createElement("input", {type: "text", className: "form-control"})
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "form-group col-sm-4"}, 
                                React.createElement("label", {className: "control-label col-sm-4"}, "服务产品件数"), 

                                React.createElement("div", {className: " col-sm-8"}, 
                                    React.createElement("div", {className: "input-group input-group"}, 
                                        React.createElement("input", {type: "text", className: "form-control"}), 
                                        React.createElement("span", {className: "input-group-btn text-center font-size-12 width-10"}, "-"), 
                                        React.createElement("input", {type: "text", className: "form-control"})
                                    )
                                )
                            )
                        ), 
                        React.createElement("div", {className: "text-center"}, 
                            React.createElement("button", {className: "btn btn-sm btn-default"}, 
                                "清空条件"
                            ), 
                            "  ", 
                            React.createElement("button", {className: " btn btn-sm btn-primary"}, 
                                React.createElement("span", {className: "fa fa-search"}), " 搜索"
                            ), 
                            "  ", 
                            React.createElement("button", {className: " btn btn-sm btn-warning"}, 
                                React.createElement("span", {className: "fa fa-file-text-o"}), " 导出"
                            )
                        )
                    )
                )
            )
        );
    }
});

var CompanyTable = React.createClass({displayName: "CompanyTable",
    render: function () {
        return (
            React.createElement("table", {className: "table table-hover font-size-12"}, 
                React.createElement("thead", null, 
                React.createElement("tr", null, 
                    React.createElement("th", null, "服务机构名称"), 
                    React.createElement("th", null, "企业类型"), 
                    React.createElement("th", null, "服务次数"), 
                    React.createElement("th", null, "已获得服务券额"), 
                    React.createElement("th", null, "上架产品总数"), 
                    React.createElement("th", null, "机构标签"), 
                    React.createElement("th", null, "所属区域"), 
                    React.createElement("th", null, "联系人"), 
                    React.createElement("th", null, "联系电话"), 
                    React.createElement("th", null, "审核时间"), 
                    React.createElement("th", null, "账户状态"), 
                    React.createElement("th", null, "操作")
                )
                ), 
                React.createElement("tbody", null, 
                React.createElement(CompanyTableRow, null), 
                React.createElement(CompanyTableRow, null), 
                React.createElement(CompanyTableRow, null), 
                React.createElement(CompanyTableRow, null), 
                React.createElement(CompanyTableRow, null)
                )
            )
        );
    }
});

var CompanyTableRow = React.createClass({displayName: "CompanyTableRow",
    render: function () {
        return (
            React.createElement("tr", null, 
                React.createElement("td", null, "XXXX科技有限公司"), 
                React.createElement("td", null, "企业"), 
                React.createElement("td", null, "2"), 
                React.createElement("td", null, "1000"), 
                React.createElement("td", null, "6"), 
                React.createElement("td", null, "联营"), 
                React.createElement("td", null, "宁波镇海"), 
                React.createElement("td", null, "李xx"), 
                React.createElement("td", null, "1283746371"), 
                React.createElement("td", null, "2016-02-12"), 
                React.createElement("td", null, "正常"), 
                React.createElement("td", null, React.createElement("a", {href: "org_qualification.html"}, "详情"))
            )
        );
    }
});

ReactDOM.render(
    React.createElement(CompanyList, null),
    document.getElementById('page')
);