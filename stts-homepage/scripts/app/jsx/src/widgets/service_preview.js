var ServicePreview = React.createClass({
    render: function () {
        return (
            <div className="service-preview-wrap text-center clearfix">
                <div>
                    <div>
                        <a href="service_detail.html">
                            <img className="w-per-100" src="../img/common/service-preview.png"/>
                        </a>
                    </div>
                    <div className="mt-5 mb-5"><a href="service_detail.html">服务名称</a></div>
                </div>
                <div>
                    <div className="pull-left">
                        <img className="w-60" src="../img/common/org-preview-small.jpg"/>
                    </div>
                    <div className="ml-80 text-left">
                        <div>服务费用：1000元</div>
                        <div>申请次数：100次</div>
                        <div className="text-over-ellipsis">服务机构名称</div>
                    </div>
                </div>
            </div>
        );
    }
});