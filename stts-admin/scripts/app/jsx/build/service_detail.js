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
                                React.createElement("a", {href: "service_list.html", className: "list-group-item active"}, "服务产品一览"), 
                                React.createElement("a", {href: "service_qualification_list.html", className: "list-group-item"}, "服务产品上架")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240 overflow-hidden "}, 
                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "org_list.html"}, "服务机构管理")), 
                                React.createElement("li", null, React.createElement("a", {href: "service_list.html"}, "服务产品一览")), 
                                React.createElement("li", {className: "active"}, "服务产品详细")
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
                                React.createElement("label", null, "已上架")
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
                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(ServiceCreate, null),
    document.getElementById('page')
);