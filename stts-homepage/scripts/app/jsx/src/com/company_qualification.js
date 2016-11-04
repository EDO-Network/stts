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
                                <a href="company.html" className="list-group-item">企业信息</a>
                                <a href="qualification.html" className="list-group-item active">资质审核</a>
                            </div>
                        </div>

                        <div className="ml-240">

                            <ol className="breadcrumb">
                                <li>您所在的位置：</li>
                                <li><a href="dashboard.html">企业机构</a></li>
                                <li><a href="company.html">资质审核</a></li>
                                <li className='active'>企业资质审核详细</li>
                            </ol>
                            <div className="panel panel-default">
                                <div className="panel-heading">2016年度 企业资质审核详细</div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-sm-2">
                                            <div className="mb-20">
                                                <div>
                                                    <img className="w-200" src="../../img/company/company.jpg"/>
                                                </div>
                                                <br/>

                                                <div className="text-center w-200">
                                                    <button className="btn btn-default" type="button"
                                                            onClick={this.handleSave}>上传营业执照
                                                    </button>
                                                </div>
                                                <div className="text-center w-200">
                                                    <a className="btn" data-toggle="modal"
                                                       data-target="#commentModal">
                                                        <i className="fa fa-exclamation-circle fa-lg"
                                                           aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="mb-20">
                                                <div>
                                                    <img className="w-200" src="../../img/company/tax.jpg"/>
                                                </div>
                                                <br/>

                                                <div className="text-center w-200">
                                                    <button className="btn btn-default" type="button"
                                                            onClick={this.handleSave}>上传纳税证明
                                                    </button>
                                                </div>
                                                <div className="text-center w-200">
                                                    <a className="btn" data-toggle="modal"
                                                       data-target="#commentModal">
                                                        <i className="fa fa-exclamation-circle fa-lg"
                                                           aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="mb-20">
                                                <div>
                                                    <img className="w-200" src="../../img/company/shebao.jpg"/>
                                                </div>
                                                <br/>

                                                <div className="text-center w-200">
                                                    <button className="btn btn-default" type="button"
                                                            onClick={this.handleSave}>上传社保证明
                                                    </button>
                                                </div>
                                                <div className="text-center w-200">
                                                    <a className="btn" data-toggle="modal"
                                                       data-target="#commentModal">
                                                        <i className="fa fa-exclamation-circle fa-lg"
                                                           aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-10 form-horizontal">

                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>审核状态</label>
                                                </div>
                                                <div className="col-sm-6 pt-7">
                                                    <label>未审核 / 审核中 / 审核通过 / 审核未通过</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>审核评定</label>
                                                </div>
                                                <div className="col-sm-6 pt-7">
                                                    <label>普通 / 小型 / 微型 / 小升规</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>企业名称</label>
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className="col-sm-2">
                                                    <a href="#" className="btn" data-toggle="modal"
                                                       data-target="#commentModal">
                                                        <i className="fa fa-exclamation-circle fa-lg"
                                                           aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>企业简称</label>
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className="col-sm-2">
                                                    <a href="#" className="btn" data-toggle="modal"
                                                       data-target="#commentModal">
                                                        <i className="fa fa-exclamation-circle fa-lg"
                                                           aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>企业类型</label>
                                                </div>
                                                <div className="col-sm-6">
                                                    <select className="form-control">
                                                        <option>工业</option>
                                                        <option>服务</option>
                                                        <option>党政机关</option>
                                                        <option>事业单位</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-2">
                                                    <a href="#" className="btn" data-toggle="modal"
                                                       data-target="#commentModal">
                                                        <i className="fa fa-exclamation-circle fa-lg"
                                                           aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>组织机构代码</label>
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className="col-sm-2">
                                                    <a href="#" className="btn" data-toggle="modal"
                                                       data-target="#commentModal">
                                                        <i className="fa fa-exclamation-circle fa-lg"
                                                           aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>注册资本（万元）</label>
                                                </div>
                                                <div className="col-sm-6 pt-7">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className="col-sm-2">
                                                    <a href="#" className="btn" data-toggle="modal"
                                                       data-target="#commentModal">
                                                        <i className="fa fa-exclamation-circle fa-lg"
                                                           aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>成立时间</label>
                                                </div>
                                                <div className="col-sm-6 pt-7">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className="col-sm-2">
                                                    <a href="#" className="btn" data-toggle="modal"
                                                       data-target="#commentModal">
                                                        <i className="fa fa-exclamation-circle fa-lg"
                                                           aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>法定代表人</label>
                                                </div>
                                                <div className="col-sm-6 pt-7">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className="col-sm-2">
                                                    <a href="#" className="btn" data-toggle="modal"
                                                       data-target="#commentModal">
                                                        <i className="fa fa-exclamation-circle fa-lg"
                                                           aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>上年度年末资产总额</label>
                                                </div>
                                                <div className="col-sm-6 pt-7">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className="col-sm-2">
                                                    <a href="#" className="btn" data-toggle="modal"
                                                       data-target="#commentModal">
                                                        <i className="fa fa-exclamation-circle fa-lg"
                                                           aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>上年度企业人数</label>
                                                </div>
                                                <div className="col-sm-6 pt-7">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className="col-sm-2">
                                                    <a href="#" className="btn" data-toggle="modal"
                                                       data-target="#commentModal">
                                                        <i className="fa fa-exclamation-circle fa-lg"
                                                           aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>上年度所得税总额</label>
                                                </div>
                                                <div className="col-sm-6 pt-7">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className="col-sm-2">
                                                    <a href="#" className="btn" data-toggle="modal"
                                                       data-target="#commentModal">
                                                        <i className="fa fa-exclamation-circle fa-lg"
                                                           aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>经济类型</label>
                                                </div>
                                                <div className="col-sm-6 pt-7">
                                                    <select className="form-control">
                                                        <option>股份制</option>
                                                        <option>独资</option>
                                                        <option>中外合资</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-2">
                                                    <a href="#" className="btn" data-toggle="modal"
                                                       data-target="#commentModal">
                                                        <i className="fa fa-exclamation-circle fa-lg"
                                                           aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>主营业务</label>
                                                </div>
                                                <div className="col-sm-6 pt-7">
                                                    <textarea className="form-control"></textarea>
                                                </div>
                                                <div className="col-sm-2">
                                                    <a href="#" className="btn" data-toggle="modal"
                                                       data-target="#commentModal">
                                                        <i className="fa fa-exclamation-circle fa-lg"
                                                           aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>企业纳税信用等级</label>
                                                </div>
                                                <div className="col-sm-6 pt-7">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className="col-sm-2">
                                                    <a href="#" className="btn" data-toggle="modal"
                                                       data-target="#commentModal">
                                                        <i className="fa fa-exclamation-circle fa-lg"
                                                           aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>所在区域</label>
                                                </div>
                                                <div className="col-sm-6">
                                                    <select className="form-control">
                                                        <option>镇海区</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-2">
                                                    <a href="#" className="btn" data-toggle="modal"
                                                       data-target="#commentModal">
                                                        <i className="fa fa-exclamation-circle fa-lg"
                                                           aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-4 control-label">
                                                    <label>地址</label>
                                                </div>
                                                <div className="col-sm-6 pt-7">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className="col-sm-2">
                                                    <a href="#" className="btn" data-toggle="modal"
                                                       data-target="#commentModal">
                                                        <i className="fa fa-exclamation-circle fa-lg"
                                                           aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <button className="btn btn-primary" type="button"
                                                        onClick={this.handleSave}>提交审核
                                                </button>
                                                &nbsp;
                                                <button className="btn btn-default" type="button"
                                                        onClick={this.handleSave}>返&nbsp;回
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CommentModal/>
                <Footer/>
            </div>
        );
    }
});


var CommentModal = React.createClass({
    render: function () {
        return (
            <div className="modal fade" id="commentModal" tabindex="-1" role="dialog" aria-labelledby="commentModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"><span
                                aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title" id="addModalLabel">企业资质审核备注</h4>
                        </div>
                        <div className="modal-body">
                            <div className="form form-horizontal " role="form">
                                <div className="form-group">
                                    <label className="control-label col-sm-4">
                                        原因分类
                                    </label>

                                    <label className="col-sm-8 pt-7">
                                        内容不符
                                    </label>
                                </div>

                                <div className="form-group">
                                    <label className="control-label col-sm-4">
                                        请具体描述不符要求的理由
                                    </label>

                                    <div className="col-sm-8 pt-7">
                                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="modal-footer ">
                            <div className="text-center">
                                <button type="button" className="btn btn-default " data-dismiss="modal">关闭</button>
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