var CompanyList = React.createClass({
    render: function () {
        return (
            <div>
                <Top/>
                <Header activeMenuID="mainMenuCompany"/>

                <div className="container">
                    <div className="pull-left w-222">
                        <div className="list-group">
                            <a href="company_list.html" className="list-group-item active">企业用户一览</a>
                            <a href="company_qualification_list.html" className="list-group-item">企业资质审核</a>
                        </div>
                    </div>
                    <div className="ml-240">
                        <ol className="breadcrumb">
                            <li>您所在的位置：</li>
                            <li><a href="index.html">企业管理</a></li>
                            <li className='active'>企业用户一览</li>
                        </ol>
                        <SearchArea/>

                        <div className="sort-row overflow-hidden">
                            <div className="sort-inner">
                                <ul className="sorts">
                                    <li className="sort active"><a href="#">默认</a></li>
                                    <li className="sort"><a href="#">企业类型</a></li>
                                    <li className="sort"><a href="#">交易次数</a></li>
                                    <li className="sort"><a href="#">已使用服务券额</a></li>
                                    <li className="sort"><a href="#">所属区域</a></li>
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
                            <label>企业名称</label> &nbsp;
                            <input type="text" className="form-control"/>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="form-group">
                            <label>注册时间</label>&nbsp;
                            <select className="form-control">
                                <option>1个月</option>
                                <option>3个月</option>
                                <option>全部</option>
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
                                <label className="control-label col-sm-4">所在区域</label>

                                <div className="col-sm-8">
                                    <select className="form-control input-sm">
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-sm-8">
                                <label className="control-label col-sm-3">联系人</label>

                                <div className="col-sm-9">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group col-sm-4">
                                <label className="control-label col-sm-4">联系电话</label>

                                <div className="col-sm-8">
                                    <input type="text" className="form-control"/>
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
                        <div className="text-center">
                            <button className="btn btn-sm btn-default">
                                清空条件
                            </button>
                            &nbsp;&nbsp;
                            <button className=" btn btn-sm btn-primary">
                                <span className="fa fa-search"></span>&nbsp;搜索
                            </button>&nbsp;&nbsp;
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
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>企业名称</th>
                    <th>企业类型</th>
                    <th>交易次数</th>
                    <th>已使用服务券额</th>
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
                <td>宁波镇海</td>
                <td>李xx</td>
                <td>1283746371</td>
                <td>2016-02-12</td>
                <td>正常</td>
                <td><a href="company_detail.html">详情</a></td>
            </tr>
        );
    }
});

ReactDOM.render(
    <CompanyList />,
    document.getElementById('page')
);