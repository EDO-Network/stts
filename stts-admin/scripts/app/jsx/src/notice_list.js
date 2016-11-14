var NoticeList = React.createClass({
    render: function () {
        return (
            <div>
                <OrderArbitrationDialog/>
                <Top/>
                <Header activeMenuID="mainMenuIndex"/>

                <div className="container">
                    <div>
                        <div className="pull-left w-222">
                            <div className="list-group">
                                <a href="index.html" className="list-group-item">运营平台</a>
                                <a href="user_list.html" className="list-group-item">用户一览</a>
                                <a href="notice_list.html" className="list-group-item active">全网通知</a>
                            </div>
                        </div>

                        <div className="ml-240">
                            <ol className="breadcrumb">
                                <li>您所在的位置：</li>
                                <li><a href="dashboard.html">运营平台</a></li>
                                <li className='active'>全网通知一览</li>
                            </ol>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    全网通知一览
                                    <a href="#" className="pull-right" data-toggle="modal"
                                       data-target="#newNoticeDialog">发送新通知</a>
                                </div>
                                <div className="panel-body">
                                    <SearchArea/>
                                    <NoticeTable/>
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

var SearchArea = React.createClass({
    render: function () {
        return (
            <div className="form-horizontal overflow-hidden">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="form-group">
                            <div className="control-label col-sm-4">
                                <label>通知对象</label>
                            </div>
                            <div className="col-sm-8">
                                <select className="form-control">
                                    <option>全部</option>
                                    <option>企业</option>
                                    <option>服务机构</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                            <div className="control-label col-sm-4">
                                <label>发送时间</label>
                            </div>
                            <div className="col-sm-8">
                                <div className="input-group input-group">
                                    <input type="text" className="form-control"/>
                                                            <span
                                                                className="input-group-btn text-center font-size-12 width-10">-</span>
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                            <div className="control-label col-sm-3">
                                <label>分类</label>
                            </div>
                            <div className="col-sm-5">
                                <select className="form-control">
                                    <option>全网公告</option>
                                    <option>重要通知</option>
                                    <option>系统信息</option>
                                </select>
                            </div>
                            <div className="col-sm-4">
                                <button className=" btn btn-sm btn-primary">
                                    <span className="fa fa-search"></span>&nbsp;搜索
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var NoticeTable = React.createClass({
    render: function () {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>分类</th>
                    <th>通知对象</th>
                    <th>标题</th>
                    <th>内容</th>
                    <th>时间</th>
                </tr>
                </thead>
                <tbody>
                <TableRow/>
                <TableRow/>
                <TableRow/>
                <TableRow/>
                <TableRow/>
                </tbody>
            </table>
        );
    }
});

var TableRow = React.createClass({
    render: function () {
        return (
            <tr>
                <td>重要通知</td>
                <td>全部</td>
                <td>服务器维护通知</td>
                <td>xxxxxxxxxxxxxxxxx</td>
                <td>2016-01-01 18:00:01</td>
            </tr>
        );
    }
});


var OrderArbitrationDialog = React.createClass({
    render: function () {
        return (
            <div className="modal fade" id="newNoticeDialog" tabindex="-1" role="dialog"
                 aria-labelledby="newNoticeDialogLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"><span
                                aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title" id="orderArbitrationDialogLabel">发送新通知</h4>
                        </div>
                        <div className="modal-body">
                            <div className="form form-horizontal " role="form">
                                <div className="form-group">
                                    <label className="control-label col-sm-4">
                                        通知对象
                                    </label>

                                    <div className="col-sm-6">
                                        <select className="form-control">
                                            <option>全部</option>
                                            <option>企业</option>
                                            <option>服务机构</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="control-label col-sm-4">
                                        行业细分
                                    </label>

                                    <div className="col-sm-6">
                                        <label className="checkbox-inline">
                                            <input type="checkbox" id="inlineCheckbox1" value="option1"/> 人才引培
                                        </label>
                                        <label className="checkbox-inline">
                                            <input type="checkbox" id="inlineCheckbox2" value="option2"/> 技术创新
                                        </label>
                                        <label className="checkbox-inline">
                                            <input type="checkbox" id="inlineCheckbox3" value="option3"/> 财务指导
                                        </label>
                                        <label className="checkbox-inline">
                                            <input type="checkbox" id="inlineCheckbox1" value="option1"/> 法律维权
                                        </label>
                                        <label className="checkbox-inline">
                                            <input type="checkbox" id="inlineCheckbox2" value="option2"/> 市场拓展
                                        </label>
                                        <label className="checkbox-inline">
                                            <input type="checkbox" id="inlineCheckbox3" value="option3"/> 管理咨询
                                        </label>
                                        <label className="checkbox-inline">
                                            <input type="checkbox" id="inlineCheckbox3" value="option3"/> 检验检测认证
                                        </label>
                                        <label className="checkbox-inline">
                                            <input type="checkbox" id="inlineCheckbox1" value="option1"/> 知识产权保护
                                        </label>
                                        <label className="checkbox-inline">
                                            <input type="checkbox" id="inlineCheckbox2" value="option2"/> 创业辅导
                                        </label>
                                        <label className="checkbox-inline">
                                            <input type="checkbox" id="inlineCheckbox3" value="option3"/> 公共服务
                                        </label>
                                        <label className="checkbox-inline">
                                            <input type="checkbox" id="inlineCheckbox3" value="option3"/> 其他
                                        </label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="control-label col-sm-4">
                                        分类
                                    </label>

                                    <div className="col-sm-6">
                                        <select className="form-control">
                                            <option>全网公告</option>
                                            <option>重要通知</option>
                                            <option>系统信息</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="control-label col-sm-4">
                                        标题
                                    </label>

                                    <div className="col-sm-6">
                                        <input className="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="control-label col-sm-4">
                                        内容
                                    </label>

                                    <div className="col-sm-6">
                                        <textarea className="form-control" rows="5"></textarea>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="modal-footer ">
                            <div className="text-center">
                                <button type="button" className="btn btn-default " data-dismiss="modal">发送</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});


ReactDOM.render(
    <NoticeList/>,
    document.getElementById('page')
);