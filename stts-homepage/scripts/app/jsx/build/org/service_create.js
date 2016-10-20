var ServiceCreate = React.createClass({displayName: "ServiceCreate",

    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, null), 
                React.createElement(Header, {activeMenuID: "mainMenuService"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("div", null, 
                        React.createElement("div", {className: "pull-left w-222"}, 
                            React.createElement("div", {className: "list-group"}, 
                                React.createElement("a", {href: "service_list.html", className: "list-group-item "}, "服务一览"), 

                                React.createElement("a", {href: "service_create.html", className: "list-group-item active"}, "服务发布")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240 overflow-hidden "}, 
                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "dashboard.html"}, "服务机构")), 
                                React.createElement("li", null, React.createElement("a", {href: "service_list.html"}, "服务产品")), 
                                React.createElement("li", {className: "active"}, "服务发布")
                            ), 


                            React.createElement("ul", {className: "nav nav-tabs text-center", role: "tablist"}, 
                                React.createElement("li", {role: "presentation", className: "tab active"}, 
                                    React.createElement("a", {href: "#info", role: "tab", "data-toggle": "tab"}, "服务产品")
                                ), 
                                React.createElement("li", {role: "presentation"}, 
                                    React.createElement("a", {href: "#history", role: "tab", "data-toggle": "tab"}, "初始案例")
                                )
                            ), 
                            React.createElement("div", {className: "tab-content"}, 

                                React.createElement(ServiceNew, null), 
                                React.createElement(ServiceHistory, null)

                            )
                        )
                    )
                )
            )
        );
    }
});

