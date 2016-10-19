var SelectCompany = React.createClass({
    getInitialState: function () {
        return {
            companies: []
        };
    },
    render: function () {
        return (
            <div>
                <Top isLogin="false"/>
                <Header activeMenuID="mainMenuSelectCompany"/>

                <div className="container mt-100">
                    <div className="alert alert-info">
                        当前用户绑定有多个企业，请选择一个您想管理的企业
                    </div>
                    <div className="list-group mh-auto w-400">
                        <a href="index.html?isLogin=true" className="list-group-item">中国出口信用保险公司宁波分公司</a>
                        <a href="index.html?isLogin=true" className="list-group-item">中国海峡人才市场宁波分部</a>
                        <a href="index.html?isLogin=true" className="list-group-item">宁波市中韬华益税务师事务所有限公司</a>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <SelectCompany />,
    document.getElementById('page')
);