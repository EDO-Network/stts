/**
 * 服务机构后台管理首页
 */
var Index = React.createClass({displayName: "Index",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Header, null), 

                React.createElement("div", {id: "main", className: "container-fluid margin-top-60"}, 
                    React.createElement(Sidebar, {activeMenuID: "menuUsersManage"}), 

                    React.createElement("div", {className: "content-page"}, 
                        React.createElement(Breadcrumb, {page: Page.users})
                    )
                )
            )
        );
    }
});


ReactDOM.render(
    React.createElement(Index, null),
    document.getElementById('page')
);