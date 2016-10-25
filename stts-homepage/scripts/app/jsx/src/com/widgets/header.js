var Header = React.createClass({
    componentDidMount: function () {
        var activeMenuID = this.props.activeMenuID;

        $("#" + activeMenuID).show();
        $("#" + activeMenuID).addClass("active");
    },

    render: function () {
        return (
            <div className="header-wrap">
                <div className="container">
                    <h2>
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        &nbsp;小微企业创业创新服务券网上平台&nbsp;
                        <span className="service-icon">企业机构</span>
                    </h2>
                    <div className="menu-main">
                        <ul className="clearfix">
                            <li id="mainMenuDashboard"><a href="dashboard.html">我的平台</a></li>
                            <li id="mainMenuOrder"><a href="order_list.html">我的订单</a></li>
                            <li id="mainMenuEvaluate"><a href="evaluate_receive.html">我的评价</a></li>
                            <li id="mainMenuMessage"><a href="message_list.html">我的消息</a></li>
                            <li id="mainMenuCompany"><a href="company.html">资质审核</a></li>
                            <li id="mainMenuCoupon"><a href="coupon.html">服务券</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});