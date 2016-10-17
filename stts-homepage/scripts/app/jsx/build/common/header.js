var Header = React.createClass({displayName: "Header",
    render: function () {
        return (
            React.createElement("div", {className: "header-wrap"}, 
                React.createElement("div", {className: "container"}, 
                    React.createElement("div", {className: "logo-wrap pull-left"}, 
                        React.createElement("img", {src: "img/logo.png"})
                    ), 
                    React.createElement("div", {className: "search-wrap nav nav-tabs pull-left"}, 
                        React.createElement("ul", {className: "search-classify nav nav-tabs", role: "tablist"}, 
                            React.createElement("li", {className: "active"}, React.createElement("a", {href: "#service", role: "tab", "data-toggle": "tab"}, "服务")), 
                            React.createElement("li", null, React.createElement("a", {href: "#org", role: "tab", "data-toggle": "tab"}, "机构"))
                        ), 
                        React.createElement("div", {className: "input-group"}, 
                            React.createElement("input", {type: "text", className: "search-content form-control"}), 
                            React.createElement("span", {className: "input-group-btn"}, 
                                React.createElement("button", {className: "btn btn-default", type: "button"}, 
                                    React.createElement("i", {className: "fa fa-search", "aria-hidden": "true"})
                                )
                            )
                        )
                    )
                )
            )
        );
    }
});