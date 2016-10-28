var ServiceDetail = React.createClass({displayName: "ServiceDetail",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, {isLogin: "true"}), 
                React.createElement(Header, {activeMenuID: "mainMenuService"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("div", {className: "pull-left w-222"}, 
                        React.createElement(OrgCard, null)
                    ), 
                    React.createElement("div", {className: "ml-240"}, 
                        React.createElement("ol", {className: "breadcrumb"}, 
                            React.createElement("li", null, "您所在的位置："), 
                            React.createElement("li", null, React.createElement("a", {href: "index.html"}, "首页")), 
                            React.createElement("li", null, React.createElement("a", {href: "service_list.html"}, "服务产品")), 
                            React.createElement("li", {className: "active"}, "服务详细")
                        ), 
                        React.createElement(ServiceSummary, null), 
                        React.createElement(ServiceContent, null)
                    )
                ), 
                React.createElement(Footer, null)
            )
        );
    }
});

var ServiceSummary = React.createClass({displayName: "ServiceSummary",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("p", {className: "col-sm-12 font-size-24 font-weight-600"}, "财务审计"), 

                React.createElement("div", null, 
                    React.createElement("div", {className: "col-sm-4"}, 
                        React.createElement("p", null, "所属分类：解决方案"), 

                        React.createElement("p", null, "服务价格：1～2万元"), 

                        React.createElement("p", null, "服务方式：电话服务，上门服务，网络服务"), 

                        React.createElement("p", null, "累计评价：", 
                            React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                            React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                            React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                            React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"}), 
                            React.createElement("i", {className: "fa fa-star text-danger", "aria-hidden": "true"})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-4"}, 
                        React.createElement("p", null, "服务对象：微型企业，小型企业"), 

                        React.createElement("p", null, "收费标准：按年收费"), 

                        React.createElement("p", null, "申请次数：20次"), 

                        React.createElement("p", null, "发布时间：2016-07-07")
                    ), 
                    React.createElement("div", {className: "col-sm-4"}, 
                        React.createElement("br", null), 
                        React.createElement("br", null), 
                        React.createElement("br", null), 
                        React.createElement("a", {href: "service_order.html", className: "btn btn-warning btn-lg btn-block"}, "立即下单")
                    )
                )
            )
        );
    }
});

var ServiceContent = React.createClass({displayName: "ServiceContent",
    render: function () {
        return (
            React.createElement("div", {className: "col-sm-12"}, 
                React.createElement("ul", {className: "nav nav-tabs login-tabs", role: "tablist"}, 
                    React.createElement("li", {role: "presentation", className: "active"}, React.createElement("a", {href: "#desc", role: "tab", "data-toggle": "tab"}, "服务介绍")
                    ), 
                    React.createElement("li", {role: "presentation"}, React.createElement("a", {href: "#anylize", role: "tab", "data-toggle": "tab"}, "服务分析")), 
                    React.createElement("li", {role: "presentation"}, React.createElement("a", {href: "#evaluate", role: "tab", "data-toggle": "tab"}, "累计评价")), 
                    React.createElement("li", {role: "presentation"}, React.createElement("a", {href: "#record", role: "tab", "data-toggle": "tab"}, "服务记录")), 
                    React.createElement("li", {role: "presentation"}, React.createElement("a", {href: "#contact", role: "tab", "data-toggle": "tab"}, "联系方式"))
                ), 

                React.createElement("div", {className: "tab-content login-frame"}, 
                    React.createElement("div", {role: "tabpanel", className: "tab-pane active", id: "desc"}, 
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
                        ), 
                        React.createElement("div", {className: "panel panel-default"}, 
                            React.createElement("div", {className: "panel-heading"}, "相关服务"), 
                            React.createElement("div", {className: "panel-body"}, 
                                React.createElement("img", {src: "../img/sample/service_small.jpg"}), "  ", 
                                React.createElement("img", {src: "../img/sample/service_small.jpg"}), "  ", 
                                React.createElement("img", {src: "../img/sample/service_small.jpg"}), "  ", 
                                React.createElement("img", {src: "../img/sample/service_small.jpg"}), "  ", 
                                React.createElement("img", {src: "../img/sample/service_small.jpg"})
                            )
                        )
                    ), 

                    React.createElement("div", {role: "tabpanel", className: "tab-pane", id: "anylize"}, 
                        React.createElement("div", {className: "row"}, 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("img", {src: "../img/service_detail/anylize_1.png"})
                            ), 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("img", {src: "../img/service_detail/anylize_2.png"})
                            )
                        ), 
                        React.createElement("br", null), 
                        React.createElement("div", {className: "row"}, 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("img", {src: "../img/service_detail/anylize_3.png"})
                            )
                        )
                    ), 
                    React.createElement("div", {role: "tabpanel", className: "tab-pane", id: "evaluate"}, 
                        React.createElement("table", {className: "table table-hover"}, 
                            React.createElement("thead", null, 
                            React.createElement("tr", null, 
                                React.createElement("th", null, "评价星级"), 
                                React.createElement("th", null, "评价内容"), 
                                React.createElement("th", null, "评价企业")
                            )
                            ), 
                            React.createElement("tbody", null, 
                                React.createElement(EvaluateItem, null), 
                                React.createElement(EvaluateItem, null), 
                                React.createElement(EvaluateItem, null), 
                                React.createElement(EvaluateItem, null), 
                                React.createElement(EvaluateItem, null)
                            )
                        ), 
                        React.createElement(Paging, null)
                    ), 
                    React.createElement("div", {role: "tabpanel", className: "tab-pane", id: "record"}, 
                        React.createElement("table", {className: "table table-hover"}, 
                            React.createElement("thead", null, 
                            React.createElement("tr", null, 
                                React.createElement("th", null, "买家"), 
                                React.createElement("th", null, "服务名称"), 
                                React.createElement("th", null, "分类"), 
                                React.createElement("th", null, "价格"), 
                                React.createElement("th", null, "成交时间"), 
                                React.createElement("th", null, "状态")
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
                    ), 
                    React.createElement("div", {role: "tabpanel", className: "tab-pane", id: "contact"}, 
                        React.createElement(Contact, null)
                    )
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
                React.createElement("td", null, "服务非常到位，细致周到"), 
                React.createElement("td", null, "xxx企业")
            )
        );
    }
});

var RecordItem = React.createClass({displayName: "RecordItem",
    render: function () {
        return (
            React.createElement("tr", null, 
                React.createElement("td", null, "xxx企业"), 
                React.createElement("td", null, "xxx服务"), 
                React.createElement("td", null, "线上"), 
                React.createElement("td", null, "10000"), 
                React.createElement("td", null, "2016-01-01"), 
                React.createElement("td", null, "已完成")
            )
        );
    }
});

var Contact = React.createClass({displayName: "Contact",
    render: function () {
        return (
            React.createElement("div", {className: "alert alert-warning", role: "alert"}, 
                React.createElement("h2", null, "宁波市xxx信息服务机构"), 
                React.createElement("h2", null, "联系人：张一山"), 
                React.createElement("h2", null, "联系电话：12387645362"), 
                React.createElement("h2", null, "联系邮箱：xxx@163.com")
            )
        );
    }
});


ReactDOM.render(
    React.createElement(ServiceDetail, null),
    document.getElementById('page')
);