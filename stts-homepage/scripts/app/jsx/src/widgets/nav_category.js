var LittleItemPre = React.createClass({
    render: function () {
        return (
            <dl className="fore1">
                <dt>
                    <a target="_blank" href="service_list.html">
                        小分类1
                        <i>
                            &gt;
                        </i>
                    </a>
                </dt>
                <dd>
                    <a target="_blank" href="service_detail.html">
                        服务1
                    </a>
                    <a target="_blank" href="service_detail.html">
                        服务2
                    </a>
                    <a target="_blank" href="service_detail.html">
                        服务3
                    </a>
                    <a target="_blank" href="service_detail.html">
                        服务1
                    </a>
                    <a target="_blank" href="service_detail.html">
                        服务2
                    </a>
                    <a target="_blank" href="service_detail.html">
                        服务3
                    </a>
                    <a target="_blank" href="service_detail.html">
                        服务1
                    </a>
                    <a target="_blank" href="service_detail.html">
                        服务2
                    </a>
                    <a target="_blank" href="service_detail.html">
                        服务3
                    </a>
                    <a target="_blank" href="service_detail.html">
                        服务1
                    </a>
                    <a target="_blank" href="service_detail.html">
                        服务2
                    </a>
                    <a target="_blank" href="service_detail.html">
                        服务3
                    </a>
                </dd>
            </dl>
        );
    }
});
var LittleItem = React.createClass({
    render: function () {
        return (
            <dl >
                <dt>
                    <a target="_blank" href="service_list.html">
                        小分类1
                        <i>
                            &gt;
                        </i>
                    </a>
                </dt>
                <dd>
                    <a target="_blank" href="service_detail.html">
                        服务1
                    </a>
                    <a target="_blank" href="service_detail.html">
                        服务2
                    </a>
                    <a target="_blank" href="service_detail.html">
                        服务3
                    </a>
                    <a target="_blank" href="service_detail.html">
                        服务1
                    </a>
                    <a target="_blank" href="service_detail.html">
                        服务2
                    </a>
                    <a target="_blank" href="service_detail.html">
                        服务3
                    </a>
                    <a target="_blank" href="service_detail.html">
                        服务1
                    </a>
                    <a target="_blank" href="service_detail.html">
                        服务2
                    </a>
                    <a target="_blank" href="service_detail.html">
                        服务3
                    </a>
                    <a target="_blank" href="service_detail.html">
                        服务1
                    </a>
                    <a target="_blank" href="service_detail.html">
                        服务2
                    </a>
                    <a target="_blank" href="service_detail.html">
                        服务3
                    </a>
                </dd>
            </dl>
        );
    }
});

var SubItem = React.createClass({
    render: function () {
        return (
            <div className="item-sub">
                <div className="subitems">
                    <LittleItemPre/>
                    <LittleItem/>
                    <LittleItem/>
                    <LittleItem/>
                    <LittleItem/>
                </div>
            </div>
        );
    }
});
var SubItemOdd = React.createClass({
    render: function () {
        return (
            <div className="item-sub">
                <div className="subitems">
                    <LittleItemPre/>
                    <LittleItem/>
                    <LittleItem/>
                </div>
            </div>
        );
    }
});
var NavCategoryItems = React.createClass({
    render: function () {
        return (  <div style={{display: "none"}} className="dropdown-layer" id="index_menus_sub">

            <SubItem/>
            <SubItemOdd/>
            <SubItem/>
            <SubItemOdd/>
            <SubItem/>
            <SubItemOdd/>
            <SubItem/>
            <SubItemOdd/>
            <SubItem/>
            <SubItemOdd/>
            <SubItem/>
        </div> );
    }
});

var NavCategory;
NavCategory = React.createClass({
    componentDidMount: function () {
        $(".category-items").children(".category-item").hover(function () { //一级导航悬浮
            $(this).addClass("hover").siblings(".category-item").removeClass("hover");
            var index = $(this).index();
            console.log(index);
            $(".dropdown-layer").children(".item-sub").hide();
            $(".dropdown-layer").children(".item-sub").eq(index).show();

        });
        $(".category-items").hover(function () { //整个导航菜单悬浮，是否显示二级导航到出厂
            $("#index_menus_sub").show();
        }, function () {
            $("#index_menus_sub").hide();
            $('.category-item').removeClass("hover");
        });
        $("#index_menus_sub").children(".item-sub").hover(function () { //二级导航悬浮
            var index = $(this).index();
            $(".category-items").children(".category-item").eq(index).addClass("hover");
            $("#index_menus_sub").show();
        }, function () {
            $("#index_menus_sub").hide();
            $(".category-items").children(".category-item").removeClass("hover");
        })
    },
    render: function () {
        return (
            <div className="nav-category panel panel-primary">
                <div className="panel-heading">
                    <i className="fa fa-th" aria-hidden="true"></i>
                    <span>&nbsp;服务产品分类</span>
                </div>
                <div className="panel-body ">
                    <ul className="category-items">
                        <li className="category-item">
                            <i className="fa fa-users" aria-hidden="true"></i>&nbsp;&nbsp;人才引培
                            <i className="arrow item-arrow"></i>
                        </li>
                        <li className="category-item">
                            <i className="fa fa-gears" aria-hidden="true"></i>&nbsp;&nbsp;技术创新
                            <i className="arrow item-arrow"></i>
                        </li>
                        <li className="category-item">
                            <i className="fa fa-money" aria-hidden="true"></i>&nbsp;&nbsp;财务指导
                            <i className="arrow item-arrow"></i>
                        </li>
                        <li className="category-item">
                            <i className="fa fa-institution" aria-hidden="true"></i>&nbsp;&nbsp;法律维权

                            <i className="arrow item-arrow"></i>
                        </li>
                        <li className="category-item">
                            <i className="fa fa-shopping-bag" aria-hidden="true"></i>&nbsp;&nbsp;市场拓展
                            <i className="arrow item-arrow"></i>
                        </li>
                        <li className="category-item">
                            <i className="fa fa-question-circle" aria-hidden="true"></i>&nbsp;&nbsp;管理咨询
                            <i className="arrow item-arrow"></i>
                        </li>
                        <li className="category-item">
                            <i className="fa fa-check-circle" aria-hidden="true"></i>&nbsp;&nbsp;检验检测认证
                            <i className="arrow item-arrow"></i>
                        </li>
                        <li className="category-item">
                            <i className="fa fa-mortar-board" aria-hidden="true"></i>&nbsp;&nbsp;知识产权保护
                        </li>
                        <li className="category-item">
                            <i className="fa fa-book" aria-hidden="true"></i>&nbsp;&nbsp;创业辅导
                        </li>
                        <li className="category-item">
                            <i className="fa fa-info-circle" aria-hidden="true"></i>&nbsp;&nbsp;公共服务
                        </li>
                        <li className="category-item">
                            <i className="fa fa-thumbs-up" aria-hidden="true"></i>&nbsp;&nbsp;其他
                        </li>
                    </ul>


                </div>
            </div>
        );
    }
});