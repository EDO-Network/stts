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
                    {
                        //<div className="logo-title">
                        //    <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                        //    &nbsp;小微企业创业创新服务券网上平台&nbsp;
                        //    <span className="service-icon">SERVICE</span>
                        //</div>
                    }
                    <div className="menu-main">
                        <ul className="clearfix">
                            <li className="title">
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                &nbsp;小微企业创业创新服务券网上平台&nbsp;
                                <span className="service-icon">SERVICE</span>
                            </li>
                            <li id="mainMenuLogin" style={{display:"none"}}><a href="login.html">用户登录</a></li>
                            <li id="mainMenuSelectCompany" style={{display:"none"}}><a
                                href="select_company.html">选择企业</a></li>
                            <li id="mainMenuRegisterUser" style={{display:"none"}}><a href="register_user.html">注册用户</a>
                            </li>
                            <li id="mainMenuAccountProfile" style={{display:"none"}}><a
                                href="account_profile.html">账户设置</a></li>
                            <li id="mainMenuPasswordReset" style={{display:"none"}}><a
                                href="password_reset.html">重置密码</a></li>
                            <li id="mainMenuIndex"><a href="index.html">首页</a></li>
                            <li id="mainMenuService"><a href="service_list.html">服务产品</a></li>
                            <li id="mainMenuOrg"><a href="org_list.html">服务机构</a></li>
                            <li id="mainMenuOrgRegister"><a href="org/org_info.html">我要入驻商城</a></li>
                            <li id="mainMenuCompanyRegister"><a href="com/company.html">我要发布需求</a></li>
                        </ul>
                    </div>
                    {
                        //<div className="search-wrap nav nav-tabs pull-left">
                        //    <ul className="search-classify nav nav-tabs" role="tablist">
                        //        <li className="active"><a href="#service" role="tab" data-toggle="tab">服务</a></li>
                        //        <li><a href="#org" role="tab" data-toggle="tab">机构</a></li>
                        //    </ul>
                        //    <div className="input-group">
                        //        <input type="text" className="search-content form-control"/>
                        //        <span className="input-group-btn">
                        //            <button className="btn btn-default" type="button">
                        //                <i className="fa fa-search" aria-hidden="true"></i>
                        //            </button>
                        //        </span>
                        //    </div>
                        //</div>
                    }
                </div>
            </div>
        );
    }
});