var ServiceNew = React.createClass({displayName: "ServiceNew",

    componentDidMount: function () {
        var editor;
        KindEditor.ready(function (K) {
            editor = K.create('textarea[name="content"]', {
                allowFileManager: true
            });
        });
    },
    render: function () {
        return (
            React.createElement("div", {role: "tabpanel", className: "tab-pane active", id: "info"}, 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("img", {className: "w-per-100", src: "../../img/common/org-preview.jpg"}), 
                        React.createElement("button", {className: "col-sm-12 btn btn-info mt-20 "}, "展示标题图上传")
                    ), 
                    React.createElement("div", {className: "col-sm-9 form form-horizontal ", role: "form"}, 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", {className: "control-label col-sm-3"}, 
                                "服务名称", React.createElement("span", {className: "text-danger ml-5"}, "*")
                            ), 

                            React.createElement("div", {className: "col-sm-7"}, 
                                React.createElement("input", {className: "form-control", type: "text"})
                            )
                        ), 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", {className: "control-label col-sm-3"}, 
                                "大分类", React.createElement("span", {className: "text-danger ml-5"}, "*")
                            ), 

                            React.createElement("div", {className: "col-sm-7"}, 
                                React.createElement("select", {className: "form-control"}, 
                                    React.createElement("option", null)
                                )
                            )
                        ), 

                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", {className: "control-label col-sm-3"}, 
                                "小分类", React.createElement("span", {className: "text-danger ml-5"}, "*")
                            ), 

                            React.createElement("div", {className: "col-sm-7"}, 
                                React.createElement("select", {className: "form-control"}, 
                                    React.createElement("option", null)
                                )
                            )
                        ), 
                        React.createElement("div", {className: "form-group form-inline"}, 
                            React.createElement("label", {className: "control-label col-sm-3"}, 
                                "服务对象", React.createElement("span", {className: "text-danger ml-5"}, "*")
                            ), 

                            React.createElement("div", {className: "col-sm-7"}, 
                                React.createElement("div", {className: "checkbox mr-10"}, 
                                    React.createElement("label", null, 
                                        React.createElement("input", {type: "checkbox"}), " 普通企业"
                                    )
                                ), 

                                React.createElement("div", {className: "checkbox mr-10"}, 
                                    React.createElement("label", null, 
                                        React.createElement("input", {type: "checkbox"}), " 小型企业"
                                    )
                                ), 

                                React.createElement("div", {className: "checkbox mr-10"}, 
                                    React.createElement("label", null, 
                                        React.createElement("input", {type: "checkbox"}), " 微型企业"
                                    )
                                ), 

                                React.createElement("div", {className: "checkbox"}, 
                                    React.createElement("label", null, 
                                        React.createElement("input", {type: "checkbox"}), " 小升规"
                                    )
                                )
                            )

                        ), 
                        React.createElement("div", {className: "form-group form-inline"}, 
                            React.createElement("label", {className: "control-label col-sm-3"}, 
                                "服务价格", React.createElement("span", {className: "text-danger ml-5"}, "*")
                            ), 

                            React.createElement("div", {className: "col-sm-7"}, 
                                React.createElement("input", {type: "text", className: "form-control"}), 
                                React.createElement("span", {className: "w-50 text-center"}, " ~ "), 
                                React.createElement("input", {type: "text", className: "form-control"})
                            )

                        ), 

                        React.createElement("div", {className: "form-group form-inline"}, 
                            React.createElement("label", {className: "control-label col-sm-3"}, 
                                "收费标准", React.createElement("span", {className: "text-danger ml-5"}, "*")
                            ), 

                            React.createElement("div", {className: "col-sm-7"}, 
                                React.createElement("textarea", {rows: "3", className: " form-control", cols: "48"})
                            )

                        ), 
                        React.createElement("div", {className: "form-group form-inline"}, 
                            React.createElement("label", {className: "control-label col-sm-3"}, 
                                "服务方式", React.createElement("span", {className: "text-danger ml-5"}, "*")
                            ), 

                            React.createElement("div", {className: "col-sm-7"}, 
                                React.createElement("div", {className: "checkbox mr-10"}, 
                                    React.createElement("label", null, 
                                        React.createElement("input", {type: "checkbox"}), " 电话服务"
                                    )
                                ), 

                                React.createElement("div", {className: "checkbox mr-10"}, 
                                    React.createElement("label", null, 
                                        React.createElement("input", {type: "checkbox"}), " 上门服务"
                                    )
                                ), 

                                React.createElement("div", {className: "checkbox"}, 
                                    React.createElement("label", null, 
                                        React.createElement("input", {type: "checkbox"}), " 网络服务"
                                    )
                                )
                            )
                        ), 
                        React.createElement("div", {className: "form-group form-inline"}, 
                            React.createElement("label", {className: "control-label col-sm-3"}, 
                                "支付服务券", React.createElement("span", {className: "text-danger ml-5"}, "*")
                            ), 

                            React.createElement("div", {className: "col-sm-7"}, 
                                React.createElement("div", {className: "radio disabled  mr-10"}, 
                                    React.createElement("label", null, 
                                        React.createElement("input", {type: "radio", checked: "checked", 
                                               disabled: true}), " 可用"
                                    )
                                ), 

                                React.createElement("div", {className: "radio disabled"}, 
                                    React.createElement("label", null, 
                                        React.createElement("input", {type: "radio", disabled: true}), " 不可用"
                                    )
                                )
                            )
                        )
                    )
                ), 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-sm-12"}, 
                        React.createElement("h4", null, "服务详细内容描述"), 
                React.createElement("textarea", {name: "content", className: "w-per-100 ", 
                          style: {height: "300px"}})
                    )
                )
            )
        );
    }
});


