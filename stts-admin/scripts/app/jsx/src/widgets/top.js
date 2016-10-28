var Top = React.createClass({
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
                        <li>小微企业创业创新服务券网上平台-运营管理后台</li>
                    </ul>
                    <ul className="top-right-menu">
                        <li>您好：{this.state.user.userName}</li>
                        <li></li>
                        <li><a href="#">进入企服超市</a></li>
                        <li><a href="#">帮助中心</a></li>
                        <li><a href="login.html">退出</a></li>
                    </ul>
                </div>
            </div>
        );
    }
});
