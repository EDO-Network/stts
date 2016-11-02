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
                                <a href="service_list.html" className="list-group-item">服务产品一览</a>
                                <a href="service_qualification_list.html" className="list-group-item active">服务产品上架</a>
                            </div>
                        </div>

                        <div className="ml-240 overflow-hidden ">
                            <ol className="breadcrumb">
                                <li>您所在的位置：</li>
                                <li><a href="org_list.html">服务机构管理</a></li>
                                <li><a href="service_list.html">服务产品上架审核</a></li>
                                <li className='active'>服务产品审核详细</li>
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
                                <label>待审核</label>
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



                <div className="text-center mb-20">
                    <button className="btn btn-primary" type="button"
                            data-toggle="modal" data-target="#passModal">通过审核
                    </button>
                    &nbsp;
                    <button className="btn btn-default" type="button"
                            data-toggle="modal" data-target="#refuseModal">驳回申请
                    </button>
                </div>


                <PassModal/>
                <RefuseModal/>
            </div>
        );
    }
});


var PassModal = React.createClass({
    render: function () {
        return (
            <div className="modal fade" id="passModal" tabindex="-1" role="dialog" aria-labelledby="passModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"><span
                                aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title" id="addModalLabel">服务上架审核通过</h4>
                        </div>
                        <div className="modal-body">
                            <div className="form form-horizontal " role="form">
                                <div className="form-group">
                                    <label className="control-label col-sm-3">
                                        审核时间
                                    </label>

                                    <div className="col-sm-8 pt-7">
                                        <label>2017-01-13 13:00:22</label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="control-label col-sm-3">
                                        审核人员
                                    </label>

                                    <div className="col-sm-8 pt-7">
                                        <label>用户名AAA（非实名）</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer ">
                            <div className="text-center">
                                <button type="button" className="btn btn-primary ">
                                    允许立即上架
                                </button>
                                <button type="button" className="btn btn-default " data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var RefuseModal = React.createClass({
    render: function () {
        return (
            <div className="modal fade" id="refuseModal" tabindex="-1" role="dialog" aria-labelledby="refuseModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"><span
                                aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title" id="addModalLabel">服务上架审核驳回</h4>
                        </div>
                        <div className="modal-body">
                            <div className="form form-horizontal " role="form">
                                <div className="form-group">
                                    <label className="control-label col-sm-3">
                                        审核时间
                                    </label>

                                    <div className="col-sm-8 pt-7">
                                        <label>2017-01-13 13:00:22</label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="control-label col-sm-3">
                                        审核人员
                                    </label>

                                    <div className="col-sm-8 pt-7">
                                        <label>用户名AAA（非实名）</label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="control-label col-sm-3">
                                        原因分类
                                    </label>

                                    <div className="col-sm-4">
                                        <select className="form-control">
                                            <option>内容不符</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="control-label col-sm-3">
                                        驳回申请原因说明
                                    </label>

                                    <div className="col-sm-8">
                                        <textarea className="form-control" rows="5"></textarea>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="modal-footer ">
                            <div className="text-center">
                                <button type="button" className="btn btn-primary ">
                                    驳回上架申请
                                </button>
                                <button type="button" className="btn btn-default " data-dismiss="modal">取消</button>
                            </div>
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