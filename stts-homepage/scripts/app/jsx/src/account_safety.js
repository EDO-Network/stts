var AccountSafety = React.createClass({
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
                        <li className='active'>账户安全</li>
                    </ol>

                    <div>
                        <div className="pull-left w-222">
                            <div className="list-group">
                                <a href="account_profile.html" className="list-group-item">用户信息</a>
                                <a href="account_safety.html" className="list-group-item active">账户安全</a>
                            </div>
                        </div>

                        <div className="ml-240">
                            <div className="panel panel-default">
                                <div className="panel-heading">账户安全</div>
                                <div className="panel-body">
                                    <div>
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li role="presentation" className="active"><a href="#password" role="tab"
                                                                                          data-toggle="tab">修改密码</a>
                                            </li>
                                            <li role="presentation"><a href="#mobile" role="tab"
                                                                       data-toggle="tab">绑定手机</a></li>
                                            <li role="presentation"><a href="#mail" role="tab"
                                                                       data-toggle="tab">绑定邮箱</a></li>
                                        </ul>

                                        <div className="tab-content w-400">
                                            <div role="tabpanel" className="tab-pane active" id="password">
                                                <div className="form-horizontal">
                                                    <div className="form-group">
                                                        <div className="col-sm-3 control-label">
                                                            <label>当前密码</label>
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <input type="password" className="form-control"/>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="col-sm-3 control-label">
                                                            <label>新密码</label>
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <input type="password" className="form-control"/>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="col-sm-3 control-label">
                                                            <label>确认密码</label>
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <input type="password" className="form-control"/>
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
                                            <div role="tabpanel" className="tab-pane" id="mobile">
                                                <div className="form-horizontal">
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
                                                            <label>验证码</label>
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <div className="input-group">
                                                                <input type="text" placeholder="请输入验证码"
                                                                       className="form-control"/>
                                                              <span className="input-group-btn">
                                                                <button className="btn btn-default" type="button">
                                                                    获取验证码
                                                                </button>
                                                              </span>
                                                            </div>
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
                                            <div role="tabpanel" className="tab-pane" id="mail">
                                                <div className="form-horizontal">
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
                                                            <label>验证码</label>
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <div className="input-group">
                                                                <input type="text" placeholder="请输入验证码"
                                                                       className="form-control"/>
                                                              <span className="input-group-btn">
                                                                <button className="btn btn-default" type="button">
                                                                    获取验证码
                                                                </button>
                                                              </span>
                                                            </div>
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
                </div>

            </div>
        );
    }
});

ReactDOM.render(
    <AccountSafety/>,
    document.getElementById('page')
);
