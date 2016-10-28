var LittleItemPre = React.createClass({displayName: "LittleItemPre",
    render: function () {
        return (
            React.createElement("dl", {className: "fore1"}, 
                React.createElement("dt", null, 
                    React.createElement("a", {target: "_blank", href: "#"}, 
                        "小分类1", 
                        React.createElement("i", null, 
                            ">"
                        )
                    )
                ), 
                React.createElement("dd", null, 
                    React.createElement("a", {target: "_blank", href: "#"}, 
                        "服务1"
                    ), 
                    React.createElement("a", {target: "_blank", href: "#"}, 
                        "服务2"
                    ), 
                    React.createElement("a", {target: "_blank", href: "#"}, 
                        "服务3"
                    ), 
                    React.createElement("a", {target: "_blank", href: "#"}, 
                        "服务1"
                    ), 
                    React.createElement("a", {target: "_blank", href: "#"}, 
                        "服务2"
                    ), 
                    React.createElement("a", {target: "_blank", href: "#"}, 
                        "服务3"
                    ), 
                    React.createElement("a", {target: "_blank", href: "#"}, 
                        "服务1"
                    ), 
                    React.createElement("a", {target: "_blank", href: "#"}, 
                        "服务2"
                    ), 
                    React.createElement("a", {target: "_blank", href: "#"}, 
                        "服务3"
                    ), 
                    React.createElement("a", {target: "_blank", href: "#"}, 
                        "服务1"
                    ), 
                    React.createElement("a", {target: "_blank", href: "#"}, 
                        "服务2"
                    ), 
                    React.createElement("a", {target: "_blank", href: "#"}, 
                        "服务3"
                    )
                )
            )
        );
    }
});
var LittleItem = React.createClass({displayName: "LittleItem",
    render: function () {
        return (
            React.createElement("dl", null, 
                React.createElement("dt", null, 
                    React.createElement("a", {target: "_blank", href: "#"}, 
                        "小分类1", 
                        React.createElement("i", null, 
                            ">"
                        )
                    )
                ), 
                React.createElement("dd", null, 
                    React.createElement("a", {target: "_blank", href: "#"}, 
                        "服务1"
                    ), 
                    React.createElement("a", {target: "_blank", href: "#"}, 
                        "服务2"
                    ), 
                    React.createElement("a", {target: "_blank", href: "#"}, 
                        "服务3"
                    ), 
                    React.createElement("a", {target: "_blank", href: "#"}, 
                        "服务1"
                    ), 
                    React.createElement("a", {target: "_blank", href: "#"}, 
                        "服务2"
                    ), 
                    React.createElement("a", {target: "_blank", href: "#"}, 
                        "服务3"
                    ), 
                    React.createElement("a", {target: "_blank", href: "#"}, 
                        "服务1"
                    ), 
                    React.createElement("a", {target: "_blank", href: "#"}, 
                        "服务2"
                    ), 
                    React.createElement("a", {target: "_blank", href: "#"}, 
                        "服务3"
                    ), 
                    React.createElement("a", {target: "_blank", href: "#"}, 
                        "服务1"
                    ), 
                    React.createElement("a", {target: "_blank", href: "#"}, 
                        "服务2"
                    ), 
                    React.createElement("a", {target: "_blank", href: "#"}, 
                        "服务3"
                    )
                )
            )
        );
    }
});

var SubItem = React.createClass({displayName: "SubItem",
    render: function () {
        return (
            React.createElement("div", {className: "item-sub"}, 
                React.createElement("div", {className: "subitems"}, 
                    React.createElement(LittleItemPre, null), 
                    React.createElement(LittleItem, null), 
                    React.createElement(LittleItem, null), 
                    React.createElement(LittleItem, null), 
                    React.createElement(LittleItem, null)
                )
            )
        );
    }
});
var SubItemOdd = React.createClass({displayName: "SubItemOdd",
    render: function () {
        return (
            React.createElement("div", {className: "item-sub"}, 
                React.createElement("div", {className: "subitems"}, 
                    React.createElement(LittleItemPre, null), 
                    React.createElement(LittleItem, null), 
                    React.createElement(LittleItem, null)
                )
            )
        );
    }
});
var NavCategoryItems = React.createClass({displayName: "NavCategoryItems",
    render: function () {
        return (  React.createElement("div", {style: {display: "none"}, className: "dropdown-layer", id: "index_menus_sub"}, 

            React.createElement(SubItem, null), 
            React.createElement(SubItemOdd, null), 
            React.createElement(SubItem, null), 
            React.createElement(SubItemOdd, null), 
            React.createElement(SubItem, null), 
            React.createElement(SubItemOdd, null), 
            React.createElement(SubItem, null), 
            React.createElement(SubItemOdd, null), 
            React.createElement(SubItem, null), 
            React.createElement(SubItemOdd, null), 
            React.createElement(SubItem, null)
        ) );
    }
});

