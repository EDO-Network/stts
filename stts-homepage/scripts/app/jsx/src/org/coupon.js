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
                                <a href="coupon.html" className="list-group-item active">帐户统计</a>
                                <a href="coupon_list.html" className="list-group-item ">服务券一览</a>
                                <a href="coupon_excharge.html" className="list-group-item ">服务券兑付</a>
                            </div>
                        </div>

                        <div className="ml-240 overflow-hidden ">
                            <ol className="breadcrumb">
                                <li>您所在的位置：</li>
                                <li><a href="dashboard.html">服务机构</a></li>
                                <li><a href="service_list.html">服务券帐户</a></li>
                                <li className='active'>帐户统计</li>
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
                                        <img src="../../img/org/dashboard_6.png"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <img src="../../img/org/dashboard_4.png"/>
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
    <Coupon/>,
    document.getElementById('page')
);