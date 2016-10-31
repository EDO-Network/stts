var UserCreate = React.createClass({
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
                                <li><a href="user_list.html">用户一览</a></li>
                                <li className='active'>创建新用户</li>
                            </ol>
                            <div className="panel panel-default">
                                <div className="panel-heading">创建新用户</div>

                                <div className="panel-body">
                                    <UserForm/>
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

var UserForm = React.createClass({
    render: function () {
        return (
            <div>
                <div className="col-sm-6 form-horizontal">
                    <div className="form-group">
                        <label className="col-sm-3 control-label">用户名</label>

                        <div className="col-sm-9">
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-3 control-label">真实姓名</label>

                        <div className="col-sm-9">
                            <div className="input-group">
                                <input type="text" className="form-control"/>
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button">查找</button>
                                  </span>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-3 control-label">手机号</label>

                        <div className="col-sm-9">
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-3 control-label">密码</label>

                        <div className="col-sm-9">
                            <input type="password" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-3 control-label">确认密码</label>

                        <div className="col-sm-9">
                            <input type="password" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-3 control-label">帐号级别</label>

                        <div className="col-sm-9">
                            <label className="radio-inline">
                                <input type="radio" name="radioUserRole"/> 系统管理员
                            </label>
                            <label className="radio-inline">
                                <input type="radio" name="radioUserRole"/> 一般管理员
                            </label>
                            <label className="radio-inline">
                                <input type="radio" name="radioUserRole"/> 普通用户
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-3 control-label">是否激活</label>

                        <div className="col-sm-9">
                            <label className="radio-inline">
                                <input type="radio" name="radioUserEffective"/> 激活
                            </label>
                            <label className="radio-inline">
                                <input type="radio" name="radioUserEffective"/> 禁止
                            </label>
                        </div>
                    </div>
                    <div className="form-group text-center">
                        <button type="button" className="btn btn-primary">提&nbsp;交</button>
                    </div>
                </div>

                <div className="col-sm-6 form-horizontal">
                    <div className="form-group">
                        <label className="col-sm-3 control-label">头像</label>

                        <div className="col-sm-9">
                            <img src="../img/sample/photo.jpg" className="w-100"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-3 control-label"></label>

                        <div className="col-sm-9">
                            <img src="../img/sample/photo.jpg" className="w-50"/>&nbsp;&nbsp;
                            <img src="../img/sample/photo.jpg" className="w-50"/>&nbsp;&nbsp;
                            <img src="../img/sample/photo.jpg" className="w-50"/>&nbsp;&nbsp;
                            <img src="../img/sample/photo.jpg" className="w-50"/>&nbsp;&nbsp;
                            <img src="../img/sample/photo.jpg" className="w-50"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-3 control-label"></label>

                        <div className="col-sm-9">
                            <button type="button" className="btn btn-default">上传</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <UserCreate/>,
    document.getElementById('page')
);
