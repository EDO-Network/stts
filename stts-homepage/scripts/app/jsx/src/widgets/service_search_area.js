var ServiceSearchArea = React.createClass({
    handleCondition: function () {
        var $moreConditionWrap = $("#moreConditionWrap");
        if ($moreConditionWrap.is(":visible")) {
            $("#moreConditionWrap").hide(1000);
            $("#btnCondition").text("更多筛选条件");
        } else {
            $("#moreConditionWrap").show(500);
            $("#btnCondition").text("收起筛选条件");
        }
    },
    render: function () {
        return (
            <div>
                <div className="panel panel-default overflow-hidden">
                    <div className="panel-body">
                        <div className="form-inline mb-10">
                            <div className="form-group">
                                <label>服务大类</label> &nbsp;

                                <select className="form-control">
                                    <option></option>
                                    <option>大分类1</option>
                                </select>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="form-group">
                                <label>服务小类</label> &nbsp;

                                <select className="form-control">
                                    <option></option>
                                    <option>小分类1</option>
                                </select>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button type="button" className="btn btn-default">搜&nbsp;索</button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <a id="btnCondition" className="btn"
                               onClick={this.handleCondition}>更多筛选条件
                            </a>
                        </div>
                        <div id="moreConditionWrap" style={{display: "none"}}
                             className="form-horizontal overflow-hidden">
                            <hr/>
                            <div className="row">
                                <div className="form-group col-sm-6">
                                    <label className="control-label col-sm-4">服务名称</label>

                                    <div className=" col-sm-8">
                                        <input className="form-control input-sm" type="text"/>
                                    </div>
                                </div>
                                <div className="form-group col-sm-6">
                                    <label className="control-label col-sm-4">状态</label>

                                    <div className=" col-sm-8">
                                        <select className="form-control input-sm">
                                            <option></option>
                                            <option>上架审核中</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">

                                <div className="form-group col-sm-6">
                                    <label className="control-label col-sm-4">服务费用</label>

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

                                <div className="form-group col-sm-6">
                                    <label className="control-label col-sm-4">修改时间</label>

                                    <div className=" col-sm-8 ">
                                        <div className="input-group input-group-sm">
                                            <input type="text" className="form-control input-sm "
                                                   defaultValue="2016-10-23"/>
                                            <span className="input-group-btn font-size-12 width-10 text-center">-</span>
                                            <input type="text" className="form-control input-sm"
                                                   defaultValue="2016-12-23"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-sm-6 col-sm-offset-3">
                                    <div className="col-sm-4">
                                        <button className="btn btn-sm btn-default col-sm-12">
                                            <span className="fa fa-clear"></span>&nbsp;清空条件
                                        </button>
                                    </div>
                                    <div className="col-sm-4">
                                        <button className=" btn btn-sm btn-primary col-sm-12">
                                            <span className="fa fa-search"></span>&nbsp;搜索
                                        </button>
                                    </div>
                                    <div className="col-sm-4">
                                        <button className=" btn btn-sm btn-warning col-sm-12">
                                            <span className="fa fa-file-text-o"></span>&nbsp;导出
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sort-row overflow-hidden">
                    <div className="sort-inner">
                        <ul className="sorts">
                            <li className="sort active"><a href="#">默认</a></li>
                            <li className="sort"><a href="#">订单时间</a></li>
                            <li className="sort"><a href="#">服务分类</a></li>
                            <li className="sort"><a href="#">价格</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});