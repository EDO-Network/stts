var ServiceCreate = React.createClass({displayName: "ServiceCreate",

    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, null), 
                React.createElement(Header, {activeMenuID: "mainMenuOrg"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("div", null, 
                        React.createElement("div", {className: "pull-left w-222"}, 
                            React.createElement("div", {className: "list-group"}, 
                                React.createElement("a", {href: "org_list.html", className: "list-group-item"}, "服务机构一览"), 
                                React.createElement("a", {href: "org_qualification_list.html", className: "list-group-item"}, "服务机构资质审核"), 
                                React.createElement("a", {href: "service_list.html", className: "list-group-item"}, "服务产品一览"), 
                                React.createElement("a", {href: "service_qualification_list.html", className: "list-group-item active"}, "服务产品上架")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240 overflow-hidden "}, 
                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "org_list.html"}, "服务机构管理")), 
                                React.createElement("li", null, React.createElement("a", {href: "service_list.html"}, "服务产品上架审核")), 
                                React.createElement("li", {className: "active"}, "服务产品审核详细")
                            ), 

                            React.createElement(ServiceNew, null)
                        )
                    )
                ), 

                React.createElement(Footer, null)
            )
        );
    }
});

var ServiceNew = React.createClass({displayName: "ServiceNew",
    render: function () {
        return (

            React.createElement("div", null, 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("img", {className: "w-per-100", src: "../img/sample/org_preview.png"})
                    ), 
                    React.createElement("div", {className: "col-sm-9 form form-horizontal ", role: "form"}, 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", {className: "control-label col-sm-3"}, 
                                "服务名称"
                            ), 

                            React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                React.createElement("label", null, "xxxx检测服务")
                            )
                        ), 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", {className: "control-label col-sm-3"}, 
                                "服务大类"
                            ), 

                            React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                React.createElement("label", null, "人才引培")
                            )
                        ), 

                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", {className: "control-label col-sm-3"}, 
                                "服务小类"
                            ), 

                            React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                React.createElement("label", null, "高层培训")
                            )
                        ), 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", {className: "control-label col-sm-3"}, 
                                "服务对象"
                            ), 

                            React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                React.createElement("label", null, "普通企业 / 小型企业 / 微型企业 / 小升规")
                            )
                        ), 

                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", {className: "control-label col-sm-3"}, 
                                "服务价格"
                            ), 

                            React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                React.createElement("label", null, "1000 ～ 1500 元")
                            )
                        ), 

                        React.createElement("div", {className: "form-group form-inline"}, 
                            React.createElement("label", {className: "control-label col-sm-3"}, 
                                "收费标准"
                            ), 

                            React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                React.createElement("label", null, "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + ' ' +
                                    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + ' ' +
                                    "xxxxxxxxxxx")
                            )

                        ), 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", {className: "control-label col-sm-3"}, 
                                "服务方式"
                            ), 

                            React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                React.createElement("label", null, "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + ' ' +
                                    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + ' ' +
                                    "xxxxxxxxxxx")
                            )
                        ), 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", {className: "control-label col-sm-3"}, 
                                "支付服务券"
                            ), 

                            React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                React.createElement("label", null, "可用")
                            )
                        ), 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", {className: "control-label col-sm-3"}, 
                                "状态"
                            ), 

                            React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                React.createElement("label", null, "待审核")
                            )
                        )
                    )
                ), 
                React.createElement("div", {className: "mb-20"}, 
                    React.createElement("div", {className: "panel panel-default"}, 
                        React.createElement("div", {className: "panel-heading"}, "服务详细内容描述"), 
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
                    )
                ), 



                React.createElement("div", {className: "text-center mb-20"}, 
                    React.createElement("button", {className: "btn btn-primary", type: "button", 
                            "data-toggle": "modal", "data-target": "#passModal"}, "通过审核"
                    ), 
                    " ", 
                    React.createElement("button", {className: "btn btn-default", type: "button", 
                            "data-toggle": "modal", "data-target": "#refuseModal"}, "驳回申请"
                    )
                ), 


                React.createElement(PassModal, null), 
                React.createElement(RefuseModal, null)
            )
        );
    }
});


