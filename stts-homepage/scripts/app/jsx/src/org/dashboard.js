var Dashboard = React.createClass({
    render: function () {
        return (
            <div>
                <Top/>
                <Header activeMenuID="mainMenuDashboard"/>

                <div className="container">
                    <ol className="breadcrumb">
                        <li>您所在的位置：</li>
                        <li><a href="dashboard.html">服务机构</a></li>
                        <li className='active'>服务机构平台</li>
                    </ol>
                    <div className="text-center">
                        <div className="row mb-20">
                            <div className="col-sm-6">
                                <img src="../../img/org/dashboard_1.png"/>
                            </div>
                            <div className="col-sm-6">
                                <img src="../../img/org/dashboard_2.png"/>
                            </div>
                        </div>
                        <div className="row mb-20">
                            <div className="col-sm-6">
                                <img src="../../img/org/dashboard_3.png"/>
                            </div>
                            <div className="col-sm-6">
                                <img src="../../img/org/dashboard_4.png"/>
                            </div>
                        </div>
                        <div className="row mb-20">
                            <div className="col-sm-6">
                                <img src="../../img/org/dashboard_5.png"/>
                            </div>
                        </div>
                    </div>
                    <div>

                        <div className="mb-20">
                            <div className="panel panel-info">
                                <div className="panel-heading">待处理订单</div>
                                <div className="panel-body">
                                    <table className="table table-hover">
                                        <thead>
                                        <tr>
                                            <th>订单号</th>
                                            <th>服务对象</th>
                                            <th>金额</th>
                                            <th>状态</th>
                                            <th>操作</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <OrderItem/>
                                        <OrderItem/>
                                        <OrderItem/>
                                        <OrderItem/>
                                        <OrderItem/>
                                        </tbody>
                                    </table>
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

var OrderItem = React.createClass({
    render: function () {
        return (
            <tr>
                <td>
                    2016010118000001
                </td>
                <td>xxx 股份有限公司</td>
                <td>2000</td>
                <td>已下单</td>
                <td><a href="order_detail.html">查看详细</a></td>
            </tr>
        );
    }
});

ReactDOM.render(
    <Dashboard />,
    document.getElementById('page')
);