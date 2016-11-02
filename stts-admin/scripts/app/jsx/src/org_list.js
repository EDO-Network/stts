var CompanyList = React.createClass({
    render: function () {
        return (
            <div>
                <Top/>
                <Header activeMenuID="mainMenuOrg"/>

                <div className="container">
                    <div className="pull-left w-222">
                        <div className="list-group">
                            <a href="org_list.html" className="list-group-item active">服务机构一览</a>
                            <a href="org_qualification_list.html" className="list-group-item">服务机构资质审核</a>
                            <a href="service_list.html" className="list-group-item">服务产品一览</a>
                            <a href="service_qualification_list.html" className="list-group-item">服务产品上架</a>
                        </div>
                    </div>
                    <div className="ml-240">
                        <ol className="breadcrumb">
                            <li>您所在的位置：</li>
                            <li><a href="org_list.html">服务机构管理</a></li>
                            <li className='active'>服务机构一览</li>
                        </ol>
                        <SearchArea/>

                        <div className="sort-row overflow-hidden">
                            <div className="sort-inner">
                                <ul className="sorts">
                                    <li className="sort active"><a href="#">默认</a></li>
                                    <li className="sort"><a href="#">企业类型</a></li>
                                    <li className="sort"><a href="#">服务次数</a></li>
                                    <li className="sort"><a href="#">已获得服务券额</a></li>
                                    <li className="sort"><a href="#">上架产品总数</a></li>
                                    <li className="sort"><a href="#">所属区域</a></li>
                                    <li className="sort"><a href="#">好评率</a></li>
                                </ul>
                            </div>
                        </div>
                        <CompanyTable/>
                        <Paging/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
});

var SearchArea = React.createClass({
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
                            <label>服务机构名称</label> &nbsp;
                            <input type="text" className="form-control"/>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="form-group">
                            <label>机构标签</label>&nbsp;
                            <select className="form-control">
                                <option>联营</option>
                                <option>示范</option>
                            </select>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button type="button" className="btn btn-default">搜&nbsp;索</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a id="btnCondition" className="btn" onClick={this.handleCondition}>更多筛选条件
                        </a>
                    </div>
                    <div id="moreConditionWrap" style={{display: "none"}}
                         className="form-horizontal font-size-12 overflow-hidden">
                        <hr/>
                        <div className="row">
                            <div className="form-group col-sm-8">
                                <label className="control-label col-sm-3">企业类型</label>

                                <div className="col-sm-9">
                                    <label className="checkbox-inline">
                                        <input type="checkbox"/> 企业
                                    </label>&nbsp;
                                    <label className="checkbox-inline">
                                        <input type="checkbox"/> 事业单位
                                    </label>&nbsp;
                                    <label className="checkbox-inline">
                                        <input type="checkbox"/> 社会团体
                                    </label>&nbsp;
                                    <label className="checkbox-inline">
                                        <input type="checkbox"/> 个体工商户
                                    </label>&nbsp;
                                    <label className="checkbox-inline">
                                        <input type="checkbox"/> 其他
                                    </label>
                                </div>
                            </div>
                            <div className="form-group col-sm-4">
                                <label className="control-label col-sm-4">账户状态</label>

                                <div className=" col-sm-8">
                                    <select className="form-control">
                                        <option>有效</option>
                                        <option>冻结</option>
                                        <option>查封</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-sm-8">
                                <label className="control-label col-sm-3">注册／联系地址</label>

                                <div className="col-sm-9">
                                    <input type="text" className="form-control" placeholder="注册地址或者联系地址"/>
                                </div>
                            </div>
                            <div className="form-group col-sm-4">
                                <label className="control-label col-sm-5">所在区域</label>

                                <div className="col-sm-7">
                                    <select className="form-control input-sm">
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-sm-4">
                                <label className="control-label col-sm-6">联系电话</label>

                                <div className="col-sm-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group col-sm-4">
                                <label className="control-label col-sm-6">联系电话</label>

                                <div className="col-sm-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group col-sm-4">
                                <label className="control-label col-sm-6">注册时间</label>

                                <div className="col-sm-6">
                                    <select className="form-control">
                                        <option>1个月</option>
                                        <option>3个月</option>
                                        <option>全部</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-sm-8">
                                <label className="control-label col-sm-3">已使用服务券额</label>

                                <div className=" col-sm-9">
                                    <div className="input-group input-group">
                                        <input type="text" className="form-control"/>
                                        <span className="input-group-btn text-center font-size-12 width-10">-</span>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-sm-4">
                                <label className="control-label col-sm-4">交易次数</label>

                                <div className=" col-sm-8">
                                    <div className="input-group input-group">
                                        <input type="text" className="form-control"/>
                                        <span className="input-group-btn text-center font-size-12 width-10">-</span>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-sm-8">
                                <label className="control-label col-sm-3">未兑付服务券额</label>

                                <div className=" col-sm-9">
                                    <div className="input-group input-group">
                                        <input type="text" className="form-control"/>
                                        <span className="input-group-btn text-center font-size-12 width-10">-</span>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-sm-4">
                                <label className="control-label col-sm-4">服务产品件数</label>

                                <div className=" col-sm-8">
                                    <div className="input-group input-group">
                                        <input type="text" className="form-control"/>
                                        <span className="input-group-btn text-center font-size-12 width-10">-</span>
                                        <input type="text" className="form-control"/>
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
                            &nbsp;&nbsp;
                            <button className=" btn btn-sm btn-warning">
                                <span className="fa fa-file-text-o"></span>&nbsp;导出
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var CompanyTable = React.createClass({
    render: function () {
        return (
            <table className="table table-hover font-size-12">
                <thead>
                <tr>
                    <th>服务机构名称</th>
                    <th>企业类型</th>
                    <th>服务次数</th>
                    <th>已获得服务券额</th>
                    <th>上架产品总数</th>
                    <th>机构标签</th>
                    <th>所属区域</th>
                    <th>联系人</th>
                    <th>联系电话</th>
                    <th>审核时间</th>
                    <th>账户状态</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <CompanyTableRow/>
                <CompanyTableRow/>
                <CompanyTableRow/>
                <CompanyTableRow/>
                <CompanyTableRow/>
                </tbody>
            </table>
        );
    }
});

var CompanyTableRow = React.createClass({
    render: function () {
        return (
            <tr>
                <td>XXXX科技有限公司</td>
                <td>企业</td>
                <td>2</td>
                <td>1000</td>
                <td>6</td>
                <td>联营</td>
                <td>宁波镇海</td>
                <td>李xx</td>
                <td>1283746371</td>
                <td>2016-02-12</td>
                <td>正常</td>
                <td><a href="org_detail.html">详情</a></td>
            </tr>
        );
    }
});

ReactDOM.render(
    <CompanyList />,
    document.getElementById('page')
);