var ServiceList = React.createClass({displayName: "ServiceList",
    handleSortList: function () {
        var servicePreview = $("#servicePreview");
        var serviceList = $("#serviceList");
        $("#servicePreview").hide();
        $("#serviceList").show();
        $("#sortStyleList").addClass("active");
        $("#sortStylePreview").removeClass("active");
    },
    handleSortPreview: function () {
        var servicePreview = $("#servicePreview");
        var serviceList = $("#serviceList");
        $("#serviceList").hide();
        $("#servicePreview").show();
        $("#sortStyleList").removeClass("active");
        $("#sortStylePreview").addClass("active");
    },
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, {isLogin: "true"}), 
                React.createElement(Header, {activeMenuID: "mainMenuService"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("div", {className: "pull-left w-222"}, 
                        React.createElement(NavCategory, null)
                    ), 
                    React.createElement("div", {className: "ml-240"}, 
                        React.createElement("ol", {className: "breadcrumb"}, 
                            React.createElement("li", null, "您所在的位置："), 
                            React.createElement("li", null, React.createElement("a", {href: "index.html"}, "首页")), 
                            React.createElement("li", null, React.createElement("a", {href: "service_list.html"}, "服务产品")), 
                            React.createElement("li", {className: "active"}, "服务产品一览")
                        ), 
                        React.createElement(ServiceSearchArea, null), 

                        React.createElement("div", {className: "sort-row overflow-hidden"}, 
                            React.createElement("div", {className: "sort-inner"}, 
                                React.createElement("ul", {className: "sorts"}, 
                                    React.createElement("li", {className: "sort active"}, React.createElement("a", {href: "#"}, "默认")), 
                                    React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "申请次数")), 
                                    React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "好评率")), 
                                    React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "价格"))
                                ), 
                                React.createElement("ul", {className: "sort-style"}, 
                                    React.createElement("li", {id: "sortStylePreview", className: "active", onClick: this.handleSortPreview}, 
                                        React.createElement("a", {href: "javascript:void(0)"}, 
                                            React.createElement("i", {className: "fa fa-th-large", "aria-hidden": "true"})
                                        )
                                    ), 
                                    React.createElement("li", {id: "sortStyleList", onClick: this.handleSortList}, React.createElement("a", {href: "javascript:void(0)"}, React.createElement("i", {
                                        className: "fa fa-th-list", 
                                        "aria-hidden": "true"})))
                                )
                            )
                        ), 

                        React.createElement("div", {id: "servicePreview", className: "overflow-hidden"}, 
                            React.createElement("div", {className: "row mb-10"}, 
                                React.createElement("div", {className: "col-sm-4"}, React.createElement(ServicePreview, null)), 
                                React.createElement("div", {className: "col-sm-4"}, React.createElement(ServicePreview, null)), 
                                React.createElement("div", {className: "col-sm-4"}, React.createElement(ServicePreview, null))
                            ), 
                            React.createElement("div", {className: "row"}, 
                                React.createElement("div", {className: "col-sm-4"}, React.createElement(ServicePreview, null)), 
                                React.createElement("div", {className: "col-sm-4"}, React.createElement(ServicePreview, null)), 
                                React.createElement("div", {className: "col-sm-4"}, React.createElement(ServicePreview, null))
                            )
                        ), 

                        React.createElement("div", {id: "serviceList", style: {display: "none"}}, 
                            React.createElement(ServiceItem, null), 
                            React.createElement(ServiceItem, null), 
                            React.createElement(ServiceItem, null), 
                            React.createElement(ServiceItem, null), 
                            React.createElement(ServiceItem, null)
                        ), 
                        React.createElement(Paging, null)
                    )
                ), 
                React.createElement(Footer, null)
            )
        );
    }
});