var NavCategory;
NavCategory = React.createClass({displayName: "NavCategory",
    componentDidMount: function () {
        $(".category-items").children(".category-item").hover(function () { //一级导航悬浮
            $(this).addClass("hover").siblings(".category-item").removeClass("hover");
            var index = $(this).index();
            console.log(index);
            $(".dropdown-layer").children(".item-sub").hide();
            $(".dropdown-layer").children(".item-sub").eq(index).show();

        });
        $(".category-items").hover(function () { //整个导航菜单悬浮，是否显示二级导航到出厂
            $("#index_menus_sub").show();
        }, function () {
            $("#index_menus_sub").hide();
            $('.category-item').removeClass("hover");
        });
        $("#index_menus_sub").children(".item-sub").hover(function () { //二级导航悬浮
            var index = $(this).index();
            $(".category-items").children(".category-item").eq(index).addClass("hover");
            $("#index_menus_sub").show();
        }, function () {
            $("#index_menus_sub").hide();
            $(".category-items").children(".category-item").removeClass("hover");
        })
    },
    render: function () {
        return (
            React.createElement("div", {className: "nav-category panel panel-primary"}, 
                React.createElement("div", {className: "panel-heading"}, 
                    React.createElement("i", {className: "fa fa-th", "aria-hidden": "true"}), 
                    React.createElement("span", null, " 服务产品分类")
                ), 
                React.createElement("div", {className: "panel-body "}, 
                    React.createElement("ul", {className: "category-items"}, 
                        React.createElement("li", {className: "category-item"}, 
                            React.createElement("i", {className: "fa fa-users", "aria-hidden": "true"}), "  人才引培", 
                            React.createElement("i", {className: "arrow item-arrow"})
                        ), 
                        React.createElement("li", {className: "category-item"}, 
                            React.createElement("i", {className: "fa fa-gears", "aria-hidden": "true"}), "  技术创新", 
                            React.createElement("i", {className: "arrow item-arrow"})
                        ), 
                        React.createElement("li", {className: "category-item"}, 
                            React.createElement("i", {className: "fa fa-money", "aria-hidden": "true"}), "  财务指导", 
                            React.createElement("i", {className: "arrow item-arrow"})
                        ), 
                        React.createElement("li", {className: "category-item"}, 
                            React.createElement("i", {className: "fa fa-institution", "aria-hidden": "true"}), "  法律维权", 

                            React.createElement("i", {className: "arrow item-arrow"})
                        ), 
                        React.createElement("li", {className: "category-item"}, 
                            React.createElement("i", {className: "fa fa-shopping-bag", "aria-hidden": "true"}), "  市场拓展", 
                            React.createElement("i", {className: "arrow item-arrow"})
                        ), 
                        React.createElement("li", {className: "category-item"}, 
                            React.createElement("i", {className: "fa fa-question-circle", "aria-hidden": "true"}), "  管理咨询", 
                            React.createElement("i", {className: "arrow item-arrow"})
                        ), 
                        React.createElement("li", {className: "category-item"}, 
                            React.createElement("i", {className: "fa fa-check-circle", "aria-hidden": "true"}), "  检验检测认证", 
                            React.createElement("i", {className: "arrow item-arrow"})
                        ), 
                        React.createElement("li", {className: "category-item"}, 
                            React.createElement("i", {className: "fa fa-mortar-board", "aria-hidden": "true"}), "  知识产权保护"
                        ), 
                        React.createElement("li", {className: "category-item"}, 
                            React.createElement("i", {className: "fa fa-book", "aria-hidden": "true"}), "  创业辅导"
                        ), 
                        React.createElement("li", {className: "category-item"}, 
                            React.createElement("i", {className: "fa fa-info-circle", "aria-hidden": "true"}), "  公共服务"
                        ), 
                        React.createElement("li", {className: "category-item"}, 
                            React.createElement("i", {className: "fa fa-thumbs-up", "aria-hidden": "true"}), "  其他"
                        )
                    )


                )
            )
        );
    }
});