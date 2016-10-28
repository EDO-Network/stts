var ServiceOrder = React.createClass({displayName: "ServiceOrder",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, {isLogin: "true"}), 
                React.createElement(Header, {activeMenuID: "mainMenuService"}), 

                React.createElement("div", {className: "container"}, 

                    React.createElement("div", null, 
                        
                            //<div className="pull-left w-222">
                            //    <OrgCard/>
                            //</div>
                        
                        
                            //<div className="ml-240">
                        
                        React.createElement("ol", {className: "breadcrumb"}, 
                            React.createElement("li", null, "您所在的位置："), 
                            React.createElement("li", null, React.createElement("a", {href: "index.html"}, "首页")), 
                            React.createElement("li", null, React.createElement("a", {href: "service_list.html"}, "服务产品")), 
                            React.createElement("li", null, React.createElement("a", {href: "service_detail.html"}, "服务详细")), 
                            React.createElement("li", {className: "active"}, "服务购买")
                        ), 
                        React.createElement("div", {className: "panel panel-default"}, 
                            React.createElement("div", {className: "panel-heading"}, "订单详细"), 
                            React.createElement("div", {className: "panel-body"}, 
                                React.createElement(Order, null)
                            )
                        )
                        
                            //</div>
                        
                    )
                )
            )
        );
    }
});

var Order = React.createClass({displayName: "Order",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(OrderProcess, {step: "0"}), 

                React.createElement("div", {className: "panel panel-info"}, 
                    React.createElement("div", {className: "panel-heading"}, "订单信息"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("div", {className: "col-sm-4"}, 
                            React.createElement("p", null, "服务机构名：宁波xxx信息服务机构"), 

                            React.createElement("p", null, "服务产品名：", React.createElement("a", {href: "service_detail.html"}, "xxxx服务"))
                        ), 
                        React.createElement("div", {className: "col-sm-4"}, 
                            React.createElement("p", null, "服务价格：1.2 万元"), 

                            React.createElement("p", null, "收费标准：1.2 万 元/年")
                        ), 
                        React.createElement("div", {className: "col-sm-4"}, 
                            React.createElement("p", null, "状态：申请服务"), 

                            React.createElement("p", null, "申请时间：2016-01-01 18:00:00")
                        )
                    )
                ), 
                React.createElement("div", {className: "panel panel-info"}, 
                    React.createElement("div", {className: "panel-heading"}, "服务申请人信息"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("div", {className: "form-horizontal"}, 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("div", {className: "col-sm-2"}, 
                                    React.createElement("label", null, "企业名")
                                ), 
                                React.createElement("div", {className: "col-sm-4"}, 
                                    React.createElement("a", {href: "#"}, "宁波xxx信息服务机构")
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("div", {className: "col-sm-2 pt-7"}, 
                                    React.createElement("label", null, "联系人")
                                ), 
                                React.createElement("div", {className: "col-sm-4"}, 
                                    React.createElement("input", {type: "text", className: "form-control", defaultValue: "王睿智"})
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("div", {className: "col-sm-2 pt-7"}, 
                                    React.createElement("label", null, "联系电话")
                                ), 
                                React.createElement("div", {className: "col-sm-4"}, 
                                    React.createElement("input", {type: "text", className: "form-control", defaultValue: "12376565435"})
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("div", {className: "col-sm-2 pt-7"}, 
                                    React.createElement("label", null, "提出金额")
                                ), 
                                React.createElement("div", {className: "col-sm-4"}, 
                                    React.createElement("input", {type: "text", className: "form-control"})
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("div", {className: "col-sm-2 pt-7"}
                                ), 
                                React.createElement("div", {className: "col-sm-10"}, 
                                    "服务价格：1～5000元  目前服务券余额：5千元  批次：2016年度"
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("div", {className: "col-sm-2"}, 
                                    React.createElement("label", null, "企业留言")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("textarea", {className: "form-control", rows: "5"})
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("div", {className: "col-sm-2"}, 
                                    React.createElement("label", null, "附加条款")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("textarea", {className: "form-control", rows: "5"})
                                ), 
                                React.createElement("div", {className: "col-sm-2"}, 
                                    React.createElement("a", {href: "#"}, "阅览合同")
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("div", {className: "col-sm-2"}, 
                                    React.createElement("label", null, "上传附件")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("img", {src: "#"}), "  ", 
                                    React.createElement("img", {src: "#"}), "  ", 
                                    React.createElement("img", {src: "#"}), "  "
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("div", {className: "col-sm-2"}
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("a", {href: "#", className: "btn"}, "上传附件")
                                )
                            )
                        )
                    )
                ), 

                React.createElement("p", {className: "text-center"}, 
                    React.createElement("a", {href: "com/order_detail.html", className: "btn btn-primary"}, "申请&签署合同"), 
                    "    ", 
                    React.createElement("a", {href: "button", className: "btn btn-default"}, "返回")
                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(ServiceOrder, null),
    document.getElementById('page')
);