var PassModal = React.createClass({displayName: "PassModal",
    render: function () {
        return (
            React.createElement("div", {className: "modal fade", id: "passModal", tabindex: "-1", role: "dialog", "aria-labelledby": "passModalLabel", 
                 "aria-hidden": "true"}, 
                React.createElement("div", {className: "modal-dialog"}, 
                    React.createElement("div", {className: "modal-content"}, 
                        React.createElement("div", {className: "modal-header"}, 
                            React.createElement("button", {type: "button", className: "close", "data-dismiss": "modal"}, React.createElement("span", {
                                "aria-hidden": "true"}, "×"), React.createElement("span", {className: "sr-only"}, "Close")), 
                            React.createElement("h4", {className: "modal-title", id: "addModalLabel"}, "服务上架审核通过")
                        ), 
                        React.createElement("div", {className: "modal-body"}, 
                            React.createElement("div", {className: "form form-horizontal ", role: "form"}, 
                                React.createElement("div", {className: "form-group"}, 
                                    React.createElement("label", {className: "control-label col-sm-3"}, 
                                        "审核时间"
                                    ), 

                                    React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                        React.createElement("label", null, "2017-01-13 13:00:22")
                                    )
                                ), 

                                React.createElement("div", {className: "form-group"}, 
                                    React.createElement("label", {className: "control-label col-sm-3"}, 
                                        "审核人员"
                                    ), 

                                    React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                        React.createElement("label", null, "用户名AAA（非实名）")
                                    )
                                )
                            )
                        ), 
                        React.createElement("div", {className: "modal-footer "}, 
                            React.createElement("div", {className: "text-center"}, 
                                React.createElement("button", {type: "button", className: "btn btn-primary "}, 
                                    "允许立即上架"
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

var RefuseModal = React.createClass({displayName: "RefuseModal",
    render: function () {
        return (
            React.createElement("div", {className: "modal fade", id: "refuseModal", tabindex: "-1", role: "dialog", "aria-labelledby": "refuseModalLabel", 
                 "aria-hidden": "true"}, 
                React.createElement("div", {className: "modal-dialog"}, 
                    React.createElement("div", {className: "modal-content"}, 
                        React.createElement("div", {className: "modal-header"}, 
                            React.createElement("button", {type: "button", className: "close", "data-dismiss": "modal"}, React.createElement("span", {
                                "aria-hidden": "true"}, "×"), React.createElement("span", {className: "sr-only"}, "Close")), 
                            React.createElement("h4", {className: "modal-title", id: "addModalLabel"}, "服务上架审核驳回")
                        ), 
                        React.createElement("div", {className: "modal-body"}, 
                            React.createElement("div", {className: "form form-horizontal ", role: "form"}, 
                                React.createElement("div", {className: "form-group"}, 
                                    React.createElement("label", {className: "control-label col-sm-3"}, 
                                        "审核时间"
                                    ), 

                                    React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                        React.createElement("label", null, "2017-01-13 13:00:22")
                                    )
                                ), 

                                React.createElement("div", {className: "form-group"}, 
                                    React.createElement("label", {className: "control-label col-sm-3"}, 
                                        "审核人员"
                                    ), 

                                    React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                        React.createElement("label", null, "用户名AAA（非实名）")
                                    )
                                ), 

                                React.createElement("div", {className: "form-group"}, 
                                    React.createElement("label", {className: "control-label col-sm-3"}, 
                                        "原因分类"
                                    ), 

                                    React.createElement("div", {className: "col-sm-4"}, 
                                        React.createElement("select", {className: "form-control"}, 
                                            React.createElement("option", null, "内容不符")
                                        )
                                    )
                                ), 

                                React.createElement("div", {className: "form-group"}, 
                                    React.createElement("label", {className: "control-label col-sm-3"}, 
                                        "驳回申请原因说明"
                                    ), 

                                    React.createElement("div", {className: "col-sm-8"}, 
                                        React.createElement("textarea", {className: "form-control", rows: "5"})
                                    )
                                )

                            )
                        ), 
                        React.createElement("div", {className: "modal-footer "}, 
                            React.createElement("div", {className: "text-center"}, 
                                React.createElement("button", {type: "button", className: "btn btn-primary "}, 
                                    "驳回上架申请"
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