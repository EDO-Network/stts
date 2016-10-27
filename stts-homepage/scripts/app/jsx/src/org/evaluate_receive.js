var Evaluate = React.createClass({
    render: function () {
        return (
            <div>
                <Top/>
                <Header activeMenuID="mainMenuEvaluate"/>

                <div className="container">

                    <div>
                        <div className="pull-left w-222">
                            <div className="list-group">
                                <a href="evaluate_receive.html" className="list-group-item active">我收到的评价</a>
                                <a href="evaluate_send.html" className="list-group-item">我发出的评价</a>
                            </div>
                        </div>

                        <div className="ml-240">
                            <ol className="breadcrumb">
                                <li>您所在的位置：</li>
                                <li><a href="dashboard.html">服务机构</a></li>
                                <li><a href="order_list.html">我的评价</a></li>
                                <li className='active'>我收到的评价</li>
                            </ol>
                            <div className="panel panel-default">
                                <div className="panel-heading">我收到的评价</div>
                                <div className="panel-body">
                                    <EvaluateStatistics/>
                                    <table className="table table-hover">
                                        <thead>
                                        <tr>
                                            <th>评分</th>
                                            <th>评价内容</th>
                                            <th>评价企业</th>
                                            <th>服务产品</th>
                                            <th>服务分类</th>
                                            <th>评价时间</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <EvaluateItem/>
                                        <EvaluateItem/>
                                        <EvaluateItem/>
                                        <EvaluateItem/>
                                        <EvaluateItem/>
                                        </tbody>
                                    </table>
                                    <Paging/>
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

var EvaluateItem = React.createClass({
    render: function () {
        return (
            <tr>
                <td>
                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                </td>
                <td>非常优秀的企业，愉快的合作</td>
                <td>xxx 信息技术服务中心</td>
                <td>检验检测</td>
                <td>人才引培-高层培训</td>
                <td>2016-01-01 18:00:01</td>
            </tr>
        );
    }
});

var EvaluateStatistics = React.createClass({
    render: function () {
        return (
            <div>
                <div className="alert alert-success" role="alert">
                    共30分&nbsp;&nbsp;共10人&nbsp;&nbsp;同行平均得分：
                    <span className="text-danger">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                </div>
                <div className="col-sm-6 mb-20">
                    <table className="table table-hover">
                        <tbody>
                        <tr>
                            <td><i className="fa fa-star text-danger" aria-hidden="true"></i>
                                <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                <i className="fa fa-star text-danger" aria-hidden="true"></i>&nbsp;5分
                            </td>
                            <td>
                                十分满意
                            </td>
                            <td>
                                4人
                            </td>
                            <td>
                                30%
                            </td>
                        </tr>
                        <tr>
                            <td><i className="fa fa-star text-danger" aria-hidden="true"></i>
                                <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                <i className="fa fa-star text-mute" aria-hidden="true"></i>&nbsp;4分
                            </td>
                            <td>
                                较满意
                            </td>
                            <td>
                                3人
                            </td>
                            <td>
                                20%
                            </td>
                        </tr>
                        <tr>
                            <td><i className="fa fa-star text-danger" aria-hidden="true"></i>
                                <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                <i className="fa fa-star text-mute" aria-hidden="true"></i>
                                <i className="fa fa-star text-mute" aria-hidden="true"></i>&nbsp;3分
                            </td>
                            <td>
                                一般
                            </td>
                            <td>
                                2人
                            </td>
                            <td>
                                10%
                            </td>
                        </tr>
                        <tr>
                            <td><i className="fa fa-star text-danger" aria-hidden="true"></i>
                                <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                <i className="fa fa-star text-mute" aria-hidden="true"></i>
                                <i className="fa fa-star text-mute" aria-hidden="true"></i>
                                <i className="fa fa-star text-mute" aria-hidden="true"></i>&nbsp;2分
                            </td>
                            <td>
                                稍差
                            </td>
                            <td>
                                1人
                            </td>
                            <td>
                                0%
                            </td>
                        </tr>
                        <tr>
                            <td><i className="fa fa-star text-danger" aria-hidden="true"></i>
                                <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                <i className="fa fa-star text-mute" aria-hidden="true"></i>
                                <i className="fa fa-star text-mute" aria-hidden="true"></i>
                                <i className="fa fa-star text-mute" aria-hidden="true"></i>&nbsp;1分
                            </td>
                            <td>
                                特别不满意
                            </td>
                            <td>
                                0人
                            </td>
                            <td>
                                00%
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Evaluate />,
    document.getElementById('page')
);