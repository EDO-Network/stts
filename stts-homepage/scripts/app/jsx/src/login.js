var Login = React.createClass({
    render: function () {
        return (
            <div>
                <Top/>
                <Header activeMenuID="mainMenuLogin"/>
                <LoginForm/>
            </div>
        );
    }
});


var LoginForm = React.createClass({
    handleLogin:function(){
        location.href = "select_company.html";
    },
    render: function () {
        return (
            <div className="login-form hot-tab-wrap mt-20">
                <ul className="nav nav-tabs login-tabs" role="tablist">
                    <li role="presentation" className="active"><a href="#verify" role="tab" data-toggle="tab">验证码登录</a>
                    </li>
                    <li role="presentation"><a href="#password" role="tab" data-toggle="tab">密码登录</a></li>
                </ul>

                <div className="tab-content login-frame">
                    <div role="tabpanel" className="tab-pane active" id="verify">
                        <div className="form-group">
                            <label>手机号</label>
                            <input type="text" placeholder="请输入手机号" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>验证码</label>

                            <div className="input-group">
                                <input type="text" placeholder="请输入验证码"
                                       className="form-control"/>
                                  <span className="input-group-btn">
                                    <button className="btn btn-default" type="button">获取验证码</button>
                                  </span>
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-primary btn-block"
                                    onClick={this.handleLogin}>
                                登录
                            </button>
                        </div>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="password">
                        <div className="form-group">
                            <label>手机号</label>
                            <input type="text" placeholder="请输入手机号" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>密码</label>

                            <div className="pull-right">
                                <a href="#">忘记密码？</a>
                            </div>
                            <input ref="inputPassword" type="password" placeholder="请输入密码"
                                   className="form-control"/>
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-primary btn-block"
                                    onClick={this.handleLogin}>
                                登录
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Login/>,
    document.getElementById('page')
);

