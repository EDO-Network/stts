var Index = React.createClass({
    render: function () {
        return (
            <div>
                <Top/>
                <Header activeMenuID="mainMenuIndex"/>

                <div className="container">
                    <div>
                        <div className="pull-left w-222">
                            <div className="list-group">
                                <a href="index.html" className="list-group-item active">统计分析</a>
                                <a href="user_list.html" className="list-group-item">用户一览</a>
                                <a href="notice_list.html" className="list-group-item">全网通知</a>
                            </div>
                        </div>

                        <div className="ml-240">
                            <ol className="breadcrumb">
                                <li>您所在的位置：</li>
                                <li><a href="dashboard.html">运营平台</a></li>
                                <li className='active'>统计分析</li>
                            </ol>
                            <div className="panel panel-default">
                                <div className="panel-heading">统计分析</div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <img src="../img/index/statistics_1.png"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <img src="../img/index/statistics_2.png"/>
                                        </div>
                                    </div>
                                    <br/>
                                    <div>
                                        <img src="../img/index/statistics_3.png"/>
                                    </div>
                                    <br/>
                                    <div>
                                        <img src="../img/index/statistics_4.png"/>
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

ReactDOM.render(
    <Index/>,
    document.getElementById('page')
);