var Top = React.createClass({
    render: function () {

        var top = <TopLogout/>
        if(this.props.isLogin == "true"){
            top = <TopLogin/>;
        }

        return (
            top
        );
    }
});

var TopLogout = React.createClass({
    render: function () {
        return (
            <div className="top-wrap">
                <div className="container">
                    <ul className="top-right-menu">
                        <li><a href="#">欢迎您</a></li>
                        <li><a href="page/login.html">请登录</a></li>
                        <li><a href="page/register_user.html">免费注册</a></li>
                        <li><a href="#">忘记密码</a></li>
                    </ul>
                </div>
            </div>
        );
    }
});

var TopLogin = React.createClass({
    getInitialState: function () {
        return {
            user: {
                userName: "jack",
            }
        };
    },
    render: function () {
        return (
            <div className="top-wrap">
                <div className="container">
                    <ul className="top-right-menu">
                        <li>您好：{this.state.user.userName}</li>
                        <li><a href="#">我的平台</a></li>
                        <li><a href="#">我是服务机构</a></li>
                        <li><a href="#">帮助中心</a></li>
                        <li><a href="#">退出</a></li>
                    </ul>
                </div>
            </div>
        );
    }
});