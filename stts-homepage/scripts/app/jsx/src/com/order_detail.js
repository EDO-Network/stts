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
                                <li className='active'>订单号：201601010001</li>
                            </ol>
                            <div className="panel panel-default">
                                <div className="panel-heading">订单详细</div>
                                <div className="panel-body">
                                    <Order isEvaluateEditor="true"/>
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
        var evaluateWidget = <OrderEvaluateView/>;
        if (this.props.isEvaluateEditor == "true") {
            evaluateWidget = <OrderEvaluateEditor/>;
        }
        return (
            <div>
                <PayCouponModal/>
                <OrderFeedbackDialog/>
                <OrderProcess step="1"/>

                <h3>等待服务机构受理中，倒计时还剩 5天。</h3>

                <div className="text-center mb-10">
                    <button className="btn btn-default">交易撤消</button>&nbsp;&nbsp;
                    <button className="btn btn-default" data-toggle="modal"
                            data-target="#orderFeedbackDialog">退单</button>&nbsp;&nbsp;
                    <button className="btn btn-default">退单撤消</button>
                    &nbsp;&nbsp;
                    <button className="btn btn-default" data-toggle="modal"
                            data-target="#payCouponModal">付券</button>
                    &nbsp;&nbsp;
                    <button className="btn btn-default">确认完成</button>
                    &nbsp;&nbsp;
                    <button className="btn btn-default">评价</button>
                </div>
                <div className="panel panel-info">
                    <div className="panel-heading">
                        订单信息&nbsp;&nbsp;订单号：201601011800001&nbsp;&nbsp;状态：申请服务&nbsp;&nbsp;
                        <a href="order_arbitration.html" className="pull-right">查看退单信息</a>
                    </div>
                    <div className="panel-body">
                        <div className="col-sm-4">
                            <p>服务产品名：<a href="#">xxx 服务（快照）</a></p>

                            <p>申请时间：2016-01-01 18:00:00</p>

                            <p>附加条款：XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                        </div>
                        <div className="col-sm-4">
                            <p>服务分类：人才引培-高层培训</p>

                            <p>服务周期：2016-06-05 ～ 2016-09-30</p>

                            <p>附件：<img src="#"/>&nbsp;<img src="#"/>&nbsp;<img src="#"/></p>

                        </div>
                        <div className="col-sm-4">
                            <p>实际费用：10000 元</p>

                            <p>已支付服务券：3000 元</p>

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
                                <p>类型：股份制企业</p>

                                <p>联系电话：1234323456</p>
                            </div>
                            <div className="col-sm-3">
                                <p>负责人：金喜善</p>
                            </div>
                        </div>
                    </div>
                </div>
                {evaluateWidget}
            </div>
        );
    }
});

var OrderEvaluateEditor = React.createClass({
    render: function () {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">互评信息</div>
                <div className="panel-body">
                    <div className="text-left">
                        <div className="row">
                            <div className="col-sm-6">
                                <h3>对服务机构的评价</h3>

                                <EvaluateStars title="机构综合评分："/>

                                <EvaluateStars title="服务态度：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"/>

                                <EvaluateStars title="专业水平：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"/>

                                <EvaluateStars title="描述是否相等："/>

                            </div>
                            <div className="col-sm-6">
                                <h3>对企业的评价</h3>

                                <EvaluateStars title="企业综合评分："/>
                                <EvaluateStars title="付款是否及时："/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <p>说明：<textarea className="form-control" rows="5"></textarea></p>

                                <div>
                                    <button className="btn btn-default">提交</button>
                                </div>
                            </div>
                            <div className="col-sm-6">

                                <p>说明：
                                    <textarea className="form-control" rows="5"></textarea></p>

                                <div>
                                    <button className="btn btn-default">提交</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var OrderEvaluateView = React.createClass({
    render: function () {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">互评信息</div>
                <div className="panel-body">
                    <div className="text-left">
                        <div className="row">
                            <div className="col-sm-6">
                                <h3>对服务机构的评价</h3>

                                <p>机构综合评分：
                                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                </p>

                                <p>服务态度：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                </p>

                                <p>专业水平：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                </p>

                                <p>描述是否相等：
                                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                </p>

                            </div>
                            <div className="col-sm-6">
                                <h3>对企业的评价</h3>

                                <p>企业综合评分：
                                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                </p>

                                <p>付款是否及时：
                                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <p>说明：本次服务非常满意</p></div>
                            <div className="col-sm-6">
                                <p>说明：本次服务非常满意</p></div>

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