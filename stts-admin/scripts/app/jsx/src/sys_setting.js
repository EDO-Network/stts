var CouponList = React.createClass({

    render: function () {
        return (
            <div>
                <Top/>
                <Header activeMenuID="mainMenuSetting"/>

                <div className="container">
                    <div>
                        <div className="pull-left w-222">
                            <div className="list-group">
                                <a href="sys_setting.html" className="list-group-item active">系统设定</a>
                            </div>
                        </div>

                        <div className="ml-240 overflow-hidden ">
                            <ol className="breadcrumb">
                                <li>您所在的位置：</li>
                                <li><a href="sys_setting.html">系统设定</a></li>
                                <li className='active'>系统设定</li>
                            </ol>

                            <div className="panel panel-default overflow-hidden">
                                <div className="panel-heading">系统设定</div>
                                <div className="panel-body">
                                    <table className="table table-bordered mb-20">
                                        <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>设置项目名</th>
                                            <th>当前设定值</th>
                                            <th>变更后设定值</th>
                                            <th>上次修改时间</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th>1</th>
                                            <td>订单受理时限</td>
                                            <td>3天</td>
                                            <td><input type="text" defaultValue="5"/></td>
                                            <td>2016-10-01 16:44:00</td>
                                        </tr>
                                        <tr>
                                            <th>2</th>
                                            <td>交易时限</td>
                                            <td>不限</td>
                                            <td><input type="text"/></td>
                                            <td>2016-10-01 16:44:00</td>
                                        </tr>
                                        <tr>
                                            <th>3</th>
                                            <td>评价时限</td>
                                            <td>7天</td>
                                            <td><input type="text"/></td>
                                            <td>2016-10-01 16:44:00</td>
                                        </tr>
                                        <tr>
                                            <th>4</th>
                                            <td>小微企业服务券支付比例</td>
                                            <td>50%</td>
                                            <td><input type="text"/></td>
                                            <td>2016-10-01 16:44:00</td>
                                        </tr>
                                        <tr>
                                            <th>5</th>
                                            <td>小微企业服务券最大发放额</td>
                                            <td>5000元</td>
                                            <td><input type="text"/></td>
                                            <td>2016-10-01 16:44:00</td>
                                        </tr>
                                        <tr>
                                            <th>6</th>
                                            <td>小升规企业服务券最大发放额</td>
                                            <td>10000元</td>
                                            <td><input type="text"/></td>
                                            <td>2016-10-01 16:44:00</td>
                                        </tr>
                                        <tr>
                                            <th>7</th>
                                            <td>XXXX</td>
                                            <td>XXXX</td>
                                            <td><input type="text"/></td>
                                            <td>2016-10-01 16:44:00</td>
                                        </tr>
                                        <tr>
                                            <th>8</th>
                                            <td>XXXX</td>
                                            <td>XXXX</td>
                                            <td><input type="text"/></td>
                                            <td>2016-10-01 16:44:00</td>
                                        </tr>
                                        <tr>
                                            <th>9</th>
                                            <td>XXXX</td>
                                            <td>XXXX</td>
                                            <td><input type="text"/></td>
                                            <td>2016-10-01 16:44:00</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div className="text-center">
                                        <button type="button" className="btn btn-primary">提交</button>
                                        &nbsp;&nbsp;
                                        <button type="button" className="btn btn-default">返回</button>
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
    <CouponList />,
    document.getElementById('page')
);