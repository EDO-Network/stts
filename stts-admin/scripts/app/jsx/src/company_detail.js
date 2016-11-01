var Company = React.createClass({
    render: function () {
        return (
            <div>
                <Top/>
                <Header activeMenuID="mainMenuCompany"/>

                <div className="container">
                    <div>
                        <div className="pull-left w-222">
                            <div className="list-group">
                                <a href="company_list.html" className="list-group-item active">企业用户一览</a>
                                <a href="company_qualification_list.html" className="list-group-item">企业资质审核</a>
                            </div>
                        </div>

                        <div className="ml-240">

                            <ol className="breadcrumb">
                                <li>您所在的位置：</li>
                                <li><a href="index.html">企业管理</a></li>
                                <li className='company_list.html'>企业用户一览</li>
                                <li className='active'>企业详细</li>
                            </ol>
                            <div className="panel panel-default">
                                <div className="panel-heading">企业详细</div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-sm-2">
                                            <div className="mb-20">
                                                <div>
                                                    <img className="w-200" src="../img/company/company.jpg"/>
                                                </div>
                                                <br/>

                                                <div className="text-center w-200">
                                                    营业执照
                                                </div>
                                            </div>
                                            <div className="mb-20">
                                                <div>
                                                    <img className="w-200" src="../img/company/tax.jpg"/>
                                                </div>
                                                <br/>

                                                <div className="text-center w-200">纳税证明
                                                </div>
                                            </div>
                                            <div className="mb-20">
                                                <div>
                                                    <img className="w-200" src="../img/company/shebao.jpg"/>
                                                </div>
                                                <br/>

                                                <div className="text-center w-200">社保证明
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-10 form-horizontal">

                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>企业名称</label>
                                                </div>
                                                <div className="col-sm-8 pt-7">
                                                    <label>xxxx信息技术有限公司</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>企业简称</label>
                                                </div>
                                                <div className="col-sm-8 pt-7">
                                                    <label>xxxx信息</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>企业类型</label>
                                                </div>
                                                <div className="col-sm-8 pt-7">
                                                    <label>事业单位</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>组织机构代码</label>
                                                </div>
                                                <div className="col-sm-8 pt-7">
                                                    <label>11111112312131213123123</label><br/>
                                                    <label>＊组织机构代码（或统一社会信用代码）</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>注册资本（万元）</label>
                                                </div>
                                                <div className="col-sm-8 pt-7">
                                                    <label>1000 万元</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>成立时间</label>
                                                </div>
                                                <div className="col-sm-8 pt-7">
                                                    <label>2016年1月24日</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>法定代表人</label>
                                                </div>
                                                <div className="col-sm-8 pt-7">
                                                    <label>xxxx</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>上年度年末资产总额</label>
                                                </div>
                                                <div className="col-sm-8 pt-7">
                                                    <label>2000 万元</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>上年度企业人数</label>
                                                </div>
                                                <div className="col-sm-8 pt-7">
                                                    <label>200 人</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>上年度所得税总额</label>
                                                </div>
                                                <div className="col-sm-8 pt-7">
                                                    <label>200 万元</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>经济类型</label>
                                                </div>
                                                <div className="col-sm-8 pt-7">
                                                    <label>股份制</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>主营业务</label>
                                                </div>
                                                <div className="col-sm-8 pt-7">
                                                    <label>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                                    xxxxxxxxxxxxxxxx
                                                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                                    xxxxxxxxxxxxxxxx</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>企业纳税信用等级</label>
                                                </div>
                                                <div className="col-sm-8 pt-7">
                                                    <label>xxx</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>所在区域</label>
                                                </div>
                                                <div className="col-sm-8 pt-7">
                                                    <label>镇海区</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>地址</label>
                                                </div>
                                                <div className="col-sm-8 pt-7">
                                                    <label>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                                        xxxxxxxxxxxxxxxx</label>
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <button className="btn btn-primary" type="button"
                                                        data-toggle="modal" data-target="#closeDownModal">查&nbsp;封
                                                </button>
                                                &nbsp;
                                                <button className="btn btn-default" type="button"
                                                        data-toggle="modal" data-target="#freezeModal">冻&nbsp;结
                                                </button>
                                            </div>
                                            <CloseDownModal/>
                                            <FreezeModal/>
                                        </div>
                                    </div>
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


var CloseDownModal = React.createClass({
    render: function () {
        return (
            <div className="modal fade" id="closeDownModal" tabindex="-1" role="dialog" aria-labelledby="closeDownModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"><span
                                aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title" id="addModalLabel">企业查封</h4>
                        </div>
                        <div className="modal-body">
                            <div className="form form-horizontal " role="form">
                                <div className="form-group">
                                    <label className="control-label col-sm-3">
                                        查封原因分类
                                    </label>

                                    <div className="col-sm-8">
                                        <select className="form-control">
                                            <option>恶意套取服务券</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="control-label col-sm-3">
                                        查封理由
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
                                    立即查封
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

var FreezeModal = React.createClass({
    render: function () {
        return (
            <div className="modal fade" id="freezeModal" tabindex="-1" role="dialog" aria-labelledby="freezeModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"><span
                                aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title" id="addModalLabel">企业冻结</h4>
                        </div>
                        <div className="modal-body">
                            <div className="form form-horizontal " role="form">
                                <div className="form-group">
                                    <label className="control-label col-sm-3">
                                        冻结原因分类
                                    </label>

                                    <div className="col-sm-8">
                                        <select className="form-control">
                                            <option>涉嫌违法，被调查中</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="control-label col-sm-3">
                                        冻结理由
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
                                    立即冻结
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
    <Company />,
    document.getElementById('page')
);