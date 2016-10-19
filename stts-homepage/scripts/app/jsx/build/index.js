var Index = React.createClass({displayName: "Index",
    render: function () {
        var isLogin = getQueryStr("isLogin");
        return (
            React.createElement("div", null, 
                React.createElement(Top, {isLogin: isLogin}), 
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
                    React.createElement(Choice, null), 
                    React.createElement(Hot, null)
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
                                React.createElement("img", {src: "../img/index/header-bg.jpg", alt: "..."}), 

                                React.createElement("div", {className: "carousel-caption"}, 
                                    "..."
                                )
                            ), 
                            React.createElement("div", {className: "item"}, 
                                React.createElement("img", {src: "../img/index/header-bg.jpg", alt: "..."}), 

                                React.createElement("div", {className: "carousel-caption"}, 
                                    "..."
                                )
                            ), 
                            React.createElement("div", {className: "item"}, 
                                React.createElement("img", {src: "../img/index/header-bg.jpg", alt: "..."}), 

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
                React.createElement("div", {className: "clearfix"}, 
                    React.createElement("div", {className: "pull-left"}, 
                        React.createElement("h2", null, "精选服务")
                    ), 
                    React.createElement("div", {className: "pull-right lh-66"}, 
                        React.createElement("a", {href: "javascript:void(0)"}, 
                            React.createElement("span", null, "换一批"), " ", React.createElement("i", {className: "fa fa-refresh", "aria-hidden": "true"})
                        )
                    )
                ), 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-sm-3"}, React.createElement(ServicePreview, null)), 
                    React.createElement("div", {className: "col-sm-3"}, React.createElement(ServicePreview, null)), 
                    React.createElement("div", {className: "col-sm-3"}, React.createElement(ServicePreview, null)), 
                    React.createElement("div", {className: "col-sm-3"}, React.createElement(ServicePreview, null))
                )
                
                    //<div>
                    //    <div className="left-wrap">
                    //        <div className="panel panel-default">
                    //            <div className="panel-heading">
                    //                <i className="fa fa-search" aria-hidden="true"></i>
                    //                <span>&nbsp;您要寻找什么服务？</span>
                    //            </div>
                    //            <div className="panel-body">
                    //                <div>
                    //                    <div className="pull-left w-90">分类</div>
                    //                    <div>
                    //                        <select className="form-control input-sm">
                    //                            <option>全部</option>
                    //                            <option>人才引培</option>
                    //                            <option>技术创新</option>
                    //                            <option>财务指导</option>
                    //                            <option>......</option>
                    //                        </select>
                    //                    </div>
                    //                </div>
                    //                <div className="mt-10">
                    //                    <div className="pull-left w-90">子分类</div>
                    //                    <div>
                    //                        <select className="form-control input-sm">
                    //                            <option>全部</option>
                    //                            <option>高管培训</option>
                    //                            <option>人才引进</option>
                    //                            <option>财务指导</option>
                    //                            <option>......</option>
                    //                        </select>
                    //                    </div>
                    //                </div>
                    //            </div>
                    //        </div>
                    //    </div>
                    //    <div className="right-wrap container-fluid">
                    //
                    //    </div>
                    //</div>
                
            )
        );
    }
});

var Hot = React.createClass({displayName: "Hot",
    render: function () {
        return (
            React.createElement("div", {className: "hot-tab-wrap mt-20"}, 
                React.createElement("ul", {className: "nav nav-tabs", role: "tablist"}, 
                    React.createElement("li", {role: "presentation", className: "active"}, React.createElement("a", {href: "#service", role: "tab", "data-toggle": "tab"}, "热门服务")
                    ), 
                    React.createElement("li", {role: "presentation"}, React.createElement("a", {href: "#org", role: "tab", "data-toggle": "tab"}, "加盟机构"))
                ), 

                React.createElement("a", {className: "more", href: "javascript:void(0)"}, 
                    React.createElement("span", null, "更多"), " ", React.createElement("i", {className: "fa fa-ellipsis-h", "aria-hidden": "true"})
                ), 

                React.createElement("div", {className: "tab-content"}, 
                    React.createElement("div", {role: "tabpanel", className: "tab-pane active", id: "service"}, 
                        React.createElement(Service, null)
                    ), 
                    React.createElement("div", {role: "tabpanel", className: "tab-pane", id: "org"}, 
                        React.createElement(Org, null)
                    )
                )
            )
        );
    }
});

var Service = React.createClass({displayName: "Service",
    render: function () {
        return (
            React.createElement("div", {className: "service-wrap"}, 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-sm-3"}, React.createElement(ServicePreview, null)), 
                    React.createElement("div", {className: "col-sm-3"}, React.createElement(ServicePreview, null)), 
                    React.createElement("div", {className: "col-sm-3"}, React.createElement(ServicePreview, null)), 
                    React.createElement("div", {className: "col-sm-3"}, React.createElement(ServicePreview, null))
                ), 
                React.createElement("div", {className: "row mt-10"}, 
                    React.createElement("div", {className: "col-sm-3"}, React.createElement(ServicePreview, null)), 
                    React.createElement("div", {className: "col-sm-3"}, React.createElement(ServicePreview, null)), 
                    React.createElement("div", {className: "col-sm-3"}, React.createElement(ServicePreview, null)), 
                    React.createElement("div", {className: "col-sm-3"}, React.createElement(ServicePreview, null))
                )
            )
        );
    }
});

var Org = React.createClass({displayName: "Org",
    render: function () {
        return (
            React.createElement("div", {className: "org-wrap"}, 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-sm-3"}, React.createElement(OrgPreview, null)), 
                    React.createElement("div", {className: "col-sm-3"}, React.createElement(OrgPreview, null)), 
                    React.createElement("div", {className: "col-sm-3"}, React.createElement(OrgPreview, null)), 
                    React.createElement("div", {className: "col-sm-3"}, React.createElement(OrgPreview, null))
                ), 
                React.createElement("div", {className: "row mt-10"}, 
                    React.createElement("div", {className: "col-sm-3"}, React.createElement(OrgPreview, null)), 
                    React.createElement("div", {className: "col-sm-3"}, React.createElement(OrgPreview, null)), 
                    React.createElement("div", {className: "col-sm-3"}, React.createElement(OrgPreview, null)), 
                    React.createElement("div", {className: "col-sm-3"}, React.createElement(OrgPreview, null))
                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(Index, null),
    document.getElementById('page')
);