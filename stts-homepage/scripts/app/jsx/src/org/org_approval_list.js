var OrgApprovalList = React.createClass({

    render: function () {
        return (
            <div>
                <Top/>
                <Header activeMenuID="mainMenuCoupon"/>

                <div className="container">
                    <div>
                        <div className="pull-left w-222">
                            <div className="list-group">
                                <a href="org_info.html" className="list-group-item ">服务机构信息</a>
                                <a href="org_approval_list.html" className="list-group-item active">服务机构资质审核</a>
                            </div>
                        </div>

                        <div className="ml-240 overflow-hidden ">
                            <ol className="breadcrumb">
                                <li>您所在的位置：</li>
                                <li><a href="dashboard.html">服务机构</a></li>
                                <li><a href="org_info.html">资质审核</a></li>
                                <li className='active'>服务机构资质审核</li>
                            </ol>


                            <TableInfo/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
});
var TableItem = React.createClass({
    render: function () {
        return (
            <tr>
                <td>2016</td>
                <td>2016-01-01 18:00:00</td>
                <td>审核通过</td>
                <td>服务机构认证通过</td>

                <td>

                </td>
            </tr>
        );
    }
});
var TableItemx = React.createClass({
    render: function () {
        return (
            <tr>

                <td>2016</td>
                <td>2016-01-01 18:00:00</td>
                <td>审核失败</td>
                <td>服务机构信息不属实</td>
                <td>
                    <button className="btn btn-info btn-xs mr-10"> 修改</button>
                    <button className="btn btn-warning btn-xs"> 再提出</button>
                </td>
            </tr>
        );
    }
});
var TableHeader = React.createClass({
    render: function () {
        return (
            <tr>
                <th>年度</th>
                <th>提出日期</th>
                <th>审核状态</th>
                <th>审核说明</th>
                <th>操作</th>
            </tr>
        );
    }
});
var TableInfo = React.createClass({
    render: function () {
        return (
            <div className="mt-20">
                <table className="table table-hover font-size-12">
                    <thead>
                    <TableHeader/>
                    </thead>
                    <tbody>
                    <TableItem/>
                    <TableItem/>
                    <TableItem/>
                    <TableItemx/>
                    </tbody>
                </table>

            </div>
        );
    }
});

ReactDOM.render(
    <OrgApprovalList />,
    document.getElementById('page')
);