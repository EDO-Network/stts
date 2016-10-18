var Header = React.createClass({
    render: function () {
        return (
            <nav className="navbar" role="navigation">
                <div className="navbar-inner container">
                    <div className="navbar-header width-240">
                        <div className="navbar-brand">
                            <span>企服超市</span><span>企业机构</span>
                        </div>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <MainMenu activeMenuID={this.props.activeMenuID}/>
                    </div>
                </div>
            </nav>
        );
    }
});


var MainMenu = React.createClass({
    componentDidMount: function () {
        var activeMenuID = this.props.activeMenuID;
        $("#" + activeMenuID).addClass("active");
    },
    render: function () {
        return (
            <ul className="nav navbar-nav">
                <li id="mainMenuDashboard">
                    <a href={SiteProperties.webURL + Page.creditSearch}>我的平台</a>
                </li>
                <li id="mainMenuOrder">
                    <a href={SiteProperties.webURL + Page.creditSearch}>我的订单</a>
                </li>
                <li id="mainMenuComment">
                    <a href={SiteProperties.webURL + Page.creditSearch}>我的评价</a>
                </li>
                <li id="mainMenuMessage">
                    <a href={SiteProperties.webURL + Page.creditSearch}>我的消息</a>
                </li>
                <li id="mainMenuAccount">
                    <a href={SiteProperties.webURL + Page.creditSearch}>账户设置</a>
                </li>
            </ul>
        );
    }
});