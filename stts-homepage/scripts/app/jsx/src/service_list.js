var ServiceList = React.createClass({
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

                        <div className="sort-row overflow-hidden">
                            <div className="sort-inner">
                                <ul className="sorts">
                                    <li className="sort active"><a href="#">默认</a></li>
                                    <li className="sort"><a href="#">申请次数</a></li>
                                    <li className="sort"><a href="#">好评率</a></li>
                                    <li className="sort"><a href="#">价格</a></li>
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
                                <div className="col-sm-4"><ServicePreview/></div>
                                <div className="col-sm-4"><ServicePreview/></div>
                                <div className="col-sm-4"><ServicePreview/></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4"><ServicePreview/></div>
                                <div className="col-sm-4"><ServicePreview/></div>
                                <div className="col-sm-4"><ServicePreview/></div>
                            </div>
                        </div>

                        <div id="serviceList" style={{display: "none"}}>
                            <ServiceItem/>
                            <ServiceItem/>
                            <ServiceItem/>
                            <ServiceItem/>
                            <ServiceItem/>
                        </div>
                        <Paging/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
});

var ServiceSearchArea = React.createClass({
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
                            <label>服务名称</label> &nbsp;
                            <input type="text" className="form-control"/>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;
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
                         className="form-horizontal overflow-hidden font-size-12">
                        <hr/>
                        <div className="row">
                            <div className="form-group col-sm-4">
                                <label className="control-label col-sm-4">服务大类</label>

                                <div className=" col-sm-8">
                                    <select className="form-control input-sm">
                                        <option></option>
                                        <option>分类1</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group col-sm-4">
                                <label className="control-label col-sm-4 pl-0">服务小类</label>

                                <div className=" col-sm-8">
                                    <select className="form-control input-sm">
                                        <option></option>
                                        <option>分类1</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group col-sm-4">
                                <label className="control-label col-sm-4">价格范围</label>

                                <div className=" col-sm-8 ">
                                    <div className="input-group input-group-sm">

                                        <input type="text" className="form-control input-sm text-right"
                                               defaultValue="100"/>

                                        <span className="input-group-btn text-center font-size-12 width-10">-</span>


                                        <input type="text" className="form-control input-sm text-right"
                                               defaultValue="500"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
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

var ServiceItem = React.createClass({
    render: function () {
        return (
            <div className="overflow-hidden border-bottom-dotted mb-10 pv-10">
                <div className="col-sm-4 border-right-dotted">
                    <div className="col-sm-4">
                        <a href="service_detail.html">
                            <img src="../img/sample/service_small.jpg"/>
                        </a>
                    </div>
                    <div className="col-sm-8">
                        <div><a href="service_detail.html">高管培训</a></div>
                        <br/>

                        <div><a href="#">中国出口信用保险公司</a></div>
                    </div>
                </div>
                <div className="col-sm-3 border-right-dotted">
                    <div>服务大类：人才引培</div>
                    <br/>

                    <div>服务小类：高层培训</div>
                </div>
                <div className="col-sm-3 border-right-dotted">
                    <div>服务价格：2000～5000元</div>
                    <br/>

                    <div>收费标准：每月3000元</div>
                </div>
                <div className="col-sm-2">
                    <div className="font-size-12">好评率：
                        <i className="fa fa-star text-gold" aria-hidden="true"></i>
                        <i className="fa fa-star text-gold" aria-hidden="true"></i>
                        <i className="fa fa-star text-gold" aria-hidden="true"></i>
                        <i className="fa fa-star text-gold" aria-hidden="true"></i>
                        <i className="fa fa-star text-gold" aria-hidden="true"></i>
                    </div>
                    <br/>

                    <div>申请次数：14次</div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <ServiceList />,
    document.getElementById('page')
);