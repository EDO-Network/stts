var Company = React.createClass({displayName: "Company",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, null), 
                React.createElement(Header, {activeMenuID: "mainMenuCompany"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("div", null, 
                        React.createElement("div", {className: "pull-left w-222"}, 
                            React.createElement("div", {className: "list-group"}, 
                                React.createElement("a", {href: "company.html", className: "list-group-item active"}, "企业信息"), 
                                React.createElement("a", {href: "qualification.html", className: "list-group-item"}, "资质审核")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240"}, 

                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "dashboard.html"}, "企业机构")), 
                                React.createElement("li", null, React.createElement("a", {href: "company.html"}, "资质审核")), 
                                React.createElement("li", {className: "active"}, "企业信息")
                            ), 
                            React.createElement("div", {className: "panel panel-default"}, 
                                React.createElement("div", {className: "panel-heading"}, "企业信息"), 
                                React.createElement("div", {className: "panel-body"}, 
                                    React.createElement("div", {className: "row"}, 
                                        React.createElement("div", {className: "col-sm-2"}, 
                                            React.createElement("div", {className: "mb-20"}, 
                                                React.createElement("div", null, 
                                                    React.createElement("img", {className: "w-200", src: "../../img/company/company.jpg"})
                                                ), 
                                                React.createElement("br", null), 

                                                React.createElement("div", {className: "text-center w-200"}, 
                                                    React.createElement("button", {className: "btn btn-default", type: "button", 
                                                            onClick: this.handleSave}, "上传营业执照"
                                                    )
                                                )
                                            ), 
                                            React.createElement("div", {className: "mb-20"}, 
                                                React.createElement("div", null, 
                                                    React.createElement("img", {className: "w-200", src: "../../img/company/tax.jpg"})
                                                ), 
                                                React.createElement("br", null), 

                                                React.createElement("div", {className: "text-center w-200"}, 
                                                    React.createElement("button", {className: "btn btn-default", type: "button", 
                                                            onClick: this.handleSave}, "上传纳税证明"
                                                    )
                                                )
                                            ), 
                                            React.createElement("div", {className: "mb-20"}, 
                                                React.createElement("div", null, 
                                                    React.createElement("img", {className: "w-200", src: "../../img/company/shebao.jpg"})
                                                ), 
                                                React.createElement("br", null), 

                                                React.createElement("div", {className: "text-center w-200"}, 
                                                    React.createElement("button", {className: "btn btn-default", type: "button", 
                                                            onClick: this.handleSave}, "上传社保证明"
                                                    )
                                                )
                                            )
                                        ), 
                                        React.createElement("div", {className: "col-sm-10 form-horizontal"}, 

                                            React.createElement("div", {className: "form-group"}, 
                                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                                    React.createElement("label", null, "审核状态")
                                                ), 
                                                React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                                    React.createElement("label", null, "未审核 / 审核中 / 审核通过 / 审核未通过")
                                                )
                                            ), 
                                            React.createElement("div", {className: "form-group"}, 
                                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                                    React.createElement("label", null, "审核评定")
                                                ), 
                                                React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                                    React.createElement("label", null, "普通 / 小型 / 微型 / 小升规")
                                                )
                                            ), 
                                            React.createElement("div", {className: "form-group"}, 
                                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                                    React.createElement("label", null, "企业名称")
                                                ), 
                                                React.createElement("div", {className: "col-sm-8"}, 
                                                    React.createElement("input", {type: "text", className: "form-control"})
                                                )
                                            ), 
                                            React.createElement("div", {className: "form-group"}, 
                                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                                    React.createElement("label", null, "企业简称")
                                                ), 
                                                React.createElement("div", {className: "col-sm-8"}, 
                                                    React.createElement("input", {type: "text", className: "form-control"})
                                                )
                                            ), 
                                            React.createElement("div", {className: "form-group"}, 
                                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                                    React.createElement("label", null, "企业类型")
                                                ), 
                                                React.createElement("div", {className: "col-sm-8"}, 
                                                    React.createElement("select", {className: "form-control"}, 
                                                        React.createElement("option", null, "工业"), 
                                                        React.createElement("option", null, "服务"), 
                                                        React.createElement("option", null, "党政机关"), 
                                                        React.createElement("option", null, "事业单位")
                                                    )
                                                )
                                            ), 
                                            React.createElement("div", {className: "form-group"}, 
                                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                                    React.createElement("label", null, "组织机构代码")
                                                ), 
                                                React.createElement("div", {className: "col-sm-8"}, 
                                                    React.createElement("input", {type: "text", className: "form-control"})
                                                )
                                            ), 
                                            React.createElement("div", {className: "form-group"}, 
                                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                                    React.createElement("label", null, "注册资本（万元）")
                                                ), 
                                                React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                                    React.createElement("input", {type: "text", className: "form-control"})
                                                )
                                            ), 
                                            React.createElement("div", {className: "form-group"}, 
                                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                                    React.createElement("label", null, "成立时间")
                                                ), 
                                                React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                                    React.createElement("input", {type: "text", className: "form-control"})
                                                )
                                            ), 
                                            React.createElement("div", {className: "form-group"}, 
                                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                                    React.createElement("label", null, "法定代表人")
                                                ), 
                                                React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                                    React.createElement("input", {type: "text", className: "form-control"})
                                                )
                                            ), 
                                            React.createElement("div", {className: "form-group"}, 
                                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                                    React.createElement("label", null, "经济类型")
                                                ), 
                                                React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                                    React.createElement("select", {className: "form-control"}, 
                                                        React.createElement("option", null, "股份制"), 
                                                        React.createElement("option", null, "独资"), 
                                                        React.createElement("option", null, "中外合资")
                                                    )
                                                )
                                            ), 
                                            React.createElement("div", {className: "form-group"}, 
                                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                                    React.createElement("label", null, "主营业务")
                                                ), 
                                                React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                                    React.createElement("textarea", {className: "form-control"})
                                                )
                                            ), 
                                            React.createElement("div", {className: "form-group"}, 
                                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                                    React.createElement("label", null, "企业纳税信用等级")
                                                ), 
                                                React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                                    React.createElement("input", {type: "text", className: "form-control"})
                                                )
                                            ), 
                                            React.createElement("div", {className: "form-group"}, 
                                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                                    React.createElement("label", null, "所在区域")
                                                ), 
                                                React.createElement("div", {className: "col-sm-8"}, 
                                                    React.createElement("select", {className: "form-control"}, 
                                                        React.createElement("option", null, "镇海区")
                                                    )
                                                )
                                            ), 
                                            React.createElement("div", {className: "form-group"}, 
                                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                                    React.createElement("label", null, "地址")
                                                ), 
                                                React.createElement("div", {className: "col-sm-8 pt-7"}, 
                                                    React.createElement("input", {type: "text", className: "form-control"})
                                                )
                                            ), 

                                            React.createElement("div", {className: "text-center"}, 
                                                React.createElement("button", {className: "btn btn-primary", type: "button", 
                                                        onClick: this.handleSave}, "提交审核"
                                                ), 
                                                " ", 
                                                React.createElement("button", {className: "btn btn-default", type: "button", 
                                                        onClick: this.handleSave}, "返 回"
                                                )
                                            )
                                        )
                                    )
                                )
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