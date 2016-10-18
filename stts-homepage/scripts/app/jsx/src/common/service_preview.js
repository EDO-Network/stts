var ServicePreview = React.createClass({
    render: function () {
        return (
            <div className="service-preview-wrap text-center clearfix">
                <div>
                    <div><img className="w-per-100" src="img/common/service-preview.png"/></div>
                    <div className="mt-5 mb-5">财务审计</div>
                </div>
                <div>
                    <div className="pull-left">
                        <img className="w-60" src="img/common/org-preview-small.jpg"/>
                    </div>
                    <div className="ml-80 text-left">
                        <div>服务费用：1000元</div>
                        <div>申请次数：100次</div>
                        <div className="text-over-ellipsis">中国出口信用保险公司</div>
                    </div>
                </div>
            </div>
        );
    }
});