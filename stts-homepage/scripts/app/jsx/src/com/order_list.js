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
                                    <div className="form-inline mb-10">
                                        <div className="form-group">
                                            <label>服务名称</label> &nbsp;
                                            <input type="text" className="form-control"/>
                                        </div>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <div className="form-group">
                                            <label>订单时间</label>&nbsp;
                                            <select className="form-control">
                                                <option>1个月</option>
                                            </select>
                                        </div>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <button type="button" className="btn btn-default">搜&nbsp;索</button>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <a id="btnCondition" className="btn" onClick={this.handleCondition}>更多筛选条件
                                        </a>
                                    </div>
                                    <div id="moreConditionWrap" style={{display:"none"}}
                                         className="form-horizontal overflow-hidden">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <div className="control-label col-sm-4">
                                                        <label>服务大类</label>
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
                                                        <label>服务小类</label>
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
                                                        <label>交易状态</label>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <select className="form-control">
                                                            <option></option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sm-4">
                                                <button type="button" className="btn btn-default">搜&nbsp;索</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sort-row overflow-hidden">
                                        <div className="sort-inner">
                                            <ul className="sorts">
                                                <li className="sort active"><a href="#">默认</a></li>
                                                <li className="sort"><a href="#">订单时间</a></li>
                                                <li className="sort"><a href="#">服务分类</a></li>
                                                <li className="sort"><a href="#">价格</a></li>
                                            </ul>
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

                <Footer/>
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
                        <div className="col-sm-4 border-right-dotted">
                            <div className="col-sm-6">
                                <img src="../../img/sample/service_small.jpg"/>
                            </div>
                            <div className="col-sm-6">
                                <div><a href="#">服务名称</a></div>
                                <br/>

                                <div><a href="#">服务机构名称</a></div>
                            </div>
                        </div>
                        <div className="col-sm-2 border-right-dotted">
                            <div>成交金额：2000元</div>
                            <br/>

                            <div>已付服务券：1000元</div>
                        </div>
                        <div className="col-sm-2 border-right-dotted">
                            <div>状态：服务中</div>
                            <br/>

                            <div>人才引培-高层培训</div>
                        </div>
                        <div className="col-sm-2">
                            <div>服务联系人：李蓉</div>
                            <br/>

                            <div>服务联系电话：89991234</div>
                        </div>
                        <div className="col-sm-2 border-left-dotted">
                            <div><a href="#">交易撤消/退券/退券撤消/退单/退单撤消</a> | <a href="#">付券</a></div>
                            <br/>

                            <div><a href="#">确认完成</a> | <a href="#">评价</a> | <a href="order_detail.html">详细</a></div>
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