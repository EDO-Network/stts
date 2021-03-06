var ServiceList = React.createClass({

    render: function () {
        return (
            <div>
                <Top/>
                <Header activeMenuID="mainMenuService"/>

                <div className="container">
                    <div>
                        <div className="pull-left w-222">
                            <div className="list-group">
                                <a href="service_list.html" className="list-group-item active">上架服务产品一览</a>
                                <a href="service_list.html" className="list-group-item">上架服务产品一览</a>
                                <a href="service_list.html" className="list-group-item">下架服务产品一览</a>
                                <a href="service_create.html" className="list-group-item">服务发布</a>
                            </div>
                        </div>

                        <div className="ml-240 overflow-hidden ">
                            <ol className="breadcrumb">
                                <li>您所在的位置：</li>
                                <li><a href="dashboard.html">服务机构</a></li>
                                <li><a href="service_list.html">服务产品</a></li>
                                <li className='active'>服务一览</li>
                            </ol>

                            <ul className="nav nav-tabs text-center" role="tablist" style={{width:"100%"}}>
                                <li role="presentation" className="tab active" style={{width:"25%"}}>
                                    <a href="#all" role="tab" data-toggle="tab">全部</a>
                                </li>
                                <li role="presentation" style={{width:"25%"}}>
                                    <a href="#onSale" role="tab" data-toggle="tab">上架
                                        <span className=" text-pink  ml-5">5</span>
                                    </a>
                                </li>
                                <li role="presentation" style={{width:"25%"}}>
                                    <a href="#inStock" role="tab" data-toggle="tab">下架
                                        <span className=" text-pink ml-5">4</span>
                                    </a>

                                </li>
                                <li role="presentation" style={{width:"25%"}}>
                                    <a href="#inApproval" role="tab" data-toggle="tab">申请中
                                        <span className=" text-pink ml-5">2</span></a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane active" id="all">
                                    <ServiceSearchArea/>
                                    <ServiceItem/>
                                    <ServiceItem/>
                                    <ServiceItem/>
                                    <ServiceItem/>
                                    <ServiceItem/>
                                    <Paging/>
                                </div>
                                <div role="tabpanel" className="tab-pane " id="onSale">
                                    <ServiceSearchArea/>
                                    <ServiceItem/>
                                    <ServiceItem/>
                                    <ServiceItem/>
                                    <ServiceItem/>
                                    <ServiceItem/>
                                    <Paging/>
                                </div>
                                <div role="tabpanel" className="tab-pane " id="inStock">
                                    <ServiceSearchArea/>
                                    <ServiceItem/>
                                    <ServiceItem/>
                                    <ServiceItem/>
                                    <ServiceItem/>
                                    <ServiceItem/>
                                    <Paging/>
                                </div>
                                <div role="tabpanel" className="tab-pane " id="inApproval">
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
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
});

var ServiceItem = React.createClass({
    render: function () {
        return (
            <div className=" panel panel-info">
                <div className="panel-heading">
                    <div className="row">
                        <span className="col-sm-4"> 服务名称：XXXXX服务1</span>
                        <span className="col-sm-4"> 最后修改时间：2016-06-01 18:00:29</span>
                        <span className="col-sm-4"> 最近上架时间：2016-06-01 18:00:29</span>
                    </div>

                </div>
                <div className="panel-body font-size-12">
                    <div className="row"></div>
                    <div className="col-sm-1 mt-10">
                        <img src="../../img/common/org-preview-small.jpg"/>
                    </div>
                    <div className="col-sm-11 ml-10 row">
                        <div className="col-sm-3 border-right-dotted">
                            <div className="row mt-20">
                                <strong className="col-sm-5 pl-0 text-right">服务大类:</strong>
                                <span className="col-sm-7 pl-0">人才引培</span></div>
                            <div className="row mt-20">
                                <strong className="col-sm-5 pl-0 text-right">服务小类:</strong>
                                <span className="col-sm-7 pl-0">高层培训</span>
                            </div>
                        </div>
                        <div className="col-sm-3 border-right-dotted">
                            <div className="row mt-20">
                                <strong className="col-sm-6 pl-0 text-right">服务价格:</strong>
                                <span className="col-sm-6 pl-0">2000～5000元</span></div>
                            <div className="row">
                                <strong className="col-sm-6 pl-0 text-right">收费标准:</strong>
                                <span className="col-sm-6 pl-0">收费标准：每月3000元</span></div>
                        </div>
                        <div className="col-sm-2 border-right-dotted">
                            <br/>
                            <div className="row mt-20">
                                <strong className="col-sm-6 pl-0 text-right">状态:</strong>
                                <span className="col-sm-6 pl-0">已下架</span>
                            </div>
                            <br/>
                        </div>
                        <div className="col-sm-2 border-right-dotted">
                            <div className="row mt-20 mb-20 ">
                                <strong className="col-sm-6 pl-0 text-right">好评率:</strong>

                                <div className="col-sm-6 pl-0 text-danger">
                                    <span className="fa fa-star"/><span className="fa fa-star"/>
                                    <span className="fa fa-star"/><span className="fa fa-star"/>
                                    <span className="fa fa-star"/>

                                </div>
                                <div className="row mt-20 ">
                                    <strong className="col-sm-6 pl-0 text-right">申请数:</strong>
                                    <span className="col-sm-6 pl-0">27 次</span>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-2  text-center">
                            <div className="text-center mt-20">
                                <a href="#">上架</a>&nbsp;&nbsp;
                                <a href="#">删除</a>
                            </div>
                            <div className="text-center">
                                <a href="#">下架</a>&nbsp;&nbsp;
                                <a href="#">修改</a>
                            </div>
                            <div className="text-center">
                                <a href="#">详细</a>
                            </div>
                        </div>
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