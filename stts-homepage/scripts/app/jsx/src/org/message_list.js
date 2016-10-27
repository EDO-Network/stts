var MessageList = React.createClass({
    render: function () {
        return (
            <div>
                <Top/>
                <Header activeMenuID="mainMenuMessage"/>

                <div className="container">

                    <ol className="breadcrumb">
                        <li>您所在的位置：</li>
                        <li><a href="dashboard.html">服务机构</a></li>
                        <li><a href="order_list.html">我的消息</a></li>
                    </ol>
                    <div className="panel panel-default">
                        <div className="panel-heading">我的消息</div>
                        <div className="panel-body">
                            <div>
                                <a href="#">10</a>&nbsp;条未读消息&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className="btn btn-default">清空</button>
                                &nbsp;&nbsp;
                                <button className="btn btn-default">全部标记为已读</button>
                            </div>
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th>状态</th>
                                    <th>标题</th>
                                    <th>内容</th>
                                    <th>时间</th>
                                </tr>
                                </thead>
                                <tbody>
                                <MessageItem/>
                                <MessageItem/>
                                <MessageItem/>
                                <MessageItem/>
                                <MessageItem/>
                                </tbody>
                            </table>
                            <Paging/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
});

var MessageItem = React.createClass({
    render: function () {
        return (
            <tr>
                <td>
                    未读
                </td>
                <td>［全网公告］服务器维护通知</td>
                <td>xxxxxxxxxxxxxxxxx</td>
                <td>2016-01-01 18:00:01</td>
            </tr>
        );
    }
});

ReactDOM.render(
    <MessageList />,
    document.getElementById('page')
);