var OrgDetail = React.createClass({
    render: function () {
        return (
            <div>
                <Top isLogin="true"/>
                <Header activeMenuID="mainMenuOrg"/>

                <div className="container">

                    <div className="org-title-wrap">
                        <div className="org-title">宁波xxx信息服务机构</div>
                        <ul className="nav nav-tabs" role="tablist">
                            <li role="presentation" className="active"><a href="#desc" role="tab"
                                                                          data-toggle="tab">机构首页</a>
                            </li>
                            <li role="presentation"><a href="#anylize" role="tab" data-toggle="tab">机构详情</a></li>
                            <li role="presentation"><a href="#evaluate" role="tab" data-toggle="tab">服务项目</a></li>
                            <li role="presentation"><a href="#record" role="tab" data-toggle="tab">成功案例</a></li>
                        </ul>
                    </div>
                    <div className="clearfix">
                        <div className="pull-left w-222">
                            <OrgCard/>
                            <EvaluateStatistics/>
                            <OrderStatistics/>
                        </div>
                        <div className="ml-240">
                            <OrgContent/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
});

var OrgCard = React.createClass({
    render: function () {
        return (

            <div className="panel panel-info">
                <div className="panel-heading">服务机构名片</div>
                <div className="panel-body">
                    <p><img className="w-per-100" src="../img/sample/org_preview.png"/></p>

                    <p>好评率：
                        <i className="fa fa-star text-danger" aria-hidden="true"></i>
                        <i className="fa fa-star text-danger" aria-hidden="true"></i>
                        <i className="fa fa-star text-danger" aria-hidden="true"></i>
                        <i className="fa fa-star text-danger" aria-hidden="true"></i>
                        <i className="fa fa-star text-danger" aria-hidden="true"></i>
                    </p>

                    <p>认证信息：<span className="label label-success">已认证</span></p>

                    <p>年审记录：2016年度通过</p>

                    <p>警告记录：
                        <span className="label label-danger">1</span>&nbsp;&nbsp;
                        <span className="label label-warning">2</span>&nbsp;&nbsp;
                        <span className="label label-info">3</span>
                    </p>

                    <p>联系地址：宁波市海曙区中山东路145号</p>
                </div>
            </div>
        );
    }
});

var EvaluateStatistics = React.createClass({
    render: function () {
        return (

            <div className="panel panel-info">
                <div className="panel-heading">机构一年内评分动态</div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-sm-6">
                            <i className="fa fa-star text-danger" aria-hidden="true"></i>
                            <i className="fa fa-star text-danger" aria-hidden="true"></i>
                            <i className="fa fa-star text-danger" aria-hidden="true"></i>
                            <i className="fa fa-star text-danger" aria-hidden="true"></i>
                            <i className="fa fa-star text-danger" aria-hidden="true"></i>
                        </div>
                        <div className="col-sm-6">
                            5.0分 共4人
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <i className="fa fa-star text-danger" aria-hidden="true"></i>
                            <i className="fa fa-star text-danger" aria-hidden="true"></i>
                            <i className="fa fa-star text-danger" aria-hidden="true"></i>
                            <i className="fa fa-star text-danger" aria-hidden="true"></i>
                            <i className="fa fa-star text-danger" aria-hidden="true"></i>
                        </div>
                        <div className="col-sm-6">
                            5分 共1人
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <i className="fa fa-star text-danger" aria-hidden="true"></i>
                            <i className="fa fa-star text-danger" aria-hidden="true"></i>
                            <i className="fa fa-star text-danger" aria-hidden="true"></i>
                            <i className="fa fa-star text-danger" aria-hidden="true"></i>
                            <i className="fa fa-star text-mute" aria-hidden="true"></i>
                        </div>
                        <div className="col-sm-6">
                            4分 共1人
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <i className="fa fa-star text-danger" aria-hidden="true"></i>
                            <i className="fa fa-star text-danger" aria-hidden="true"></i>
                            <i className="fa fa-star text-danger" aria-hidden="true"></i>
                            <i className="fa fa-star text-mute" aria-hidden="true"></i>
                            <i className="fa fa-star text-mute" aria-hidden="true"></i>
                        </div>
                        <div className="col-sm-6">
                            3分 共1人
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <i className="fa fa-star text-danger" aria-hidden="true"></i>
                            <i className="fa fa-star text-danger" aria-hidden="true"></i>
                            <i className="fa fa-star text-mute" aria-hidden="true"></i>
                            <i className="fa fa-star text-mute" aria-hidden="true"></i>
                            <i className="fa fa-star text-mute" aria-hidden="true"></i>
                        </div>
                        <div className="col-sm-6">
                            2分 共1人
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <i className="fa fa-star text-danger" aria-hidden="true"></i>
                            <i className="fa fa-star text-mute" aria-hidden="true"></i>
                            <i className="fa fa-star text-mute" aria-hidden="true"></i>
                            <i className="fa fa-star text-mute" aria-hidden="true"></i>
                            <i className="fa fa-star text-mute" aria-hidden="true"></i>
                        </div>
                        <div className="col-sm-6">
                            1分 共0人
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var OrderStatistics = React.createClass({
    render: function () {
        return (

            <div className="panel panel-info">
                <div className="panel-heading">一年内交易统计</div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-sm-6">
                            交易成功
                        </div>
                        <div className="col-sm-6">
                            10笔
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            交易中止
                        </div>
                        <div className="col-sm-6">
                            4笔
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            交易中
                        </div>
                        <div className="col-sm-6">
                            4笔
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var OrgContent = React.createClass({
    render: function () {
        return (
            <div className="tab-content overflow-hidden">
                <div role="tabpanel" className="tab-pane active" id="desc">
                    <div className="panel panel-default">
                        <div className="panel-heading">机构简介</div>
                        <div className="panel-body">

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
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            最新服务
                            <a className="pull-right" href="javascript:void(0)">
                                <span>更多</span>&nbsp;&gt;&gt;
                            </a>
                        </div>
                        <div className="panel-body">
                            <ServiceItem/>
                            <ServiceItem/>
                        </div>
                    </div>

                    <div className="panel panel-default">
                        <div className="panel-heading">来自企业的评价
                        </div>
                        <div className="panel-body">
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th>评分</th>
                                    <th>价格</th>
                                    <th>服务项目</th>
                                    <th>评论内容</th>
                                    <th>评论企业</th>
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
                        </div>
                    </div>


                </div>

                <div role="tabpanel" className="tab-pane" id="anylize">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            机构介绍
                            <a className="btn pull-right" onClick={this.handleCondition}>点击折叠
                            </a>
                        </div>
                        <div className="panel-body">
                            <p>
                                xxxxxxxxxxxxxxxxxxxx
                            </p>

                            <p>
                                xxxxxxxxxxxxxxxxxxxx
                            </p>

                            <p>
                                xxxxxxxxxxxxxxxxxxxx
                            </p>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            专业资质情况
                            <a className="btn pull-right" onClick={this.handleCondition}>点击折叠
                            </a>
                        </div>
                        <div className="panel-body">
                            <p>
                                xxxxxxxxxxxxxxxxxxxx
                            </p>

                            <p>
                                xxxxxxxxxxxxxxxxxxxx
                            </p>

                            <p>
                                xxxxxxxxxxxxxxxxxxxx
                            </p>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            人员素质构成情况
                            <a className="btn pull-right" onClick={this.handleCondition}>点击折叠
                            </a>
                        </div>
                        <div className="panel-body">
                            <p>
                                xxxxxxxxxxxxxxxxxxxx
                            </p>

                            <p>
                                xxxxxxxxxxxxxxxxxxxx
                            </p>

                            <p>
                                xxxxxxxxxxxxxxxxxxxx
                            </p>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            主要服务设备及条件
                            <a className="btn pull-right" onClick={this.handleCondition}>点击折叠
                            </a>
                        </div>
                        <div className="panel-body">
                            <p>
                                xxxxxxxxxxxxxxxxxxxx
                            </p>

                            <p>
                                xxxxxxxxxxxxxxxxxxxx
                            </p>

                            <p>
                                xxxxxxxxxxxxxxxxxxxx
                            </p>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            服务资质及荣誉
                            <a className="btn pull-right" onClick={this.handleCondition}>点击折叠
                            </a>
                        </div>
                        <div className="panel-body">
                            <p>
                                xxxxxxxxxxxxxxxxxxxx
                            </p>

                            <p>
                                xxxxxxxxxxxxxxxxxxxx
                            </p>

                            <p>
                                xxxxxxxxxxxxxxxxxxxx
                            </p>
                        </div>
                    </div>
                </div>
                <div role="tabpanel" className="tab-pane" id="evaluate">
                    <ServiceSearchArea/>
                    <div className="sort-row overflow-hidden">
                        <div className="sort-inner">
                            <ul className="sorts">
                                <li className="sort active"><a href="#">默认</a></li>
                                <li className="sort"><a href="#">申请次数</a></li>
                                <li className="sort"><a href="#">好评率</a></li>
                                <li className="sort"><a href="#">价格</a></li>
                            </ul>
                        </div>
                    </div>
                    <ServiceItemPreview/>
                    <ServiceItemPreview/>
                    <ServiceItemPreview/>
                    <ServiceItemPreview/>
                    <ServiceItemPreview/>
                    <Paging/>
                </div>
                <div role="tabpanel" className="tab-pane" id="record">
                    <div className="panel panel-default">
                        <div className="panel-heading">成功案例</div>
                        <div className="panel-body">
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th>服务时间</th>
                                    <th>企业名称</th>
                                    <th>服务项目</th>
                                    <th>标签</th>
                                    <th>价格</th>
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
                    </div>
                </div>
            </div>
        );
    }
});


var ServiceSearchArea = React.createClass({
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
                            <label>服务名称</label> &nbsp;
                            <input type="text" className="form-control"/>
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
                                <label className="control-label col-sm-4">服务大类</label>

                                <div className=" col-sm-8">
                                    <select className="form-control input-sm">
                                        <option></option>
                                        <option>分类1</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group col-sm-4">
                                <label className="control-label col-sm-4 pl-0">服务小类</label>

                                <div className=" col-sm-8">
                                    <select className="form-control input-sm">
                                        <option></option>
                                        <option>分类1</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group col-sm-4">
                                <label className="control-label col-sm-4">价格范围</label>

                                <div className=" col-sm-8 ">
                                    <div className="input-group input-group-sm">

                                        <input type="text" className="form-control input-sm text-right"
                                               defaultValue="100"/>

                                        <span className="input-group-btn text-center font-size-12 width-10">-</span>


                                        <input type="text" className="form-control input-sm text-right"
                                               defaultValue="500"/>
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

var ServiceItem = React.createClass({
    render: function () {
        return (
            <div className="overflow-hidden border-bottom-dotted mb-10 pv-10">
                <div className="col-sm-3 border-right-dotted">
                    <div><a href="service_detail.html">服务名称</a></div>
                    <div><a href="org_detail.html">机构名称</a></div>
                </div>
                <div className="col-sm-6 border-right-dotted">
                    <div>服务分类：信用征集和评价</div>
                    <div>服务费用：小型、微型企业（无论新评还是续评）2000元</div>
                </div>
                <div className="col-sm-3">
                    <div>申请次数：14次</div>
                    <div>好评率：
                        <i className="fa fa-star text-danger font-size-12" aria-hidden="true"></i>
                        <i className="fa fa-star text-danger font-size-12" aria-hidden="true"></i>
                        <i className="fa fa-star text-danger font-size-12" aria-hidden="true"></i>
                        <i className="fa fa-star text-danger font-size-12" aria-hidden="true"></i>
                        <i className="fa fa-star text-danger font-size-12" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        );
    }
});


var ServiceItemPreview = React.createClass({
    render: function () {
        return (
            <div className="overflow-hidden border-bottom-dotted mb-10 pv-10">
                <div className="col-sm-4 border-right-dotted">
                    <div className="col-sm-4">
                        <a href="service_detail.html">
                            <img src="../img/sample/service_small.jpg"/>
                        </a>
                    </div>
                    <div className="col-sm-8">
                        <div><a href="service_detail.html">高管培训</a></div>
                        <br/>

                        <div><a href="#">中国出口信用保险公司</a></div>
                    </div>
                </div>
                <div className="col-sm-3 border-right-dotted">
                    <div>服务大类：人才引培</div>
                    <br/>

                    <div>服务小类：高层培训</div>
                </div>
                <div className="col-sm-3 border-right-dotted">
                    <div>服务价格：2000～5000元</div>
                    <br/>

                    <div>收费标准：每月3000元</div>
                </div>
                <div className="col-sm-2">
                    <div>好评率：
                        <i className="fa fa-star text-danger font-size-12" aria-hidden="true"></i>
                        <i className="fa fa-star text-danger font-size-12" aria-hidden="true"></i>
                        <i className="fa fa-star text-danger font-size-12" aria-hidden="true"></i>
                        <i className="fa fa-star text-danger font-size-12" aria-hidden="true"></i>
                        <i className="fa fa-star text-danger font-size-12" aria-hidden="true"></i>
                    </div>
                    <br/>

                    <div>申请次数：14次</div>
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
                <td>2000元</td>
                <td>服务名称xxxxx</td>
                <td>服务非常到位，细致周到</td>
                <td>xxx 股份有限公司</td>
            </tr>
        );
    }
});

var RecordItem = React.createClass({
    render: function () {
        return (
            <tr>
                <td>2016-01-01～2016-01-10</td>
                <td>xxx 科技有限公司</td>
                <td>质量检测</td>
                <td>技术创新</td>
                <td>2000 元</td>
            </tr>
        );
    }
});



ReactDOM.render(
    <OrgDetail />,
    document.getElementById('page')
);