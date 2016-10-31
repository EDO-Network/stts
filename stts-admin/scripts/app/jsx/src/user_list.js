var UserList = React.createClass({
    render: function () {
        return (
            <div>
                <Top/>
                <Header activeMenuID="mainMenuIndex"/>

                <div className="container">
                    <div>
                        <div className="pull-left w-222">
                            <div className="list-group">
                                <a href="index.html" className="list-group-item">运营平台</a>
                                <a href="user_list.html" className="list-group-item active">用户一览</a>
                            </div>
                        </div>

                        <div className="ml-240">
                            <ol className="breadcrumb">
                                <li>您所在的位置：</li>
                                <li><a href="dashboard.html">运营平台</a></li>
                                <li className='active'>用户一览</li>
                            </ol>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    用户一览
                                    <a href="user_create.html" className="pull-right">添加新用户</a>
                                </div>
                                <div className="panel-body">
                                    <SearchArea/>
                                    <UsersTable/>
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
            <div className="row form-horizontal font-size-12">
                <div className="col-sm-3 form-group">
                    <label className="control-label col-sm-5">用户级别</label>

                    <div className="col-sm-7">
                        <select className="form-control">
                            <option>普通用户</option>
                            <option>一般管理员</option>
                            <option>系统管理员</option>
                        </select>
                    </div>
                </div>
                <div className="col-sm-3 form-group">
                    <label className="control-label col-sm-5">用户名</label>

                    <div className="col-sm-7">
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="col-sm-3 form-group">
                    <label className="control-label col-sm-5">真实姓名</label>

                    <div className="col-sm-7">
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="col-sm-3 form-group">
                    <label className="control-label col-sm-5">手机号</label>

                    <div className="col-sm-7">
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <button type="button" className="btn btn-default btn-sm">搜&nbsp;索</button>
            </div>
        );
    }
});

var UsersTable = React.createClass({
    render: function () {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>用户名</th>
                    <th>真实姓名</th>
                    <th>绑定手机号</th>
                    <th>用户级别</th>
                    <th>是否激活</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <AdminRow/>
                <UsersTableRow/>
                </tbody>
            </table>
        );
    }
});

var AdminRow = React.createClass({
    render: function () {
        return (
            <tr>
                <td>administrator［当前用户］</td>
                <td>张XX</td>
                <td>13512341234</td>
                <td>系统管理员</td>
                <td>是</td>
                <td className="text-mute">
                    修改 |
                    升级 |
                    降级 |
                    激活 |
                    禁止 |
                    删除
                </td>
            </tr>
        );
    }
});

var UsersTableRow = React.createClass({
    render: function () {
        return (
            <tr>
                <td>xxx</td>
                <td>李XX</td>
                <td>13512341234</td>
                <td>一般管理员</td>
                <td>是</td>
                <td>
                    <a href="user_detail.html">修改</a> |
                    <a href="#">升级</a> |
                    <a href="#">降级</a> |
                    <a href="#">激活</a> |
                    <a href="#">禁止</a> |
                    <a href="#">删除</a>
                </td>
            </tr>
        );
    }
});

ReactDOM.render(
    <UserList />,
    document.getElementById('page')
);