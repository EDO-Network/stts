var ServiceCreate = React.createClass({

    render: function () {
        return (
            <div>
                <Top/>
                <Header activeMenuID="mainMenuOrg"/>

                <div className="container">
                    <div>
                        <div className="pull-left w-222">
                            <div className="list-group">
                                <a href="org_list.html" className="list-group-item">服务机构一览</a>
                                <a href="org_qualification_list.html" className="list-group-item">服务机构资质审核</a>
                                <a href="service_list.html" className="list-group-item active">服务产品一览</a>
                                <a href="service_qualification_list.html" className="list-group-item">服务产品上架</a>
                            </div>
                        </div>

                        <div className="ml-240 overflow-hidden ">
                            <ol className="breadcrumb">
                                <li>您所在的位置：</li>
                                <li><a href="org_list.html">服务机构管理</a></li>
                                <li><a href="service_list.html">服务产品一览</a></li>
                                <li className='active'>服务产品详细</li>
                            </ol>


                            <ServiceNew/>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
});

var ServiceNew = React.createClass({
    render: function () {
        return (

            <div>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="w-per-100" src="../img/sample/org_preview.png"/>
                    </div>
                    <div className="col-sm-9 form form-horizontal " role="form">
                        <div className="form-group">
                            <label className="control-label col-sm-3">
                                服务名称
                            </label>

                            <div className="col-sm-8 pt-7">
                                <label>xxxx检测服务</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-3">
                                服务大类
                            </label>

                            <div className="col-sm-8 pt-7">
                                <label>人才引培</label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-sm-3">
                                服务小类
                            </label>

                            <div className="col-sm-8 pt-7">
                                <label>高层培训</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-3">
                                服务对象
                            </label>

                            <div className="col-sm-8 pt-7">
                                <label>普通企业 / 小型企业 / 微型企业 / 小升规</label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-sm-3">
                                服务价格
                            </label>

                            <div className="col-sm-8 pt-7">
                                <label>1000 ～ 1500 元</label>
                            </div>
                        </div>

                        <div className="form-group form-inline">
                            <label className="control-label col-sm-3">
                                收费标准
                            </label>

                            <div className="col-sm-8 pt-7">
                                <label>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                    xxxxxxxxxxx</label>
                            </div>

                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-3">
                                服务方式
                            </label>

                            <div className="col-sm-8 pt-7">
                                <label>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                    xxxxxxxxxxx</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-3">
                                支付服务券
                            </label>

                            <div className="col-sm-8 pt-7">
                                <label>可用</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-3">
                                状态
                            </label>

                            <div className="col-sm-8 pt-7">
                                <label>已上架</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-20">
                    <div className="panel panel-default">
                        <div className="panel-heading">服务详细内容描述</div>
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
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <ServiceCreate />,
    document.getElementById('page')
);