var OrgPreview = React.createClass({
    render: function () {
        return (
            <div className="org-preview-wrap text-center clearfix mb-10">
                <div>
                    <div>
                        <a href="org_detail.html">
                            <img className="w-per-100" src="../img/common/org-preview.png"/>
                        </a>
                    </div>
                    <div className="mt-5 mb-5"><a href="org_detail.html">服务机构名称</a></div>
                </div>
                <div>
                    <div>好评率：
                        <i className="fa fa-star text-danger" aria-hidden="true"></i>
                        <i className="fa fa-star text-danger" aria-hidden="true"></i>
                        <i className="fa fa-star text-danger" aria-hidden="true"></i>
                        <i className="fa fa-star text-danger" aria-hidden="true"></i>
                        <i className="fa fa-star text-danger" aria-hidden="true"></i>
                    </div>
                    <div>认证信息：已认证</div>
                    <div>服务次数：150次</div>
                </div>
            </div>
        );
    }
});