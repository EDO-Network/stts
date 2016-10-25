var Dashboard = React.createClass({
    render: function () {
        return (
            <div>
                <Top/>
                <Header activeMenuID="mainMenuDashboard"/>

                <div className="container">
                    <ol className="breadcrumb">
                        <li>您所在的位置：</li>
                        <li><a href="dashboard.html">企业机构</a></li>
                        <li className='active'>我的平台</li>
                    </ol>
                    <div className="text-center">
                        <div className="row">
                            <div className="col-sm-6">
                                <img src="../../img/com/dashboard_1.png"/>
                            </div>
                            <div className="col-sm-6">
                                <img src="../../img/com/dashboard_2.png"/>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-sm-6">
                                <img src="../../img/com/dashboard_3.png"/>
                            </div>
                            <div className="col-sm-6">
                                <img src="../../img/com/dashboard_4.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Dashboard />,
    document.getElementById('page')
);