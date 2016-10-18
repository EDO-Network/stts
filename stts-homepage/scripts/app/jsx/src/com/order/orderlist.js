var OrderList = React.createClass({
    render: function () {
        return (
            <div>
                <Top/>
                <Header/>
                <div>

                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <OrderList />,
    document.getElementById('page')
);