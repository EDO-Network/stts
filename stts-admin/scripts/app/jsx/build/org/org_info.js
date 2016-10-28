var OrgInfo = React.createClass({displayName: "OrgInfo",

    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, null), 
                React.createElement(Header, {activeMenuID: "mainMenuOrgInfo"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("div", null, 
                        React.createElement("div", {className: "pull-left w-222"}, 
                            React.createElement("div", {className: "list-group"}, 
                                React.createElement("a", {href: "org_info.html", className: "list-group-item active"}, "服务机构信息"), 
                                React.createElement("a", {href: "org_approval_list.html", className: "list-group-item "}, "服务机构资质审核")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240 overflow-hidden "}, 
                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "dashboard.html"}, "服务机构")), 
                                React.createElement("li", null, React.createElement("a", {href: "org_info.html"}, "资质审核")), 
                                React.createElement("li", {className: "active"}, "服务机构信息")
                            ), 
                            React.createElement(Org, null)


                        )
                    )
                ), 
                React.createElement(Footer, null)
            )
        );
    }
});

var Org = React.createClass({displayName: "Org",
    render: function () {
        return (
            React.createElement("div", {className: "row"}, 
                React.createElement("div", {className: "col-sm-3"}, 
                    React.createElement("div", null, 
                        React.createElement("img", {className: "w-per-100", src: "../../img/common/org-preview.jpg"})
                    ), 
                    React.createElement("div", {className: "text-center"}, 
                        React.createElement("button", {className: "btn btn-default mt-20 mb-20"}, "上传徽标")
                    ), 
                    React.createElement("p", null, 
                        "审核状态：未认证"
                    ), 

                    React.createElement("p", null, 
                        "帐号状态：正常"
                    )
                ), 
                React.createElement("div", {className: "col-sm-9 form form-horizontal ", role: "form"}, 
                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("label", {className: "control-label col-sm-3"}, 
                            "服务联系人"
                        ), 

                        React.createElement("div", {className: "col-sm-7"}, 
                            React.createElement("div", {className: "row"}, 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("input", {className: "form-control", type: "text"})
                                ), 
                                React.createElement("div", {className: "col-sm-4"}, 
                                    React.createElement("a", {href: "#", className: "btn"}, "查找")
                                )
                            )
                        )
                    ), 
                    React.createElement("div", {className: "form-group form-inline"}, 
                        React.createElement("label", {className: "control-label col-sm-3"}, 
                            "服务联系人职务"
                        ), 

                        React.createElement("div", {className: "col-sm-9"}, 
                            React.createElement("select", {className: "form-control  mr-10", style: {width:"150px"}})
                        )
                    ), 
                    React.createElement("div", {className: "form-group form-inline"}, 
                        React.createElement("label", {className: "control-label col-sm-3"}, 
                            "服务联系人部门"
                        ), 


                        React.createElement("div", {className: "col-sm-7"}, 
                            React.createElement("select", {className: "form-control  mr-10", style: {width:"150px"}})
                        )
                    ), 
                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("label", {className: "control-label col-sm-3"}, 
                            "服务联系人手机"
                        ), 

                        React.createElement("div", {className: "col-sm-7"}, 
                            React.createElement("input", {className: "form-control", type: "text"})
                        )
                    ), 

                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("label", {className: "control-label col-sm-3"}, 
                            "服务联系人邮箱"
                        ), 

                        React.createElement("div", {className: "col-sm-7"}, 
                            React.createElement("input", {className: "form-control", type: "text"})
                        )
                    ), 
                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("label", {className: "control-label col-sm-3"}, 
                            "服务热线"
                        ), 

                        React.createElement("div", {className: "col-sm-7"}, 
                            React.createElement("input", {className: "form-control", type: "text"})
                        )
                    ), 

                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("label", {className: "control-label col-sm-3"}, 
                            "营业时间"
                        ), 

                        React.createElement("div", {className: "col-sm-7"}, 
                            React.createElement("select", {className: "form-control"})
                        )
                    ), 
                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("label", {className: "control-label col-sm-3"}, 
                            "固定电话"
                        ), 

                        React.createElement("div", {className: "col-sm-3"}, 
                            React.createElement("input", {className: "form-control", type: "text"})
                        ), 
                        React.createElement("div", {className: "col-sm-4 pt-7"}, 
                            React.createElement("span", null, " (格式：xxx(x)-xxxxxxx(x)) ")
                        )
                    ), 

                    React.createElement("hr", null), 
                    React.createElement("h2", {className: "text-danger text-center"}, "*以下信息如有变更需要重新审核"), 

                    React.createElement("div", {className: "form-group form-inline"}, 
                        React.createElement("label", {className: "control-label col-sm-3"}, 
                            "服务类型"
                        ), 

                        React.createElement("div", {className: "col-sm-7"}, 
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
                        )

                    ), 
                    React.createElement("div", {className: "form-group form-inline"}, 
                        React.createElement("label", {className: "control-label col-sm-3"}, 
                            "服务类型"
                        ), 

                        React.createElement("div", {className: "col-sm-7"}, 
                            React.createElement("div", {className: "checkbox mr-10"}, 
                                React.createElement("label", null, 
                                    React.createElement("input", {type: "checkbox"}), " 我已经阅读并同意", 
                                    React.createElement("a", {href: "#"}, "《双创服务平台服务机构管理协议》")
                                )
                            )
                        )
                    )
                ), 

                React.createElement("div", {className: " text-center mb-20"}, 
                    React.createElement("button", {className: "btn btn-primary"}, "提 交"), "   ", 
                    React.createElement("button", {className: "btn btn-default"}, "返回")
                )
            )
        );
    }
});


ReactDOM.render(
    React.createElement(OrgInfo, null),
    document.getElementById('page')
);