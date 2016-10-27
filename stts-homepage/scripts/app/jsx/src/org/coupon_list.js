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
                                <a href="coupon.html" className="list-group-item ">帐户统计</a>
                                <a href="coupon_list.html" className="list-group-item active">服务券一览</a>
                                <a href="coupon_excharge.html" className="list-group-item">服务券兑付</a>
                            </div>
                        </div>

                        <div className="ml-240 overflow-hidden ">
                            <ol className="breadcrumb">
                                <li>您所在的位置：</li>
                                <li><a href="dashboard.html">服务机构</a></li>
                                <li><a href="service_list.html">服务券帐户</a></li>
                                <li className='active'>服务券一览</li>
                            </ol>


                            <div className="panel panel-default overflow-hidden">
                                <div className="panel-body">
                                    <div className="form-horizontal">

                                        <div className="row">
                                            <div className=" col-sm-5 form-group form-inline">
                                                <label className="control-label col-sm-4">
                                                    结算状态
                                                </label>

                                                <div className="col-sm-8">
                                                    <div className="checkbox mr-10">
                                                        <label>
                                                            <input type="checkbox"/> 未兑付
                                                        </label>
                                                    </div>

                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox"/> 已兑付
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=" col-sm-7 form-group-sm form-inline ">
                                                <label className="control-label col-sm-3">
                                                    期间
                                                </label>

                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control  input-sm"/>
                                                    <span className="w-50 text-center"> ~ </span>
                                                    <input type="text" className="form-control  input-sm"/>
                                                </div>
                                            </div>
                                            <div className="row ">
                                                <div className="col-sm-6 col-sm-offset-3">
                                                    <div className="col-sm-4">
                                                        <button className="btn btn-sm btn-default col-sm-12">
                                                            <span className="fa fa-clear"></span>&nbsp;清空条件
                                                        </button>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <button className=" btn btn-sm btn-primary col-sm-12">
                                                            <span className="fa fa-search"></span>&nbsp;搜索
                                                        </button>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <button className=" btn btn-sm btn-warning col-sm-12">
                                                            <span className="fa fa-file-text-o"></span>&nbsp;导出
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                <td><a href="#">20160601001</a></td>
                <td>2016-01-01</td>
                <td>系统检测</td>
                <td>检验检测认证</td>
                <td>国际认证</td>
                <td>2016批次</td>
                <td>xxx企业</td>
                <td>2000</td>
                <td>3000</td>
                <td>已兑付</td>
                <td><a href="#">查看</a></td>
            </tr>
        );
    }
});
var TableHeader = React.createClass({
    render: function () {
        return (
            <tr>
                <th>关联订单号</th>
                <th>下单日期</th>
                <th>服务名称</th>
                <th>服务大分类</th>
                <th>服务小分类</th>
                <th>批次</th>
                <th>企业名称</th>
                <th>券额</th>
                <th>金额</th>
                <th>兑付状态</th>
                <th>发票</th>
            </tr>
        );
    }
});
var TableInfo = React.createClass({
    render: function () {
        return (
            <div className="mt-20">
                <table className="table table-hover">
                    <thead>
                    <TableHeader/>
                    </thead>
                    <tbody>
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
    <CouponList />,
    document.getElementById('page')
);