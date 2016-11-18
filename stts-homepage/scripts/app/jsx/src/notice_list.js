var NoticeList = React.createClass({
    render: function () {
        return (
            <div>
                <Top isLogin="true"/>
                <Header activeMenuID="mainMenuIndex"/>

                <div className="container">
                    <div className="pull-left w-222">
                        <News/>
                        <Question/>
                    </div>
                    <div className="ml-240">
                        <ol className="breadcrumb">
                            <li>您所在的位置：</li>
                            <li><a href="index.html">首页</a></li>
                            <li><a href="notice_list.html">通知公告</a></li>
                            <li className='active'>通知公告一览</li>
                        </ol>
                        <Notice/>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
});


var News = React.createClass({
    render: function () {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    新闻动态

                    <a style={{position:"absolute",right:"10px",top:"10px"}} href="javascript:void(0)">
                        <span>更多</span>&nbsp;&gt;&gt;
                    </a>
                </div>
                <div className="panel-body">
                    <NewsItem/>
                    <NewsItem/>
                    <NewsItem/>
                    <NewsItem/>
                    <NewsItem/>
                </div>
            </div>
        );
    }
});

var NewsItem = React.createClass({
    render: function () {
        return (
            <div className="border-bottom-dotted mb-10">
                <div className="title">新闻标题</div>
            </div>
        );
    }
});

var Question = React.createClass({
    render: function () {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    热门回答
                    <a style={{position:"absolute",right:"10px",top:"10px"}} href="javascript:void(0)">
                        <span>更多</span>&nbsp;&gt;&gt;
                    </a>
                </div>
                <div className="panel-body">
                    <QuestionItem/>
                    <QuestionItem/>
                    <QuestionItem/>
                    <QuestionItem/>
                    <QuestionItem/>
                </div>
            </div>
        );
    }
});

var QuestionItem = React.createClass({
    render: function () {
        return (
            <div className="border-bottom-dotted mb-10">
                <p>问题标题</p>

            </div>
        );
    }
});

var Notice = React.createClass({
    render: function () {
        return (
            <div className="panel panel-default overflow-hidden">
                <div className="panel-heading">通知公告</div>
                <div className="panel-body">
                    <NoticeItem/>
                    <NoticeItem/>
                    <NoticeItem/>
                    <NoticeItem/>
                    <NoticeItem/>
                    <NoticeItem/>
                    <Paging/>
                </div>
            </div>
        );
    }
});

var NoticeItem = React.createClass({
    render: function () {
        return (
            <div className="border-bottom-dotted mb-10 h-35">
                <div className="pull-left">
                    <a href="notice_detail.html">2017年度服务机构年审公告</a>
                </div>
                <div className="pull-right">2016-6-30</div>
            </div>
        );
    }
});


ReactDOM.render(
    <NoticeList/>,
    document.getElementById('page')
);