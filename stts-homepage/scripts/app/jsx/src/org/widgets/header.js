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
                    <div className="menu-main">
                        <ul className="clearfix">
                            <li className="title">
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                &nbsp;企服超市&nbsp;
                                <span className="service-icon">服务机构</span>
                            </li>
                            <li id="mainMenuDashboard"><a href="dashboard.html">服务机构平台</a></li>
                            <li id="mainMenuOrgShow"><a href="order_list.html">机构展示</a></li>
                            <li id="mainMenuOrder"><a href="company.html">订单处理</a></li>
                            <li id="mainMenuService"><a href="coupon.html">服务产品</a></li>
                            <li id="mainMenuCoupon"><a href="coupon.html">服务券帐户</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});