var OrgInfo = React.createClass({

    render: function () {
        return (
            <div>
                <Top/>
                <Header activeMenuID="mainMenuOrgInfo"/>

                <div className="container">
                    <div>
                        <div className="pull-left w-222">
                            <div className="list-group">
                                <a href="org_info.html" className="list-group-item active">服务机构信息</a>
                                <a href="org_approval_list.html" className="list-group-item ">服务机构资质审核</a>
                            </div>
                        </div>

                        <div className="ml-240 overflow-hidden ">
                            <ol className="breadcrumb">
                                <li>您所在的位置：</li>
                                <li><a href="dashboard.html">服务机构</a></li>
                                <li><a href="org_info.html">资质审核</a></li>
                                <li className='active'>服务机构信息</li>
                            </ol>
                            <Org/>


                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
});

var Org = React.createClass({
    render: function () {
        return (
            <div className="row">
                <div className="col-sm-3">
                    <div>
                        <img className="w-per-100" src="../../img/common/org-preview.jpg"/>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-default mt-20 mb-20">上传徽标</button>
                    </div>
                    <p>
                        审核状态：未认证
                    </p>

                    <p>
                        帐号状态：正常
                    </p>
                </div>
                <div className="col-sm-9 form form-horizontal " role="form">
                    <div className="form-group">
                        <label className="control-label col-sm-3">
                            服务联系人
                        </label>

                        <div className="col-sm-7">
                            <div className="row">
                                <div className="col-sm-8">
                                    <input className="form-control" type="text"/>
                                </div>
                                <div className="col-sm-4">
                                    <a href="#" className="btn">查找</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group form-inline">
                        <label className="control-label col-sm-3">
                            服务联系人职务
                        </label>

                        <div className="col-sm-9">
                            <select className="form-control  mr-10" style={{width:"150px"}}/>
                        </div>
                    </div>
                    <div className="form-group form-inline">
                        <label className="control-label col-sm-3">
                            服务联系人部门
                        </label>


                        <div className="col-sm-7">
                            <select className="form-control  mr-10" style={{width:"150px"}}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-3">
                            服务联系人手机
                        </label>

                        <div className="col-sm-7">
                            <input className="form-control" type="text"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-3">
                            服务联系人邮箱
                        </label>

                        <div className="col-sm-7">
                            <input className="form-control" type="text"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-3">
                            服务热线
                        </label>

                        <div className="col-sm-7">
                            <input className="form-control" type="text"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-3">
                            营业时间
                        </label>

                        <div className="col-sm-7">
                            <select className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-3">
                            固定电话
                        </label>

                        <div className="col-sm-3">
                            <input className="form-control" type="text"/>
                        </div>
                        <div className="col-sm-4 pt-7">
                            <span > (格式：xxx(x)-xxxxxxx(x)) </span>
                        </div>
                    </div>

                    <hr/>
                    <h2 className="text-danger text-center">*以下信息如有变更需要重新审核</h2>

                    <div className="form-group form-inline">
                        <label className="control-label col-sm-3">
                            服务类型
                        </label>

                        <div className="col-sm-7">
                            <div className="checkbox mr-10">
                                <label>
                                    <input type="checkbox"/> 人才引培
                                </label>
                            </div>

                            <div className="checkbox mr-10">
                                <label>
                                    <input type="checkbox"/> 技术创新
                                </label>
                            </div>

                            <div className="checkbox mr-10">
                                <label>
                                    <input type="checkbox"/> 检验检测认证
                                </label>
                            </div>

                            <div className="checkbox">
                                <label>
                                    <input type="checkbox"/> 财务指导
                                </label>
                            </div>
                            <div className="checkbox mr-10">
                                <label>
                                    <input type="checkbox"/> 创业辅导
                                </label>
                            </div>

                            <div className="checkbox mr-10">
                                <label>
                                    <input type="checkbox"/> 市场拓展
                                </label>
                            </div>

                            <div className="checkbox mr-10">
                                <label>
                                    <input type="checkbox"/> 管理咨询
                                </label>
                            </div>

                            <div className="checkbox">
                                <label>
                                    <input type="checkbox"/> 知识产权保护
                                </label>
                            </div>
                            <div className="checkbox mr-10">
                                <label>
                                    <input type="checkbox"/> 法律维权
                                </label>
                            </div>

                            <div className="checkbox">
                                <label>
                                    <input type="checkbox"/> 公共服务
                                </label>
                            </div>
                        </div>

                    </div>
                    <div className="form-group form-inline">
                        <label className="control-label col-sm-3">
                            服务类型
                        </label>

                        <div className="col-sm-7">
                            <div className="checkbox mr-10">
                                <label>
                                    <input type="checkbox"/> 我已经阅读并同意
                                    <a href="#">《双创服务平台服务机构管理协议》</a>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" text-center mb-20">
                    <button className="btn btn-primary">提&nbsp;交</button> &nbsp;&nbsp;
                    <button className="btn btn-default">返回</button>
                </div>
            </div>
        );
    }
});


ReactDOM.render(
    <OrgInfo/>,
    document.getElementById('page')
);