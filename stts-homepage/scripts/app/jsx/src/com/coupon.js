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
                                    <div className="alert alert-warning">
                                        2017年度服务券开始发放，请立即提交
                                        <a href="company.html"><stong>企业审核</stong></a>，
                                        审核通过即发放服务券。
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-sm-6">
                                            <img src="../../img/coupon/coupon.png"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <img src="../../img/coupon/coupon-1.png"/>
                                        </div>
                                    </div>
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
    <Coupon />,
    document.getElementById('page')
);