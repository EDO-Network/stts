var NoticeList = React.createClass({displayName: "NoticeList",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(OrderArbitrationDialog, null), 
                React.createElement(Top, null), 
                React.createElement(Header, {activeMenuID: "mainMenuIndex"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("div", null, 
                        React.createElement("div", {className: "pull-left w-222"}, 
                            React.createElement("div", {className: "list-group"}, 
                                React.createElement("a", {href: "index.html", className: "list-group-item"}, "运营平台"), 
                                React.createElement("a", {href: "user_list.html", className: "list-group-item"}, "用户一览"), 
                                React.createElement("a", {href: "notice_list.html", className: "list-group-item active"}, "全网通知")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240"}, 
                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "dashboard.html"}, "运营平台")), 
                                React.createElement("li", {className: "active"}, "全网通知一览")
                            ), 
                            React.createElement("div", {className: "panel panel-default"}, 
                                React.createElement("div", {className: "panel-heading"}, 
                                    "全网通知一览", 
                                    React.createElement("a", {href: "#", className: "pull-right", "data-toggle": "modal", 
                                       "data-target": "#newNoticeDialog"}, "发送新通知")
                                ), 
                                React.createElement("div", {className: "panel-body"}, 
                                    React.createElement(SearchArea, null), 
                                    React.createElement(NoticeTable, null), 
                                    React.createElement(Paging, null)
                                )
                            )
                        )
                    )
                ), 

                React.createElement(Footer, null)

            )
        );
    }
});

var SearchArea = React.createClass({displayName: "SearchArea",
    render: function () {
        return (
            React.createElement("div", {className: "form-horizontal overflow-hidden"}, 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-sm-4"}, 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("div", {className: "control-label col-sm-4"}, 
                                React.createElement("label", null, "通知对象")
                            ), 
                            React.createElement("div", {className: "col-sm-8"}, 
                                React.createElement("select", {className: "form-control"}, 
                                    React.createElement("option", null, "全部"), 
                                    React.createElement("option", null, "企业"), 
                                    React.createElement("option", null, "服务机构")
                                )
                            )
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-4"}, 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("div", {className: "control-label col-sm-4"}, 
                                React.createElement("label", null, "发送时间")
                            ), 
                            React.createElement("div", {className: "col-sm-8"}, 
                                React.createElement("div", {className: "input-group input-group"}, 
                                    React.createElement("input", {type: "text", className: "form-control"}), 
                                                            React.createElement("span", {
                                                                className: "input-group-btn text-center font-size-12 width-10"}, "-"), 
                                    React.createElement("input", {type: "text", className: "form-control"})
                                )
                            )
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-4"}, 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("div", {className: "control-label col-sm-3"}, 
                                React.createElement("label", null, "分类")
                            ), 
                            React.createElement("div", {className: "col-sm-5"}, 
                                React.createElement("select", {className: "form-control"}, 
                                    React.createElement("option", null, "全网公告"), 
                                    React.createElement("option", null, "重要通知"), 
                                    React.createElement("option", null, "系统信息")
                                )
                            ), 
                            React.createElement("div", {className: "col-sm-4"}, 
                                React.createElement("button", {className: " btn btn-sm btn-primary"}, 
                                    React.createElement("span", {className: "fa fa-search"}), " 搜索"
                                )
                            )
                        )
                    )
                )
            )
        );
    }
});

var NoticeTable = React.createClass({displayName: "NoticeTable",
    render: function () {
        return (
            React.createElement("table", {className: "table table-hover"}, 
                React.createElement("thead", null, 
                React.createElement("tr", null, 
                    React.createElement("th", null, "分类"), 
                    React.createElement("th", null, "通知对象"), 
                    React.createElement("th", null, "标题"), 
                    React.createElement("th", null, "内容"), 
                    React.createElement("th", null, "时间")
                )
                ), 
                React.createElement("tbody", null, 
                React.createElement(TableRow, null), 
                React.createElement(TableRow, null), 
                React.createElement(TableRow, null), 
                React.createElement(TableRow, null), 
                React.createElement(TableRow, null)
                )
            )
        );
    }
});

var TableRow = React.createClass({displayName: "TableRow",
    render: function () {
        return (
            React.createElement("tr", null, 
                React.createElement("td", null, "重要通知"), 
                React.createElement("td", null, "全部"), 
                React.createElement("td", null, "服务器维护通知"), 
                React.createElement("td", null, "xxxxxxxxxxxxxxxxx"), 
                React.createElement("td", null, "2016-01-01 18:00:01")
            )
        );
    }
});


