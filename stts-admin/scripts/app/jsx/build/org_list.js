var OrgList = React.createClass({displayName: "OrgList",
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

                        React.createElement("div", {className: "sort-row overflow-hidden"}, 
                            React.createElement("div", {className: "sort-inner"}, 
                                React.createElement("ul", {className: "sorts"}, 
                                    React.createElement("li", {className: "sort active"}, React.createElement("a", {href: "#"}, "默认")), 
                                    React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "服务次数")), 
                                    React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "好评率"))
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
                                React.createElement("div", {className: "col-sm-4"}, React.createElement(OrgPreview, null)), 
                                React.createElement("div", {className: "col-sm-4"}, React.createElement(OrgPreview, null)), 
                                React.createElement("div", {className: "col-sm-4"}, React.createElement(OrgPreview, null))
                            ), 
                            React.createElement("div", {className: "row"}, 
                                React.createElement("div", {className: "col-sm-4"}, React.createElement(OrgPreview, null)), 
                                React.createElement("div", {className: "col-sm-4"}, React.createElement(OrgPreview, null)), 
                                React.createElement("div", {className: "col-sm-4"}, React.createElement(OrgPreview, null))
                            )
                        ), 

                        React.createElement("div", {id: "serviceList", style: {display: "none"}}, 
                            React.createElement(OrgItem, null), 
                            React.createElement(OrgItem, null), 
                            React.createElement(OrgItem, null), 
                            React.createElement(OrgItem, null), 
                            React.createElement(OrgItem, null)
                        ), 
                        React.createElement(Paging, null)
                    )
                ), 
                React.createElement(Footer, null)
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
                         className: "overflow-hidden"}, 
                        React.createElement("hr", null), 
                        React.createElement("div", {className: "form-inline mb-10"}, 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("label", null, "机构地址"), " ", 
                                React.createElement("input", {type: "text", className: "form-control"})
                            ), 
                            "    ", 

                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("label", null, "机构标签"), " ", 
                                React.createElement("input", {type: "text", className: "form-control"})
                            ), 

                            "    ", 
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


var OrgItem = React.createClass({displayName: "OrgItem",
    render: function () {
        return (
            React.createElement("div", {className: "overflow-hidden border-bottom-dotted mb-10"}, 
                React.createElement("div", {className: "col-sm-1"}, 
                    React.createElement("a", {href: "org_detail.html"}, React.createElement("img", {src: "../img/sample/org_small.jpg"}))
                ), 
                React.createElement("div", {className: "col-sm-3 border-right-dotted"}, 
                    React.createElement("div", null, React.createElement("a", {href: "org_detail.html"}, "中国出口信用保险公司")), 
                    React.createElement("br", null), 

                    React.createElement("div", null, "宁波市海曙区中山东路145号")
                ), 
                React.createElement("div", {className: "col-sm-3 border-right-dotted"}, 
                    React.createElement("br", null), 
                    React.createElement("div", null, "机构标签：风险投资，基金服务，人才引培")
                ), 
                React.createElement("div", {className: "col-sm-3 border-right-dotted"}, 
                    React.createElement("div", {className: ""}, "好评率：", 
                        React.createElement("i", {className: "fa fa-star text-danger font-size-12", "aria-hidden": "true"}), 
                        React.createElement("i", {className: "fa fa-star text-danger font-size-12", "aria-hidden": "true"}), 
                        React.createElement("i", {className: "fa fa-star text-danger font-size-12", "aria-hidden": "true"}), 
                        React.createElement("i", {className: "fa fa-star text-danger font-size-12", "aria-hidden": "true"}), 
                        React.createElement("i", {className: "fa fa-star text-danger font-size-12", "aria-hidden": "true"})
                    ), 
                    React.createElement("br", null), 

                    React.createElement("div", null, "服务次数：114次")
                ), 
                React.createElement("div", {className: "col-sm-1"}, 
                    React.createElement("br", null), 
                    React.createElement("button", {className: "btn btn-default"}, "查看机构详情")

                )
            )
        );
    }
});


ReactDOM.render(
    React.createElement(OrgList, null),
    document.getElementById('page')
);