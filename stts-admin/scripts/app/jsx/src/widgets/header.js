var Header = React.createClass({
    componentDidMount: function () {
        var activeMenuID = this.props.activeMenuID;

        $("#" + activeMenuID).show();
        $("#" + activeMenuID).addClass("active");
    },

    render: function () {
        return (
            <nav className="navbar navbar-inverse" role="navigation">
                <div className="container">
                    <ul className="nav navbar-nav">
                        <li id="mainMenuIndex"><a href="index.html">运营平台</a></li>
                        <li id="mainMenuCompany"><a href="company_list.html">企业管理</a></li>
                        <li id="mainMenuOrg"><a href="org_list.html">服务机构管理</a></li>
                        <li id="mainMenuCoupon"><a href="coupon_list.html">服务券管理</a></li>
                        <li id="mainMenuOrder"><a href="order_list.html">订单管理</a></li>
                        <li id="mainMenuSetting"><a href="setting.html">系统设定</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
});