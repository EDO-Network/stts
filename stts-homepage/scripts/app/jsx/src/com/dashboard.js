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
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Dashboard />,
    document.getElementById('page')
);