var Index = React.createClass({displayName: "Index",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Top, null), 
                React.createElement(Header, {activeMenuID: "mainMenuIndex"}), 

                React.createElement("div", {className: "main container"}, 
                    React.createElement("div", null, 
                        React.createElement("div", {className: "left-wrap"}, 
                            React.createElement(NavCategory, null)
                        ), 
                        React.createElement("div", {className: "right-wrap"}, 
                            React.createElement(Slide, null)
                        )
                    ), 
                    React.createElement("div", {className: "clearfix"}), 
                    React.createElement(Statistics, null), 
                    React.createElement(Choice, null)
                )
            )
        );
    }
});

var Statistics = React.createClass({displayName: "Statistics",
    getInitialState: function () {
        return {
            statistics: {
                orgCount: 2345,
                comCount: 12345,
                serviceCount: 3246,
                buyCount: 27654,
                moneySum: 234567,
            }
        };
    },
    render: function () {
        return (
            React.createElement("div", {className: "statistics-wrap row"}, 
                React.createElement("div", {className: "col-sm-3"}, 
                    React.createElement("div", {className: "mini-stat clearfix bx-shadow bg-info"}, 
                            React.createElement("span", {className: "mini-stat-icon"}, 
                                React.createElement("i", {className: "fa fa-shopping-basket", "aria-hidden": "true"})
                            ), 

                        React.createElement("div", {className: "mini-stat-info text-right"}, 
                            React.createElement("span", {className: "counter"}, this.state.statistics.orgCount, " 家"), 
                            "加盟机构"
                        )
                    )
                ), 
                React.createElement("div", {className: "col-sm-3"}, 
                    React.createElement("div", {className: "mini-stat clearfix bx-shadow bg-purple"}, 
                            React.createElement("span", {className: "mini-stat-icon"}, 
                                React.createElement("i", {className: "fa fa-shopping-cart", "aria-hidden": "true"})
                            ), 

                        React.createElement("div", {className: "mini-stat-info text-right"}, 
                            React.createElement("span", {className: "counter"}, this.state.statistics.serviceCount, " 项"), 
                            "服务产品"
                        )
                    )
                ), 
                React.createElement("div", {className: "col-sm-3"}, 
                    React.createElement("div", {className: "mini-stat clearfix bx-shadow bg-success"}, 
                            React.createElement("span", {className: "mini-stat-icon"}, 
                                React.createElement("i", {className: "fa fa-shopping-bag", "aria-hidden": "true"})
                            ), 

                        React.createElement("div", {className: "mini-stat-info text-right"}, 
                            React.createElement("span", {className: "counter"}, this.state.statistics.buyCount, " 次"), 
                            "服务购买"
                        )
                    )
                ), 
                React.createElement("div", {className: "col-sm-3"}, 
                    React.createElement("div", {className: "mini-stat clearfix bx-shadow bg-primary"}, 
                            React.createElement("span", {className: "mini-stat-icon"}, 
                                React.createElement("i", {className: "fa fa-money", "aria-hidden": "true"})
                            ), 

                        React.createElement("div", {className: "mini-stat-info text-right"}, 
                            React.createElement("span", {className: "counter"}, this.state.statistics.moneySum, " 万"), 
                            "交易金额"
                        )
                    )
                )
            )
        );
    }
});

var Slide = React.createClass({displayName: "Slide",
    render: function () {
        return (
            React.createElement("div", {className: "slide-wrap"}, 
                React.createElement("div", {className: ""}, 
                    React.createElement("div", {id: "carousel-example-generic", className: "carousel slide", "data-ride": "carousel"}, 
                        React.createElement("ol", {className: "carousel-indicators"}, 
                            React.createElement("li", {"data-target": "#carousel-example-generic", "data-slide-to": "0", className: "active"}), 
                            React.createElement("li", {"data-target": "#carousel-example-generic", "data-slide-to": "1"}), 
                            React.createElement("li", {"data-target": "#carousel-example-generic", "data-slide-to": "2"})
                        ), 

                        React.createElement("div", {className: "carousel-inner", role: "listbox"}, 
                            React.createElement("div", {className: "item active"}, 
                                React.createElement("img", {src: "img/index/header-bg.jpg", alt: "..."}), 

                                React.createElement("div", {className: "carousel-caption"}, 
                                    "..."
                                )
                            ), 
                            React.createElement("div", {className: "item"}, 
                                React.createElement("img", {src: "img/index/header-bg.jpg", alt: "..."}), 

                                React.createElement("div", {className: "carousel-caption"}, 
                                    "..."
                                )
                            ), 
                            React.createElement("div", {className: "item"}, 
                                React.createElement("img", {src: "img/index/header-bg.jpg", alt: "..."}), 

                                React.createElement("div", {className: "carousel-caption"}, 
                                    "..."
                                )
                            )
                        ), 

                        React.createElement("a", {className: "left carousel-control", href: "#carousel-example-generic", role: "button", 
                           "data-slide": "prev"}, 
                            React.createElement("span", {className: "glyphicon glyphicon-chevron-left"}), 
                            React.createElement("span", {className: "sr-only"}, "Previous")
                        ), 
                        React.createElement("a", {className: "right carousel-control", href: "#carousel-example-generic", role: "button", 
                           "data-slide": "next"}, 
                            React.createElement("span", {className: "glyphicon glyphicon-chevron-right"}), 
                            React.createElement("span", {className: "sr-only"}, "Next")
                        )
                    )
                )
            )
        );
    }
});

var Choice = React.createClass({displayName: "Choice",
    render: function () {
        return (
            React.createElement("div", {className: "choice-wrap"}, 
                React.createElement("h2", null, "精选服务"), 
                React.createElement("div", null, 
                    React.createElement("div", {className: "left-wrap"}, 
                        React.createElement("div", {className: "panel panel-default"}, 
                            React.createElement("div", {className: "panel-heading"}, 
                                React.createElement("i", {className: "fa fa-search", "aria-hidden": "true"}), 
                                React.createElement("span", null, " 您要寻找什么服务？")
                            ), 
                            React.createElement("div", {className: "panel-body"}

                            )
                        )
                    ), 
                    React.createElement("div", {className: "right-wrap"}
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