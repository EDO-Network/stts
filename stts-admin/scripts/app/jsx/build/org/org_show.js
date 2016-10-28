var Dashboard = React.createClass({displayName: "Dashboard",
    componentDidMount: function () {
        var editor;
        KindEditor.ready(function (K) {
            editor = K.create('textarea[name="content"]', {
                allowFileManager: true
            });
        });
    },
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, null), 
                React.createElement(Header, {activeMenuID: "mainMenuOrgShow"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("div", null, 
                        React.createElement("div", {className: "pull-left w-222"}, 
                            React.createElement("div", {className: "list-group"}, 
                                React.createElement("a", {href: "org_show.html", className: "list-group-item active"}, "机构展示")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240 overflow-hidden "}, 
                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "dashboard.html"}, "服务机构")), 
                                React.createElement("li", null, React.createElement("a", {href: "active"}, "机构展示"))
                            ), 
                            React.createElement("div", {className: "panel panel-info"}, 
                                React.createElement("div", {className: "panel-heading"}, "机构展示编辑"), 
                                React.createElement("div", {className: "panel-body"}, 
                                    React.createElement("div", {className: "mb-10"}, 
                                    React.createElement("textarea", {name: "content", className: "w-per-100 ", 
                                              style: {height: "800px"}})
                                    ), 
                                    React.createElement("div", {className: "text-center"}, 
                                        React.createElement("button", {type: "button", className: "btn btn-primary"}, "提交"), 
                                        "  ", 
                                        React.createElement("button", {type: "button", className: "btn btn-default"}, "返回")
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
    React.createElement(Dashboard, null),
    document.getElementById('page')
);