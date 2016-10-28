var Paging = React.createClass({displayName: "Paging",
    render: function () {
        return (
            React.createElement("nav", {className: "text-center"}, 
                React.createElement("ul", {className: "pagination"}, 
                    React.createElement("li", null, React.createElement("a", {href: "#"}, "«")), 
                    React.createElement("li", null, React.createElement("a", {href: "#"}, "1")), 
                    React.createElement("li", null, React.createElement("a", {href: "#"}, "2")), 
                    React.createElement("li", null, React.createElement("a", {href: "#"}, "3")), 
                    React.createElement("li", null, React.createElement("a", {href: "#"}, "4")), 
                    React.createElement("li", null, React.createElement("a", {href: "#"}, "5")), 
                    React.createElement("li", null, React.createElement("a", {href: "#"}, "»"))
                )
            )
        );
    }
});
