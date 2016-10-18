var OrgPreview = React.createClass({
    render: function () {
        return (
            <div className="org-preview-wrap text-center clearfix">
                <div>
                    <div><img className="w-per-100" src="img/common/org-preview.png"/></div>
                    <div className="mt-5 mb-5">中国信保</div>
                </div>
                <div>
                    <div>好评率：⭐️⭐️⭐️⭐️⭐️</div>
                    <div>认证信息：已认证</div>
                    <div>服务次数：150次</div>
                </div>
            </div>
        );
    }
});