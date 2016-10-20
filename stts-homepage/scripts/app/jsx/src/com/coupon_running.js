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
                                <a href="coupon.html" className="list-group-item">服务券汇总</a>
                                <a href="coupon_running.html" className="list-group-item active">服务券流水</a>
                            </div>
                        </div>

                        <div className="ml-240">
                            <ol className="breadcrumb">
                                <li>您所在的位置：</li>
                                <li><a href="dashboard.html">企业机构</a></li>
                                <li><a href="company.html">服务券</a></li>
                                <li className='active'>服务券流水</li>
                            </ol>
                            <div className="panel panel-default">
                                <div className="panel-heading">服务券流水</div>
                                <div className="panel-body">
                                    <div className="row form-horizontal">
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <div className="control-label col-sm-4">
                                                    <label>时间</label>
                                                </div>
                                                <div className="col-sm-8">
                                                    <select className="form-control">
                                                        <option>全部</option>
                                                        <option>1年以内</option>
                                                        <option>2年以内</option>
                                                        <option>3年以内</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <div className="control-label col-sm-4">
                                                    <label>流向</label>
                                                </div>
                                                <div className="col-sm-8">
                                                    <select className="form-control">
                                                        <option>全部</option>
                                                        <option>收入</option>
                                                        <option>支出</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <div className="control-label col-sm-4">
                                                    <label>金额</label>
                                                </div>

                                                <div className="col-sm-8">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control"/>
                                                        <span
                                                            className="input-group-addon bg-clear border-clear">~</span>
                                                        <input type="text" className="form-control"/>
                                                        <span
                                                            className="input-group-addon bg-clear border-clear">元</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-2">
                                            <button type="button" className="btn btn-default">搜&nbsp;索</button>
                                        </div>
                                    </div>
                                    <table className="table table-hover">
                                        <thead>
                                        <tr>
                                            <th>日期</th>
                                            <th>批次</th>
                                            <th>收入</th>
                                            <th>支出</th>
                                            <th>说明</th>
                                            <th>关联订单号</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>2016-10-01</td>
                                            <td>2016-1</td>
                                            <td></td>
                                            <td>1000</td>
                                            <td>购买服务</td>
                                            <td><a href="javascript:void(0)">201610010001</a></td>
                                        </tr>
                                        <tr>
                                            <td>2016-09-01</td>
                                            <td>2016-1</td>
                                            <td></td>
                                            <td>1000</td>
                                            <td>购买服务</td>
                                            <td><a href="javascript:void(0)">201610010001</a></td>
                                        </tr>
                                        <tr>
                                            <td>2016-09-01</td>
                                            <td>2016-1</td>
                                            <td></td>
                                            <td>1000</td>
                                            <td>购买服务</td>
                                            <td><a href="javascript:void(0)">201610010001</a></td>
                                        </tr>
                                        <tr>
                                            <td>2016-09-01</td>
                                            <td>2016-1</td>
                                            <td></td>
                                            <td>1000</td>
                                            <td>购买服务</td>
                                            <td><a href="javascript:void(0)">201610010001</a></td>
                                        </tr>
                                        <tr>
                                            <td>2016-09-01</td>
                                            <td>2016-1</td>
                                            <td></td>
                                            <td>1000</td>
                                            <td>购买服务</td>
                                            <td><a href="javascript:void(0)">201610010001</a></td>
                                        </tr>
                                        <tr>
                                            <td>2016-09-01</td>
                                            <td>2016-1</td>
                                            <td></td>
                                            <td>1000</td>
                                            <td>购买服务</td>
                                            <td><a href="javascript:void(0)">201610010001</a></td>
                                        </tr>
                                        <tr>
                                            <td>2016-09-01</td>
                                            <td>2016-1</td>
                                            <td></td>
                                            <td>1000</td>
                                            <td>购买服务</td>
                                            <td><a href="javascript:void(0)">201610010001</a></td>
                                        </tr>
                                        <tr>
                                            <td>2016-09-01</td>
                                            <td>2016-1</td>
                                            <td></td>
                                            <td>1000</td>
                                            <td>购买服务</td>
                                            <td><a href="javascript:void(0)">201610010001</a></td>
                                        </tr>
                                        <tr>
                                            <td>2016-09-01</td>
                                            <td>2016-1</td>
                                            <td></td>
                                            <td>1000</td>
                                            <td>购买服务</td>
                                            <td><a href="javascript:void(0)">201610010001</a></td>
                                        </tr>
                                        <tr>
                                            <td>2016-01-01</td>
                                            <td>2016-1</td>
                                            <td>1000</td>
                                            <td></td>
                                            <td>系统发放服务券</td>
                                            <td><a href="javascript:void(0)"></a></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <Paging/>
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