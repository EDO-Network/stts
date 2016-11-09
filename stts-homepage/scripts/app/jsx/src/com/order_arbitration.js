var OrderDetail = React.createClass({
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
                                <li><a href="order_detail.html">订单详细</a></li>
                                <li className='active'>退单订单号：201601010001</li>
                            </ol>
                            <div className="panel panel-default">
                                <div className="panel-heading">退单详细</div>
                                <div className="panel-body">
                                    <Order/>
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

var Order = React.createClass({
    render: function () {
        return (
            <div>
                <OrderFeedbackDialog/>
                <OrderProcess step="1"/>

                <h3>等待服务机构受理中，倒计时还剩 5天。</h3>

                <div className="text-center mb-10">
                    <button className="btn btn-default" data-toggle="modal"
                            data-target="#orderFeedbackDialog">退单</button>
                    &nbsp;&nbsp;
                    <button className="btn btn-default">撤消退单</button>
                </div>
                <div className="panel panel-info">
                    <div className="panel-heading">
                        订单基本信息
                    </div>
                    <div className="panel-body">
                        <div>
                            <div className="col-sm-4">
                                <p>订单号：<a href="#">201601011800001</a></p>
                            </div>
                            <div className="col-sm-4">
                                <p>状态：退单申请中</p>
                            </div>
                        </div>
                        <div>
                            <div className="col-sm-4">
                                <p>服务产品名：<a href="#">xxx 服务（快照）</a></p>
                            </div>
                            <div className="col-sm-4">
                                <p>实际费用：10000 元</p>
                            </div>
                            <div className="col-sm-4">
                                <p>已支付服务券：3000 元</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel panel-info">
                    <div className="panel-heading">买家（企业）</div>
                    <div className="panel-body">
                        <div>
                            <div className="col-sm-6">
                                <p>申请时间：2016-06-01 18:00:00</p>
                            </div>
                            <div className="col-sm-6">
                                <p>理由分类：误操作</p>
                            </div>
                        </div>
                        <div>
                            <div className="col-sm-6">
                                <p>补充说明：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                    xxxxxxxxxxxxxxxxx
                                    xxxxxxxxxxxxxxxxxxxxxxx</p>
                            </div>
                            <div className="col-sm-6">
                                <p>证据照片：<img src="#"/>&nbsp;<img src="#"/>&nbsp;<img src="#"/>&nbsp;
                                    <a className="btn">上传证据图片</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel panel-info">
                    <div className="panel-heading">卖家（服务机构）</div>
                    <div className="panel-body">
                        <div>
                            <div className="col-sm-6">
                                <p>受理时间：2016-06-01 18:00:00</p>
                            </div>
                            <div className="col-sm-6">
                                <p>受理分类：同意</p>
                            </div>
                        </div>
                        <div>
                            <div className="col-sm-6">
                                <p>受理补充说明：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                    xxxxxxxxxxxxxxxxx
                                    xxxxxxxxxxxxxxxxxxxxxxx</p>
                            </div>
                            <div className="col-sm-6">
                                <p>证据照片：<img src="#"/>&nbsp;<img src="#"/>&nbsp;<img src="#"/>&nbsp;
                                    <a className="btn">上传证据图片</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel panel-info">
                    <div className="panel-heading">仲裁方（运营机构）</div>
                    <div className="panel-body">
                        <p>仲裁时间：2016-06-01 18:00:00</p>
                        <p>仲裁分类：支持退单</p>
                        <p>仲裁补充说明：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            xxxxxxxxxxxxxxxxx
                            xxxxxxxxxxxxxxxxxxxxxxx</p>
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