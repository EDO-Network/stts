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
                                <li><a href="dashboard.html">企业机构</a></li>
                                <li><a href="order_list.html">我的评价</a></li>
                                <li className='active'>我收到的评价</li>
                            </ol>
                            <div className="panel panel-default">
                                <div className="panel-heading">我收到的评价</div>
                                <div className="panel-body">
                                    <table className="table table-hover">
                                        <thead>
                                        <tr>
                                            <th>评价星级</th>
                                            <th>评价内容</th>
                                            <th>评价人</th>
                                            <th>服务产品</th>
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
                <td>2016-01-01 18:00:01</td>
            </tr>
        );
    }
});

ReactDOM.render(
    <Evaluate />,
    document.getElementById('page')
);