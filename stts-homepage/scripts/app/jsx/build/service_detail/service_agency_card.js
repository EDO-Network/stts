/**
 * 服务机构名片
 */
var ServiceAgencyCard = React.createClass({displayName: "ServiceAgencyCard",
    render: function () {
        return (
            React.createElement("div", {className: "panel panel-primary"}, 
                React.createElement("div", {className: "panel-heading"}, "服务机构名片"), 
                React.createElement("div", {className: "panel-body"}, 
                    React.createElement("div", null, 
                        React.createElement("img", {src: "img/sample/agency_logo.png"})
                    ), 
                    React.createElement("div", null, 
                        React.createElement("p", null, 
                            React.createElement("span", null, "好评率："), 
                            React.createElement("span", null)
                        ), 
                        React.createElement("p", null, 
                            React.createElement("span", null, "联系地址："), 
                            React.createElement("span", null, "宁波市世纪大道13号伟业楼N305室")
                        ), 
                        React.createElement("p", null, 
                            React.createElement("span", null, "机构名称："), 
                            React.createElement("span", null, "宁波市中大检测有限公司")
                        ), 
                        React.createElement("p", null, 
                            React.createElement("button", {type: "button", className: "btn btn-default"}, "进入机构主页")
                        )
                    )
                )
            )
        );
    }
});
