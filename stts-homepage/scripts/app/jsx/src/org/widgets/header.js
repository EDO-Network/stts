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
                        <span className="service-icon">服务机构</span>
                    </h2>
                    <div className="menu-main">
                        <ul className="clearfix">
                            <li id="mainMenuDashboard"><a href="dashboard.html">服务机构平台</a></li>
                            <li id="mainMenuOrgShow"><a href="org_show.html">机构展示</a></li>
                            <li id="mainMenuOrder"><a href="order_list.html">订单处理</a></li>
                            <li id="mainMenuService"><a href="service_list.html">服务产品</a></li>
                            <li id="mainMenuCoupon"><a href="coupon.html">服务券帐户</a></li>
                            <li id="mainMenuOrgInfo"><a href="org_info.html">资质审核</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});