var OrgInfo = React.createClass({

    componentDidMount: function () {
        var editor;
        KindEditor.ready(function (K) {
            editor = K.create('textarea[name="content"]', {
                allowFileManager: true
            });
        });
    },
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
                            <OrgBasic/>
                            <OrgConnection/>
                            <OrgFinance/>
                            <OrgRang/>
                            <OrgShow/>

                            <div className="text-center mb-20">

                                <div className="form-group form-inline">
                                    <div className="checkbox mr-10">
                                        <label>
                                            <input type="checkbox"/> 我已经阅读并同意
                                            <a href="#">《双创服务平台服务机构管理协议》</a>
                                        </label>
                                    </div>
                                </div>

                                <button className="btn btn-primary">提&nbsp;交</button>
                                &nbsp;&nbsp;
                                <button className="btn btn-default">返回</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
});

var OrgBasic = React.createClass({
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">基本信息</div>
                <div className="panel-body">
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
                        <div className="col-sm-9 form-horizontal">
                            <div className="form-group">
                                <label className="control-label col-sm-3">
                                    机构名称
                                </label>

                                <div className="col-sm-3">
                                    <input className="form-control" type="text"/>
                                </div>
                                <label className="control-label col-sm-3">
                                    服务机构代码
                                </label>

                                <div className="col-sm-3">
                                    <input className="form-control" type="text"/>
                                </div>
                            </div>
                            <div className="form-group form-horizontal">

                                <label className="control-label col-sm-3">
                                    成立时间
                                </label>

                                <div className="col-sm-3">
                                    <input className="form-control" type="text"/>
                                </div>
                                <label className="control-label col-sm-3">
                                    法定代表人
                                </label>

                                <div className="col-sm-3">
                                    <input className="form-control" type="text"/>
                                </div>
                            </div>


                            <div className="form-group">
                                <label className="control-label col-sm-3">
                                    机构负责人
                                </label>

                                <div className="col-sm-3">
                                    <input className="form-control" type="text"/>
                                </div>
                                <label className="control-label col-sm-3">
                                    负责人手机
                                </label>

                                <div className="col-sm-3">
                                    <input className="form-control" type="text"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-sm-3">
                                    营业场所面积（㎡）
                                </label>

                                <div className="col-sm-3">
                                    <input className="form-control" type="text"/>
                                </div>
                                <label className="control-label col-sm-3">
                                    注册资金（万元）
                                </label>

                                <div className="col-sm-3">
                                    <input className="form-control" type="text"/>
                                </div>
                            </div>

                            <div className="form-group form-horizontal">
                                <label className="control-label col-sm-3">
                                    所在区域
                                </label>

                                <div className="col-sm-9"><input className="form-control" type="text"/>
                                </div>
                            </div>
                            <div className="form-group form-horizontal">
                                <label className="control-label col-sm-3">
                                    通讯地址
                                </label>

                                <div className="col-sm-9">
                                    <input className="form-control" type="text"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var OrgConnection = React.createClass({
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">联系人信息</div>
                <div className="panel-body">
                    <div className="form-group row form-horizontal">
                        <label className="control-label col-sm-2">
                            姓名
                        </label>

                        <div className="col-sm-4">
                            <input className="form-control" type="text"/>
                        </div>
                        <label className="control-label col-sm-2">
                            电话
                        </label>

                        <div className="col-sm-4">
                            <input className="form-control" type="text"/>
                        </div>
                    </div>
                    <div className="form-group row form-horizontal">
                        <label className="control-label col-sm-2">
                            手机
                        </label>

                        <div className="col-sm-4">
                            <input className="form-control" type="text"/>
                        </div>
                        <label className="control-label col-sm-2">
                            电子邮箱
                        </label>

                        <div className="col-sm-4">
                            <input className="form-control" type="text"/>
                        </div>
                    </div>
                    <div className="form-group row form-horizontal">
                        <label className="control-label col-sm-2">
                            部门
                        </label>

                        <div className="col-sm-4">
                            <input className="form-control" type="text"/>
                        </div>
                        <label className="control-label col-sm-2">
                            职务
                        </label>

                        <div className="col-sm-4">
                            <input className="form-control" type="text"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var OrgFinance = React.createClass({
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">近三年财务情况（万元）</div>
                <div className="panel-body">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>年份</th>
                            <th>主营业务收入</th>
                            <th>利润总额</th>
                            <th>纳税总额</th>
                            <th>固定资产总额</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><input className="form-control" type="text" defaultValue="2014"/></td>
                            <td><input className="form-control" type="text"/></td>
                            <td><input className="form-control" type="text"/></td>
                            <td><input className="form-control" type="text"/></td>
                            <td><input className="form-control" type="text"/></td>
                        </tr>
                        <tr>
                            <td><input className="form-control" type="text" defaultValue="2015"/></td>
                            <td><input className="form-control" type="text"/></td>
                            <td><input className="form-control" type="text"/></td>
                            <td><input className="form-control" type="text"/></td>
                            <td><input className="form-control" type="text"/></td>
                        </tr>
                        <tr>
                            <td><input className="form-control" type="text" defaultValue="2016预计"/></td>
                            <td><input className="form-control" type="text"/></td>
                            <td><input className="form-control" type="text"/></td>
                            <td><input className="form-control" type="text"/></td>
                            <td><input className="form-control" type="text"/></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
});

var OrgRang = React.createClass({
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">申报领域</div>
                <div className="panel-body">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>申报领域</th>
                            <th>重点方向</th>
                            <th>主要服务产品</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><input className="form-control" type="text"/></td>
                            <td><input className="form-control" type="text"/></td>
                            <td><input className="form-control" type="text"/></td>
                        </tr>
                        <tr>
                            <td><input className="form-control" type="text"/></td>
                            <td><input className="form-control" type="text"/></td>
                            <td><input className="form-control" type="text"/></td>
                        </tr>
                        <tr>
                            <td><input className="form-control" type="text"/></td>
                            <td><input className="form-control" type="text"/></td>
                            <td><input className="form-control" type="text"/></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
});

var OrgShow = React.createClass({
    render: function () {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">机构专业资质情况</div>
                    <div className="panel-body">
                        <div className="mb-10">
                                    <textarea name="content" className="w-per-100 "
                                              style={{height: "300px"}}></textarea>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">专业人员构成情况</div>
                    <div className="panel-body">
                        <div className="mb-10">
                                    <textarea name="content" className="w-per-100 "
                                              style={{height: "300px"}}></textarea>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">主要服务设备及条件</div>
                    <div className="panel-body">
                        <div className="mb-10">
                                    <textarea name="content" className="w-per-100 "
                                              style={{height: "300px"}}></textarea>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">服务资质及荣誉</div>
                    <div className="panel-body">
                        <div className="mb-10">
                                    <textarea name="content" className="w-per-100 "
                                              style={{height: "300px"}}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});


ReactDOM.render(
    <OrgInfo/>,
    document.getElementById('page')
);