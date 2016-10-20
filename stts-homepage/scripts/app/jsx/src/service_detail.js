var ServiceDetail = React.createClass({
    render: function () {
        return (
            <div>
                <Top isLogin="true"/>
                <Header activeMenuID="mainMenuService"/>

                <div className="container">
                    <div className="pull-left w-222">
                        <OrgCard/>
                    </div>
                    <div className="ml-240">
                        <ol className="breadcrumb">
                            <li>您所在的位置：</li>
                            <li><a href="index.html">首页</a></li>
                            <li><a href="service_list.html">服务产品</a></li>
                            <li className='active'>服务详细</li>
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
});

var ServiceSummary = React.createClass({
    render: function () {
        return (
            <div>
                <h2>财务审计</h2>
                <div>
                    <div className="col-sm-4">
                        <p>所属分类：财务指导</p>
                        <p>服务价格：1～2万元</p>
                        <p>服务方式：电话服务,上门服务,网络服务</p>
                        <p>累计评价：
                            <i className="fa fa-star text-gold" aria-hidden="true"></i>
                            <i className="fa fa-star text-gold" aria-hidden="true"></i>
                            <i className="fa fa-star text-gold" aria-hidden="true"></i>
                            <i className="fa fa-star text-gold" aria-hidden="true"></i>
                            <i className="fa fa-star text-gold" aria-hidden="true"></i>
                        </p>
                    </div>
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4"></div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <ServiceDetail />,
    document.getElementById('page')
);