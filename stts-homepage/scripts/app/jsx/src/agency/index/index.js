/**
 * 服务机构后台管理首页
 */
var Index = React.createClass({
    render: function () {
        return (
            <div>
                <Header/>

                <div id="main" className="container-fluid margin-top-60">
                    <Sidebar activeMenuID="menuUsersManage"/>

                    <div className="content-page">
                        <Breadcrumb page={Page.users}/>
                    </div>
                </div>
            </div>
        );
    }
});


ReactDOM.render(
    <Index />,
    document.getElementById('page')
);