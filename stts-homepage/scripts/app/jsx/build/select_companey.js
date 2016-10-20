var SelectCompany = React.createClass({displayName: "SelectCompany",
    getInitialState: function () {
        return {
            companies: []
        };
    },
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, {isLogin: "false"}), 
                React.createElement(Header, {activeMenuID: "mainMenuSelectCompany"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("div", {className: "alert alert-info"}, 
                        "当前用户绑定有多个企业，请选择一个您想管理的企业"
                    ), 
                    React.createElement("div", {className: "list-group mh-auto w-400"}, 
                        React.createElement("a", {href: "index.html?isLogin=true", className: "list-group-item"}, "中国出口信用保险公司宁波分公司"), 
                        React.createElement("a", {href: "index.html?isLogin=true", className: "list-group-item"}, "中国海峡人才市场宁波分部"), 
                        React.createElement("a", {href: "index.html?isLogin=true", className: "list-group-item"}, "宁波市中韬华益税务师事务所有限公司")
                    ), 
                    React.createElement("div", {className: "text-center"}, 
                        React.createElement("a", {href: "com/company.html", className: "btn btn-primary"}, "创建新企业")
                    )
                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(SelectCompany, null),
    document.getElementById('page')
);