var ServiceHistory = React.createClass({displayName: "ServiceHistory",
    render: function () {
        return (
            React.createElement("div", {role: "tabpanel", className: "tab-pane", id: "history"}, 
                React.createElement("div", {className: "col-sm-12"}, 
                    React.createElement("button", {className: "btn btn-success btn-sm w-100 mr-10", "data-toggle": "modal", "data-target": "#addModal"}, 
                        React.createElement("span", {className: "fa fa-plus mr-10"}), "添加"
                    ), 
                    React.createElement("button", {className: "btn badge-warning btn-sm w-100 mr-10"}, React.createElement("span", {className: "fa fa-upload mr-10"}), "批量导入"
                    ), 
                    React.createElement("button", {className: "btn btn-info btn-sm w-100 mr-10"}, React.createElement("span", {className: "fa fa-download mr-10"}), "批量导出"
                    ), 
                    React.createElement("button", {className: "btn btn-default btn-sm w-100"}, React.createElement("span", {
                        className: "fa fa-times-circle-o mr-10"}), "批量删除"
                    )
                ), 

                React.createElement("div", {className: "mt-20 col-sm-12"}, 
                    React.createElement("table", {className: "table  table-hover font-size-12"}, 
                        React.createElement("thead", null, 
                        React.createElement("tr", null, 
                            React.createElement("th", null), 
                            React.createElement("th", null, "服务时间"), 
                            React.createElement("th", null, "企业名称"), 
                            React.createElement("th", null, "服务名称"), 
                            React.createElement("th", null, "服务评价")
                        )
                        ), 

                        React.createElement("tbody", null, 
                        React.createElement("tr", null, 
                            React.createElement("td", {className: "text-center"}, React.createElement("input", {type: "checkbox"})), 
                            React.createElement("td", null, "2016-01-01 ～ 2016-01-10"), 
                            React.createElement("td", null, "xxx科技有限公司"), 
                            React.createElement("td", null, "质量检测"), 
                            React.createElement("td", {className: "text-gold"}, 
                                React.createElement("span", {className: "fa fa-star"}), 
                                React.createElement("span", {className: "fa fa-star"}), 
                                React.createElement("span", {className: "fa fa-star"}), 
                                React.createElement("span", {className: "fa fa-star"}), 
                                React.createElement("span", {className: "fa fa-star"})

                            )
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", {className: "text-center"}, 
                                React.createElement("input", {type: "checkbox"})), 
                            React.createElement("td", null, "2016-01-01 ～ 2016-01-10"), 
                            React.createElement("td", null, "xxx科技有限公司"), 
                            React.createElement("td", null, "质量检测"), 
                            React.createElement("td", {className: "text-gold"}, 
                                React.createElement("span", {className: "fa fa-star"}), 
                                React.createElement("span", {className: "fa fa-star"}), 
                                React.createElement("span", {className: "fa fa-star"}), 
                                React.createElement("span", {className: "fa fa-star"}), 
                                React.createElement("span", {className: "fa fa-star"})

                            )
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", {className: "text-center"}, React.createElement("input", {type: "checkbox"})), 
                            React.createElement("td", null, "2016-01-01 ～ 2016-01-10"), 
                            React.createElement("td", null, "xxx科技有限公司"), 
                            React.createElement("td", null, "质量检测"), 
                            React.createElement("td", {className: "text-gold"}, 
                                React.createElement("span", {className: "fa fa-star"}), 
                                React.createElement("span", {className: "fa fa-star"}), 
                                React.createElement("span", {className: "fa fa-star"}), 
                                React.createElement("span", {className: "fa fa-star"}), 
                                React.createElement("span", {className: "fa fa-star"})

                            )
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", {className: "text-center"}, 
                                React.createElement("input", {type: "checkbox"})), 
                            React.createElement("td", null, "2016-01-01 ～ 2016-01-10"), 
                            React.createElement("td", null, "xxx科技有限公司"), 
                            React.createElement("td", null, "质量检测"), 
                            React.createElement("td", {className: "text-gold"}, 
                                React.createElement("span", {className: "fa fa-star"}), 
                                React.createElement("span", {className: "fa fa-star"}), 
                                React.createElement("span", {className: "fa fa-star"}), 
                                React.createElement("span", {className: "fa fa-star"}), 
                                React.createElement("span", {className: "fa fa-star"})
                            )
                        )
                        )
                    ), 
                    React.createElement(HistoryNewModal, null)
                )
            )
        );
    }
});

