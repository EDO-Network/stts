var CouponList = React.createClass({

    render: function () {
        return (
            <div>
                <Top/>
                <Header activeMenuID="mainMenuCoupon"/>

                <div className="container">
                    <div>
                        <div className="pull-left w-222">
                            <div className="list-group">
                                <a href="coupon_list.html" className="list-group-item active">服务券一览</a>
                                <a href="coupon_create.html" className="list-group-item">服务券发放</a>
                                <a href="coupon_exchange.html" className="list-group-item">服务券兑付审核</a>
                            </div>
                        </div>

                        <div className="ml-240 overflow-hidden ">
                            <ol className="breadcrumb">
                                <li>您所在的位置：</li>
                                <li><a href="coupon_list.html">服务券管理</a></li>
                                <li><a href="coupon_list.html">在库服务券一览</a></li>
                                <li className='active'>服务券详细</li>
                            </ol>

                            <div className="panel panel-default overflow-hidden">
                                <div className="panel-heading">服务券详细</div>
                                <div className="panel-body">
                                    <h2 className="text-center">批次：A1600</h2>

                                    <p>发放日期：2016-10-01 10:00:26</p>

                                    <p>使用有效期：2016-10-01 ~ 2016-10-01</p>

                                    <p>兑付有效期：2016-10-01 ~ 2016-10-01</p>

                                    <p className="text-info">说明：2015年度服务券统一回收后补充发放</p>

                                    <SummaryTable/>
                                    <DetailTable/>
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

var SummaryTable = React.createClass({

    render: function () {
        return (
            <div className="mb-20">
                <div className="text-right">单位：元</div>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>汇总</th>
                        <th>发放总额</th>
                        <th>已使用</th>
                        <th>已兑付</th>
                        <th>未兑付</th>
                        <th>使用失效</th>
                        <th>兑付失效</th>
                        <th>余额</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>金额</th>
                        <td>5000</td>
                        <td>3000</td>
                        <td>1000</td>
                        <td>2000</td>
                        <td>200</td>
                        <td>200</td>
                        <td>500</td>
                    </tr>
                    </tbody>
                </table>
            </div>

        );
    }
});

var DetailTable = React.createClass({

    render: function () {
        return (
            <div>
                <div className="text-right">单位：元</div>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>分类</th>
                        <th>分配额</th>
                        <th>已使用</th>
                        <th>已兑付</th>
                        <th>未兑付</th>
                        <th>余额</th>
                        <th>配额调整</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>人才引培</th>
                        <td>500</td>
                        <td>200</td>
                        <td>100</td>
                        <td>100</td>
                        <td>300</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <th>技术创新</th>
                        <td>500</td>
                        <td>200</td>
                        <td>100</td>
                        <td>100</td>
                        <td>300</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <th>财务指导</th>
                        <td>500</td>
                        <td>200</td>
                        <td>100</td>
                        <td>100</td>
                        <td>300</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <th>法律维权</th>
                        <td>500</td>
                        <td>200</td>
                        <td>100</td>
                        <td>100</td>
                        <td>300</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <th>市场拓展</th>
                        <td>500</td>
                        <td>200</td>
                        <td>100</td>
                        <td>100</td>
                        <td>300</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <th>管理咨询</th>
                        <td>500</td>
                        <td>200</td>
                        <td>100</td>
                        <td>100</td>
                        <td>300</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <th>检验检测认证</th>
                        <td>500</td>
                        <td>200</td>
                        <td>100</td>
                        <td>100</td>
                        <td>300</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <th>知识产权保护</th>
                        <td>500</td>
                        <td>200</td>
                        <td>100</td>
                        <td>100</td>
                        <td>300</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <th>创业辅导</th>
                        <td>500</td>
                        <td>200</td>
                        <td>100</td>
                        <td>100</td>
                        <td>300</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <th>公共服务</th>
                        <td>500</td>
                        <td>200</td>
                        <td>100</td>
                        <td>100</td>
                        <td>300</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <th>其他</th>
                        <td>500</td>
                        <td>200</td>
                        <td>100</td>
                        <td>100</td>
                        <td>300</td>
                        <td><input type="text"/></td>
                    </tr>
                    </tbody>
                </table>
                <div className="text-right text-danger">目前剩余配额值：5000元</div>
                <div className="text-center">
                    <button type="button" className="btn btn-primary">立即调整</button>
                </div>
            </div>

        );
    }
});

ReactDOM.render(
    <CouponList />,
    document.getElementById('page')
);