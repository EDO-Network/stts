var Index = React.createClass({
    render: function () {
        return (
            <div id="container">
                <Top/>
                <Header/>
                <Menu/>
            </div>
        );
    }
});

ReactDOM.render(
    <Index/>,
    document.getElementById('page')
);