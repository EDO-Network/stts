var Top = React.createClass({
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
                        <li>您好：<a href="#">{this.state.user.userName}</a></li>
                        <li><a href="#">企服超市</a></li>
                        <li><a href="#">我是服务机构</a></li>
                        <li><a href="#">帮助中心</a></li>
                        <li><a href="#">退出</a></li>
                    </ul>
                </div>
            </div>
        );
    }
});