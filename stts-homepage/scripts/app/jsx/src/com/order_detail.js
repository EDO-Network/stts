var OrderDetail = React.createClass({
    render: function () {
        return (
            <div>
                <Top/>
                <Header activeMenuID="mainMenuOrder"/>

                <div className="container">
                    <ol className="breadcrumb">
                        <li>您所在的位置：</li>
                        <li><a href="dashboard.html">企业机构</a></li>
                        <li><a href="order_list.html">我的订单</a></li>
                        <li className='active'>订单号：201601010001</li>
                    </ol>

                    <div>
                        <div className="pull-left w-222">
                            <div className="list-group">
                                <a href="order_list.html" className="list-group-item">全部订单</a>
                                <a href="order_list.html" className="list-group-item">待受理</a>
                                <a href="order_list.html" className="list-group-item">待评价</a>
                                <a href="order_list.html" className="list-group-item">已完成</a>
                                <a href="order_list.html" className="list-group-item">退款中</a>
                            </div>
                        </div>

                        <div className="ml-240">
                            <div className="panel panel-default">
                                <div className="panel-heading">服务券汇总</div>
                                <div className="panel-body">
                                    <Order/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var Order = React.createClass({
    render: function () {
        return (
            <div>
                <div className="order-process">
                    <div>
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                    <div>
                        <i className="fa fa-legal" aria-hidden="true"></i>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                    <div>
                        <i className="fa fa-credit-card" aria-hidden="true"></i>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                    <div>
                        <i className="fa fa-commenting" aria-hidden="true"></i>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                    <div>
                        <i className="fa fa-check-square" aria-hidden="true"></i>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="panel panel-info">
                    <div className="panel-heading">订单信息</div>
                    <div className="panel-body">
                        <div className="col-sm-4">
                            <p>服务产品：<a href="#">财务审计（快照）</a></p>

                            <p>申请时间：2016-01-01 18:00:00</p>

                            <p>服务周期：2016-06-05 ～ 2016-09-30</p>
                        </div>
                        <div className="col-sm-4">
                            <p>服务价格：1.2 万元</p>

                            <p>实际费用：10000 元</p>

                            <p>服务券额：3000 元</p>
                        </div>
                        <div className="col-sm-4">
                            <p>状态：待受理</p>

                            <p><a href="#">阅览合同</a></p>
                        </div>
                    </div>
                </div>
                <div className="panel panel-info">
                    <div className="panel-heading">企业信息</div>
                    <div className="panel-body">
                        <div>
                            <div className="col-sm-6">
                                <p>企业名称：<a href="#">宁波睿智信息技术有限公司（快照）</a></p>

                                <p>企业留言：
                                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                    xxxxxxxxxxxxxxxxx
                                    xxxxxxxxxxxxxxxxxxxxxxx</p>
                            </div>
                            <div className="col-sm-3">
                                <p>联系人：王睿智</p>
                            </div>
                            <div className="col-sm-3">
                                <p>联系电话：1234323456</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel panel-info">
                    <div className="panel-heading">服务机构信息</div>
                    <div className="panel-body">
                        <div>
                            <div className="col-sm-6">
                                <p>服务机构：<a href="#">中国出口信用保险公司（快照）</a></p>

                                <p>处理人员：赵四喜</p>

                                <p>服务机构留言：
                                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                    xxxxxxxxxxxxxxxxx
                                    xxxxxxxxxxxxxxxxxxxxxxx</p>
                            </div>
                            <div className="col-sm-3">
                                <p>类型：小升规</p>

                                <p>负责人：金喜善</p>
                            </div>
                            <div className="col-sm-3">
                                <p>联系电话：1234323456</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel panel-info">
                    <div className="panel-heading">服务机构信息</div>
                    <div className="panel-body">
                        <div>
                            <div className="col-sm-6">
                                <p>服务机构：<a href="#">中国出口信用保险公司（快照）</a></p>

                                <p>处理人员：赵四喜</p>

                                <p>服务机构留言：
                                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                    xxxxxxxxxxxxxxxxx
                                    xxxxxxxxxxxxxxxxxxxxxxx</p>
                            </div>
                            <div className="col-sm-3">
                                <p>类型：小升规</p>

                                <p>负责人：金喜善</p>
                            </div>
                            <div className="col-sm-3">
                                <p>联系电话：1234323456</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel panel-info">
                    <div className="panel-heading">互评信息</div>
                    <div className="panel-body">
                        <div className="text-left">
                            <div className="col-sm-6">
                                <h3>对服务机构的评价</h3>

                                <p>综合评价：
                                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                                </p>

                                <p>服务态度：
                                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                                </p>

                                <p>专业水平：
                                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                                </p>

                                <p>描述属实：
                                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                                </p>

                                <p>补充说明：xxxxxxxxxxxxxxxxxxxxxxx</p>
                            </div>
                            <div className="col-sm-6">
                                <h3>对企业的评价</h3>

                                <p>综合评价：
                                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                                </p>

                                <p>付款及时：
                                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                                </p>

                                <p>补充说明：xxxxxxxxxxxxxxxxxxxxxxx</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <OrderDetail />,
    document.getElementById('page')
);