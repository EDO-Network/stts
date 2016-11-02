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
                                <a href="coupon_list.html" className="list-group-item">服务券一览</a>
                                <a href="coupon_create.html" className="list-group-item">服务券发放</a>
                                <a href="coupon_exchange.html" className="list-group-item active">服务券兑付审核</a>
                            </div>
                        </div>

                        <div className="ml-240 overflow-hidden ">
                            <ol className="breadcrumb">
                                <li>您所在的位置：</li>
                                <li><a href="coupon_list.html">服务券管理</a></li>
                                <li className='active'>服务券兑付审核</li>
                            </ol>

                            <SearchArea/>

                            <div className="sort-row overflow-hidden">
                                <div className="sort-inner">
                                    <ul className="sorts">
                                        <li className="sort active"><a href="#">默认</a></li>
                                        <li className="sort"><a href="#">兑付申请时间</a></li>
                                        <li className="sort"><a href="#">服务机构</a></li>
                                        <li className="sort"><a href="#">服务标签</a></li>
                                        <li className="sort"><a href="#">券额</a></li>
                                        <li className="sort"><a href="#">状态</a></li>
                                    </ul>

                                    <div className="sort-style">
                                        <button className="btn btn-default">导出</button>
                                        &nbsp;&nbsp;
                                        <button className="btn btn-default">导出并报审批</button>
                                    </div>
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
                            <label>兑付申请时间</label> &nbsp;
                            <select className="form-control">
                                <option>1个月</option>
                                <option>3个月</option>
                                <option>全部</option>
                            </select>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="form-group">
                            <label>状态</label>&nbsp;
                            <select className="form-control">
                                <option>待兑付</option>
                                <option>已兑付</option>
                            </select>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button type="button" className="btn btn-default">搜&nbsp;索</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a id="btnCondition" className="btn" onClick={this.handleCondition}>更多筛选条件
                        </a>
                    </div>
                    <div id="moreConditionWrap" style={{display: "none"}}
                         className="form-horizontal overflow-hidden">
                        <hr/>
                        <div className="row">
                            <div className="form-group col-sm-6">
                                <label className="control-label col-sm-4">服务大类</label>

                                <div className="col-sm-8">
                                    <select className="form-control">
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group col-sm-6">
                                <label className="control-label col-sm-4">服务小类</label>

                                <div className="col-sm-8">
                                    <select className="form-control">
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-sm-6">
                                <label className="control-label col-sm-4">兑付申请期间</label>

                                <div className=" col-sm-8">
                                    <div className="input-group input-group">
                                        <input type="text" className="form-control"/>
                                        <span className="input-group-btn text-center font-size-12 width-10">-</span>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-sm-6">
                                <label className="control-label col-sm-4">服务机构名称</label>

                                <div className=" col-sm-8">
                                    <input type="text" className="form-control"/>
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
                <th>#</th>
                <th>兑付申请时间</th>
                <th>服务机构</th>
                <th>服务名称</th>
                <th>发票预览</th>
                <th>服务标签</th>
                <th>满意度</th>
                <th>批次</th>
                <th>券额</th>
                <th>成交金额</th>
                <th>关联订单号</th>
                <th>状态</th>
            </tr>
        );
    }
});

var TableItem = React.createClass({
    render: function () {
        return (
            <tr>
                <td>
                    <input type="checkbox"/>
                </td>
                <td>2016-01-01 18:00</td>
                <td>xx服务公司</td>
                <td>系统检测</td>
                <td><img src="#"/></td>
                <td>人才引培-高层培训</td>
                <td><div className="text-danger">

                    <span className="fa fa-star"/><span className="fa fa-star"/>
                    <span className="fa fa-star"/><span className="fa fa-star"/>
                    <span className="fa fa-star"/>
                </div></td>
                <td>2016批次</td>
                <td>2000元</td>
                <td>2000元</td>
                <td><a href="order_detail.html">20160601001</a></td>
                <td>待兑付</td>
            </tr>
        );
    }
});
ReactDOM.render(
    <CouponList />,
    document.getElementById('page')
);