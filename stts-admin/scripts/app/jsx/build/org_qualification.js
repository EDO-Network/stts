var Company = React.createClass({displayName: "Company",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, null), 
                React.createElement(Header, {activeMenuID: "mainMenuOrg"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("div", null, 
                        React.createElement("div", {className: "pull-left w-222"}, 
                            React.createElement("a", {href: "org_list.html", className: "list-group-item"}, "服务机构一览"), 
                            React.createElement("a", {href: "org_qualification_list.html", className: "list-group-item active"}, "服务机构资质审核"), 
                            React.createElement("a", {href: "service_list.html", className: "list-group-item"}, "服务产品一览"), 
                            React.createElement("a", {href: "service_qualification_list.html", className: "list-group-item"}, "服务产品审核")
                        ), 

                        React.createElement("div", {className: "ml-240"}, 

                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "org_list.html"}, "服务机构管理")), 
                                React.createElement("li", null, React.createElement("a", {href: "org_qualification_list.html"}, "服务机构资质审核一览")), 
                                React.createElement("li", {className: "active"}, "服务机构资质审核详细")
                            ), 
                            React.createElement("div", {className: "overflow-hidden"}, 
                                React.createElement("ul", {className: "nav nav-tabs", role: "tablist"}, 
                                    React.createElement("li", {role: "presentation", className: "active"}, 
                                        React.createElement("a", {href: "#desc", role: "tab", "data-toggle": "tab"}, "服务机构信息")
                                    ), 
                                    React.createElement("li", {role: "presentation"}, React.createElement("a", {href: "#show", role: "tab", "data-toggle": "tab"}, "机构展示")), 
                                    React.createElement("li", {role: "presentation"}, React.createElement("a", {href: "#service", role: "tab", "data-toggle": "tab"}, "服务产品")
                                    )
                                ), 

                                React.createElement("div", {className: "tab-content overflow-hidden"}, 
                                    React.createElement("div", {role: "tabpanel", className: "tab-pane active", id: "desc"}, 
                                        React.createElement(OrgInfo, null)
                                    ), 
                                    React.createElement("div", {role: "tabpanel", className: "tab-pane", id: "show"}, 
                                        React.createElement(OrgShow, null)
                                    ), 
                                    React.createElement("div", {role: "tabpanel", className: "tab-pane", id: "service"}, 
                                        React.createElement(OrgService, null)
                                    )
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

var OrgInfo = React.createClass({displayName: "OrgInfo",
    render: function () {
        return (
            React.createElement("div", {className: "panel panel-default"}, 
                React.createElement("div", {className: "panel-heading"}, "服务机构信息"), 
                React.createElement("div", {className: "panel-body"}, 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "col-sm-2"}, 
                            React.createElement("div", {className: "mb-20"}, 
                                React.createElement("div", null, 
                                    React.createElement("img", {className: "w-200", src: "../img/company/company.jpg"})
                                ), 
                                React.createElement("br", null), 

                                React.createElement("div", {className: "text-center w-200"}, "营业执照"
                                )
                            ), 
                            React.createElement("div", {className: "mb-20"}, 
                                React.createElement("div", null, 
                                    React.createElement("img", {className: "w-200", src: "../img/company/tax.jpg"})
                                ), 
                                React.createElement("br", null), 

                                React.createElement("div", {className: "text-center w-200"}, "纳税证明"
                                )
                            ), 
                            React.createElement("div", {className: "mb-20"}, 
                                React.createElement("div", null, 
                                    React.createElement("img", {className: "w-200", src: "../img/company/shebao.jpg"})
                                ), 
                                React.createElement("br", null), 

                                React.createElement("div", {className: "text-center w-200"}, "社保证明"
                                )
                            ), 
                            React.createElement("div", {className: "mb-20"}, 
                                React.createElement("div", null, 
                                    React.createElement("img", {className: "w-200", src: "../img/company/huibiao.jpg"})
                                ), 
                                React.createElement("br", null), 

                                React.createElement("div", {className: "text-center w-200"}, "徽标"
                                )
                            ), 
                            React.createElement("div", {className: "mb-20"}, 
                                React.createElement("div", null, 
                                    React.createElement("img", {className: "w-200", src: "../img/company/other.jpg"})
                                ), 
                                React.createElement("br", null), 

                                React.createElement("div", {className: "text-center w-200"}, "其他"
                                )
                            )
                        ), 
                        React.createElement("div", {className: "col-sm-10 form-horizontal"}, 

                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "企业名称")
                                ), 
                                React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                    React.createElement("label", null, "xxxx信息技术有限公司")
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "企业简称")
                                ), 
                                React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                    React.createElement("label", null, "xxxx信息")
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "企业类型")
                                ), 
                                React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                    React.createElement("label", null, "事业单位")
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "组织机构代码")
                                ), 
                                React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                    React.createElement("label", null, "11111112312131213123123"), React.createElement("br", null), 
                                    React.createElement("label", null, "＊组织机构代码（或统一社会信用代码）")
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "注册资本（万元）")
                                ), 
                                React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                    React.createElement("label", null, "1000 万元")
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "成立时间")
                                ), 
                                React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                    React.createElement("label", null, "2016年1月24日")
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "法定代表人")
                                ), 
                                React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                    React.createElement("label", null, "xxxx")
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "上年度年末资产总额")
                                ), 
                                React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                    React.createElement("label", null, "2000 万元")
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "上年度企业人数")
                                ), 
                                React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                    React.createElement("label", null, "200 人")
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "上年度所得税总额")
                                ), 
                                React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                    React.createElement("label", null, "200 万元")
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "经济类型")
                                ), 
                                React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                    React.createElement("label", null, "股份制")
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "主营业务")
                                ), 
                                React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                    React.createElement("label", null, "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + ' ' +
                                        "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + ' ' +
                                        "xxxxxxxxxxxxxxxx" + ' ' +
                                        "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + ' ' +
                                        "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + ' ' +
                                        "xxxxxxxxxxxxxxxx")
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "企业纳税信用等级")
                                ), 
                                React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                    React.createElement("label", null, "xxx")
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "所在区域")
                                ), 
                                React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                    React.createElement("label", null, "镇海区")
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "地址")
                                ), 
                                React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                    React.createElement("label", null, "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + ' ' +
                                        "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + ' ' +
                                        "xxxxxxxxxxxxxxxx")
                                )
                            ), 

                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("label", {className: "control-label col-sm-4"}, 
                                    "服务联系人"
                                ), 

                                React.createElement("div", {className: "col-sm-6 pt-7"}, 
                                    React.createElement("label", null, "王五")
                                ), 
                                React.createElement("div", {className: "col-sm-2 pt-7"}, 
                                    React.createElement("a", {href: "#", className: "btn", "data-toggle": "modal", "data-target": "#commentModal"}, 
                                        React.createElement("i", {className: "fa fa-pencil", "aria-hidden": "true"})
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("label", {className: "control-label col-sm-4"}, 
                                    "服务联系人职务"
                                ), 

                                React.createElement("div", {className: "col-sm-6 pt-7"}, 
                                    React.createElement("label", null, "开发部部长")
                                ), 
                                React.createElement("div", {className: "col-sm-2 pt-7"}, 
                                    React.createElement("a", {href: "#", className: "btn", "data-toggle": "modal", "data-target": "#commentModal"}, 
                                        React.createElement("i", {className: "fa fa-pencil", "aria-hidden": "true"})
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("label", {className: "control-label col-sm-4"}, 
                                    "服务联系人部门"
                                ), 

                                React.createElement("div", {className: "col-sm-6 pt-7"}, 
                                    React.createElement("label", null, "开发部")
                                ), 
                                React.createElement("div", {className: "col-sm-2 pt-7"}, 
                                    React.createElement("a", {href: "#", className: "btn", "data-toggle": "modal", "data-target": "#commentModal"}, 
                                        React.createElement("i", {className: "fa fa-pencil", "aria-hidden": "true"})
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("label", {className: "control-label col-sm-4"}, 
                                    "服务联系人手机"
                                ), 

                                React.createElement("div", {className: "col-sm-6 pt-7"}, 
                                    React.createElement("label", null, "138172615364")
                                ), 
                                React.createElement("div", {className: "col-sm-2 pt-7"}, 
                                    React.createElement("a", {href: "#", className: "btn", "data-toggle": "modal", "data-target": "#commentModal"}, 
                                        React.createElement("i", {className: "fa fa-pencil", "aria-hidden": "true"})
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("label", {className: "control-label col-sm-4"}, 
                                    "服务联系人邮箱"
                                ), 

                                React.createElement("div", {className: "col-sm-6 pt-7"}, 
                                    React.createElement("label", null, "xyz@xx.com")
                                ), 
                                React.createElement("div", {className: "col-sm-2 pt-7"}, 
                                    React.createElement("a", {href: "#", className: "btn", "data-toggle": "modal", "data-target": "#commentModal"}, 
                                        React.createElement("i", {className: "fa fa-pencil", "aria-hidden": "true"})
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("label", {className: "control-label col-sm-4"}, 
                                    "服务热线"
                                ), 

                                React.createElement("div", {className: "col-sm-6 pt-7"}, 
                                    React.createElement("label", null, "12345431")
                                ), 
                                React.createElement("div", {className: "col-sm-2 pt-7"}, 
                                    React.createElement("a", {href: "#", className: "btn", "data-toggle": "modal", "data-target": "#commentModal"}, 
                                        React.createElement("i", {className: "fa fa-pencil", "aria-hidden": "true"})
                                    )
                                )
                            ), 

                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("label", {className: "control-label col-sm-4"}, 
                                    "营业时间"
                                ), 

                                React.createElement("div", {className: "col-sm-6 pt-7"}, 
                                    React.createElement("label", null, "9:00 ～ 18:00")
                                ), 
                                React.createElement("div", {className: "col-sm-2 pt-7"}, 
                                    React.createElement("a", {href: "#", className: "btn", "data-toggle": "modal", "data-target": "#commentModal"}, 
                                        React.createElement("i", {className: "fa fa-pencil", "aria-hidden": "true"})
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("label", {className: "control-label col-sm-4"}, 
                                    "固定电话"
                                ), 

                                React.createElement("div", {className: "col-sm-6 pt-7"}, 
                                    React.createElement("label", null, "xxx(x)-xxxxxxx(x)")
                                ), 
                                React.createElement("div", {className: "col-sm-2 pt-7"}, 
                                    React.createElement("a", {href: "#", className: "btn", "data-toggle": "modal", "data-target": "#commentModal"}, 
                                        React.createElement("i", {className: "fa fa-pencil", "aria-hidden": "true"})
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "form-group form-inline"}, 
                                React.createElement("label", {className: "control-label col-sm-4"}, 
                                    "服务类型"
                                ), 

                                React.createElement("div", {className: "col-sm-6"}, 
                                    React.createElement("div", {className: "checkbox mr-10"}, 
                                        React.createElement("label", null, 
                                            React.createElement("input", {type: "checkbox"}), " 人才引培"
                                        )
                                    ), 

                                    React.createElement("div", {className: "checkbox mr-10"}, 
                                        React.createElement("label", null, 
                                            React.createElement("input", {type: "checkbox"}), " 技术创新"
                                        )
                                    ), 

                                    React.createElement("div", {className: "checkbox mr-10"}, 
                                        React.createElement("label", null, 
                                            React.createElement("input", {type: "checkbox"}), " 检验检测认证"
                                        )
                                    ), 

                                    React.createElement("div", {className: "checkbox"}, 
                                        React.createElement("label", null, 
                                            React.createElement("input", {type: "checkbox"}), " 财务指导"
                                        )
                                    ), 
                                    React.createElement("div", {className: "checkbox mr-10"}, 
                                        React.createElement("label", null, 
                                            React.createElement("input", {type: "checkbox"}), " 创业辅导"
                                        )
                                    ), 

                                    React.createElement("div", {className: "checkbox mr-10"}, 
                                        React.createElement("label", null, 
                                            React.createElement("input", {type: "checkbox"}), " 市场拓展"
                                        )
                                    ), 

                                    React.createElement("div", {className: "checkbox mr-10"}, 
                                        React.createElement("label", null, 
                                            React.createElement("input", {type: "checkbox"}), " 管理咨询"
                                        )
                                    ), 

                                    React.createElement("div", {className: "checkbox"}, 
                                        React.createElement("label", null, 
                                            React.createElement("input", {type: "checkbox"}), " 知识产权保护"
                                        )
                                    ), 
                                    React.createElement("div", {className: "checkbox mr-10"}, 
                                        React.createElement("label", null, 
                                            React.createElement("input", {type: "checkbox"}), " 法律维权"
                                        )
                                    ), 

                                    React.createElement("div", {className: "checkbox"}, 
                                        React.createElement("label", null, 
                                            React.createElement("input", {type: "checkbox"}), " 公共服务"
                                        )
                                    )
                                ), 
                                React.createElement("div", {className: "col-sm-2 pt-7"}, 
                                    React.createElement("a", {href: "#", className: "btn", "data-toggle": "modal", "data-target": "#commentModal"}, 
                                        React.createElement("i", {className: "fa fa-pencil", "aria-hidden": "true"})
                                    )
                                )

                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("label", {className: "control-label col-sm-4"}, 
                                    "最近一次审核状况"
                                ), 

                                React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                    React.createElement("label", null, "未认证")
                                )
                            ), 

                            React.createElement("div", {className: "text-center"}, 
                                React.createElement("button", {className: "btn btn-primary", type: "button", 
                                        "data-toggle": "modal", "data-target": "#passModal"}, "通过审核"
                                ), 
                                " ", 
                                React.createElement("button", {className: "btn btn-default", type: "button", 
                                        "data-toggle": "modal", "data-target": "#refuseModal"}, "驳回申请"
                                )
                            ), 
                            React.createElement(PassModal, null), 
                            React.createElement(RefuseModal, null), 
                            React.createElement(CommentModal, null)
                        )
                    )
                )
            )
        );
    }
});

var OrgShow = React.createClass({displayName: "OrgShow",
    render: function () {
        return (
            React.createElement("div", {className: "panel panel-default"}, 
                React.createElement("div", {className: "panel-heading"}, "服务机构展示"), 
                React.createElement("div", {className: "panel-body"}, 


                    React.createElement("div", {className: "panel panel-default"}, 
                        React.createElement("div", {className: "panel-heading"}, "机构介绍"), 
                        React.createElement("div", {className: "panel-body"}, 
                            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + ' ' +
                            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + ' ' +
                            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + ' ' +
                            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                        )
                    ), 

                    React.createElement("div", {className: "panel panel-default"}, 
                        React.createElement("div", {className: "panel-heading"}, "专业资质情况"), 
                        React.createElement("div", {className: "panel-body"}, 
                            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + ' ' +
                            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + ' ' +
                            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + ' ' +
                            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                        )
                    ), 

                    React.createElement("div", {className: "panel panel-default"}, 
                        React.createElement("div", {className: "panel-heading"}, "人员素质构成情况"), 
                        React.createElement("div", {className: "panel-body"}, 
                            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + ' ' +
                            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + ' ' +
                            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + ' ' +
                            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                        )
                    ), 

                    React.createElement("div", {className: "panel panel-default"}, 
                        React.createElement("div", {className: "panel-heading"}, "主要服务设备及条件"), 
                        React.createElement("div", {className: "panel-body"}, 
                            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + ' ' +
                            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + ' ' +
                            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + ' ' +
                            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                        )
                    ), 

                    React.createElement("div", {className: "panel panel-default"}, 
                        React.createElement("div", {className: "panel-heading"}, "服务资质及荣誉"), 
                        React.createElement("div", {className: "panel-body"}, 
                            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + ' ' +
                            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + ' ' +
                            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + ' ' +
                            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                        )
                    )

                )
            )
        );
    }
});

var OrgService = React.createClass({displayName: "OrgService",
    render: function () {
        return (
            React.createElement("div", {className: "panel panel-default"}, 
                React.createElement("div", {className: "panel-heading"}, "服务机构产品一览"), 
                React.createElement("div", {className: "panel-body"}, 
                    React.createElement(ServiceListContent, null)
                )
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
                            React.createElement("h4", {className: "modal-title", id: "addModalLabel"}, "服务机构资质审核通过")
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
                                        "企业类型"
                                    ), 

                                    React.createElement("div", {className: "col-sm-4"}, 
                                        React.createElement("select", {className: "form-control"}, 
                                            React.createElement("option", null, "普通"), 
                                            React.createElement("option", null, "小型"), 
                                            React.createElement("option", null, "微型"), 
                                            React.createElement("option", null, "小升规")
                                        )
                                    ), 
                                    React.createElement("label", {className: "col-sm-5 pt-7"}, 
                                        "*已自动推荐，请根据实际情况调整"
                                    )
                                ), 

                                React.createElement("div", {className: "form-group form-inline"}, 
                                    React.createElement("label", {className: "control-label col-sm-3"}, 
                                        "机构特别标签"
                                    ), 

                                    React.createElement("div", {className: "col-sm-4"}, 
                                        React.createElement("div", {className: "checkbox mr-10"}, 
                                            React.createElement("label", null, 
                                                React.createElement("input", {type: "checkbox"}), " 普通"
                                            )
                                        ), 

                                        React.createElement("div", {className: "checkbox mr-10"}, 
                                            React.createElement("label", null, 
                                                React.createElement("input", {type: "checkbox"}), " 联营"
                                            )
                                        ), 

                                        React.createElement("div", {className: "checkbox mr-10"}, 
                                            React.createElement("label", null, 
                                                React.createElement("input", {type: "checkbox"}), " 示范"
                                            )
                                        )
                                    ), 
                                    React.createElement("a", {className: "btn col-sm-5"}, 
                                        "自动匹配"
                                    )
                                )
                            )
                        ), 
                        React.createElement("div", {className: "modal-footer "}, 
                            React.createElement("div", {className: "text-center"}, 
                                React.createElement("button", {type: "button", className: "btn btn-primary "}, 
                                    "立即通过审核"
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
                            React.createElement("h4", {className: "modal-title", id: "addModalLabel"}, "服务机构资质审核驳回")
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
                                    "驳回申请"
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


var CommentModal = React.createClass({displayName: "CommentModal",
    render: function () {
        return (
            React.createElement("div", {className: "modal fade", id: "commentModal", tabindex: "-1", role: "dialog", 
                 "aria-labelledby": "commentModalLabel", 
                 "aria-hidden": "true"}, 
                React.createElement("div", {className: "modal-dialog"}, 
                    React.createElement("div", {className: "modal-content"}, 
                        React.createElement("div", {className: "modal-header"}, 
                            React.createElement("button", {type: "button", className: "close", "data-dismiss": "modal"}, React.createElement("span", {
                                "aria-hidden": "true"}, "×"), React.createElement("span", {className: "sr-only"}, "Close")), 
                            React.createElement("h4", {className: "modal-title", id: "addModalLabel"}, "服务机构资质审核备注")
                        ), 
                        React.createElement("div", {className: "modal-body"}, 
                            React.createElement("div", {className: "form form-horizontal ", role: "form"}, 
                                React.createElement("div", {className: "form-group"}, 
                                    React.createElement("label", {className: "control-label col-sm-4"}, 
                                        "原因分类"
                                    ), 

                                    React.createElement("div", {className: "col-sm-8"}, 
                                        React.createElement("select", {className: "form-control"}, 
                                            React.createElement("option", null, "内容不符")
                                        )
                                    )
                                ), 

                                React.createElement("div", {className: "form-group"}, 
                                    React.createElement("label", {className: "control-label col-sm-4"}, 
                                        "请具体描述不符要求的理由"
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
                                    "提交"
                                ), 
                                React.createElement("button", {type: "button", className: "btn btn-danger "}, 
                                    "删除"
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
    React.createElement(Company, null),
    document.getElementById('page')
);