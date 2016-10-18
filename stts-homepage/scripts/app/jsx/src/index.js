var Index = React.createClass({
    render: function () {
        var isLogin = getQueryStr("isLogin");
        return (
            <div>
                <Top isLogin={isLogin}/>
                <Header activeMenuID="mainMenuIndex"/>

                <div className="main container">
                    <div>
                        <div className="left-wrap">
                            <NavCategory/>
                        </div>
                        <div className="right-wrap">
                            <Slide/>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <Statistics/>
                    <Choice/>
                    <Hot/>
                </div>
            </div>
        );
    }
});

var Statistics = React.createClass({
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
            <div className="statistics-wrap row">
                <div className="col-sm-3">
                    <div className="mini-stat clearfix bx-shadow bg-info">
                            <span className="mini-stat-icon">
                                <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                            </span>

                        <div className="mini-stat-info text-right">
                            <span className="counter">{this.state.statistics.orgCount}&nbsp;家</span>
                            加盟机构
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="mini-stat clearfix bx-shadow bg-purple">
                            <span className="mini-stat-icon">
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            </span>

                        <div className="mini-stat-info text-right">
                            <span className="counter">{this.state.statistics.serviceCount}&nbsp;项</span>
                            服务产品
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="mini-stat clearfix bx-shadow bg-success">
                            <span className="mini-stat-icon">
                                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                            </span>

                        <div className="mini-stat-info text-right">
                            <span className="counter">{this.state.statistics.buyCount}&nbsp;次</span>
                            服务购买
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="mini-stat clearfix bx-shadow bg-primary">
                            <span className="mini-stat-icon">
                                <i className="fa fa-money" aria-hidden="true"></i>
                            </span>

                        <div className="mini-stat-info text-right">
                            <span className="counter">{this.state.statistics.moneySum}&nbsp;万</span>
                            交易金额
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var Slide = React.createClass({
    render: function () {
        return (
            <div className="slide-wrap">
                <div className="">
                    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        </ol>

                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                <img src="img/index/header-bg.jpg" alt="..."/>

                                <div className="carousel-caption">
                                    ...
                                </div>
                            </div>
                            <div className="item">
                                <img src="img/index/header-bg.jpg" alt="..."/>

                                <div className="carousel-caption">
                                    ...
                                </div>
                            </div>
                            <div className="item">
                                <img src="img/index/header-bg.jpg" alt="..."/>

                                <div className="carousel-caption">
                                    ...
                                </div>
                            </div>
                        </div>

                        <a className="left carousel-control" href="#carousel-example-generic" role="button"
                           data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#carousel-example-generic" role="button"
                           data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
});

var Choice = React.createClass({
    render: function () {
        return (
            <div className="choice-wrap">
                <div className="clearfix">
                    <div className="pull-left">
                        <h2>精选服务</h2>
                    </div>
                    <div className="pull-right lh-66">
                        <a href="javascript:void(0)">
                            <span>换一批</span>&nbsp;<i className="fa fa-refresh" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3"><ServicePreview/></div>
                    <div className="col-sm-3"><ServicePreview/></div>
                    <div className="col-sm-3"><ServicePreview/></div>
                    <div className="col-sm-3"><ServicePreview/></div>
                </div>
                {
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
                }
            </div>
        );
    }
});

var Hot = React.createClass({
    render: function () {
        return (
            <div className="hot-tab-wrap mt-20">
                <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active"><a href="#service" role="tab" data-toggle="tab">热门服务</a>
                    </li>
                    <li role="presentation"><a href="#org" role="tab" data-toggle="tab">加盟机构</a></li>
                </ul>

                <a className="more" href="javascript:void(0)">
                    <span>更多</span>&nbsp;<i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                </a>

                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="service">
                        <Service/>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="org">
                        <Org/>
                    </div>
                </div>
            </div>
        );
    }
});

var Service = React.createClass({
    render: function () {
        return (
            <div className="service-wrap">
                <div className="row">
                    <div className="col-sm-3"><ServicePreview/></div>
                    <div className="col-sm-3"><ServicePreview/></div>
                    <div className="col-sm-3"><ServicePreview/></div>
                    <div className="col-sm-3"><ServicePreview/></div>
                </div>
                <div className="row mt-10">
                    <div className="col-sm-3"><ServicePreview/></div>
                    <div className="col-sm-3"><ServicePreview/></div>
                    <div className="col-sm-3"><ServicePreview/></div>
                    <div className="col-sm-3"><ServicePreview/></div>
                </div>
            </div>
        );
    }
});

var Org = React.createClass({
    render: function () {
        return (
            <div className="org-wrap">
                <div className="row">
                    <div className="col-sm-3"><OrgPreview/></div>
                    <div className="col-sm-3"><OrgPreview/></div>
                    <div className="col-sm-3"><OrgPreview/></div>
                    <div className="col-sm-3"><OrgPreview/></div>
                </div>
                <div className="row mt-10">
                    <div className="col-sm-3"><OrgPreview/></div>
                    <div className="col-sm-3"><OrgPreview/></div>
                    <div className="col-sm-3"><OrgPreview/></div>
                    <div className="col-sm-3"><OrgPreview/></div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Index/>,
    document.getElementById('page')
);