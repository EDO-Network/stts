var Menu = React.createClass({
    render: function () {
        return (
            <div className="menu-wrap">
                <div className="container">
                    <CategoryMenu/>
                </div>
            </div>
        );
    }
});

var CategoryMenu = React.createClass({
    render: function () {
        return (
            <div className="category-menu">
                <div className="category-menu-title"><a href="#">全部服务</a></div>
                <div className="category-main-menu">
                    <div>人才引培</div>
                    <div>技术创新</div>
                    <div>财务指导</div>
                    <div>法律维权</div>
                    <div>市场拓展</div>
                    <div>管理咨询</div>
                    <div>检验检测认证</div>
                    <div>知识产权保护</div>
                    <div>创业辅导</div>
                    <div>公共服务</div>
                </div>
                <div className="drop-down-layer">
                    <div className="category-sub-item" style={{display:"none"}}>
                        <a href="#">高层培训</a>
                        <a href="#">经营管理培训</a>
                        <a href="#">专业人才培训</a>
                        <a href="#">职业技能培训</a>
                        <a href="#">人才招聘</a>
                        <a href="#">技工招聘</a>
                        <a href="#">职业中介</a>
                        <a href="#">劳务派遣</a>
                        <a href="#">校企人才对接</a>
                    </div>
                </div>
            </div>
        );
    }
});
