var Dashboard = React.createClass({
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
            <div>
                <Top/>
                <Header activeMenuID="mainMenuOrgShow"/>

                <div className="container">
                    <div>
                        <div className="pull-left w-222">
                            <div className="list-group">
                                <a href="org_show.html" className="list-group-item active">机构展示</a>
                            </div>
                        </div>

                        <div className="ml-240 overflow-hidden ">
                            <ol className="breadcrumb">
                                <li>您所在的位置：</li>
                                <li><a href="dashboard.html">服务机构</a></li>
                                <li><a href="active">机构展示</a></li>
                            </ol>
                            <div className="panel panel-info">
                                <div className="panel-heading">机构展示编辑</div>
                                <div className="panel-body">
                                    <div className="mb-10">
                                    <textarea name="content" className="w-per-100 "
                                              style={{height: "800px"}}></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button type="button" className="btn btn-primary">提交</button>
                                        &nbsp;&nbsp;
                                        <button type="button" className="btn btn-default">返回</button>
                                    </div>
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

ReactDOM.render(
    <Dashboard />,
    document.getElementById('page')
);