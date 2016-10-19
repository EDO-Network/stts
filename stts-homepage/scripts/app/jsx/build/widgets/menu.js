var Menu = React.createClass({displayName: "Menu",
    render: function () {
        return (
            React.createElement("div", {className: "menu-wrap"}, 
                React.createElement("div", {className: "container"}, 
                    React.createElement(CategoryMenu, null)
                )
            )
        );
    }
});

var CategoryMenu = React.createClass({displayName: "CategoryMenu",
    render: function () {
        return (
            React.createElement("div", {className: "category-menu"}, 
                React.createElement("div", {className: "category-menu-title"}, React.createElement("a", {href: "#"}, "全部服务")), 
                React.createElement("div", {className: "category-main-menu"}, 
                    React.createElement("div", null, "人才引培"), 
                    React.createElement("div", null, "技术创新"), 
                    React.createElement("div", null, "财务指导"), 
                    React.createElement("div", null, "法律维权"), 
                    React.createElement("div", null, "市场拓展"), 
                    React.createElement("div", null, "管理咨询"), 
                    React.createElement("div", null, "检验检测认证"), 
                    React.createElement("div", null, "知识产权保护"), 
                    React.createElement("div", null, "创业辅导"), 
                    React.createElement("div", null, "公共服务")
                ), 
                React.createElement("div", {className: "drop-down-layer"}, 
                    React.createElement("div", {className: "category-sub-item", style: {display:"none"}}, 
                        React.createElement("a", {href: "#"}, "高层培训"), 
                        React.createElement("a", {href: "#"}, "经营管理培训"), 
                        React.createElement("a", {href: "#"}, "专业人才培训"), 
                        React.createElement("a", {href: "#"}, "职业技能培训"), 
                        React.createElement("a", {href: "#"}, "人才招聘"), 
                        React.createElement("a", {href: "#"}, "技工招聘"), 
                        React.createElement("a", {href: "#"}, "职业中介"), 
                        React.createElement("a", {href: "#"}, "劳务派遣"), 
                        React.createElement("a", {href: "#"}, "校企人才对接")
                    )
                )
            )
        );
    }
});
