var OrderProcess = React.createClass({displayName: "OrderProcess",
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
            React.createElement("div", {className: "order-process"}, 
                React.createElement("div", {className: "node step"}, 
                    React.createElement("div", null, React.createElement("i", {className: "icon fa fa-shopping-basket todo", "aria-hidden": "true"})), 
                    React.createElement("div", null, "申请服务"), 
                    React.createElement("div", {style: {display:"none"}}, "2016-01-01"), 
                    React.createElement("div", {style: {display:"none"}}, "18:00:00")
                ), 
                React.createElement("div", {className: "node process"}, 
                    React.createElement("div", {className: "arrow todo"}), 
                    React.createElement("div", null), 
                    React.createElement("div", null), 
                    React.createElement("div", null)
                ), 
                React.createElement("div", {className: "node step"}, 
                    React.createElement("div", null, React.createElement("i", {className: "icon fa fa-legal todo", "aria-hidden": "true"})), 
                    React.createElement("div", null, "服务机构受理"), 
                    React.createElement("div", {style: {display:"none"}}, "2016-01-03"), 
                    React.createElement("div", {style: {display:"none"}}, "19:00:00")
                ), 
                React.createElement("div", {className: "node process"}, 
                    React.createElement("div", {className: "arrow todo"}), 
                    React.createElement("div", null), 
                    React.createElement("div", null), 
                    React.createElement("div", null)
                ), 
                React.createElement("div", {className: "node step"}, 
                    React.createElement("div", null, React.createElement("i", {className: "icon fa fa-credit-card todo", "aria-hidden": "true"})), 
                    React.createElement("div", null, "完成并付款"), 
                    React.createElement("div", {style: {display:"none"}}, "2016-01-10"), 
                    React.createElement("div", {style: {display:"none"}}, "10:00:00")
                ), 
                React.createElement("div", {className: "node process"}, 
                    React.createElement("div", {className: "arrow todo"}), 
                    React.createElement("div", null), 
                    React.createElement("div", null), 
                    React.createElement("div", null)
                ), 
                React.createElement("div", {className: "node step"}, 
                    React.createElement("div", null, React.createElement("i", {className: "icon fa fa-commenting todo", "aria-hidden": "true"})), 
                    React.createElement("div", null, "服务评价"), 
                    React.createElement("div", {style: {display:"none"}}, "2016-01-15"), 
                    React.createElement("div", {style: {display:"none"}}, "13:00:00")
                ), 
                React.createElement("div", {className: "node process"}, 
                    React.createElement("div", {className: "arrow todo"}), 
                    React.createElement("div", null), 
                    React.createElement("div", null), 
                    React.createElement("div", null)
                ), 
                React.createElement("div", {className: "node step"}, 
                    React.createElement("div", null, React.createElement("i", {className: "icon fa fa-check-square todo", "aria-hidden": "true"})), 
                    React.createElement("div", null, "交易完成"), 
                    React.createElement("div", {style: {display:"none"}}, "2016-01-20"), 
                    React.createElement("div", {style: {display:"none"}}, "17:00:00")
                )
            )
        );
    }
});