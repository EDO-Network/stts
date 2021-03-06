var ServiceCreate = React.createClass({

    render: function () {
        return (
            <div>
                <Top/>
                <Header activeMenuID="mainMenuService"/>

                <div className="container">
                    <div>
                        <div className="pull-left w-222">

                            <div className="list-group">
                                <a href="service_list.html" className="list-group-item">上架服务产品一览</a>
                                <a href="service_list.html" className="list-group-item">上架服务产品一览</a>
                                <a href="service_list.html" className="list-group-item">下架服务产品一览</a>
                                <a href="service_create.html" className="list-group-item active">服务发布</a>
                            </div>
                        </div>

                        <div className="ml-240 overflow-hidden ">
                            <ol className="breadcrumb">
                                <li>您所在的位置：</li>
                                <li><a href="dashboard.html">服务机构</a></li>
                                <li><a href="service_list.html">服务产品</a></li>
                                <li className='active'>服务发布</li>
                            </ol>


                            <ul className="nav nav-tabs text-center" role="tablist">
                                <li role="presentation" className="tab active">
                                    <a href="#info" role="tab" data-toggle="tab">服务产品</a>
                                </li>
                                <li role="presentation">
                                    <a href="#history" role="tab" data-toggle="tab">初始案例</a>
                                </li>
                            </ul>
                            <div className="tab-content">

                                <ServiceNew/>
                                <ServiceHistory/>

                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
});

var ServiceNew = React.createClass({

    componentDidMount: function () {
        var editor;
        KindEditor.ready(function (K) {
            editor = K.create('textarea[name="content"]', {
                allowFileManager: true
            });
        });
    },
    render: function () {
        return (
            <div role="tabpanel" className="tab-pane active" id="info">
                <div className="row">
                    <div className="col-sm-3">
                        <img className="w-per-100" src="../../img/common/org-preview.jpg"/>
                        <button className="col-sm-12 btn btn-default mt-20 ">展示标题图上传</button>
                    </div>
                    <div className="col-sm-9 form form-horizontal " role="form">
                        <div className="form-group">
                            <label className="control-label col-sm-3">
                                服务名称<span className="text-danger ml-5">*</span>
                            </label>

                            <div className="col-sm-7">
                                <input className="form-control" type="text"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-3">
                                服务大类<span className="text-danger ml-5">*</span>
                            </label>

                            <div className="col-sm-7">
                                <select className="form-control">
                                    <option/>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-sm-3">
                                服务小类<span className="text-danger ml-5">*</span>
                            </label>

                            <div className="col-sm-7">
                                <select className="form-control">
                                    <option/>
                                </select>
                            </div>
                        </div>
                        <div className="form-group form-inline">
                            <label className="control-label col-sm-3">
                                服务对象<span className="text-danger ml-5">*</span>
                            </label>

                            <div className="col-sm-7">
                                <div className="checkbox mr-10">
                                    <label>
                                        <input type="checkbox"/> 普通企业
                                    </label>
                                </div>

                                <div className="checkbox mr-10">
                                    <label>
                                        <input type="checkbox"/> 小型企业
                                    </label>
                                </div>

                                <div className="checkbox mr-10">
                                    <label>
                                        <input type="checkbox"/> 微型企业
                                    </label>
                                </div>

                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox"/> 小升规
                                    </label>
                                </div>
                            </div>

                        </div>

                        <div className="form-group form-inline">
                            <label className="control-label col-sm-3">
                                服务价格<span className="text-danger ml-5">*</span>
                            </label>

                            <div className="col-sm-8">
                                <label>
                                    <input type="radio" name="optionsRadios" checked/> 免费
                                </label>
                            </div>
                        </div>
                        <div className="form-group form-inline">
                            <label className="control-label col-sm-3">
                            </label>

                            <div className="col-sm-8">
                                <label>
                                    <input type="radio" name="optionsRadios"/> 标品
                                </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group form-inline">
                            <label className="control-label col-sm-3">
                            </label>

                            <div className="col-sm-8">
                                <label>
                                    <input type="radio" name="optionsRadios"/> 非标品
                                </label>&nbsp;&nbsp;

                                <input type="text" className="form-control"/>
                                <label className="text-center width-10">~</label>
                                <input type="text" className="form-control"/>
                            </div>
                        </div>

                        <div className="form-group form-inline">
                            <label className="control-label col-sm-3">
                                收费标准<span className="text-danger ml-5">*</span>
                            </label>

                            <div className="col-sm-7">
                                <textarea rows="3" className=" form-control" cols="48"></textarea>
                            </div>

                        </div>
                        <div className="form-group form-inline">
                            <label className="control-label col-sm-3">
                                服务方式<span className="text-danger ml-5">*</span>
                            </label>

                            <div className="col-sm-7">
                                <div className="checkbox mr-10">
                                    <label>
                                        <input type="checkbox"/> 电话服务
                                    </label>
                                </div>

                                <div className="checkbox mr-10">
                                    <label>
                                        <input type="checkbox"/> 上门服务
                                    </label>
                                </div>

                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox"/> 网络服务
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group form-inline">
                            <label className="control-label col-sm-3">
                                支付服务券<span className="text-danger ml-5">*</span>
                            </label>

                            <div className="col-sm-7">
                                <div className="radio disabled  mr-10">
                                    <label>
                                        <input type="radio" checked="checked"
                                               disabled/> 可用
                                    </label>
                                </div>

                                <div className="radio disabled">
                                    <label>
                                        <input type="radio" disabled/> 不可用
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-3">
                                合同模版<span className="text-danger ml-5">*</span>
                            </label>

                            <div className="col-sm-7">
                                <button className="btn btn-default">上&nbsp;传</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;<a href="#">去云合同制作模板</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-20">
                    <h4>服务详细内容描述</h4>
                <textarea name="content" className="w-per-100 "
                          style={{height: "300px"}}></textarea>
                </div>

                <div className="text-center">
                    <button type="button" className="btn btn-primary">提交</button>
                    &nbsp;&nbsp;
                    <button type="button" className="btn btn-default">返回</button>
                </div>
            </div>
        );
    }
});


var ServiceHistory = React.createClass({
    render: function () {
        return (
            <div role="tabpanel" className="tab-pane" id="history">
                <div className="col-sm-6">
                    <button className="btn btn-success btn-sm w-100 mr-10" data-toggle="modal" data-target="#addModal">
                        <span className="fa fa-plus mr-10"></span>添加
                    </button>
                    <button className="btn btn-default btn-sm w-100"><span
                        className="fa fa-times-circle-o mr-10"></span>删除
                    </button>
                </div>
                <div className="col-sm-6">
                    <button className="btn badge-warning btn-sm w-100 mr-10"><span
                        className="fa fa-upload mr-10"></span>批量导入
                    </button>
                    <button className="btn btn-info btn-sm w-100 mr-10"><span className="fa fa-download mr-10"></span>批量导出
                    </button>
                </div>

                <div className="mt-20 col-sm-12">
                    <table className="table  table-hover">
                        <thead>
                        <tr>
                            <th></th>
                            <th>服务时间</th>
                            <th>企业名称</th>
                            <th>服务名称</th>
                            <th>服务评价</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td>2016-01-01&nbsp;～&nbsp;2016-01-10</td>
                            <td>xxx科技有限公司</td>
                            <td>质量检测</td>
                            <td className="text-danger">
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>

                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <input type="checkbox"/></td>
                            <td>2016-01-01&nbsp;～&nbsp;2016-01-10</td>
                            <td>xxx科技有限公司</td>
                            <td>质量检测</td>
                            <td className="text-danger">
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>

                            </td>
                        </tr>
                        <tr>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td>2016-01-01&nbsp;～&nbsp;2016-01-10</td>
                            <td>xxx科技有限公司</td>
                            <td>质量检测</td>
                            <td className="text-danger">
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>

                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <input type="checkbox"/></td>
                            <td>2016-01-01&nbsp;～&nbsp;2016-01-10</td>
                            <td>xxx科技有限公司</td>
                            <td>质量检测</td>
                            <td className="text-danger">
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <Paging/>
                    <HistoryNewModal/>
                </div>
            </div>
        );
    }
});

var HistoryNewModal = React.createClass({
    render: function () {
        return (
            <div className="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="addModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"><span
                                aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title" id="addModalLabel">初始案例添加</h4>
                        </div>
                        <div className="modal-body">
                            <div className="form form-horizontal " role="form">
                                <div className="form-group">
                                    <label className="control-label col-sm-3">
                                        服务大类<span className="text-danger ml-5">*</span>
                                    </label>

                                    <div className="col-sm-8">
                                        <select className="form-control">
                                            <option/>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="control-label col-sm-3">
                                        服务小类<span className="text-danger ml-5">*</span>
                                    </label>

                                    <div className="col-sm-8">
                                        <select className="form-control">
                                            <option/>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-3">
                                        服务名称<span className="text-danger ml-5">*</span>
                                    </label>

                                    <div className="col-sm-8">
                                        <input className="form-control" type="text"/>
                                    </div>
                                </div>

                                <div className="form-group form-inline">
                                    <label className="control-label col-sm-3">
                                        服务时间<span className="text-danger ml-5">*</span>
                                    </label>

                                    <div className="col-sm-8">
                                        <input type="text" className="form-control"/>
                                        <span className="w-50 text-center"> ～ </span>
                                        <input type="text" className="form-control"/>
                                    </div>

                                </div>

                                <div className="form-group">
                                    <label className="control-label col-sm-3">
                                        实际费用<span className="text-danger ml-5">*</span>
                                    </label>

                                    <div className="col-sm-8  ">
                                        <div className="input-group">
                                                    <span className="input-group-addon "><span
                                                        className="fa fa-rmb"></span></span>
                                            <input className="form-control" type="text"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="control-label col-sm-3">
                                        服务评价<span className="text-danger ml-5">*</span>
                                    </label>

                                    <div className="col-sm-8 ">

                                        <div className="form-control-static text-danger">

                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                </div>


                                <div className="form-group">
                                    <label className="control-label col-sm-3">
                                        企业名称<span className="text-danger ml-5">*</span>
                                    </label>

                                    <div className="col-sm-8">
                                        <div className="col-sm-8">
                                            <input className="form-control" type="text"/>
                                        </div>

                                        <div className="col-sm-4">
                                            <a href="#" className="btn">搜&nbsp;索</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="modal-footer ">
                            <div className="text-center">
                                <button type="button" className="btn btn-primary ">
                                    <span className="fa fa-save "></span> 提交
                                </button>
                                <button type="button" className="btn btn-default " data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
ReactDOM.render(
    <ServiceCreate />,
    document.getElementById('page')
);