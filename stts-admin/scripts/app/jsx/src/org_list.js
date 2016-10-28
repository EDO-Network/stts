var OrgList = React.createClass({
    handleSortList: function () {
        var servicePreview = $("#servicePreview");
        var serviceList = $("#serviceList");
        $("#servicePreview").hide();
        $("#serviceList").show();
        $("#sortStyleList").addClass("active");
        $("#sortStylePreview").removeClass("active");
    },
    handleSortPreview: function () {
        var servicePreview = $("#servicePreview");
        var serviceList = $("#serviceList");
        $("#serviceList").hide();
        $("#servicePreview").show();
        $("#sortStyleList").removeClass("active");
        $("#sortStylePreview").addClass("active");
    },
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

                        <div className="sort-row overflow-hidden">
                            <div className="sort-inner">
                                <ul className="sorts">
                                    <li className="sort active"><a href="#">默认</a></li>
                                    <li className="sort"><a href="#">服务次数</a></li>
                                    <li className="sort"><a href="#">好评率</a></li>
                                </ul>
                                <ul className="sort-style">
                                    <li id="sortStylePreview" className="active" onClick={this.handleSortPreview}>
                                        <a href="javascript:void(0)">
                                            <i className="fa fa-th-large" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li id="sortStyleList" onClick={this.handleSortList}><a href="javascript:void(0)"><i
                                        className="fa fa-th-list"
                                        aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div id="servicePreview" className="overflow-hidden">
                            <div className="row mb-10">
                                <div className="col-sm-4"><OrgPreview/></div>
                                <div className="col-sm-4"><OrgPreview/></div>
                                <div className="col-sm-4"><OrgPreview/></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4"><OrgPreview/></div>
                                <div className="col-sm-4"><OrgPreview/></div>
                                <div className="col-sm-4"><OrgPreview/></div>
                            </div>
                        </div>

                        <div id="serviceList" style={{display: "none"}}>
                            <OrgItem/>
                            <OrgItem/>
                            <OrgItem/>
                            <OrgItem/>
                            <OrgItem/>
                        </div>
                        <Paging/>
                    </div>
                </div>
                <Footer/>
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
    handleCondition: function () {
        var $moreConditionWrap = $("#moreConditionWrap");
        if ($moreConditionWrap.is(":visible")) {
            $("#moreConditionWrap").hide(500);
            $("#btnCondition").text("更多筛选条件");
        } else {
            $("#moreConditionWrap").show(500);
            $("#btnCondition").text("收起筛选条件");
        }
    },
    render: function () {
        return (
            <div className="panel panel-default overflow-hidden">
                <div className="panel-body">
                    <div className="form-inline mb-10">
                        <div className="form-group">
                            <label>机构名称</label>&nbsp;
                            <input type="text" className="form-control"/>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button type="button" className="btn btn-default">搜&nbsp;索</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a id="btnCondition" className="btn" onClick={this.handleCondition}>更多筛选条件
                        </a>
                    </div>

                    <div id="moreConditionWrap" style={{display: "none"}}
                         className="overflow-hidden">
                        <hr/>
                        <div className="form-inline mb-10">
                            <div className="form-group">
                                <label>机构地址</label>&nbsp;
                                <input type="text" className="form-control"/>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;

                            <div className="form-group">
                                <label>机构标签</label>&nbsp;
                                <input type="text" className="form-control"/>
                            </div>

                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button className="btn btn-sm btn-default">
                                清空条件
                            </button>
                            &nbsp;&nbsp;
                            <button className=" btn btn-sm btn-primary">
                                <span className="fa fa-search"></span>&nbsp;搜索
                            </button>
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
            <div className="overflow-hidden border-bottom-dotted mb-10">
                <div className="col-sm-1">
                    <a href="org_detail.html"><img src="../img/sample/org_small.jpg"/></a>
                </div>
                <div className="col-sm-3 border-right-dotted">
                    <div><a href="org_detail.html">中国出口信用保险公司</a></div>
                    <br/>

                    <div>宁波市海曙区中山东路145号</div>
                </div>
                <div className="col-sm-3 border-right-dotted">
                    <br/>
                    <div>机构标签：风险投资，基金服务，人才引培</div>
                </div>
                <div className="col-sm-3 border-right-dotted">
                    <div className="">好评率：
                        <i className="fa fa-star text-danger font-size-12" aria-hidden="true"></i>
                        <i className="fa fa-star text-danger font-size-12" aria-hidden="true"></i>
                        <i className="fa fa-star text-danger font-size-12" aria-hidden="true"></i>
                        <i className="fa fa-star text-danger font-size-12" aria-hidden="true"></i>
                        <i className="fa fa-star text-danger font-size-12" aria-hidden="true"></i>
                    </div>
                    <br/>

                    <div>服务次数：114次</div>
                </div>
                <div className="col-sm-1">
                    <br/>
                    <button className="btn btn-default">查看机构详情</button>

                </div>
            </div>
        );
    }
});


ReactDOM.render(
    <OrgList />,
    document.getElementById('page')
);