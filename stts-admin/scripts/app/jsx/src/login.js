var Login = React.createClass({
    componentDidMount: function () {
        $.backstretch("../img/login/bg.jpg");
    },
    render: function () {
        return (
            <div className="top-content">
                <div id="main" className="container">
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2 text">
                            <h1><strong>小微企业创业创新服务券网上平台</strong></h1>
                            <h1><strong>运营管理平台</strong></h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3 form-box">
                            <LoginForm/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});


var LoginForm = React.createClass({
    handleLogin: function () {
        location.href = "index.html";
    },
    render: function () {
        return (
            <div>
                <div className="form-top">
                    <div className="form-top-left">
                        <h3>系统登录</h3>

                        <p>请输入用户名和密码：</p>
                    </div>
                    <div className="form-top-right">
                        <i className="fa fa-lock"></i>
                    </div>
                </div>
                <div className="form-bottom">
                    <div className="form-group">
                        <label className="sr-only" htmlFor="form-username">用户名</label>
                        <input ref="inputUserName" type="text" name="form-username" placeholder="请输入用户名"
                               className="form-username form-control"/>
                    </div>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="form-password">密码</label>
                        <input ref="inputPassword" type="password" name="form-password" placeholder="请输入密码"
                               className="form-password form-control"/>
                    </div>
                    <button type="button" className="btn" onClick={this.handleLogin}>登录</button>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Login/>,
    document.getElementById('page')
);

