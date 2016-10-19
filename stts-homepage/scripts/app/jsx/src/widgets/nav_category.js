var NavCategory = React.createClass({
    render: function () {
        return (
            <div className="nav-category panel panel-primary">
                <div className="panel-heading">
                    <i className="fa fa-th" aria-hidden="true"></i>
                    <span>&nbsp;服务产品分类</span>
                </div>
                <div className="panel-body">
                    <ul>
                        <li className="category-item">
                            <i className="fa fa-users" aria-hidden="true"></i>&nbsp;&nbsp;人才引培
                        </li>
                        <li className="category-item">
                            <i className="fa fa-gears" aria-hidden="true"></i>&nbsp;&nbsp;技术创新
                        </li>
                        <li className="category-item">
                            <i className="fa fa-money" aria-hidden="true"></i>&nbsp;&nbsp;财务指导
                        </li>
                        <li className="category-item">
                            <i className="fa fa-institution" aria-hidden="true"></i>&nbsp;&nbsp;法律维权
                        </li>
                        <li className="category-item">
                            <i className="fa fa-shopping-bag" aria-hidden="true"></i>&nbsp;&nbsp;市场拓展
                        </li>
                        <li className="category-item">
                            <i className="fa fa-question-circle" aria-hidden="true"></i>&nbsp;&nbsp;管理咨询
                        </li>
                        <li className="category-item">
                            <i className="fa fa-check-circle" aria-hidden="true"></i>&nbsp;&nbsp;检验检测认证
                        </li>
                        <li className="category-item">
                            <i className="fa fa-mortar-board" aria-hidden="true"></i>&nbsp;&nbsp;知识产权保护
                        </li>
                        <li className="category-item">
                            <i className="fa fa-book" aria-hidden="true"></i>&nbsp;&nbsp;创业辅导
                        </li>
                        <li className="category-item">
                            <i className="fa fa-info-circle" aria-hidden="true"></i>&nbsp;&nbsp;公共服务
                        </li>
                        <li className="category-item">
                            <i className="fa fa-thumbs-up" aria-hidden="true"></i>&nbsp;&nbsp;其他
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});