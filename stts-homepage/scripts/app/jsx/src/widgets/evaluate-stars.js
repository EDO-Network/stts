var EvaluateStars = React.createClass({
    handleStar: function (index,event) {
        var stars = $(event.target.parentNode).children("i");
        $.each(stars, function (i, item) {
            if(i < index) {
                $(item).addClass("text-gold");
            }
        });
    },
    handleUnStar: function (index,event) {
        var stars = $(event.target.parentNode).children("i");
        $.each(stars, function (i, item) {
            if(i < index) {
                $(item).removeClass("text-gold");
            }
        });
    },
    handleConfirmStar: function (index,event) {
        var stars = $(event.target.parentNode).children("i");
        $.each(stars, function (i, item) {
            if(i < index) {
                $(item).removeClass("text-gold");
                $(item).removeClass("text-danger");
            }
        });
        $.each(stars, function (i, item) {
            if(i < index) {
                $(item).addClass("text-danger");
            }
        });
    },
    render: function () {
        return (
            <div>
                <span>{this.props.title}</span>
                <i className="fa fa-star" aria-hidden="true"
                   onMouseEnter={this.handleStar.bind(null,1)}
                   onMouseLeave={this.handleUnStar.bind(null, 1)}
                   onClick={this.handleConfirmStar.bind(null, 1)}></i>
                <i className="fa fa-star" aria-hidden="true"
                   onMouseEnter={this.handleStar.bind(null,2)}
                   onMouseLeave={this.handleUnStar.bind(null,2)}
                   onClick={this.handleConfirmStar.bind(null,2)}></i>
                <i className="fa fa-star" aria-hidden="true"
                   onMouseEnter={this.handleStar.bind(null,3)}
                   onMouseLeave={this.handleUnStar.bind(null,3)}
                   onClick={this.handleConfirmStar.bind(null,3)}></i>
                <i className="fa fa-star" aria-hidden="true"
                   onMouseEnter={this.handleStar.bind(null,4)}
                   onMouseLeave={this.handleUnStar.bind(null,4)}
                   onClick={this.handleConfirmStar.bind(null,4)}></i>
                <i className="fa fa-star" aria-hidden="true"
                   onMouseEnter={this.handleStar.bind(null,5)}
                   onMouseLeave={this.handleUnStar.bind(null,5)}
                   onClick={this.handleConfirmStar.bind(null,5)}></i>
            </div>
        );
    }
});