var OrgDetail = React.createClass({displayName: "OrgDetail",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, {isLogin: "true"}), 
                React.createElement(Header, {activeMenuID: "mainMenuOrg"}), 

                React.createElement("div", {className: "container"}, 

                    React.createElement("div", {className: "org-title-wrap"}, 
                        React.createElement("div", {className: "org-title"}, "宁波xxx信息服务机构"), 
                        React.createElement("ul", {className: "nav nav-tabs", role: "tablist"}, 
                            React.createElement("li", {role: "presentation", className: "active"}, React.createElement("a", {href: "#desc", role: "tab", 
                                                                          "data-toggle": "tab"}, "机构首页")
                            ), 
                            React.createElement("li", {role: "presentation"}, React.createElement("a", {href: "#anylize", role: "tab", "data-toggle": "tab"}, "机构详情")), 
                            React.createElement("li", {role: "presentation"}, React.createElement("a", {href: "#evaluate", role: "tab", "data-toggle": "tab"}, "服务项目")), 
                            React.createElement("li", {role: "presentation"}, React.createElement("a", {href: "#record", role: "tab", "data-toggle": "tab"}, "成功案例"))
                        )
                    ), 
                    React.createElement("div", {className: "clearfix"}, 
                        React.createElement("div", {className: "pull-left w-222"}, 
                            React.createElement(OrgCard, null), 
                            React.createElement(EvaluateStatistics, null), 
                            React.createElement(OrderStatistics, null)
                        ), 
                        React.createElement("div", {className: "ml-240"}, 
                            React.createElement(OrgContent, null)
                        )
                    )
                ), 
                React.createElement(Footer, null)
            )
        );
    }
});

var OrgCard = React.createClass({displayName: "OrgCard",
    render: function () {
        return (

            React.createElement("div", {className: "panel panel-info"}, 
                React.createElement("div", {className: "panel-heading"}, "服务机构名片"), 
                React.createElement("div", {className: "panel-body"}, 
                    React.createElement("p", null, React.createElement("img", {className: "w-per-100", src: "../img/sample/org_preview.png"})), 

                    React.createElement("p", null, "好评率：", 
                        React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                        React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                        React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                        React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                        React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"})
                    ), 

                    React.createElement("p", null, "认证信息：", React.createElement("span", {className: "label label-success"}, "已认证")), 

                    React.createElement("p", null, "年审记录：2016年度通过"), 

                    React.createElement("p", null, "警告记录：", 
                        React.createElement("span", {className: "label label-danger"}, "1"), "  ", 
                        React.createElement("span", {className: "label label-warning"}, "2"), "  ", 
                        React.createElement("span", {className: "label label-info"}, "3")
                    ), 

                    React.createElement("p", null, "联系地址：宁波市海曙区中山东路145号")
                )
            )
        );
    }
});

var EvaluateStatistics = React.createClass({displayName: "EvaluateStatistics",
    render: function () {
        return (

            React.createElement("div", {className: "panel panel-info"}, 
                React.createElement("div", {className: "panel-heading"}, "机构一年内评分动态"), 
                React.createElement("div", {className: "panel-body"}, 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "col-sm-6"}, 
                            React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                            React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                            React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                            React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                            React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"})
                        ), 
                        React.createElement("div", {className: "col-sm-6"}, 
                            "5.0分 共4人"
                        )
                    ), 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "col-sm-6"}, 
                            React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                            React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                            React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                            React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                            React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"})
                        ), 
                        React.createElement("div", {className: "col-sm-6"}, 
                            "5分 共1人"
                        )
                    ), 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "col-sm-6"}, 
                            React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                            React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                            React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                            React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                            React.createElement("i", {className: "fa fa-star text-mute", "aria-hidden": "true"})
                        ), 
                        React.createElement("div", {className: "col-sm-6"}, 
                            "4分 共1人"
                        )
                    ), 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "col-sm-6"}, 
                            React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                            React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                            React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                            React.createElement("i", {className: "fa fa-star text-mute", "aria-hidden": "true"}), 
                            React.createElement("i", {className: "fa fa-star text-mute", "aria-hidden": "true"})
                        ), 
                        React.createElement("div", {className: "col-sm-6"}, 
                            "3分 共1人"
                        )
                    ), 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "col-sm-6"}, 
                            React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                            React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                            React.createElement("i", {className: "fa fa-star text-mute", "aria-hidden": "true"}), 
                            React.createElement("i", {className: "fa fa-star text-mute", "aria-hidden": "true"}), 
                            React.createElement("i", {className: "fa fa-star text-mute", "aria-hidden": "true"})
                        ), 
                        React.createElement("div", {className: "col-sm-6"}, 
                            "2分 共1人"
                        )
                    ), 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "col-sm-6"}, 
                            React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                            React.createElement("i", {className: "fa fa-star text-mute", "aria-hidden": "true"}), 
                            React.createElement("i", {className: "fa fa-star text-mute", "aria-hidden": "true"}), 
                            React.createElement("i", {className: "fa fa-star text-mute", "aria-hidden": "true"}), 
                            React.createElement("i", {className: "fa fa-star text-mute", "aria-hidden": "true"})
                        ), 
                        React.createElement("div", {className: "col-sm-6"}, 
                            "1分 共0人"
                        )
                    )
                )
            )
        );
    }
});

