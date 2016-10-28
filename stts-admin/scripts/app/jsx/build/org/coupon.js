var Coupon = React.createClass({displayName: "Coupon",

    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, null), 
                React.createElement(Header, {activeMenuID: "mainMenuCoupon"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("div", null, 
                        React.createElement("div", {className: "pull-left w-222"}, 
                            React.createElement("div", {className: "list-group"}, 
                                React.createElement("a", {href: "coupon.html", className: "list-group-item active"}, "帐户统计"), 
                                React.createElement("a", {href: "coupon_list.html", className: "list-group-item "}, "服务券一览"), 
                                React.createElement("a", {href: "coupon_excharge.html", className: "list-group-item "}, "服务券兑付")
                            )
                        ), 

                        React.createElement("div", {className: "ml-240 overflow-hidden "}, 
                            React.createElement("ol", {className: "breadcrumb"}, 
                                React.createElement("li", null, "您所在的位置："), 
                                React.createElement("li", null, React.createElement("a", {href: "dashboard.html"}, "服务机构")), 
                                React.createElement("li", null, React.createElement("a", {href: "service_list.html"}, "服务券帐户")), 
                                React.createElement("li", {className: "active"}, "帐户统计")
                            ), 


                            React.createElement("div", {className: "text-center"}, 
                                React.createElement("div", {className: "row mb-20"}, 
                                    React.createElement("div", {className: "col-sm-6"}, 
                                        React.createElement("img", {src: "../../img/org/dashboard_1.png"})
                                    ), 
                                    React.createElement("div", {className: "col-sm-6"}, 
                                        React.createElement("img", {src: "../../img/org/dashboard_2.png"})
                                    )
                                ), 
                                React.createElement("div", {className: "row mb-20"}, 
                                    React.createElement("div", {className: "col-sm-6"}, 
                                        React.createElement("img", {src: "../../img/org/dashboard_6.png"})
                                    ), 
                                    React.createElement("div", {className: "col-sm-6"}, 
                                        React.createElement("img", {src: "../../img/org/dashboard_4.png"})
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
    React.createElement(Coupon, null),
    document.getElementById('page')
);