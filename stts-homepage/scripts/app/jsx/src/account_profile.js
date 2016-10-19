var AccountProfile = React.createClass({
    render: function () {
        return (
            <div>
                <Top isLogin="true"/>
                <Header activeMenuID="mainMenuAccountProfile"/>

                <div className="container">

                    <ol className="breadcrumb">
                        <li>您所在的位置：</li>
                        <li><a href="index.html">首页</a></li>
                        <li><a href="account_profile.html">账户设置</a></li>
                        <li className='active'>用户信息</li>
                    </ol>

                    <div>
                        <div className="pull-left w-222">
                            <div className="list-group">
                                <a href="account_profile.html" className="list-group-item active">用户信息</a>
                                <a href="account_safety.html" className="list-group-item">账户安全</a>
                            </div>
                        </div>

                        <div className="ml-240">
                            <div className="panel panel-default">
                                <div className="panel-heading">用户信息</div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-sm-2">
                                            <div>
                                                <img className="w-200" src="../img/common/org-preview-small.jpg"/>
                                            </div>
                                            <br/>
                                            <div className="text-center w-200">
                                                <button className="btn btn-default" type="button"
                                                        onClick={this.handleSave}>更换头像
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-10 form-horizontal">

                                            <div className="form-group">
                                                <div className="col-sm-3 control-label">
                                                    <label>账户状态</label>
                                                </div>
                                                <div className="col-sm-9 pt-7">
                                                    <label>正常 / 冻结</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-3 control-label">
                                                    <label>姓名</label>
                                                </div>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-3 control-label">
                                                    <label>手机号</label>
                                                </div>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-3 control-label">
                                                    <label>邮箱</label>
                                                </div>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-3 control-label">
                                                    <label>职务</label>
                                                </div>
                                                <div className="col-sm-9">
                                                    <select className="form-control">
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-3 control-label">
                                                    <label>部门</label>
                                                </div>
                                                <div className="col-sm-9">
                                                    <select className="form-control">
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-3 control-label">
                                                    <label>注册时间</label>
                                                </div>
                                                <div className="col-sm-9 pt-7">
                                                    <label>2016-01-01 19:21:14</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-3 control-label">
                                                    <label>最后登录时间</label>
                                                </div>
                                                <div className="col-sm-9 pt-7">
                                                    <label>2016-01-01 19:21:14</label>
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <button className="btn btn-primary" type="button"
                                                        onClick={this.handleSave}>提&nbsp;交
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

            </div>
        );
    }
});

ReactDOM.render(
    <AccountProfile/>,
    document.getElementById('page')
);
