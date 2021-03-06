var Index = React.createClass({
    render: function () {
        var isLogin = getQueryStr("isLogin");
        return (
            <div>
                <Top isLogin={isLogin}/>
                <Header activeMenuID="mainMenuIndex"/>

                <div className="main container">
                    <div style={{position:"relative"}}>
                        <div className="left-wrap w-222">
                            <NavCategory/>
                        </div>
                        <NavCategoryItems/>

                        <div className="right-wrap row">
                            <div className="col-sm-9">

                                <Message/>
                                <Slide/>
                                {
                                    //<div className="">
                                    //    <div className="col-sm-6 who-link text-center">
                                    //            <h2 className="title">我是服务机构</h2>
                                    //
                                    //            <a href="com/company.html" className="bg-primary">我要入驻商城</a>
                                    //    </div>
                                    //    <div className="col-sm-6 who-link text-center">
                                    //        <h2 className="title">我是企业</h2>
                                    //
                                    //        <div><a href="com/org_info.html" className="bg-info">我要发布需求</a></div>
                                    //    </div>
                                    //</div>
                                    //<Register/>
                                }
                            </div>

                            <div className="col-sm-3">
                                <Statistics2/>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    {
                        //<Statistics/>
                    }
                    <GroupOrg/>
                    <Hot/>

                    <div className="row">
                        <div className="col-sm-4">
                            <News/>
                        </div>
                        <div className="col-sm-4">
                            <Question/>
                        </div>
                        <div className="col-sm-4">
                            <Notice/>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
});

var Message = React.createClass({
    render: function () {
        return (
            <div className="message-wrap">本期服务券余额 2345 万元</div>
        );
    }
});

var Register = React.createClass({
    render: function () {
        return (
            <div className="register-wrap row">
                <div className="col-sm-6">
                    <div className="mini-stat clearfix bx-shadow bg-info">
                        <h2 className="title">我是服务机构</h2>

                        <div className="text-center">
                            <a href="org/org_info.html">我要入驻商城</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="mini-stat clearfix bx-shadow bg-purple">
                        <h2 className="title">我是企业</h2>

                        <div className="text-center">
                            <a href="com/company.html">我要发布需求</a>
                        </div>
                    </div>
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


var Statistics2 = React.createClass({
    render: function () {
        return (
            <div className="statistics-wrap">
                <div className="mini-stat clearfix bx-shadow bg-primary">
                            <span className="mini-stat-icon">
                                <i className="fa fa-money" aria-hidden="true"></i>
                            </span>

                    <div className="mini-stat-info text-right">
                        <span className="counter">245&nbsp;万</span>
                        累计使用券金额
                    </div>
                </div>

                <div className="mini-stat clearfix bx-shadow bg-success">
                            <span className="mini-stat-icon">
                                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                            </span>

                    <div className="mini-stat-info text-right">
                        <span className="counter">35&nbsp;次</span>
                        服务交易次数
                    </div>
                </div>
                <div className="mini-stat clearfix bx-shadow bg-primary">
                            <span className="mini-stat-icon">
                                <i className="fa fa-money" aria-hidden="true"></i>
                            </span>

                    <div className="mini-stat-info text-right">
                        <span className="counter">34&nbsp;万</span>
                        累计交易金额
                    </div>
                </div>
                <div className="mini-stat clearfix bx-shadow bg-info">
                            <span className="mini-stat-icon">
                                <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                            </span>

                    <div className="mini-stat-info text-right">
                        <span className="counter">23&nbsp;家</span>
                        小微企业
                    </div>
                </div>

                <div className="mini-stat clearfix bx-shadow bg-info">
                            <span className="mini-stat-icon">
                                <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                            </span>

                    <div className="mini-stat-info text-right">
                        <span className="counter">23&nbsp;家</span>
                        服务机构
                    </div>
                </div>
                <div className="mini-stat clearfix bx-shadow bg-purple">
                            <span className="mini-stat-icon">
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            </span>

                    <div className="mini-stat-info text-right">
                        <span className="counter">23&nbsp;项</span>
                        服务产品
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
                                <img src="../img/index/header-bg.jpg" alt="..."/>

                                <div className="carousel-caption">
                                    ...
                                </div>
                            </div>
                            <div className="item">
                                <img src="../img/index/header-bg.jpg" alt="..."/>

                                <div className="carousel-caption">
                                    ...
                                </div>
                            </div>
                            <div className="item">
                                <img src="../img/index/header-bg.jpg" alt="..."/>

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

var GroupOrg = React.createClass({
    render: function () {
        return (
            <div>
                <div className="block-title">推荐服务</div>


                <a className="more" href="javascript:void(0)">
                    <span>更多</span>&nbsp;&gt;&gt;
                </a>

                <div className="row">
                    <div className="col-sm-3"><ServicePreview/></div>
                    <div className="col-sm-3"><ServicePreview/></div>
                    <div className="col-sm-3"><ServicePreview/></div>
                    <div className="col-sm-3"><ServicePreview/></div>
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
            </div>
        );
    }
});

var Hot = React.createClass({
    render: function () {
        return (
            <div className="hot-tab-wrap mt-20">
                <ul className="nav nav-tabs font-size-18" role="tablist">
                    <li role="presentation" className="active"><a href="#service" role="tab" data-toggle="tab">热门服务</a>
                    </li>
                    <li role="presentation"><a href="#org" role="tab" data-toggle="tab">加盟机构</a></li>
                </ul>

                <a className="more" href="javascript:void(0)">
                    <span>更多</span>&nbsp;&gt;&gt;
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
                <div className="row mb-10">
                    <div className="col-sm-3"><ServicePreview/></div>
                    <div className="col-sm-3"><ServicePreview/></div>
                    <div className="col-sm-3"><ServicePreview/></div>
                    <div className="col-sm-3"><ServicePreview/></div>
                </div>
                <div className="row mb-20">
                    <div className="col-sm-3"><ServicePreview/></div>
                    <div className="col-sm-3"><ServicePreview/></div>
                    <div className="col-sm-3"><ServicePreview/></div>
                    <div className="col-sm-3"><ServicePreview/></div>
                </div>
                <div className="text-center">
                    <button className="btn btn-default w-200">点击加载更多 &gt;&gt;</button>
                </div>
            </div>
        );
    }
});

var Org = React.createClass({
    render: function () {
        return (
            <div className="org-wrap">
                <div className="row mb-10">
                    <div className="col-sm-3"><OrgPreview/></div>
                    <div className="col-sm-3"><OrgPreview/></div>
                    <div className="col-sm-3"><OrgPreview/></div>
                    <div className="col-sm-3"><OrgPreview/></div>
                </div>
                <div className="row mb-20">
                    <div className="col-sm-3"><OrgPreview/></div>
                    <div className="col-sm-3"><OrgPreview/></div>
                    <div className="col-sm-3"><OrgPreview/></div>
                    <div className="col-sm-3"><OrgPreview/></div>
                </div>
                <div className="text-center">
                    <button className="btn btn-default w-200">点击加载更多 &gt;&gt;</button>
                </div>
            </div>
        );
    }
});

var News = React.createClass({
    render: function () {
        return (
            <div>
                <h2>新闻动态</h2>
                <a className="more" href="javascript:void(0)">
                    <span>更多</span>&nbsp;&gt;&gt;
                </a>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
            </div>
        );
    }
});

var NewsItem = React.createClass({
    render: function () {
        return (
            <div className="border-bottom-dotted mb-10 h-80">
                <div className="title">新闻标题</div>
                <p>
                    新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容
                </p>

            </div>
        );
    }
});

var Question = React.createClass({
    render: function () {
        return (
            <div>
                <h2>热门问答</h2>
                <a className="more" href="javascript:void(0)">
                    <span>更多</span>&nbsp;&gt;&gt;
                </a>
                <QuestionItem/>
                <QuestionItem/>
                <QuestionItem/>
            </div>
        );
    }
});

var QuestionItem = React.createClass({
    render: function () {
        return (
            <div className="border-bottom-dotted mb-10 h-80">
                <p>问题标题</p>

                <p>
                    回答内容回答内容回答内容回答内容回答内容回答内容回答内容
                </p>

            </div>
        );
    }
});

var Notice = React.createClass({
    render: function () {
        return (
            <div>
                <h2>通知公告</h2>
                <a className="more" href="notice_list.html">
                    <span>更多</span>&nbsp;&gt;&gt;
                </a>
                <NoticeItem/>
                <NoticeItem/>
                <NoticeItem/>
                <NoticeItem/>
                <NoticeItem/>
                <NoticeItem/>
            </div>
        );
    }
});

var NoticeItem = React.createClass({
    render: function () {
        return (
            <div className="border-bottom-dotted mb-10 h-35">
                <div className="pull-left">2017年度服务机构年审公告</div>
                <div className="pull-right">2016-6-30</div>
            </div>
        );
    }
});


ReactDOM.render(
    <Index/>,
    document.getElementById('page')
);