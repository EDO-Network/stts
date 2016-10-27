var CouponExcharge = React.createClass({

    render: function () {
        return (
            <div>
                <Top/>
                <Header activeMenuID="mainMenuCoupon"/>

                <div className="container">
                    <div>
                        <div className="pull-left w-222">
                            <div className="list-group">
                                <a href="coupon.html" className="list-group-item ">帐户统计</a>
                                <a href="coupon_list.html" className="list-group-item ">服务券一览</a>
                                <a href="coupon_excharge.html" className="list-group-item active">服务券兑付</a>
                            </div>
                        </div>

                        <div className="ml-240 overflow-hidden ">
                            <ol className="breadcrumb">
                                <li>您所在的位置：</li>
                                <li><a href="dashboard.html">服务机构</a></li>
                                <li><a href="service_list.html">服务券帐户</a></li>
                                <li className='active'>服务券兑付</li>
                            </ol>


                            <div className="col-sm-12">
                                <div className="col-sm-4">
                                    <button className="btn btn-info btn-sm w-100 mr-10" data-toggle="modal" data-target="#addModal">
                                        <span className="fa fa-ticket mr-10"></span>兑付申请
                                    </button>

                                </div>
                                <div className="col-sm-8 text-right text-pink">
                                    <span className="fa fa-exclamation"></span> 必须包括服务券和现金发票
                                    </div>
                                </div>
                            <TableInfo/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
});
var TableItem = React.createClass({
    render: function () {
        return (
            <tr>
                <td><input type="checkbox"/></td>
                <td><a href="#">20160601001</a></td>
                <td>2016-01-01</td>
                <td>系统检测</td>
                <td>检验检测认证</td>
                <td>国际认证</td>
                <td>2016批次</td>
                <td>xxx企业</td>
                <td><a href="#">上传</a></td>
                <td>2000</td>
            </tr>
        );
    }
});
var TableHeader = React.createClass({
    render: function () {
        return (
            <tr>
                <th></th>
                <th>关联订单号</th>
                <th>下单日期</th>
                <th>服务名称</th>
                <th>服务大类</th>
                <th>服务小类</th>
                <th>批次</th>
                <th>企业名称</th>
                <th>发票</th>
                <th>券额</th>
            </tr>
        );
    }
});
var TableInfo = React.createClass({
    render: function () {
        return (
            <div className="mt-20 col-sm-12">
                <table className="table table-hover">
                    <thead>
                    <TableHeader/>
                    </thead>
                    <tbody>
                    <TableItem/>
                    <TableItem/>
                    <TableItem/>
                    <TableItem/>
                    <TableItem/>
                    <TableItem/>
                    </tbody>
                </table>
                <Paging/>
            </div>
        );
    }
});

ReactDOM.render(
    <CouponExcharge/>,
    document.getElementById('page')
);