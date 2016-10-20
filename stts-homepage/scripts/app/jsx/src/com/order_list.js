var OrderList = React.createClass({
    handleCondition: function () {
        var $moreConditionWrap = $("#moreConditionWrap");
        if ($moreConditionWrap.is(":visible")) {
            $("#moreConditionWrap").hide(1000);
            $("#btnCondition").text("更多筛选条件");
        } else {
            $("#moreConditionWrap").show(1000);
            $("#btnCondition").text("收起筛选条件");
        }
    },
    render: function () {
        return (
            <div>
                <Top/>
                <Header activeMenuID="mainMenuOrder"/>

                <div className="container">

                    <div>
                        <div className="pull-left w-222">
                            <div className="list-group">
                                <a href="order_list.html" className="list-group-item active">全部订单</a>
                                <a href="order_list.html" className="list-group-item">待受理</a>
                                <a href="order_list.html" className="list-group-item">待评价</a>
                                <a href="order_list.html" className="list-group-item">已完成</a>
                                <a href="order_list.html" className="list-group-item">退款中</a>
                            </div>
                        </div>

                        <div className="ml-240">
                            <ol className="breadcrumb">
                                <li>您所在的位置：</li>
                                <li><a href="dashboard.html">企业机构</a></li>
                                <li><a href="order_list.html">我的订单</a></li>
                                <li className='active'>订单一览</li>
                            </ol>
                            <div className="panel panel-default">
                                <div className="panel-heading">订单一览</div>
                                <div className="panel-body">
                                    <div className="row overflow-hidden mb-10">
                                        <div className="col-sm-6">
                                            <div className="input-group">
                                                <input type="text" className="form-control"/>
                                              <span className="input-group-btn">
                                                <button className="btn btn-default" type="button">搜&nbsp;索</button>
                                              </span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <button id="btnCondition" className="btn btn-default"
                                                    onClick={this.handleCondition}>更多筛选条件
                                            </button>
                                        </div>
                                    </div>
                                    <div id="moreConditionWrap" style={{display:"none"}}
                                         className="form-horizontal overflow-hidden">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <div className="control-label col-sm-4">
                                                        <label>大分类</label>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <select className="form-control">
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <div className="control-label col-sm-4">
                                                        <label>小分类</label>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <select className="form-control">
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <div className="control-label col-sm-4">
                                                        <label>服务机构</label>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <div className="control-label col-sm-4">
                                                        <label>评价状态</label>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <select className="form-control">
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <div className="control-label col-sm-4">
                                                        <label>交易状态</label>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <select className="form-control">
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <div className="control-label col-sm-4">
                                                        <label>订单时间</label>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <select className="form-control">
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <div className="control-label col-sm-4">
                                                        <label>下单时间</label>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <div className="input-group">
                                                            <input type="text" className="form-control"/>
                                                        <span
                                                            className="input-group-addon bg-clear border-clear">~</span>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <div className="control-label col-sm-4">
                                                        <label>成交时间</label>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <div className="input-group">
                                                            <input type="text" className="form-control"/>
                                                        <span
                                                            className="input-group-addon bg-clear border-clear">~</span>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sm-4">
                                                <button type="button" className="btn btn-default">搜&nbsp;索</button>
                                            </div>
                                        </div>
                                    </div>
                                    <OrderItem/>
                                    <OrderItem/>
                                    <OrderItem/>
                                    <OrderItem/>
                                    <OrderItem/>
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

var OrderItem = React.createClass({
    render: function () {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">2016-01-01 18:00:00&nbsp;&nbsp;订单号：201601010001</div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-sm-2">
                            <img src="../../img/sample/service_small.jpg"/>
                        </div>
                        <div className="col-sm-3 border-right-dotted">
                            <div><a href="#">财务审计</a></div>
                            <br/>
                            <div><a href="#">中国出口信用保险公司</a></div>
                        </div>
                        <div className="col-sm-2 border-right-dotted">
                            <div>总金额：2000元</div>
                            <br/>
                            <div>服务券：1000元</div>
                        </div>
                        <div className="col-sm-2">
                            <div>状态：服务中</div>
                            <br/>
                            <div>倒计时：5天</div>
                        </div>
                        <div className="col-sm-3 border-left-dotted">
                            <div><a href="#">取消</a> | <a href="#">确认</a></div>
                            <br/>
                            <div><a href="#">退款</a> | <a href="order_detail.html">详细</a></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <OrderList />,
    document.getElementById('page')
);