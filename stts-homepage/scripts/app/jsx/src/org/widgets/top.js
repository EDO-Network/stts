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
                        <li>{this.state.user.company}</li>
                    </ul>
                    <ul className="top-right-menu">
                        <li>您好：{this.state.user.userName}</li>
                        <li><a href="../account_profile.html">账户设置</a></li>
                        <li><a href="../index.html">企服超市</a></li>
                        <li><a href="../com/dashboard.html">企业平台</a></li>
                        <li><a href="#">帮助中心</a></li>
                        <li><a href="../login.html">退出</a></li>
                    </ul>
                </div>
            </div>
        );
    }
});
