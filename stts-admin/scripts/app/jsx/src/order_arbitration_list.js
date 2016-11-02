var CouponList = React.createClass({

    render: function () {
        return (
            <div>
                <Top/>
                <Header activeMenuID="mainMenuOrder"/>

                <div className="container">
                    <div>
                        <div className="pull-left w-222">
                            <div className="list-group">
                                <a href="order_list.html" className="list-group-item">全部订单</a>
                                <a href="order_arbitration_list.html" className="list-group-item active">仲裁一览</a>
                            </div>
                        </div>

                        <div className="ml-240 overflow-hidden ">
                            <ol className="breadcrumb">
                                <li>您所在的位置：</li>
                                <li><a href="order_list.html">订单管理</a></li>
                                <li className='active'>仲裁一览</li>
                            </ol>

                            <SearchArea/>

                            <div className="sort-row overflow-hidden">
                                <div className="sort-inner">
                                    <ul className="sorts">
                                        <li className="sort active"><a href="#">默认</a></li>
                                        <li className="sort"><a href="#">申请仲裁时间</a></li>
                                        <li className="sort"><a href="#">申请退券额</a></li>
                                        <li className="sort"><a href="#">服务分类</a></li>
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


var SearchArea = React.createClass({
    handleCondition: function () {
        var $moreConditionWrap = $("#moreConditionWrap");
        if ($moreConditionWrap.is(":visible")) {
            $("#moreConditionWrap").hide(500);
            $("#btnCondition").text("更多筛选条件");
        } else {
            $("#moreConditionWrap").show(500);
            $("#btnCondition").text("收起筛选条件");
        }
    },
    render: function () {
        return (
            <div className="panel panel-default overflow-hidden">
                <div className="panel-body">
                    <div className="form-inline mb-10">
                        <div className="form-group">
                            <label>订单号</label> &nbsp;
                            <input type="text" className="form-control"/>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="form-group">
                            <label>申请仲裁时间</label>&nbsp;
                            <select className="form-control">
                                <option>1个月</option>
                                <option>3个月</option>
                                <option>全部</option>
                            </select>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button type="button" className="btn btn-default">搜&nbsp;索</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a id="btnCondition" className="btn" onClick={this.handleCondition}>更多筛选条件
                        </a>
                    </div>
                    <div id="moreConditionWrap" style={{display: "none"}}
                         className="form-horizontal overflow-hidden font-size-12">
                        <hr/>
                        <div className="row">
                            <div className="form-group col-sm-4">
                                <label className="control-label col-sm-5">服务名称</label>

                                <div className="col-sm-7">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group col-sm-4">
                                <label className="control-label col-sm-5">状态</label>

                                <div className="col-sm-7">
                                    <select className="form-control">
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group col-sm-4">
                                <label className="control-label col-sm-5">价格范围：</label>

                                <div className=" col-sm-7">
                                    <div className="input-group input-group">
                                        <input type="text" className="form-control"/>
                                        <span className="input-group-btn text-center font-size-12 width-10">-</span>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-sm-4">
                                <label className="control-label col-sm-5">买家名称（企业）</label>

                                <div className=" col-sm-7">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group col-sm-4">
                                <label className="control-label col-sm-5">卖家名称（服务机构）</label>

                                <div className=" col-sm-7">
                                    <div className="input-group input-group">
                                        <input type="text" className="form-control"/>
                                        <span className="input-group-btn text-center font-size-12 width-10">-</span>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-sm-4">
                                <label className="control-label col-sm-5">申请仲裁时间范围：</label>

                                <div className=" col-sm-7">
                                    <div className="input-group input-group">
                                        <input type="text" className="form-control"/>
                                        <span className="input-group-btn text-center font-size-12 width-10">-</span>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-sm btn-default">
                                清空条件
                            </button>
                            &nbsp;&nbsp;
                            <button className=" btn btn-sm btn-primary">
                                <span className="fa fa-search"></span>&nbsp;搜索
                            </button>
                        </div>
                    </div>
                </div>
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
                <th>订单号</th>
                <th>服务名称</th>
                <th>状态</th>
                <th>实际价格</th>
                <th>已支付券额</th>
                <th>申请退券额</th>
                <th>买家（企业）</th>
                <th>申请原因分类</th>
                <th>卖家（服务机构）</th>
                <th>拒绝原因分类</th>
                <th>申请仲裁时间</th>
                <th>操作</th>
            </tr>
        );
    }
});

var TableItem = React.createClass({
    render: function () {
        return (
            <tr>
                <td>201601010001</td>
                <td>xxxxx1</td>
                <td>退券仲裁中</td>
                <td>1000元</td>
                <td>500元</td>
                <td>500元</td>
                <td>XXXXXX</td>
                <td>误操作</td>
                <td>XXXXXX</td>
                <td>已产生成本</td>
                <td>2016-10-01 10:20:30</td>
                <td><a href="order_arbitration.html">详细</a></td>
            </tr>
        );
    }
});
ReactDOM.render(
    <CouponList />,
    document.getElementById('page')
);