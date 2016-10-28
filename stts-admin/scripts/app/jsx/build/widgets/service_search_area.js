var ServiceSearchArea = React.createClass({displayName: "ServiceSearchArea",
    handleCondition: function () {
        var $moreConditionWrap = $("#moreConditionWrap");
        if ($moreConditionWrap.is(":visible")) {
            $("#moreConditionWrap").hide(1000);
            $("#btnCondition").text("更多筛选条件");
        } else {
            $("#moreConditionWrap").show(500);
            $("#btnCondition").text("收起筛选条件");
        }
    },
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("div", {className: "panel panel-default overflow-hidden"}, 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("div", {className: "form-inline mb-10"}, 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("label", null, "服务大类"), "  ", 

                                React.createElement("select", {className: "form-control"}, 
                                    React.createElement("option", null), 
                                    React.createElement("option", null, "大分类1")
                                )
                            ), 
                            "    ", 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("label", null, "服务小类"), "  ", 

                                React.createElement("select", {className: "form-control"}, 
                                    React.createElement("option", null), 
                                    React.createElement("option", null, "小分类1")
                                )
                            ), 
                            "    ", 
                            React.createElement("button", {type: "button", className: "btn btn-default"}, "搜 索"), 
                            "    ", 
                            React.createElement("a", {id: "btnCondition", className: "btn", 
                               onClick: this.handleCondition}, "更多筛选条件"
                            )
                        ), 
                        React.createElement("div", {id: "moreConditionWrap", style: {display: "none"}, 
                             className: "form-horizontal overflow-hidden"}, 
                            React.createElement("hr", null), 
                            React.createElement("div", {className: "row"}, 
                                React.createElement("div", {className: "form-group col-sm-6"}, 
                                    React.createElement("label", {className: "control-label col-sm-4"}, "服务名称"), 

                                    React.createElement("div", {className: " col-sm-8"}, 
                                        React.createElement("input", {className: "form-control input-sm", type: "text"})
                                    )
                                ), 
                                React.createElement("div", {className: "form-group col-sm-6"}, 
                                    React.createElement("label", {className: "control-label col-sm-4"}, "状态"), 

                                    React.createElement("div", {className: " col-sm-8"}, 
                                        React.createElement("select", {className: "form-control input-sm"}, 
                                            React.createElement("option", null), 
                                            React.createElement("option", null, "上架审核中")
                                        )
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "row"}, 

                                React.createElement("div", {className: "form-group col-sm-6"}, 
                                    React.createElement("label", {className: "control-label col-sm-4"}, "服务费用"), 

                                    React.createElement("div", {className: " col-sm-8 "}, 
                                        React.createElement("div", {className: "input-group input-group-sm"}, 

                                            React.createElement("input", {type: "text", className: "form-control input-sm text-right", 
                                                   defaultValue: "100"}), 

                                            React.createElement("span", {className: "input-group-btn text-center font-size-12 width-10"}, "-"), 


                                            React.createElement("input", {type: "text", className: "form-control input-sm text-right", 
                                                   defaultValue: "500"})
                                        )
                                    )
                                ), 

                                React.createElement("div", {className: "form-group col-sm-6"}, 
                                    React.createElement("label", {className: "control-label col-sm-4"}, "修改时间"), 

                                    React.createElement("div", {className: " col-sm-8 "}, 
                                        React.createElement("div", {className: "input-group input-group-sm"}, 
                                            React.createElement("input", {type: "text", className: "form-control input-sm ", 
                                                   defaultValue: "2016-10-23"}), 
                                            React.createElement("span", {className: "input-group-btn font-size-12 width-10 text-center"}, "-"), 
                                            React.createElement("input", {type: "text", className: "form-control input-sm", 
                                                   defaultValue: "2016-12-23"})
                                        )
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "row "}, 
                                React.createElement("div", {className: "col-sm-6 col-sm-offset-3"}, 
                                    React.createElement("div", {className: "col-sm-4"}, 
                                        React.createElement("button", {className: "btn btn-sm btn-default col-sm-12"}, 
                                            React.createElement("span", {className: "fa fa-clear"}), " 清空条件"
                                        )
                                    ), 
                                    React.createElement("div", {className: "col-sm-4"}, 
                                        React.createElement("button", {className: " btn btn-sm btn-primary col-sm-12"}, 
                                            React.createElement("span", {className: "fa fa-search"}), " 搜索"
                                        )
                                    ), 
                                    React.createElement("div", {className: "col-sm-4"}, 
                                        React.createElement("button", {className: " btn btn-sm btn-warning col-sm-12"}, 
                                            React.createElement("span", {className: "fa fa-file-text-o"}), " 导出"
                                        )
                                    )
                                )
                            )
                        )
                    )
                ), 

                React.createElement("div", {className: "sort-row overflow-hidden"}, 
                    React.createElement("div", {className: "sort-inner"}, 
                        React.createElement("ul", {className: "sorts"}, 
                            React.createElement("li", {className: "sort active"}, React.createElement("a", {href: "#"}, "默认")), 
                            React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "订单时间")), 
                            React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "服务分类")), 
                            React.createElement("li", {className: "sort"}, React.createElement("a", {href: "#"}, "价格"))
                        )
                    )
                )
            )
        );
    }
});