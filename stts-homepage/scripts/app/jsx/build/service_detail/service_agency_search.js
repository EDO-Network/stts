/**
 * 服务搜索
 */
var ServiceAgencyCard = React.createClass({displayName: "ServiceAgencyCard",
    render: function () {
        return (
            React.createElement("div", {className: "panel panel-primary"}, 
                React.createElement("div", {className: "panel-heading"}, "服务搜索"), 
                React.createElement("div", {className: "panel-body"}, 
                    React.createElement("table", {width: "100%", border: "0", cellspacing: "0", cellpadding: "0", className: "spleft_sbox"}, 
                        React.createElement("tbody", null, 
                        React.createElement("tr", null, 
                            React.createElement("th", null, "服务名："), 
                            React.createElement("td", null, 
                                React.createElement("input", {id: "serName", type: "text", name: "serName", className: "spleft_sinput", 
                                       style: "width:135px;"}))
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("th", null, "价 格："), 
                            React.createElement("td", null, 
                                React.createElement("input", {id: "startPrice", type: "text", name: "priceStart", className: "spleft_sinput", 
                                       style: "width:56px;"}), 
                                "- ", React.createElement("input", {id: "endPrice", type: "text", name: "priceEnd", className: "spleft_sinput", 
                                         style: "width:56px;"}))
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("th", null, " "), 
                            React.createElement("td", null, React.createElement("a", {href: "#", className: "jobsearch_btn", onclick: "doSearch();this.blur();"}, "搜索"))
                        )
                        )
                    )
                )
            )
        );
    }
});
