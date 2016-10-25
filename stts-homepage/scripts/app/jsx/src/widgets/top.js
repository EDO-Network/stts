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
                        <li>欢迎您</li>
                        <li><a href="login.html">请登录</a></li>
                        <li><a href="register_user.html">免费注册</a></li>
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
                company: "中国海峡人才市场宁波分部",
                userName: "jack",
            }
        };
    },
    render: function () {
        return (
            <div className="top-wrap">
                <div className="container">
                    <ul className="top-left-menu">
                        <li>{this.state.user.company}</li>
                    </ul>
                    <ul className="top-right-menu">
                        <li>您好：{this.state.user.userName}</li>
                        <li></li>
                        <li><a href="account_profile.html">账户设置</a></li>
                        <li><a href="com/dashboard.html">我的平台</a></li>
                        <li><a href="org/service_list.html">我是服务机构</a></li>
                        <li><a href="#">帮助中心</a></li>
                        <li><a href="login.html">退出</a></li>
                    </ul>
                </div>
            </div>
        );
    }
});