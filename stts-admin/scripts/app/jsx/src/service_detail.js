var ServiceDetail = React.createClass({
    render: function () {
        return (
            <div>
                <Top isLogin="true"/>
                <Header activeMenuID="mainMenuService"/>

                <div className="container">
                    <div className="pull-left w-222">
                        <OrgCard/>
                    </div>
                    <div className="ml-240">
                        <ol className="breadcrumb">
                            <li>您所在的位置：</li>
                            <li><a href="index.html">首页</a></li>
                            <li><a href="service_list.html">服务产品</a></li>
                            <li className='active'>服务详细</li>
                        </ol>
                        <ServiceSummary/>
                        <ServiceContent/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
});

var ServiceSummary = React.createClass({
    render: function () {
        return (
            <div>
                <p className="col-sm-12 font-size-24 font-weight-600">财务审计</p>

                <div>
                    <div className="col-sm-4">
                        <p>所属分类：解决方案</p>

                        <p>服务价格：1～2万元</p>

                        <p>服务方式：电话服务，上门服务，网络服务</p>

                        <p>累计评价：
                            <i className="fa fa-star text-danger" aria-hidden="true"></i>
                            <i className="fa fa-star text-danger" aria-hidden="true"></i>
                            <i className="fa fa-star text-danger" aria-hidden="true"></i>
                            <i className="fa fa-star text-danger" aria-hidden="true"></i>
                            <i className="fa fa-star text-danger" aria-hidden="true"></i>
                        </p>
                    </div>
                    <div className="col-sm-4">
                        <p>服务对象：微型企业，小型企业</p>

                        <p>收费标准：按年收费</p>

                        <p>申请次数：20次</p>

                        <p>发布时间：2016-07-07</p>
                    </div>
                    <div className="col-sm-4">
                        <br/>
                        <br/>
                        <br/>
                        <a href="service_order.html" className="btn btn-warning btn-lg btn-block">立即下单</a>
                    </div>
                </div>
            </div>
        );
    }
});

var ServiceContent = React.createClass({
    render: function () {
        return (
            <div className="col-sm-12">
                <ul className="nav nav-tabs login-tabs" role="tablist">
                    <li role="presentation" className="active"><a href="#desc" role="tab" data-toggle="tab">服务介绍</a>
                    </li>
                    <li role="presentation"><a href="#anylize" role="tab" data-toggle="tab">服务分析</a></li>
                    <li role="presentation"><a href="#evaluate" role="tab" data-toggle="tab">累计评价</a></li>
                    <li role="presentation"><a href="#record" role="tab" data-toggle="tab">服务记录</a></li>
                    <li role="presentation"><a href="#contact" role="tab" data-toggle="tab">联系方式</a></li>
                </ul>

                <div className="tab-content login-frame">
                    <div role="tabpanel" className="tab-pane active" id="desc">
                        <p className="text-center">
                            <img src="../img/sample/service_desc.png"/>
                        </p>
                        <p>
                            xxxxxxxxxxxxxxxxxxxx
                        </p>
                        <p>
                            xxxxxxxxxxxxxxxxxxxx
                        </p>
                        <p>
                            xxxxxxxxxxxxxxxxxxxx
                        </p>
                        <div className="panel panel-default">
                            <div className="panel-heading">相关服务</div>
                            <div className="panel-body">
                                <img src="../img/sample/service_small.jpg"/>&nbsp;&nbsp;
                                <img src="../img/sample/service_small.jpg"/>&nbsp;&nbsp;
                                <img src="../img/sample/service_small.jpg"/>&nbsp;&nbsp;
                                <img src="../img/sample/service_small.jpg"/>&nbsp;&nbsp;
                                <img src="../img/sample/service_small.jpg"/>
                            </div>
                        </div>
                    </div>

                    <div role="tabpanel" className="tab-pane" id="anylize">
                        <div className="row">
                            <div className="col-sm-6">
                                <img src="../img/service_detail/anylize_1.png"/>
                            </div>
                            <div className="col-sm-6">
                                <img src="../img/service_detail/anylize_2.png"/>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-sm-6">
                                <img src="../img/service_detail/anylize_3.png"/>
                            </div>
                        </div>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="evaluate">
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>评价星级</th>
                                <th>评价内容</th>
                                <th>评价企业</th>
                            </tr>
                            </thead>
                            <tbody>
                                <EvaluateItem/>
                                <EvaluateItem/>
                                <EvaluateItem/>
                                <EvaluateItem/>
                                <EvaluateItem/>
                            </tbody>
                        </table>
                        <Paging/>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="record">
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>买家</th>
                                <th>服务名称</th>
                                <th>分类</th>
                                <th>价格</th>
                                <th>成交时间</th>
                                <th>状态</th>
                            </tr>
                            </thead>
                            <tbody>
                            <RecordItem/>
                            <RecordItem/>
                            <RecordItem/>
                            <RecordItem/>
                            <RecordItem/>
                            </tbody>
                        </table>
                        <Paging/>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="contact">
                        <Contact/>
                    </div>
                </div>
            </div>
        );
    }
});

var EvaluateItem = React.createClass({
    render: function () {
        return (
            <tr>
                <td>
                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                    <i className="fa fa-star text-danger" aria-hidden="true"></i>
                </td>
                <td>服务非常到位，细致周到</td>
                <td>xxx企业</td>
            </tr>
        );
    }
});

var RecordItem = React.createClass({
    render: function () {
        return (
            <tr>
                <td>xxx企业</td>
                <td>xxx服务</td>
                <td>线上</td>
                <td>10000</td>
                <td>2016-01-01</td>
                <td>已完成</td>
            </tr>
        );
    }
});

var Contact = React.createClass({
    render: function () {
        return (
            <div className="alert alert-warning" role="alert">
                <h2>宁波市xxx信息服务机构</h2>
                <h2>联系人：张一山</h2>
                <h2>联系电话：12387645362</h2>
                <h2>联系邮箱：xxx@163.com</h2>
            </div>
        );
    }
});


ReactDOM.render(
    <ServiceDetail />,
    document.getElementById('page')
);