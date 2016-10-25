var Coupon = React.createClass({
    render: function () {
        return (
            <div>
                <Top/>
                <Header activeMenuID="mainMenuCoupon"/>

                <div className="container">

                    <div>
                        <div className="pull-left w-222">
                            <div className="list-group">
                                <a href="coupon.html" className="list-group-item active">服务券汇总</a>
                                <a href="coupon_running.html" className="list-group-item">服务券流水</a>
                            </div>
                        </div>

                        <div className="ml-240">
                            <ol className="breadcrumb">
                                <li>您所在的位置：</li>
                                <li><a href="dashboard.html">企业机构</a></li>
                                <li><a href="company.html">服务券</a></li>
                                <li className='active'>服务券汇总</li>
                            </ol>
                            <div className="panel panel-default">
                                <div className="panel-heading">服务券汇总</div>
                                <div className="panel-body">
                                    {
                                        //<div className="alert alert-warning">
                                        //    2017年度服务券开始发放，请立即提交
                                        //    <a href="company.html">
                                        //        <stong>企业审核</stong>
                                        //    </a>，
                                        //    审核通过即发放服务券。
                                        //</div>
                                    }
                                    <div className="row text-center">
                                        <div className="col-sm-6">
                                            <img src="../../img/coupon/coupon.png"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <img src="../../img/coupon/coupon-1.png"/>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <h2>本年度申请&nbsp;批次：A2017</h2>

                                        <p>开始时间：2016-01-01&nbsp;&nbsp;结束时间：2016-06-01</p>

                                        <p>倒计时：100天</p>

                                        <button className="btn btn-warning">申请／申请中</button>
                                        <hr/>
                                        <h2>本批次：A2017</h2>

                                        <p>全网服务券实时统计</p>
                                    </div>
                                    <div className="statistics-wrap">
                                        <div className="col-sm-4 text-center">
                                            <div className="mini-stat clearfix bx-shadow bg-info">
                                                <span className="mini-stat-icon">
                                                    <i className="fa fa-money" aria-hidden="true"></i>
                                                </span>
                                                <div className="mini-stat-info text-right">
                                                    <span className="counter">324.1780&nbsp;
                                                        万元</span>
                                                    剩余总额
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 text-center">
                                            <div className="mini-stat clearfix bx-shadow bg-purple">
                                                <span className="mini-stat-icon">
                                                    <i className="fa fa-money" aria-hidden="true"></i>
                                                </span>
                                                <div className="mini-stat-info text-right">
                                                    <span className="counter">324.1780&nbsp;
                                                        万元</span>
                                                    交易总额
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 text-center">
                                            <div className="mini-stat clearfix bx-shadow bg-success">
                                                <span className="mini-stat-icon">
                                                    <i className="fa fa-money" aria-hidden="true"></i>
                                                </span>
                                                <div className="mini-stat-info text-right">
                                                    <span className="counter">324.1780&nbsp;
                                                        万元</span>
                                                    兑付总额
                                                </div>
                                            </div>
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

ReactDOM.render(
    <Coupon />,
    document.getElementById('page')
);