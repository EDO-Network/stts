var CouponList = React.createClass({displayName: "CouponList",

    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, null), 
                React.createElement(Header, {activeMenuID: "mainMenuCoupon"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("div", null, 
                        React.createElement("div", {className: "pull-left w-222"}, 
                            React.createElement("div", {className: "list-group"}, 
                                React.createElement("a", {href: "coupon_list.html", className: "list-group-item"}, "服务券一览"), 
                                React.createElement("a", {href: "coupon_create.html", className: "list-group-item active"}, "服务券发放"), 
                                React.createElement("a", {href: "coupon_exchange.html", className: "list-group-item"}, "服务券兑付审核")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240 overflow-hidden "}, 
                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "coupon_list.html"}, "服务券管理")), 
                                React.createElement("li", {className: "active"}, "服务券发放")
                            ), 

                            React.createElement("div", {className: "panel panel-default overflow-hidden"}, 
                                React.createElement("div", {className: "panel-heading"}, "服务券发放"), 
                                React.createElement("div", {className: "panel-body"}, 
                                    React.createElement("div", {className: "form form-horizontal ", role: "form"}, 
                                        React.createElement("div", {className: "form-group"}, 
                                            React.createElement("label", {className: "control-label col-sm-2"}, 
                                                "批次号", React.createElement("span", {className: "text-danger ml-5"}, "*")
                                            ), 

                                            React.createElement("div", {className: "col-sm-4"}, 
                                                React.createElement("input", {className: "form-control", type: "text"})
                                            )
                                        ), 

                                        React.createElement("div", {className: "form-group"}, 
                                            React.createElement("label", {className: "control-label col-sm-2"}, 
                                                "使用有效期", React.createElement("span", {className: "text-danger ml-5"}, "*")
                                            ), 

                                            React.createElement("div", {className: "col-sm-4"}, 
                                                React.createElement("div", {className: "input-group input-group"}, 
                                                    React.createElement("input", {type: "text", className: "form-control"}), 
                                                    React.createElement("span", {className: "input-group-btn text-center font-size-12 width-10"}, "-"), 
                                                    React.createElement("input", {type: "text", className: "form-control"})
                                                )
                                            )
                                        ), 
                                        React.createElement("div", {className: "form-group"}, 
                                            React.createElement("label", {className: "control-label col-sm-2"}, 
                                                "兑付有效期", React.createElement("span", {className: "text-danger ml-5"}, "*")
                                            ), 

                                            React.createElement("div", {className: "col-sm-4"}, 
                                                React.createElement("div", {className: "input-group input-group"}, 
                                                    React.createElement("input", {type: "text", className: "form-control"}), 
                                                    React.createElement("span", {className: "input-group-btn text-center font-size-12 width-10"}, "-"), 
                                                    React.createElement("input", {type: "text", className: "form-control"})
                                                )
                                            )
                                        ), 

                                        React.createElement("div", {className: "form-group form-inline"}, 
                                            React.createElement("label", {className: "control-label col-sm-2"}, 
                                                "说明"
                                            ), 

                                            React.createElement("div", {className: "col-sm-4"}, 
                                                React.createElement("input", {className: "form-control", type: "text"})
                                            )

                                        ), 

                                        React.createElement("div", {className: "form-group"}, 
                                            React.createElement("label", {className: "control-label col-sm-2"}, 
                                                "总额度", React.createElement("span", {className: "text-danger ml-5"}, "*")
                                            ), 

                                            React.createElement("div", {className: "col-sm-4"}, 
                                                React.createElement("input", {className: "form-control", type: "text"})
                                            )
                                        ), 

                                        React.createElement("div", {className: "form-group"}, 
                                            React.createElement("label", {className: "control-label col-sm-2"}

                                            ), 

                                            React.createElement("div", {className: "col-sm-10"}, 
                                                React.createElement("div", {className: "col-sm-4"}, 
                                                    React.createElement("label", {className: "text-danger pt-7"}, "*各行业最大额度分配")
                                                ), 
                                                React.createElement("div", {className: "col-sm-2"}, 
                                                    React.createElement("button", {className: "btn btn-default"}, "平均分配")
                                                ), 
                                                React.createElement("div", {className: "col-sm-3"}, 
                                                    React.createElement("label", {className: "pt-7"}, "分配百分比")
                                                ), 
                                                React.createElement("div", {className: "col-sm-3"}, 
                                                    React.createElement("label", {className: "pt-7"}, "上一批次各行业参考值")
                                                )
                                            )
                                        ), 


                                        React.createElement("div", {className: "form-group"}, 
                                            React.createElement("label", {className: "control-label col-sm-2"}

                                            ), 

                                            React.createElement("div", {className: "col-sm-10"}, 
                                                React.createElement("div", {className: "col-sm-2"}, 
                                                    React.createElement("label", {className: "pt-7"}, "人才引培")
                                                ), 
                                                React.createElement("div", {className: "col-sm-4"}, 
                                                    React.createElement("input", {type: "text", className: "form-control"})
                                                ), 
                                                React.createElement("div", {className: "col-sm-3"}, 
                                                    React.createElement("label", {className: "pt-7"}, "10%")
                                                ), 
                                                React.createElement("div", {className: "col-sm-3"}, 
                                                    React.createElement("label", {className: "pt-7"}, "300")
                                                )
                                            )
                                        ), 
                                        React.createElement("div", {className: "form-group"}, 
                                            React.createElement("label", {className: "control-label col-sm-2"}

                                            ), 

                                            React.createElement("div", {className: "col-sm-10"}, 
                                                React.createElement("div", {className: "col-sm-2"}, 
                                                    React.createElement("label", {className: "pt-7"}, "技术创新")
                                                ), 
                                                React.createElement("div", {className: "col-sm-4"}, 
                                                    React.createElement("input", {type: "text", className: "form-control"})
                                                ), 
                                                React.createElement("div", {className: "col-sm-3"}, 
                                                    React.createElement("label", {className: "pt-7"}, "10%")
                                                ), 
                                                React.createElement("div", {className: "col-sm-3"}, 
                                                    React.createElement("label", {className: "pt-7"}, "300")
                                                )
                                            )
                                        ), 
                                        React.createElement("div", {className: "form-group"}, 
                                            React.createElement("label", {className: "control-label col-sm-2"}

                                            ), 

                                            React.createElement("div", {className: "col-sm-10"}, 
                                                React.createElement("div", {className: "col-sm-2"}, 
                                                    React.createElement("label", {className: "pt-7"}, "财务指导")
                                                ), 
                                                React.createElement("div", {className: "col-sm-4"}, 
                                                    React.createElement("input", {type: "text", className: "form-control"})
                                                ), 
                                                React.createElement("div", {className: "col-sm-3"}, 
                                                    React.createElement("label", {className: "pt-7"}, "10%")
                                                ), 
                                                React.createElement("div", {className: "col-sm-3"}, 
                                                    React.createElement("label", {className: "pt-7"}, "300")
                                                )
                                            )
                                        ), 
                                        React.createElement("div", {className: "form-group"}, 
                                            React.createElement("label", {className: "control-label col-sm-2"}

                                            ), 

                                            React.createElement("div", {className: "col-sm-10"}, 
                                                React.createElement("div", {className: "col-sm-2"}, 
                                                    React.createElement("label", {className: "pt-7"}, "财务指导")
                                                ), 
                                                React.createElement("div", {className: "col-sm-4"}, 
                                                    React.createElement("input", {type: "text", className: "form-control"})
                                                ), 
                                                React.createElement("div", {className: "col-sm-3"}, 
                                                    React.createElement("label", {className: "pt-7"}, "10%")
                                                ), 
                                                React.createElement("div", {className: "col-sm-3"}, 
                                                    React.createElement("label", {className: "pt-7"}, "300")
                                                )
                                            )
                                        ), 
                                        React.createElement("div", {className: "form-group"}, 
                                            React.createElement("label", {className: "control-label col-sm-2"}

                                            ), 

                                            React.createElement("div", {className: "col-sm-10"}, 
                                                React.createElement("div", {className: "col-sm-2"}, 
                                                    React.createElement("label", {className: "pt-7"}, "市场拓展")
                                                ), 
                                                React.createElement("div", {className: "col-sm-4"}, 
                                                    React.createElement("input", {type: "text", className: "form-control"})
                                                ), 
                                                React.createElement("div", {className: "col-sm-3"}, 
                                                    React.createElement("label", {className: "pt-7"}, "10%")
                                                ), 
                                                React.createElement("div", {className: "col-sm-3"}, 
                                                    React.createElement("label", {className: "pt-7"}, "300")
                                                )
                                            )
                                        ), 
                                        React.createElement("div", {className: "form-group"}, 
                                            React.createElement("label", {className: "control-label col-sm-2"}

                                            ), 

                                            React.createElement("div", {className: "col-sm-10"}, 
                                                React.createElement("div", {className: "col-sm-2"}, 
                                                    React.createElement("label", {className: "pt-7"}, "管理咨询")
                                                ), 
                                                React.createElement("div", {className: "col-sm-4"}, 
                                                    React.createElement("input", {type: "text", className: "form-control"})
                                                ), 
                                                React.createElement("div", {className: "col-sm-3"}, 
                                                    React.createElement("label", {className: "pt-7"}, "10%")
                                                ), 
                                                React.createElement("div", {className: "col-sm-3"}, 
                                                    React.createElement("label", {className: "pt-7"}, "300")
                                                )
                                            )
                                        ), 
                                        React.createElement("div", {className: "form-group"}, 
                                            React.createElement("label", {className: "control-label col-sm-2"}

                                            ), 

                                            React.createElement("div", {className: "col-sm-10"}, 
                                                React.createElement("div", {className: "col-sm-2"}, 
                                                    React.createElement("label", {className: "pt-7"}, "检验检测认证")
                                                ), 
                                                React.createElement("div", {className: "col-sm-4"}, 
                                                    React.createElement("input", {type: "text", className: "form-control"})
                                                ), 
                                                React.createElement("div", {className: "col-sm-3"}, 
                                                    React.createElement("label", {className: "pt-7"}, "10%")
                                                ), 
                                                React.createElement("div", {className: "col-sm-3"}, 
                                                    React.createElement("label", {className: "pt-7"}, "300")
                                                )
                                            )
                                        ), 
                                        React.createElement("div", {className: "form-group"}, 
                                            React.createElement("label", {className: "control-label col-sm-2"}

                                            ), 

                                            React.createElement("div", {className: "col-sm-10"}, 
                                                React.createElement("div", {className: "col-sm-2"}, 
                                                    React.createElement("label", {className: "pt-7"}, "知识产权保护")
                                                ), 
                                                React.createElement("div", {className: "col-sm-4"}, 
                                                    React.createElement("input", {type: "text", className: "form-control"})
                                                ), 
                                                React.createElement("div", {className: "col-sm-3"}, 
                                                    React.createElement("label", {className: "pt-7"}, "10%")
                                                ), 
                                                React.createElement("div", {className: "col-sm-3"}, 
                                                    React.createElement("label", {className: "pt-7"}, "300")
                                                )
                                            )
                                        ), 
                                        React.createElement("div", {className: "form-group"}, 
                                            React.createElement("label", {className: "control-label col-sm-2"}

                                            ), 

                                            React.createElement("div", {className: "col-sm-10"}, 
                                                React.createElement("div", {className: "col-sm-2"}, 
                                                    React.createElement("label", {className: "pt-7"}, "创业辅导")
                                                ), 
                                                React.createElement("div", {className: "col-sm-4"}, 
                                                    React.createElement("input", {type: "text", className: "form-control"})
                                                ), 
                                                React.createElement("div", {className: "col-sm-3"}, 
                                                    React.createElement("label", {className: "pt-7"}, "10%")
                                                ), 
                                                React.createElement("div", {className: "col-sm-3"}, 
                                                    React.createElement("label", {className: "pt-7"}, "300")
                                                )
                                            )
                                        ), 
                                        React.createElement("div", {className: "form-group"}, 
                                            React.createElement("label", {className: "control-label col-sm-2"}

                                            ), 

                                            React.createElement("div", {className: "col-sm-10"}, 
                                                React.createElement("div", {className: "col-sm-2"}, 
                                                    React.createElement("label", {className: "pt-7"}, "公共服务")
                                                ), 
                                                React.createElement("div", {className: "col-sm-4"}, 
                                                    React.createElement("input", {type: "text", className: "form-control"})
                                                ), 
                                                React.createElement("div", {className: "col-sm-3"}, 
                                                    React.createElement("label", {className: "pt-7"}, "10%")
                                                ), 
                                                React.createElement("div", {className: "col-sm-3"}, 
                                                    React.createElement("label", {className: "pt-7"}, "300")
                                                )
                                            )
                                        ), 
                                        React.createElement("div", {className: "form-group"}, 
                                            React.createElement("label", {className: "control-label col-sm-2"}

                                            ), 

                                            React.createElement("div", {className: "col-sm-10"}, 
                                                React.createElement("div", {className: "col-sm-2"}, 
                                                    React.createElement("label", {className: "pt-7"}, "其他")
                                                ), 
                                                React.createElement("div", {className: "col-sm-4"}, 
                                                    React.createElement("input", {type: "text", className: "form-control"})
                                                ), 
                                                React.createElement("div", {className: "col-sm-3"}, 
                                                    React.createElement("label", {className: "pt-7"}, "10%")
                                                ), 
                                                React.createElement("div", {className: "col-sm-3"}, 
                                                    React.createElement("label", {className: "pt-7"}, "300")
                                                )
                                            )
                                        ), 



                                        React.createElement("div", {className: "form-group"}, 
                                            React.createElement("label", {className: "control-label col-sm-2"}

                                            ), 

                                            React.createElement("div", {className: "col-sm-10"}, 
                                                React.createElement("div", {className: "col-sm-6 text-right"}, 
                                                    React.createElement("label", {className: "text-danger pt-7"}, "目前剩余配额值：5000元")
                                                )
                                            )
                                        ), 

                                        React.createElement("div", {className: "text-center"}, 
                                            React.createElement("button", {type: "button", className: "btn btn-primary"}, "立即发放"), "  ", 
                                            React.createElement("button", {type: "button", className: "btn btn-default"}, "返回")
                                        )
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

ReactDOM.render(
    React.createElement(CouponList, null),
    document.getElementById('page')
);