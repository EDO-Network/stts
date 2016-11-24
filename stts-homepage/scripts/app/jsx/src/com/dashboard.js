var Dashboard = React.createClass({
    render: function () {
        return (
            <div>
                <Top/>
                <Header activeMenuID="mainMenuCompany"/>

                <div className="container">

                    <div>
                        <div className="pull-left w-222">
                            <div className="list-group">
                                <a href="dashboard.html" className="list-group-item active">我的平台</a>
                                <a href="company.html" className="list-group-item">企业信息</a>
                                <a href="qualification.html" className="list-group-item">资格审核</a>
                            </div>
                        </div>

                        <div className="ml-240">
                            <ol className="breadcrumb">
                                <li>您所在的位置：</li>
                                <li><a href="dashboard.html">企业机构</a></li>
                                <li><a href="company.html">我的企业</a></li>
                                <li className='active'>我的平台</li>
                            </ol>
                            <div>
                                <div className="alert alert-success" role="alert">
                                    <stong>企业资格审核状态：<a href="company.html">未审核</a></stong>
                                </div>

                                <Statistics/>
                                {
                                    //<div className="col-sm-6">
                                    //    <img src="../../img/com/dashboard_1.png"/>
                                    //
                                    //    <p>过期预警：2000 元服务券即将在2006年12月31日过期</p>
                                    //</div>
                                    //< div className="col-sm-6">
                                    //<img src="../../img/com/dashboard_2.png"/>
                                    //</div>
                                }
                                <div className="label label-success">

                                </div>

                                <div className="mb-20">
                                    <div className="panel panel-info">
                                        <div className="panel-heading">最新消息</div>
                                        <div className="panel-body">

                                            <NoticeItem/>
                                            <NoticeItem/>
                                            <NoticeItem/>
                                            <NoticeItem/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
});

var NoticeItem = React.createClass({
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">2016-01-01 18:18:10</div>
                <div className="panel-body">
                    <div>系统维护通知</div>
                    <hr/>
                    <div>2016-01-01 23:00:00 系统进入升级维护，请务进行敏感操作。</div>
                </div>
            </div>
        );
    }
});


var Statistics = React.createClass({
    render: function () {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <span>服务券统计信息</span>
                    <span className="pull-right"><a href="../index.html">进入服务超市</a></span>
                </div>
                <div className="panel-body">
                    <div className="statistics-wrap overflow-hidden">
                        <div className="col-sm-3 text-center">
                            <div className="mini-stat clearfix bx-shadow bg-info">
                                                <span className="mini-stat-icon">
                                                    <i className="fa fa-money" aria-hidden="true"></i>
                                                </span>

                                <div className="mini-stat-info text-right">
                                                    <span className="counter">3241.78&nbsp;
                                                        元</span>
                                    我的服务券余额
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 text-center">
                            <div className="mini-stat clearfix bx-shadow bg-purple">
                                                <span className="mini-stat-icon">
                                                    <i className="fa fa-money" aria-hidden="true"></i>
                                                </span>

                                <div className="mini-stat-info text-right">
                                                    <span className="counter">5000&nbsp;
                                                        元</span>
                                    我的服务券总额度
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 text-center">
                            <div className="mini-stat clearfix bx-shadow bg-success">
                                                <span className="mini-stat-icon">
                                                    <i className="fa fa-money" aria-hidden="true"></i>
                                                </span>

                                <div className="mini-stat-info text-right">
                                                    <span className="counter">3241.78&nbsp;
                                                        万元</span>
                                    全网服务券剩余额度
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 text-center">
                            <div className="mini-stat clearfix bx-shadow bg-primary">
                                                <span className="mini-stat-icon">
                                                    <i className="fa fa-money" aria-hidden="true"></i>
                                                </span>

                                <div className="mini-stat-info text-right">
                                                    <span className="counter">5000&nbsp;
                                                        万元</span>
                                    全网服务券总额度
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});


ReactDOM.render(
    <Dashboard />,
    document.getElementById('page')
);