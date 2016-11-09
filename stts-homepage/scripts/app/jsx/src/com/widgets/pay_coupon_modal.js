
var PayCouponModal = React.createClass({
    render: function () {
        return (
            <div className="modal fade" id="payCouponModal" tabindex="-1" role="dialog" aria-labelledby="payCouponModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"><span
                                aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title" id="payCouponModalLabel">付券</h4>
                        </div>
                        <div className="modal-body">
                            <div className="form form-horizontal " role="form">
                                <div className="form-group">
                                    <label className="control-label col-sm-4">
                                        付券金额
                                    </label>

                                    <div className="col-sm-6">
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="control-label col-sm-4">
                                        当前系统剩余券额
                                    </label>

                                    <label className="col-sm-8 pt-7">
                                        5000万元
                                    </label>
                                </div>

                                <div className="form-group">
                                    <label className="control-label col-sm-4">
                                        本订单最高使用限额
                                    </label>

                                    <label className="col-sm-8 pt-7">
                                        2500元
                                    </label>
                                </div>

                            </div>
                        </div>
                        <div className="modal-footer ">
                            <div className="text-center">
                                <button type="button" className="btn btn-default " data-dismiss="modal">关闭</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