var HistoryNewModal = React.createClass({displayName: "HistoryNewModal",
    render: function () {
        return (
            React.createElement("div", {className: "modal fade", id: "addModal", tabindex: "-1", role: "dialog", "aria-labelledby": "addModalLabel", 
                 "aria-hidden": "true"}, 
                React.createElement("div", {className: "modal-dialog"}, 
                    React.createElement("div", {className: "modal-content"}, 
                        React.createElement("div", {className: "modal-header"}, 
                            React.createElement("button", {type: "button", className: "close", "data-dismiss": "modal"}, React.createElement("span", {
                                "aria-hidden": "true"}, "×"), React.createElement("span", {className: "sr-only"}, "Close")), 
                            React.createElement("h4", {className: "modal-title", id: "addModalLabel"}, "初始案例添加")
                        ), 
                        React.createElement("div", {className: "modal-body"}, 
                            React.createElement("div", {className: "form form-horizontal ", role: "form"}, 
                                React.createElement("div", {className: "form-group"}, 
                                    React.createElement("label", {className: "control-label col-sm-3"}, 
                                        "大分类", React.createElement("span", {className: "text-danger ml-5"}, "*")
                                    ), 

                                    React.createElement("div", {className: "col-sm-8"}, 
                                        React.createElement("select", {className: "form-control"}, 
                                            React.createElement("option", null)
                                        )
                                    )
                                ), 

                                React.createElement("div", {className: "form-group"}, 
                                    React.createElement("label", {className: "control-label col-sm-3"}, 
                                        "小分类", React.createElement("span", {className: "text-danger ml-5"}, "*")
                                    ), 

                                    React.createElement("div", {className: "col-sm-8"}, 
                                        React.createElement("select", {className: "form-control"}, 
                                            React.createElement("option", null)
                                        )
                                    )
                                ), 
                                React.createElement("div", {className: "form-group"}, 
                                    React.createElement("label", {className: "control-label col-sm-3"}, 
                                        "服务名称", React.createElement("span", {className: "text-danger ml-5"}, "*")
                                    ), 

                                    React.createElement("div", {className: "col-sm-8"}, 
                                        React.createElement("input", {className: "form-control", type: "text"})
                                    )
                                ), 

                                React.createElement("div", {className: "form-group form-inline"}, 
                                    React.createElement("label", {className: "control-label col-sm-3"}, 
                                        "服务时间", React.createElement("span", {className: "text-danger ml-5"}, "*")
                                    ), 

                                    React.createElement("div", {className: "col-sm-8"}, 
                                        React.createElement("input", {type: "text", className: "form-control"}), 
                                        React.createElement("span", {className: "w-50 text-center"}, " ～ "), 
                                        React.createElement("input", {type: "text", className: "form-control"})
                                    )

                                ), 

                                React.createElement("div", {className: "form-group"}, 
                                    React.createElement("label", {className: "control-label col-sm-3"}, 
                                        "实际费用", React.createElement("span", {className: "text-danger ml-5"}, "*")
                                    ), 

                                    React.createElement("div", {className: "col-sm-8  "}, 
                                        React.createElement("div", {className: "input-group"}, 
                                                    React.createElement("span", {className: "input-group-addon "}, React.createElement("span", {
                                                        className: "fa fa-rmb"})), 
                                            React.createElement("input", {className: "form-control", type: "text"})
                                        )
                                    )
                                ), 

                                React.createElement("div", {className: "form-group"}, 
                                    React.createElement("label", {className: "control-label col-sm-3"}, 
                                        "服务评价", React.createElement("span", {className: "text-danger ml-5"}, "*")
                                    ), 

                                    React.createElement("div", {className: "col-sm-8 "}, 

                                        React.createElement("div", {className: "form-control-static text-gold"}, 

                                            React.createElement("span", {className: "fa fa-star"}), 
                                            React.createElement("span", {className: "fa fa-star"}), 
                                            React.createElement("span", {className: "fa fa-star"}), 
                                            React.createElement("span", {className: "fa fa-star"}), 
                                            React.createElement("span", {className: "fa fa-star"})
                                        )
                                    )
                                ), 


                                React.createElement("div", {className: "form-group"}, 
                                    React.createElement("label", {className: "control-label col-sm-3"}, 
                                        "服务名称", React.createElement("span", {className: "text-danger ml-5"}, "*")
                                    ), 

                                    React.createElement("div", {className: "col-sm-8"}, 
                                        React.createElement("input", {className: "form-control", type: "text"})
                                    )
                                )

                            )
                        ), 
                        React.createElement("div", {className: "modal-footer "}, 
                            React.createElement("div", {className: "text-center"}, 
                                React.createElement("button", {type: "button", className: "btn btn-primary "}, React.createElement("span", {className: "fa fa-save "}), 
                                    "保存"
                                ), 
                                React.createElement("button", {type: "button", className: "btn btn-default ", "data-dismiss": "modal"}, "取消")
                            )
                        )
                    )
                )
            )
        );
    }
});
ReactDOM.render(
    React.createElement(ServiceCreate, null),
    document.getElementById('page')
);