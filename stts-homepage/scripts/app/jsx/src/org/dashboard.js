var Dashboard = React.createClass({
    render: function () {
        return (
            <div>
                <Top/>
                <Header activeMenuID="mainMenuDashboard"/>

                <div className="container">
                    <h3>服务机构平台</h3>


                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Dashboard />,
    document.getElementById('page')
);