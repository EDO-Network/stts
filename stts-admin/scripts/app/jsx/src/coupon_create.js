var CouponList = React.createClass({

    render: function () {
        return (
            <div>
                <Top/>
                <Header activeMenuID="mainMenuCoupon"/>

                <div className="container">
                    <div>
                        <div className="pull-left w-222">
                            <div className="list-group">
                                <a href="coupon_list.html" className="list-group-item">服务券一览</a>
                                <a href="coupon_create.html" className="list-group-item active">服务券发放</a>
                                <a href="coupon_exchange.html" className="list-group-item">服务券兑付审核</a>
                            </div>
                        </div>

                        <div className="ml-240 overflow-hidden ">
                            <ol className="breadcrumb">
                                <li>您所在的位置：</li>
                                <li><a href="coupon_list.html">服务券管理</a></li>
                                <li className='active'>服务券发放</li>
                            </ol>

                            <div className="panel panel-default overflow-hidden">
                                <div className="panel-heading">服务券发放</div>
                                <div className="panel-body">
                                    <div className="form form-horizontal " role="form">
                                        <div className="form-group">
                                            <label className="control-label col-sm-2">
                                                批次号<span className="text-danger ml-5">*</span>
                                            </label>

                                            <div className="col-sm-4">
                                                <input className="form-control" type="text"/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="control-label col-sm-2">
                                                使用有效期<span className="text-danger ml-5">*</span>
                                            </label>

                                            <div className="col-sm-4">
                                                <div className="input-group input-group">
                                                    <input type="text" className="form-control"/>
                                                    <span className="input-group-btn text-center font-size-12 width-10">-</span>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-sm-2">
                                                兑付有效期<span className="text-danger ml-5">*</span>
                                            </label>

                                            <div className="col-sm-4">
                                                <div className="input-group input-group">
                                                    <input type="text" className="form-control"/>
                                                    <span className="input-group-btn text-center font-size-12 width-10">-</span>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group form-inline">
                                            <label className="control-label col-sm-2">
                                                说明
                                            </label>

                                            <div className="col-sm-4">
                                                <input className="form-control" type="text"/>
                                            </div>

                                        </div>

                                        <div className="form-group">
                                            <label className="control-label col-sm-2">
                                                总额度<span className="text-danger ml-5">*</span>
                                            </label>

                                            <div className="col-sm-4">
                                                <input className="form-control" type="text"/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="control-label col-sm-2">

                                            </label>

                                            <div className="col-sm-10">
                                                <div className="col-sm-4">
                                                    <label className="text-danger pt-7">*各行业最大额度分配</label>
                                                </div>
                                                <div className="col-sm-2">
                                                    <button className="btn btn-default">平均分配</button>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label className="pt-7">分配百分比</label>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label className="pt-7">上一批次各行业参考值</label>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="form-group">
                                            <label className="control-label col-sm-2">

                                            </label>

                                            <div className="col-sm-10">
                                                <div className="col-sm-2">
                                                    <label className="pt-7">人才引培</label>
                                                </div>
                                                <div className="col-sm-4">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label className="pt-7">10%</label>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label className="pt-7">300</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-sm-2">

                                            </label>

                                            <div className="col-sm-10">
                                                <div className="col-sm-2">
                                                    <label className="pt-7">技术创新</label>
                                                </div>
                                                <div className="col-sm-4">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label className="pt-7">10%</label>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label className="pt-7">300</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-sm-2">

                                            </label>

                                            <div className="col-sm-10">
                                                <div className="col-sm-2">
                                                    <label className="pt-7">财务指导</label>
                                                </div>
                                                <div className="col-sm-4">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label className="pt-7">10%</label>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label className="pt-7">300</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-sm-2">

                                            </label>

                                            <div className="col-sm-10">
                                                <div className="col-sm-2">
                                                    <label className="pt-7">财务指导</label>
                                                </div>
                                                <div className="col-sm-4">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label className="pt-7">10%</label>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label className="pt-7">300</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-sm-2">

                                            </label>

                                            <div className="col-sm-10">
                                                <div className="col-sm-2">
                                                    <label className="pt-7">市场拓展</label>
                                                </div>
                                                <div className="col-sm-4">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label className="pt-7">10%</label>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label className="pt-7">300</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-sm-2">

                                            </label>

                                            <div className="col-sm-10">
                                                <div className="col-sm-2">
                                                    <label className="pt-7">管理咨询</label>
                                                </div>
                                                <div className="col-sm-4">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label className="pt-7">10%</label>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label className="pt-7">300</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-sm-2">

                                            </label>

                                            <div className="col-sm-10">
                                                <div className="col-sm-2">
                                                    <label className="pt-7">检验检测认证</label>
                                                </div>
                                                <div className="col-sm-4">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label className="pt-7">10%</label>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label className="pt-7">300</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-sm-2">

                                            </label>

                                            <div className="col-sm-10">
                                                <div className="col-sm-2">
                                                    <label className="pt-7">知识产权保护</label>
                                                </div>
                                                <div className="col-sm-4">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label className="pt-7">10%</label>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label className="pt-7">300</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-sm-2">

                                            </label>

                                            <div className="col-sm-10">
                                                <div className="col-sm-2">
                                                    <label className="pt-7">创业辅导</label>
                                                </div>
                                                <div className="col-sm-4">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label className="pt-7">10%</label>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label className="pt-7">300</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-sm-2">

                                            </label>

                                            <div className="col-sm-10">
                                                <div className="col-sm-2">
                                                    <label className="pt-7">公共服务</label>
                                                </div>
                                                <div className="col-sm-4">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label className="pt-7">10%</label>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label className="pt-7">300</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-sm-2">

                                            </label>

                                            <div className="col-sm-10">
                                                <div className="col-sm-2">
                                                    <label className="pt-7">其他</label>
                                                </div>
                                                <div className="col-sm-4">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label className="pt-7">10%</label>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label className="pt-7">300</label>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="form-group">
                                            <label className="control-label col-sm-2">

                                            </label>

                                            <div className="col-sm-10">
                                                <div className="col-sm-6 text-right">
                                                    <label className="text-danger pt-7">目前剩余配额值：5000元</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <button type="button" className="btn btn-primary">立即发放</button>&nbsp;&nbsp;
                                            <button type="button" className="btn btn-default">返回</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <Footer/>
            </div>

        );
    }
});

ReactDOM.render(
    <CouponList />,
    document.getElementById('page')
);