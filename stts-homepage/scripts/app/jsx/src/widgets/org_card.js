var OrgCard = React.createClass({
    render: function () {
        return (

        <div className="panel panel-info">
            <div className="panel-heading">中国出口信用保险公司</div>
            <div className="panel-body">
                <p><img className="w-per-100" src="../img/sample/org_preview.png"/></p>
                <p>累计评价：
                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                    <i className="fa fa-star text-gold" aria-hidden="true"></i>
                </p>
                <p>联系地址：宁波市海曙区中山东路145号</p>
                <p>注册时间：2016-01-01</p>
                <p>认证状态：<span className="label label-success">已认证</span></p>
                <a href="#" className="btn btn-default btn-block">进入服务机构主页</a>
            </div>
        </div>
        );
    }
});