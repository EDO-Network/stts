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
                                <li className='active'>在库服务券一览</li>
                            </ol>

                            <div className="panel panel-default overflow-hidden">
                                <div className="panel-body">
                                    <div className="form-inline">
                                        <div className="form-group">
                                            <label className="control-label">
                                                批次
                                            </label>&nbsp;&nbsp;&nbsp;&nbsp;

                                            <select className="form-control">
                                                <option>2016</option>
                                                <option>2015</option>
                                                <option>2014</option>
                                            </select>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button className=" btn btn-primary btn-sm">
                                                <span className="fa fa-search"></span>&nbsp;搜索
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="sort-row overflow-hidden">
                                <div className="sort-inner">
                                    <ul className="sorts">
                                        <li className="sort active"><a href="#">默认</a></li>
                                        <li className="sort"><a href="#">批次</a></li>
                                        <li className="sort"><a href="#">发放日期</a></li>
                                        <li className="sort"><a href="#">发放额度</a></li>
                                    </ul>
                                </div>
                            </div>

                            <TableInfo/>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>

        );
    }
});
var TableInfo = React.createClass({
    render: function () {
        return (
            <div>
                <table className="table table-hover font-size-12">
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

var TableHeader = React.createClass({
    render: function () {
        return (
            <tr>
                <th>批次</th>
                <th>发放日期</th>
                <th>使用有效期</th>
                <th>兑付有效期</th>
                <th>说明</th>
                <th>发放总额</th>
                <th>余额</th>
                <th>失效金额</th>
                <th>已使用金额</th>
                <th>未兑付金额</th>
                <th>操作</th>
            </tr>
        );
    }
});

var TableItem = React.createClass({
    render: function () {
        return (
            <tr>
                <td>A2015NO2</td>
                <td>2016-01-01</td>
                <td>2016-06-01~
                    2016-12-31
                </td>
                <td>2016-06-01~
                    2016-12-31
                </td>
                <td>2015年度服务券统一
                    回收后补充发放
                </td>
                <td>5000万</td>
                <td>3000万</td>
                <td>0万</td>
                <td>2000万</td>
                <td>500万</td>
                <td><a href="coupon_detail.html">详细</a></td>
            </tr>
        );
    }
});
ReactDOM.render(
    <CouponList />,
    document.getElementById('page')
);