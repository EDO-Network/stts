var OrderProcess = React.createClass({
    componentDidMount: function () {
        var step = this.props.step;

        if (step >= 1) {
            $(".order-process>.step .icon:eq(0)").removeClass("todo").addClass("done");
            $(".order-process>.process>.arrow:eq(0)").removeClass("todo").addClass("done");
            $(".order-process>.step:eq(0) div").show();
        }

        if (step >= 2) {
            $(".order-process>.step .icon:eq(1)").removeClass("todo").addClass("done");
            $(".order-process>.process>.arrow:eq(1)").removeClass("todo").addClass("done");
            $(".order-process>.step:eq(1) div").show();
        }

        if (step >= 3) {
            $(".order-process>.step .icon:eq(2)").removeClass("todo").addClass("done");
            $(".order-process>.process>.arrow:eq(2)").removeClass("todo").addClass("done");
            $(".order-process>.step:eq(2) div").show();
        }

        if (step >= 4) {
            $(".order-process>.step> .icon:eq(3)").removeClass("todo").addClass("done");
            $(".order-process>.process>.arrow:eq(3)").removeClass("todo").addClass("done");
            $(".order-process>.step:eq(3) div").show();
        }

        if (step >= 4) {
            $(".order-process>.step .icon:eq(4)").removeClass("todo").addClass("done");
            $(".order-process>.process>.arrow:eq(4)").removeClass("todo").addClass("done");
            $(".order-process>.step:eq(4) div").show();
        }
    },
    render: function () {
        return (
            <div className="order-process">
                <div className="node step">
                    <div><i className="icon fa fa-pencil-square todo" aria-hidden="true"></i></div>
                    <div>提出退券申请</div>
                    <div style={{display:"none"}}>2016-01-01</div>
                    <div style={{display:"none"}}>18:00:00</div>
                </div>
                <div className="node process">
                    <div className="arrow todo"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="node step">
                    <div><i className="icon fa fa-legal todo" aria-hidden="true"></i></div>
                    <div>服务机构受理</div>
                    <div style={{display:"none"}}>2016-01-03</div>
                    <div style={{display:"none"}}>19:00:00</div>
                </div>
                <div className="node process">
                    <div className="arrow todo"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="node step">
                    <div><i className="icon fa fa-legal todo" aria-hidden="true"></i></div>
                    <div>运营机构受理</div>
                    <div style={{display:"none"}}>2016-01-10</div>
                    <div style={{display:"none"}}>10:00:00</div>
                </div>
                <div className="node process">
                    <div className="arrow todo"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="node step">
                    <div><i className="icon fa fa-check-square todo" aria-hidden="true"></i></div>
                    <div>完成</div>
                    <div style={{display:"none"}}>2016-01-20</div>
                    <div style={{display:"none"}}>17:00:00</div>
                </div>
            </div>
        );
    }
});