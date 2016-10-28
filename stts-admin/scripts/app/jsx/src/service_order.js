var ServiceOrder = React.createClass({
    render: function () {
        return (
            <div>
                <Top isLogin="true"/>
                <Header activeMenuID="mainMenuService"/>

                <div className="container">

                    <div>
                        {
                            //<div className="pull-left w-222">
                            //    <OrgCard/>
                            //</div>
                        }
                        {
                            //<div className="ml-240">
                        }
                        <ol className="breadcrumb">
                            <li>您所在的位置：</li>
                            <li><a href="index.html">首页</a></li>
                            <li><a href="service_list.html">服务产品</a></li>
                            <li><a href="service_detail.html">服务详细</a></li>
                            <li className='active'>服务购买</li>
                        </ol>
                        <div className="panel panel-default">
                            <div className="panel-heading">订单详细</div>
                            <div className="panel-body">
                                <Order/>
                            </div>
                        </div>
                        {
                            //</div>
                        }
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
                <OrderProcess step="0"/>

                <div className="panel panel-info">
                    <div className="panel-heading">订单信息</div>
                    <div className="panel-body">
                        <div className="col-sm-4">
                            <p>服务机构名：宁波xxx信息服务机构</p>

                            <p>服务产品名：<a href="service_detail.html">xxxx服务</a></p>
                        </div>
                        <div className="col-sm-4">
                            <p>服务价格：1.2 万元</p>

                            <p>收费标准：1.2 万 元/年</p>
                        </div>
                        <div className="col-sm-4">
                            <p>状态：申请服务</p>

                            <p>申请时间：2016-01-01 18:00:00</p>
                        </div>
                    </div>
                </div>
                <div className="panel panel-info">
                    <div className="panel-heading">服务申请人信息</div>
                    <div className="panel-body">
                        <div className="form-horizontal">
                            <div className="form-group">
                                <div className="col-sm-2">
                                    <label>企业名</label>
                                </div>
                                <div className="col-sm-4">
                                    <a href="#">宁波xxx信息服务机构</a>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-2 pt-7">
                                    <label>联系人</label>
                                </div>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" defaultValue="王睿智"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-2 pt-7">
                                    <label>联系电话</label>
                                </div>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" defaultValue="12376565435"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-2 pt-7">
                                    <label>提出金额</label>
                                </div>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-2 pt-7">
                                </div>
                                <div className="col-sm-10">
                                    服务价格：1～5000元&nbsp;&nbsp;目前服务券余额：5千元&nbsp;&nbsp;批次：2016年度
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-2">
                                    <label>企业留言</label>
                                </div>
                                <div className="col-sm-8">
                                    <textarea className="form-control" rows="5"></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-2">
                                    <label>附加条款</label>
                                </div>
                                <div className="col-sm-8">
                                    <textarea className="form-control" rows="5"></textarea>
                                </div>
                                <div className="col-sm-2">
                                    <a href="#">阅览合同</a>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-2">
                                    <label>上传附件</label>
                                </div>
                                <div className="col-sm-8">
                                    <img src="#"/>&nbsp;&nbsp;
                                    <img src="#"/>&nbsp;&nbsp;
                                    <img src="#"/>&nbsp;&nbsp;
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-2">
                                </div>
                                <div className="col-sm-8">
                                    <a href="#" className="btn">上传附件</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-center">
                    <a href="com/order_detail.html" className="btn btn-primary">申请&amp;签署合同</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="button" className="btn btn-default">返回</a>
                </p>
            </div>
        );
    }
});

ReactDOM.render(
    <ServiceOrder />,
    document.getElementById('page')
);