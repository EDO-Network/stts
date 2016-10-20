var Order = React.createClass({displayName: "Order",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("div", {className: "panel panel-info"}, 
                    React.createElement("div", {className: "panel-heading"}, "订单信息"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("div", {"col-sm-4": true}, 
                            React.createElement("div", null, "服务产品：", React.createElement("a", {href: "#"}, "财务审计")), 
                            React.createElement("div", null, "申请时间：2016-01-01 18:00:00"), 
                            React.createElement("div", null, "服务周期：2016-06-05 ～ 2016-09-30")
                        ), 
                        React.createElement("div", {"col-sm-4": true}, 
                            React.createElement("div", null, "服务价格：1.2 万元"), 
                            React.createElement("div", null, "实际费用：10000 元"), 
                            React.createElement("div", null, "服务券额：3000 元")
                        ), 
                        React.createElement("div", {"col-sm-4": true}, 
                            React.createElement("div", null, "状态：待受理"), 
                            React.createElement("div", null, React.createElement("a", {href: "#"}, "阅览合同"))
                        )
                    )
                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(Order, null),
    document.getElementById('page')
);