var OrderArbitrationDialog = React.createClass({displayName: "OrderArbitrationDialog",
    render: function () {
        return (
            React.createElement("div", {className: "modal fade", id: "newNoticeDialog", tabindex: "-1", role: "dialog", 
                 "aria-labelledby": "newNoticeDialogLabel", 
                 "aria-hidden": "true"}, 
                React.createElement("div", {className: "modal-dialog"}, 
                    React.createElement("div", {className: "modal-content"}, 
                        React.createElement("div", {className: "modal-header"}, 
                            React.createElement("button", {type: "button", className: "close", "data-dismiss": "modal"}, React.createElement("span", {
                                "aria-hidden": "true"}, "×"), React.createElement("span", {className: "sr-only"}, "Close")), 
                            React.createElement("h4", {className: "modal-title", id: "orderArbitrationDialogLabel"}, "发送新通知")
                        ), 
                        React.createElement("div", {className: "modal-body"}, 
                            React.createElement("div", {className: "form form-horizontal ", role: "form"}, 
                                React.createElement("div", {className: "form-group"}, 
                                    React.createElement("label", {className: "control-label col-sm-4"}, 
                                        "通知对象"
                                    ), 

                                    React.createElement("div", {className: "col-sm-6"}, 
                                        React.createElement("select", {className: "form-control"}, 
                                            React.createElement("option", null, "全部"), 
                                            React.createElement("option", null, "企业"), 
                                            React.createElement("option", null, "服务机构")
                                        )
                                    )
                                ), 

                                React.createElement("div", {className: "form-group"}, 
                                    React.createElement("label", {className: "control-label col-sm-4"}, 
                                        "行业细分"
                                    ), 

                                    React.createElement("div", {className: "col-sm-6"}, 
                                        React.createElement("label", {className: "checkbox-inline"}, 
                                            React.createElement("input", {type: "checkbox", id: "inlineCheckbox1", value: "option1"}), " 人才引培"
                                        ), 
                                        React.createElement("label", {className: "checkbox-inline"}, 
                                            React.createElement("input", {type: "checkbox", id: "inlineCheckbox2", value: "option2"}), " 技术创新"
                                        ), 
                                        React.createElement("label", {className: "checkbox-inline"}, 
                                            React.createElement("input", {type: "checkbox", id: "inlineCheckbox3", value: "option3"}), " 财务指导"
                                        ), 
                                        React.createElement("label", {className: "checkbox-inline"}, 
                                            React.createElement("input", {type: "checkbox", id: "inlineCheckbox1", value: "option1"}), " 法律维权"
                                        ), 
                                        React.createElement("label", {className: "checkbox-inline"}, 
                                            React.createElement("input", {type: "checkbox", id: "inlineCheckbox2", value: "option2"}), " 市场拓展"
                                        ), 
                                        React.createElement("label", {className: "checkbox-inline"}, 
                                            React.createElement("input", {type: "checkbox", id: "inlineCheckbox3", value: "option3"}), " 管理咨询"
                                        ), 
                                        React.createElement("label", {className: "checkbox-inline"}, 
                                            React.createElement("input", {type: "checkbox", id: "inlineCheckbox3", value: "option3"}), " 检验检测认证"
                                        ), 
                                        React.createElement("label", {className: "checkbox-inline"}, 
                                            React.createElement("input", {type: "checkbox", id: "inlineCheckbox1", value: "option1"}), " 知识产权保护"
                                        ), 
                                        React.createElement("label", {className: "checkbox-inline"}, 
                                            React.createElement("input", {type: "checkbox", id: "inlineCheckbox2", value: "option2"}), " 创业辅导"
                                        ), 
                                        React.createElement("label", {className: "checkbox-inline"}, 
                                            React.createElement("input", {type: "checkbox", id: "inlineCheckbox3", value: "option3"}), " 公共服务"
                                        ), 
                                        React.createElement("label", {className: "checkbox-inline"}, 
                                            React.createElement("input", {type: "checkbox", id: "inlineCheckbox3", value: "option3"}), " 其他"
                                        )
                                    )
                                ), 

                                React.createElement("div", {className: "form-group"}, 
                                    React.createElement("label", {className: "control-label col-sm-4"}, 
                                        "分类"
                                    ), 

                                    React.createElement("div", {className: "col-sm-6"}, 
                                        React.createElement("select", {className: "form-control"}, 
                                            React.createElement("option", null, "全网公告"), 
                                            React.createElement("option", null, "重要通知"), 
                                            React.createElement("option", null, "系统信息")
                                        )
                                    )
                                ), 

                                React.createElement("div", {className: "form-group"}, 
                                    React.createElement("label", {className: "control-label col-sm-4"}, 
                                        "标题"
                                    ), 

                                    React.createElement("div", {className: "col-sm-6"}, 
                                        React.createElement("input", {className: "form-control"})
                                    )
                                ), 

                                React.createElement("div", {className: "form-group"}, 
                                    React.createElement("label", {className: "control-label col-sm-4"}, 
                                        "内容"
                                    ), 

                                    React.createElement("div", {className: "col-sm-6"}, 
                                        React.createElement("textarea", {className: "form-control", rows: "5"})
                                    )
                                )

                            )
                        ), 
                        React.createElement("div", {className: "modal-footer "}, 
                            React.createElement("div", {className: "text-center"}, 
                                React.createElement("button", {type: "button", className: "btn btn-default ", "data-dismiss": "modal"}, "发送")
                            )
                        )
                    )
                )
            )
        );
    }
});


ReactDOM.render(
    React.createElement(NoticeList, null),
    document.getElementById('page')
);