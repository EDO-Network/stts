var ServiceList = React.createClass({
    render: function () {
        return (
            <div>
                <Top isLogin="true"/>
                <Header activeMenuID="mainMenuService"/>

                <div className="container">
                    <div className="pull-left w-222">
                        <NavCategory/>
                    </div>
                    <div className="ml-240">
                        <ol className="breadcrumb">
                            <li>您所在的位置：</li>
                            <li><a href="index.html">首页</a></li>
                            <li><a href="service_list.html">服务产品</a></li>
                            <li className='active'>服务产品一览</li>
                        </ol>
                        <ServiceSearchArea/>
                        <ServiceItem/>
                        <ServiceItem/>
                        <ServiceItem/>
                        <ServiceItem/>
                        <ServiceItem/>
                        <Paging/>
                    </div>
                </div>
            </div>
        );
    }
});

var ServiceItem = React.createClass({
    render: function () {
        return (
            <div className="overflow-hidden border-bottom-dotted mb-10 pv-10">
                <div className="col-sm-2">
                    <img src="../img/sample/service_small.jpg"/>
                </div>
                <div className="col-sm-4 border-right-dotted">
                    <div><a href="service_detail.html">财务审计</a></div>
                    <br/>
                    <div><a href="#">中国出口信用保险公司</a></div>
                </div>
                <div className="col-sm-3 border-right-dotted">
                    <div>服务分类：财务指导</div>
                    <br/>
                    <div>服务价格：1000元</div>
                </div>
                <div className="col-sm-3">
                    <div>申请次数：14次</div>
                    <br/>
                    <div>好评率：
                        <i className="fa fa-star text-gold" aria-hidden="true"></i>
                        <i className="fa fa-star text-gold" aria-hidden="true"></i>
                        <i className="fa fa-star text-gold" aria-hidden="true"></i>
                        <i className="fa fa-star text-gold" aria-hidden="true"></i>
                        <i className="fa fa-star text-gold" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <ServiceList />,
    document.getElementById('page')
);