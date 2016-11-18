var NoticeDetail = React.createClass({
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
                            <li><a href="notice_list.html">通知公告一览</a></li>
                            <li className='active'>通知公告内容</li>
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
            <div>
                <h2>宁波市小微企业创业创新服务券管理暂行办法</h2>
                <div className="text-muted">
                    <span><i className="fa fa-clock-o"></i>&nbsp;2016-10-14 17:38:23</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span><i className="fa fa-eye"></i>&nbsp;阅读（1029）</span>
                </div>
                <hr/>
                <div>
                    第一条	为深入贯彻落实国务院关于促进小微企业发展的决策部署，深入推进国家小微企业创业创新基地城市示范工作，不断优化我市小微企业创业创新环境，根据《宁波市小微企业创业创新基地城市示范实施意见》（甬两创〔2016〕***号）和《宁波市小微企业创业创新基地城市示范专项资金使用细则》（……）等文件精神，决定设立“宁波市小微企业创业创新服务券”（以下简称服务券），为规范服务券使用和管理，特制定本办法。

                </div>
            </div>
        );
    }
});


ReactDOM.render(
    <NoticeDetail/>,
    document.getElementById('page')
);