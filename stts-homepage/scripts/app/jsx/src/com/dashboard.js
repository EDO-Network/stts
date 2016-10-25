var Dashboard = React.createClass({
    render: function () {
        return (
            <div>
                <Top/>
                <Header activeMenuID="mainMenuDashboard"/>

                <div className="container">
                    <ol className="breadcrumb">
                        <li>您所在的位置：</li>
                        <li><a href="dashboard.html">企业机构</a></li>
                        <li className='active'>我的平台</li>
                    </ol>
                    <div className="text-center">
                        <div className="row mb-20">
                            <div className="col-sm-6">
                                <img src="../../img/com/dashboard_1.png"/>

                                <p>过期预警：2000 元服务券即将在2006年12月31日过期</p>
                            </div>
                            <div className="col-sm-6">
                                <img src="../../img/com/dashboard_2.png"/>
                            </div>
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

ReactDOM.render(
    <Dashboard />,
    document.getElementById('page')
);