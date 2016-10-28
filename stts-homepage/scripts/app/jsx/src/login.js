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
    handleLogin: function () {
        location.href = "select_company.html";
    },
    render: function () {
        return (
            <div className="login-form hot-tab-wrap">

                <div className="login-frame">
                    <div className="form-group">
                        <label>手机号</label>
                        <input type="text" placeholder="请输入手机号" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>密码</label>

                        <input ref="inputPassword" type="password" placeholder="请输入密码"
                               className="form-control"/>
                    </div>
                    <div className="row form-group">
                        <div className="col-sm-6 text-center">
                            <a href="#">忘记密码？</a>
                        </div>
                        <div className="col-sm-6 text-center">
                            <a href="#">免费注册</a>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-primary btn-block"
                                onClick={this.handleLogin}>
                            登录
                        </button>
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

