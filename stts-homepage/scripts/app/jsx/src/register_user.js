var Register = React.createClass({
    render: function () {
        return (
            <div className="container">
                <Top isLogin="false"/>
                <Header activeMenuID="mainMenuRegisterUser"/>

                <div id="registerForm">
                    <h3 className="text-center">
                        <stong>企服超市新用户注册</stong>
                    </h3>
                    <div className="registerFrame">
                        <div className="form-group">
                            <label>用户名</label>
                            <input ref="inputUserName" type="text" placeholder="请输入用户名" className="form-control input-lg"/>
                        </div>
                        <div className="form-group">
                            <label>手机号</label>
                            <input ref="inputUserName" type="text" placeholder="请输入用户名" className="form-control input-lg"/>
                        </div>
                        <div id="divSendVerifyCode" className="form-group">
                            <label>验证码</label>
                            <div className="form-inline">
                                <input ref="inputVerifyCode" type="text" placeholder="请输入验证码" className="form-control input-lg"/>
                                <button id="btnSendVerifyCode" type="button" className="btn btn-warning btn-lg width-per-40" onClick={this.handleSendVerifyCode}>
                                    发送验证码
                                </button>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>常用邮箱</label>
                            <input ref="inputEmail" type="email" placeholder="请输入邮箱地址" className="form-control input-lg"/>
                        </div>
                        <div className="form-group">
                            <label>新密码</label>
                            <input ref="inputPassword" type="password" placeholder="请输入密码"
                                   className="form-control input-lg"/>
                        </div>
                        <div className="form-group">
                            <label>确认密码</label>
                            <input ref="inputPassword" type="password" placeholder="请再次输入密码"
                                   className="form-control input-lg"/>
                        </div>
                        <div className="checkbox text-center">
                            <input type="checkbox"/>同意<a href="#">《企服超市平台会员服务协议》</a>
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.handleLogin}>
                                注册
                            </button>
                        </div>

                        <div>
                            <div className="text-right">
                                <label>已有账号？</label><a href="#">立即登陆</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Register/>,
    document.getElementById('page')
);

