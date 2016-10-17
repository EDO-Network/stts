/**
 * 服务机构名片
 */
var ServiceAgencyCard = React.createClass({
    render: function () {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">服务机构名片</div>
                <div className="panel-body">
                    <div>
                        <img src="img/sample/agency_logo.png"/>
                    </div>
                    <div>
                        <p>
                            <span>好评率：</span>
                            <span></span>
                        </p>
                        <p>
                            <span>联系地址：</span>
                            <span>宁波市世纪大道13号伟业楼N305室</span>
                        </p>
                        <p>
                            <span>机构名称：</span>
                            <span>宁波市中大检测有限公司</span>
                        </p>
                        <p>
                            <button type="button" className="btn btn-default">进入机构主页</button>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
});
