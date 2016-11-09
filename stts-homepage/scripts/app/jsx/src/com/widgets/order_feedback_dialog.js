
var OrderFeedbackDialog = React.createClass({
    render: function () {
        return (
            <div className="modal fade" id="orderFeedbackDialog" tabindex="-1" role="dialog" aria-labelledby="orderFeedbackDialogLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"><span
                                aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title" id="orderFeedbackDialogLabel">退单申请</h4>
                        </div>
                        <div className="modal-body">
                            <div className="form form-horizontal " role="form">
                                <div className="form-group">
                                    <label className="control-label col-sm-4">
                                        理由分类
                                    </label>

                                    <div className="col-sm-6">
                                        <select className="form-control">
                                            <option></option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="control-label col-sm-4">
                                        补充说明
                                    </label>

                                    <label className="col-sm-6">
                                        <textarea className="form-control" rows="5"></textarea>
                                    </label>
                                </div>

                                <div className="form-group">
                                    <label className="control-label col-sm-4">
                                        证据照片
                                    </label>

                                    <label className="col-sm-6 pt-7">
                                        <img src="#"/>&nbsp;&nbsp;
                                        <img src="#"/>&nbsp;&nbsp;
                                        <img src="#"/>&nbsp;&nbsp;
                                        <a className="btn">上传证据图片</a>
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
