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
                                <a href="order_arbitration_list.html" className="list-group-item">仲裁一览</a>
                            </div>
                        </div>

                        <div className="ml-240">
                            <ol className="breadcrumb">
                                <li>您所在的位置：</li>
                                <li><a href="order_list.html">订单管理</a></li>
                                <li className='active'>订单一览</li>
                            </ol>
                            <div className="panel panel-default">
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
                                         className="form-horizontal overflow-hidden font-size-12">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <div className="control-label col-sm-4">
                                                        <label>企业名称</label>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
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
                                        </div>
                                        <div className="row">
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
                                                <div className="form-group">
                                                    <div className="control-label col-sm-4">
                                                        <label>订单状态</label>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <select className="form-control">
                                                            <option></option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <div className="control-label col-sm-4">
                                                        <label>订单时间范围</label>
                                                    </div>
                                                    <div className=" col-sm-8">
                                                        <div className="input-group input-group">
                                                            <input type="text" className="form-control"/>
                                                            <span
                                                                className="input-group-btn text-center font-size-12 width-10">-</span>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <div className="control-label col-sm-4">
                                                        <label>成交时间范围</label>
                                                    </div>

                                                    <div className=" col-sm-8">
                                                        <div className="input-group input-group">
                                                            <input type="text" className="form-control"/>
                                                        <span
                                                            className="input-group-btn text-center font-size-12 width-10">-</span>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center mb-20">
                                            <button className="btn btn-sm btn-default">
                                                清空条件
                                            </button>
                                            &nbsp;&nbsp;
                                            <button className=" btn btn-sm btn-primary">
                                                <span className="fa fa-search"></span>&nbsp;搜索
                                            </button>
                                            &nbsp;&nbsp;
                                            <button className=" btn btn-sm btn-warning">
                                                <span className="fa fa-file-text-o"></span>&nbsp;导出
                                            </button>
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
                        <div className="col-sm-2 border-right-dotted">
                            <img src="../img/sample/service_small.jpg"/>
                        </div>
                        <div className="col-sm-2 border-right-dotted h-80">
                            <div><a href="#">服务名称</a></div>
                            <br/>
                            <div><a href="#">企业名称</a></div>
                        </div>
                        <div className="col-sm-3 border-right-dotted h-80">
                            <div>成交金额：2000元</div>
                            <div>已付服务券：1000元</div>
                        </div>
                        <div className="col-sm-2 border-right-dotted h-80">
                            <div>状态：服务中</div>
                            <div>人才引培-高层培训</div>
                        </div>
                        <div className="col-sm-2 border-right-dotted h-80">
                            <div>服务联系人：李蓉</div>
                            <div>服务联系电话：89991234</div>
                        </div>
                        <div className="col-sm-1 h-80">
                            <br/>
                            <a href="order_detail.html">详细</a>
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