var ServiceSearchArea = React.createClass({displayName: "ServiceSearchArea",
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
                            React.createElement("label", null, "服务名称"), "  ", 
                            React.createElement("input", {type: "text", className: "form-control"})
                        ), 
                        "    ", 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", null, "机构名称"), " ", 
                            React.createElement("input", {type: "text", className: "form-control"})
                        ), 
                        "    ", 
                        React.createElement("button", {type: "button", className: "btn btn-default"}, "搜 索"), 
                        "    ", 
                        React.createElement("a", {id: "btnCondition", className: "btn", onClick: this.handleCondition}, "更多筛选条件"
                        )
                    ), 
                    React.createElement("div", {id: "moreConditionWrap", style: {display: "none"}, 
                         className: "form-horizontal overflow-hidden font-size-12"}, 
                        React.createElement("hr", null), 
                        React.createElement("div", {className: "row"}, 
                            React.createElement("div", {className: "form-group col-sm-4"}, 
                                React.createElement("label", {className: "control-label col-sm-4"}, "服务大类"), 

                                React.createElement("div", {className: " col-sm-8"}, 
                                    React.createElement("select", {className: "form-control input-sm"}, 
                                        React.createElement("option", null), 
                                        React.createElement("option", null, "分类1")
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "form-group col-sm-4"}, 
                                React.createElement("label", {className: "control-label col-sm-4 pl-0"}, "服务小类"), 

                                React.createElement("div", {className: " col-sm-8"}, 
                                    React.createElement("select", {className: "form-control input-sm"}, 
                                        React.createElement("option", null), 
                                        React.createElement("option", null, "分类1")
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "form-group col-sm-4"}, 
                                React.createElement("label", {className: "control-label col-sm-4"}, "价格范围"), 

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
                        React.createElement("div", {className: "text-center"}, 
                            React.createElement("button", {className: "btn btn-sm btn-default"}, 
                                "清空条件"
                            ), 
                            "  ", 
                            React.createElement("button", {className: " btn btn-sm btn-primary"}, 
                                React.createElement("span", {className: "fa fa-search"}), " 搜索"
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
            React.createElement("div", {className: "overflow-hidden border-bottom-dotted mb-10 pv-10"}, 
                React.createElement("div", {className: "col-sm-4 border-right-dotted"}, 
                    React.createElement("div", {className: "col-sm-4"}, 
                        React.createElement("a", {href: "service_detail.html"}, 
                            React.createElement("img", {src: "../img/sample/service_small.jpg"})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-8"}, 
                        React.createElement("div", null, React.createElement("a", {href: "service_detail.html"}, "高管培训")), 
                        React.createElement("br", null), 

                        React.createElement("div", null, React.createElement("a", {href: "#"}, "中国出口信用保险公司"))
                    )
                ), 
                React.createElement("div", {className: "col-sm-3 border-right-dotted"}, 
                    React.createElement("div", null, "服务大类：人才引培"), 
                    React.createElement("br", null), 

                    React.createElement("div", null, "服务小类：高层培训")
                ), 
                React.createElement("div", {className: "col-sm-3 border-right-dotted"}, 
                    React.createElement("div", null, "服务价格：2000～5000元"), 
                    React.createElement("br", null), 

                    React.createElement("div", null, "收费标准：每月3000元")
                ), 
                React.createElement("div", {className: "col-sm-2"}, 
                    React.createElement("div", null, "好评率：", 
                        React.createElement("i", {className: "fa fa-star text-danger font-size-12", "aria-hidden": "true"}), 
                        React.createElement("i", {className: "fa fa-star text-danger font-size-12", "aria-hidden": "true"}), 
                        React.createElement("i", {className: "fa fa-star text-danger font-size-12", "aria-hidden": "true"}), 
                        React.createElement("i", {className: "fa fa-star text-danger font-size-12", "aria-hidden": "true"}), 
                        React.createElement("i", {className: "fa fa-star text-danger font-size-12", "aria-hidden": "true"})
                    ), 
                    React.createElement("br", null), 

                    React.createElement("div", null, "申请次数：14次")
                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(ServiceList, null),
    document.getElementById('page')
);