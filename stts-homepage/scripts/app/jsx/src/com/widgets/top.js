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
                        <li>我的使用额度（元）：<stong className="text-danger">3000</stong> / 5000</li>
                        <li>服务券总金额（万元）：<stong className="text-danger">3000</stong> / 5000</li>
                    </ul>
                    <ul className="top-right-menu">
                        <li>您好：{this.state.user.userName}</li>
                        <li><a href="../account_profile.html">账户设置</a></li>
                        <li><a href="../org/dashboard.html">我是服务机构</a></li>
                        <li><a href="#">帮助中心</a></li>
                        <li><a href="../login.html">退出</a></li>
                    </ul>
                </div>
            </div>
        );
    }
});
