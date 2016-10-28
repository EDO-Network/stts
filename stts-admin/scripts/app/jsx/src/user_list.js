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
                                <a href="index.html" className="list-group-item">统计分析</a>
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
                                    <a href="#" className="pull-right">添加新用户</a>
                                </div>
                                <div className="panel-body">
                                    <SearchArea/>
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
                    <th>用户ID</th>
                    <th>用户名</th>
                    <th>性别</th>
                    <th>手机号</th>
                    <th>邮箱</th>
                    <th>微信号</th>
                    <th>创建时间</th>
                    <th>更新时间</th>
                </tr>
                </thead>
                <tbody>
                {this.props.userList.map(function (item, index) {
                    return <UsersTableRow key={item.userID} siteUser={item}/>
                })}
                </tbody>
            </table>
        );
    }
});

var UsersTableRow = React.createClass({
    handleLink: function (userID) {
        sessionStorage.setItem(SessionKey.userID, userID);
        location.href = SiteProperties.clientURL + Page.user;
    },
    render: function () {
        return (
            <tr>
                <td>{this.props.siteUser.user.loginID}</td>
                <td><a href="javascript:void(0)"
                       onClick={this.handleLink.bind(null, this.props.siteUser.userID)}>{this.props.siteUser.user.userName}</a>
                </td>
                <td>{SexMap[this.props.siteUser.user.sex]}</td>
                <td>{this.props.siteUser.user.mobile}</td>
                <td>{this.props.siteUser.user.email}</td>
                <td>{this.props.siteUser.user.weixinID}</td>
                <td>{new Date(this.props.siteUser.user.createTime).format('yyyy-MM-dd hh:mm:ss')}</td>
                <td>{new Date(this.props.siteUser.user.updateTime).format('yyyy-MM-dd hh:mm:ss')}</td>
            </tr>
        );
    }
});

ReactDOM.render(
    <UserList />,
    document.getElementById('page')
);