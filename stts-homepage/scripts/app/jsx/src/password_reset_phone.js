var AccountSafety = React.createClass({
    render: function () {
        return (
            <div>
                <Top isLogin="false"/>
                <Header activeMenuID="mainMenuPasswordReset"/>

                <div className="container">

                    <div>
                        <div className="pull-left w-222">
                            <div className="list-group">
                                <a href="password_reset_phone.html" className="list-group-item active">通过手机重置密码</a>
                                <a href="password_reset_mail.html" className="list-group-item">通过邮箱重置密码</a>
                            </div>
                        </div>

                        <div className="ml-240">
                            <ol className="breadcrumb">
                                <li>您所在的位置：</li>
                                <li><a href="index.html">首页</a></li>
                                <li className='active'>通过手机重置密码</li>
                            </ol>
                            <div className="panel panel-default">
                                <div className="panel-heading">通过手机重置密码</div>
                                <div className="panel-body">
                                    <div className="form-horizontal">
                                        <div className="form-group">
                                            <div className="col-sm-3 control-label">
                                                <label>手机号</label>
                                            </div>
                                            <div className="col-sm-5">
                                                <input type="text" className="form-control" placeholder="请输入绑定的手机号"/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-sm-3 control-label">
                                                <label>验证码</label>
                                            </div>
                                            <div className="col-sm-5">
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

                                        <div className="form-group">
                                            <div className="col-sm-3 control-label">
                                                <label>真实姓名</label>
                                            </div>
                                            <div className="col-sm-5">
                                                <input type="text" className="form-control" placeholder="请输入注册的真实姓名"/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-sm-3 control-label">
                                                <label>所属企业名</label>
                                            </div>
                                            <div className="col-sm-5">
                                                <input type="text" className="form-control" placeholder="请输入注册时绑定的所属企业名称"/>
                                            </div>
                                            <div className="col-sm-4 pt-7">
                                                <label>＊有多个企业时则任意输入一个</label>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-sm-3 control-label">
                                                <label>新密码</label>
                                            </div>
                                            <div className="col-sm-5">
                                                <input type="password" className="form-control" placeholder="请输入新密码"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-3 control-label">
                                                <label>确认密码</label>
                                            </div>
                                            <div className="col-sm-5">
                                                <input type="password" className="form-control" placeholder="请确认新密码"/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-sm-3">
                                            </div>
                                            <div className="text-center col-sm-5">
                                                <button className="btn btn-primary" type="button"
                                                        onClick={this.handleSave}>提&nbsp;交
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
    <AccountSafety/>,
    document.getElementById('page')
);
