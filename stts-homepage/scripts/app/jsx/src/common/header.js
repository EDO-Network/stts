var Header = React.createClass({
    componentDidMount: function () {
        var activeMenuID = this.props.activeMenuID;

        if(activeMenuID == "mainMenuLogin"){
            $("#" + activeMenuID).show();
        }

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
                                <span className="service-icon">SERVICE</span>
                            </li>
                            <li id="mainMenuLogin" style={{display:"none"}}><a href="javascript:void(0)">用户登录</a></li>
                            <li id="mainMenuIndex"><a href="javascript:void(0)">首页</a></li>
                            <li id="mainMenuService"><a href="javascript:void(0)">服务产品</a></li>
                            <li id="mainMenuOrg"><a href="javascript:void(0)">服务机构</a></li>
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