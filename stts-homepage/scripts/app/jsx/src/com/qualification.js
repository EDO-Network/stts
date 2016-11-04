var Qualification = React.createClass({
    render: function () {
        return (
            <div>
                <Top/>
                <Header activeMenuID="mainMenuCompany"/>

                <div className="container">

                    <div>
                        <div className="pull-left w-222">
                            <div className="list-group">
                                <a href="company.html" className="list-group-item">企业信息</a>
                                <a href="qualification.html" className="list-group-item active">资质审核</a>
                            </div>
                        </div>

                        <div className="ml-240">
                            <ol className="breadcrumb">
                                <li>您所在的位置：</li>
                                <li><a href="dashboard.html">企业机构</a></li>
                                <li><a href="company.html">资质审核</a></li>
                                <li className='active'>审核历史一览</li>
                            </ol>
                            <div className="panel panel-default">
                                <div className="panel-heading">资质审核</div>
                                <div className="panel-body">
                                    <table className="table table-hover">
                                        <thead>
                                        <tr>
                                            <th>年度</th>
                                            <th>提审日期</th>
                                            <th>审核状态</th>
                                            <th>审核说明</th>
                                            <th>操作</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>2016</td>
                                            <td>2016-01-01</td>
                                            <td>审核未通过</td>
                                            <td>审核信息不全，请参照详细</td>
                                            <td><a href="company_qualification.html">详细</a></td>
                                        </tr>
                                        <tr>
                                            <td>2015</td>
                                            <td>2015-01-01</td>
                                            <td>审核通过</td>
                                            <td>审核认定未小微企业</td>
                                            <td><a href="company_qualification.html">详细</a></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Qualification />,
    document.getElementById('page')
);