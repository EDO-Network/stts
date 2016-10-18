var NavCategory = React.createClass({displayName: "NavCategory",
    render: function () {
        return (
            React.createElement("div", {className: "nav-category panel panel-primary"}, 
                React.createElement("div", {className: "panel-heading"}, 
                    React.createElement("i", {className: "fa fa-th", "aria-hidden": "true"}), 
                    React.createElement("span", null, " 服务产品分类")
                ), 
                React.createElement("div", {className: "panel-body"}, 
                    React.createElement("ul", null, 
                        React.createElement("li", {className: "category-item"}, 
                            React.createElement("i", {className: "fa fa-users", "aria-hidden": "true"}), "  人才引培"
                        ), 
                        React.createElement("li", {className: "category-item"}, 
                            React.createElement("i", {className: "fa fa-gears", "aria-hidden": "true"}), "  技术创新"
                        ), 
                        React.createElement("li", {className: "category-item"}, 
                            React.createElement("i", {className: "fa fa-money", "aria-hidden": "true"}), "  财务指导"
                        ), 
                        React.createElement("li", {className: "category-item"}, 
                            React.createElement("i", {className: "fa fa-institution", "aria-hidden": "true"}), "  法律维权"
                        ), 
                        React.createElement("li", {className: "category-item"}, 
                            React.createElement("i", {className: "fa fa-shopping-bag", "aria-hidden": "true"}), "  市场拓展"
                        ), 
                        React.createElement("li", {className: "category-item"}, 
                            React.createElement("i", {className: "fa fa-question-circle", "aria-hidden": "true"}), "  管理咨询"
                        ), 
                        React.createElement("li", {className: "category-item"}, 
                            React.createElement("i", {className: "fa fa-check-circle", "aria-hidden": "true"}), "  检验检测认证"
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