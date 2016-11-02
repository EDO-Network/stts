var ServiceList = React.createClass({

    render: function () {
        return (
            <div>
                <Top/>
                <Header activeMenuID="mainMenuOrg"/>

                <div className="container">
                    <div>
                        <div className="pull-left w-222">
                            <a href="org_list.html" className="list-group-item">服务机构一览</a>
                            <a href="org_qualification_list.html" className="list-group-item">服务机构资质审核</a>
                            <a href="service_list.html" className="list-group-item active">服务产品一览</a>
                            <a href="service_qualification_list.html" className="list-group-item">服务产品上架</a>
                        </div>

                        <div className="ml-240">

                            <ol className="breadcrumb">
                                <li>您所在的位置：</li>
                                <li><a href="org_list.html">服务机构管理</a></li>
                                <li className='active'>服务产品一览</li>
                            </ol>
                            <div className="overflow-hidden">
                                <ServiceListContent/>
                                <Paging/>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
});

ReactDOM.render(
    <ServiceList />,
    document.getElementById('page')
);