var OrderStatistics = React.createClass({displayName: "OrderStatistics",
    render: function () {
        return (

            React.createElement("div", {className: "panel panel-info"}, 
                React.createElement("div", {className: "panel-heading"}, "一年内交易统计"), 
                React.createElement("div", {className: "panel-body"}, 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "col-sm-6"}, 
                            "交易成功"
                        ), 
                        React.createElement("div", {className: "col-sm-6"}, 
                            "10笔"
                        )
                    ), 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "col-sm-6"}, 
                            "交易中止"
                        ), 
                        React.createElement("div", {className: "col-sm-6"}, 
                            "4笔"
                        )
                    ), 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "col-sm-6"}, 
                            "交易中"
                        ), 
                        React.createElement("div", {className: "col-sm-6"}, 
                            "4笔"
                        )
                    )
                )
            )
        );
    }
});

var OrgContent = React.createClass({displayName: "OrgContent",
    render: function () {
        return (
            React.createElement("div", {className: "tab-content overflow-hidden"}, 
                React.createElement("div", {role: "tabpanel", className: "tab-pane active", id: "desc"}, 
                    React.createElement("div", {className: "panel panel-default"}, 
                        React.createElement("div", {className: "panel-heading"}, "机构简介"), 
                        React.createElement("div", {className: "panel-body"}, 

                            React.createElement("p", {className: "text-center"}, 
                                React.createElement("img", {src: "../img/sample/service_desc.png"})
                            ), 

                            React.createElement("p", null, 
                                "xxxxxxxxxxxxxxxxxxxx"
                            ), 

                            React.createElement("p", null, 
                                "xxxxxxxxxxxxxxxxxxxx"
                            ), 

                            React.createElement("p", null, 
                                "xxxxxxxxxxxxxxxxxxxx"
                            )
                        )
                    ), 
                    React.createElement("div", {className: "panel panel-default"}, 
                        React.createElement("div", {className: "panel-heading"}, 
                            "最新服务", 
                            React.createElement("a", {className: "pull-right", href: "javascript:void(0)"}, 
                                React.createElement("span", null, "更多"), " >>"
                            )
                        ), 
                        React.createElement("div", {className: "panel-body"}, 
                            React.createElement(ServiceItem, null), 
                            React.createElement(ServiceItem, null)
                        )
                    ), 

                    React.createElement("div", {className: "panel panel-default"}, 
                        React.createElement("div", {className: "panel-heading"}, "来自企业的评价"
                        ), 
                        React.createElement("div", {className: "panel-body"}, 
                            React.createElement("table", {className: "table table-hover"}, 
                                React.createElement("thead", null, 
                                React.createElement("tr", null, 
                                    React.createElement("th", null, "评分"), 
                                    React.createElement("th", null, "价格"), 
                                    React.createElement("th", null, "服务项目"), 
                                    React.createElement("th", null, "评论内容"), 
                                    React.createElement("th", null, "评论企业")
                                )
                                ), 
                                React.createElement("tbody", null, 
                                React.createElement(EvaluateItem, null), 
                                React.createElement(EvaluateItem, null), 
                                React.createElement(EvaluateItem, null), 
                                React.createElement(EvaluateItem, null), 
                                React.createElement(EvaluateItem, null)
                                )
                            )
                        )
                    )


                ), 

                React.createElement("div", {role: "tabpanel", className: "tab-pane", id: "anylize"}, 
                    React.createElement("div", {className: "panel panel-default"}, 
                        React.createElement("div", {className: "panel-heading"}, 
                            "机构介绍", 
                            React.createElement("a", {className: "btn pull-right", onClick: this.handleCondition}, "点击折叠"
                            )
                        ), 
                        React.createElement("div", {className: "panel-body"}, 
                            React.createElement("p", null, 
                                "xxxxxxxxxxxxxxxxxxxx"
                            ), 

                            React.createElement("p", null, 
                                "xxxxxxxxxxxxxxxxxxxx"
                            ), 

                            React.createElement("p", null, 
                                "xxxxxxxxxxxxxxxxxxxx"
                            )
                        )
                    ), 
                    React.createElement("div", {className: "panel panel-default"}, 
                        React.createElement("div", {className: "panel-heading"}, 
                            "专业资质情况", 
                            React.createElement("a", {className: "btn pull-right", onClick: this.handleCondition}, "点击折叠"
                            )
                        ), 
                        React.createElement("div", {className: "panel-body"}, 
                            React.createElement("p", null, 
                                "xxxxxxxxxxxxxxxxxxxx"
                            ), 

                            React.createElement("p", null, 
                                "xxxxxxxxxxxxxxxxxxxx"
                            ), 

                            React.createElement("p", null, 
                                "xxxxxxxxxxxxxxxxxxxx"
                            )
                        )
                    ), 
                    React.createElement("div", {className: "panel panel-default"}, 
                        React.createElement("div", {className: "panel-heading"}, 
                            "人员素质构成情况", 
                            React.createElement("a", {className: "btn pull-right", onClick: this.handleCondition}, "点击折叠"
                            )
                        ), 
                        React.createElement("div", {className: "panel-body"}, 
                            React.createElement("p", null, 
                                "xxxxxxxxxxxxxxxxxxxx"
                            ), 

                            React.createElement("p", null, 
                                "xxxxxxxxxxxxxxxxxxxx"
                            ), 

                            React.createElement("p", null, 
                                "xxxxxxxxxxxxxxxxxxxx"
                            )
                        )
                    ), 
                    React.createElement("div", {className: "panel panel-default"}, 
                        React.createElement("div", {className: "panel-heading"}, 
                            "主要服务设备及条件", 
                            React.createElement("a", {className: "btn pull-right", onClick: this.handleCondition}, "点击折叠"
                            )
                        ), 
                        React.createElement("div", {className: "panel-body"}, 
                            React.createElement("p", null, 
                                "xxxxxxxxxxxxxxxxxxxx"
                            ), 

                            React.createElement("p", null, 
                                "xxxxxxxxxxxxxxxxxxxx"
                            ), 

                            React.createElement("p", null, 
                                "xxxxxxxxxxxxxxxxxxxx"
                            )
                        )
                    ), 
                    React.createElement("div", {className: "panel panel-default"}, 
                        React.createElement("div", {className: "panel-heading"}, 
                            "服务资质及荣誉", 
                            React.createElement("a", {className: "btn pull-right", onClick: this.handleCondition}, "点击折叠"
                            )
                        ), 
                        React.createElement("div", {className: "panel-body"}, 
                            React.createElement("p", null, 
                                "xxxxxxxxxxxxxxxxxxxx"
                            ), 

                            React.createElement("p", null, 
                                "xxxxxxxxxxxxxxxxxxxx"
                            ), 

                            React.createElement("p", null, 
                                "xxxxxxxxxxxxxxxxxxxx"
                            )
                        )
                    )
                ), 
                React.createElement("div", {role: "tabpanel", className: "tab-pane", id: "evaluate"}, 
                    React.createElement(ServiceSearchArea, null), 
                    React.createElement("div", {className: "sort-row overflow-hidden"}, 
                        React.createElement("div", {className: "sort-inner"}, 
                            React.createElement("ul", {className: "sorts"}, 
                                React.createElement("li", {className: "sort active"}, React.createElement("a", {href: "#"}, "默认")), 
                                React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "申请次数")), 
                                React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "好评率")), 
                                React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "价格"))
                            )
                        )
                    ), 
                    React.createElement(ServiceItemPreview, null), 
                    React.createElement(ServiceItemPreview, null), 
                    React.createElement(ServiceItemPreview, null), 
                    React.createElement(ServiceItemPreview, null), 
                    React.createElement(ServiceItemPreview, null), 
                    React.createElement(Paging, null)
                ), 
                React.createElement("div", {role: "tabpanel", className: "tab-pane", id: "record"}, 
                    React.createElement("div", {className: "panel panel-default"}, 
                        React.createElement("div", {className: "panel-heading"}, "成功案例"), 
                        React.createElement("div", {className: "panel-body"}, 
                            React.createElement("table", {className: "table table-hover"}, 
                                React.createElement("thead", null, 
                                React.createElement("tr", null, 
                                    React.createElement("th", null, "服务时间"), 
                                    React.createElement("th", null, "企业名称"), 
                                    React.createElement("th", null, "服务项目"), 
                                    React.createElement("th", null, "标签"), 
                                    React.createElement("th", null, "价格")
                                )
                                ), 
                                React.createElement("tbody", null, 
                                React.createElement(RecordItem, null), 
                                React.createElement(RecordItem, null), 
                                React.createElement(RecordItem, null), 
                                React.createElement(RecordItem, null), 
                                React.createElement(RecordItem, null)
                                )
                            ), 
                            React.createElement(Paging, null)
                        )
                    )
                )
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
                React.createElement("div", {className: "col-sm-3 border-right-dotted"}, 
                    React.createElement("div", null, React.createElement("a", {href: "service_detail.html"}, "服务名称")), 
                    React.createElement("div", null, React.createElement("a", {href: "org_detail.html"}, "机构名称"))
                ), 
                React.createElement("div", {className: "col-sm-6 border-right-dotted"}, 
                    React.createElement("div", null, "服务分类：信用征集和评价"), 
                    React.createElement("div", null, "服务费用：小型、微型企业（无论新评还是续评）2000元")
                ), 
                React.createElement("div", {className: "col-sm-3"}, 
                    React.createElement("div", null, "申请次数：14次"), 
                    React.createElement("div", null, "好评率：", 
                        React.createElement("i", {className: "fa fa-star text-danger font-size-12", "aria-hidden": "true"}), 
                        React.createElement("i", {className: "fa fa-star text-danger font-size-12", "aria-hidden": "true"}), 
                        React.createElement("i", {className: "fa fa-star text-danger font-size-12", "aria-hidden": "true"}), 
                        React.createElement("i", {className: "fa fa-star text-danger font-size-12", "aria-hidden": "true"}), 
                        React.createElement("i", {className: "fa fa-star text-danger font-size-12", "aria-hidden": "true"})
                    )
                )
            )
        );
    }
});


var ServiceItemPreview = React.createClass({displayName: "ServiceItemPreview",
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

var EvaluateItem = React.createClass({displayName: "EvaluateItem",
    render: function () {
        return (
            React.createElement("tr", null, 
                React.createElement("td", null, 
                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                    React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"})
                ), 
                React.createElement("td", null, "2000元"), 
                React.createElement("td", null, "服务名称xxxxx"), 
                React.createElement("td", null, "服务非常到位，细致周到"), 
                React.createElement("td", null, "xxx 股份有限公司")
            )
        );
    }
});

var RecordItem = React.createClass({displayName: "RecordItem",
    render: function () {
        return (
            React.createElement("tr", null, 
                React.createElement("td", null, "2016-01-01～2016-01-10"), 
                React.createElement("td", null, "xxx 科技有限公司"), 
                React.createElement("td", null, "质量检测"), 
                React.createElement("td", null, "技术创新"), 
                React.createElement("td", null, "2000 元")
            )
        );
    }
});



ReactDOM.render(
    React.createElement(OrgDetail, null),
    document.getElementById('page')
);