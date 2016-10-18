var Header = React.createClass({displayName: "Header",
    componentDidMount: function () {
        var activeMenuID = this.props.activeMenuID;
        $("#" + activeMenuID).addClass("active");
    },

    render: function () {
        return (
            React.createElement("div", {className: "header-wrap"}, 
                React.createElement("div", {className: "container"}, 
                    React.createElement("div", {className: "menu-main"}, 
                        React.createElement("ul", {className: "clearfix"}, 
                            React.createElement("li", {className: "title"}, 
                                React.createElement("i", {className: "fa fa-shopping-cart", "aria-hidden": "true"}), 
                                " 企服超市 ", 
                                React.createElement("span", {className: "service-icon"}, "SERVICE")
                            ), 
                            React.createElement("li", {id: "mainMenuIndex"}, React.createElement("a", {href: "#"}, "首页")), 
                            React.createElement("li", {id: "mainMenuService"}, React.createElement("a", {href: "#"}, "服务产品")), 
                            React.createElement("li", {id: "mainMenuOrg"}, React.createElement("a", {href: "#"}, "服务机构"))
                        )
                    )
                    
                        //<div className="search-wrap nav nav-tabs pull-left">
                        //    <ul className="search-classify nav nav-tabs" role="tablist">
                        //        <li className="active"><a href="#service" role="tab" data-toggle="tab">服务</a></li>
                        //        <li><a href="#org" role="tab" data-toggle="tab">机构</a></li>
                        //    </ul>
                        //    <div className="input-group">
                        //        <input type="text" className="search-content form-control"/>
                        //        <span className="input-group-btn">
                        //            <button className="btn btn-default" type="button">
                        //                <i className="fa fa-search" aria-hidden="true"></i>
                        //            </button>
                        //        </span>
                        //    </div>
                        //</div>
                    
                )
            )
        );
    }
});