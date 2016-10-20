var OrgList = React.createClass({
    render: function () {
        return (
            <div>
                <Top isLogin="true"/>
                <Header activeMenuID="mainMenuOrg"/>

                <div className="container">
                    <div className="pull-left w-222">
                        <OrgHot/>
                    </div>
                    <div className="ml-240">
                        <ol className="breadcrumb">
                            <li>您所在的位置：</li>
                            <li><a href="index.html">首页</a></li>
                            <li><a href="service_org.html">服务机构</a></li>
                            <li className='active'>服务机构一览</li>
                        </ol>
                        <OrgSearchArea/>
                        <OrgItem/>
                        <OrgItem/>
                        <OrgItem/>
                        <OrgItem/>
                        <OrgItem/>
                        <Paging/>
                    </div>
                </div>
            </div>
        );
    }
});

var OrgHot = React.createClass({
    render: function () {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">热门机构</div>
                <div className="panel-body">
                    <OrgPreview/>
                    <OrgPreview/>
                    <OrgPreview/>
                    <OrgPreview/>
                    <OrgPreview/>
                </div>
            </div>
        );
    }
});

var OrgSearchArea = React.createClass({
    render: function () {
        return (
            <div className="panel panel-default overflow-hidden">
                <div className="panel-body">
                    <div className="row mb-10">
                        <div className="col-sm-6">
                            <div className="input-group">
                                <input type="text" className="form-control"/>
                                    <span className="input-group-btn">
                                    <button className="btn btn-default" type="button">搜&nbsp;索</button>
                                    </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});


var OrgItem = React.createClass({
    render: function () {
        return (
            <div className="overflow-hidden border-bottom-dotted mb-10 pv-10">
                <div className="col-sm-2">
                    <img src="../img/sample/org_small.jpg"/>
                </div>
                <div className="col-sm-4 border-right-dotted">
                    <div><a href="#">中国出口信用保险公司</a></div>
                    <br/>

                    <div>宁波市海曙区中山东路145号</div>
                </div>
                <div className="col-sm-3 border-right-dotted">
                    <div>服务产品数：6个</div>
                    <br/>

                    <div>服务次数：114次</div>
                </div>
                <div className="col-sm-3">
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
    <OrgList />,
    document.getElementById('page')
);