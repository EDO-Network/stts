var ServiceDetailActions = Reflux.createActions(['getIdentityList']);

var ServiceDetailStore = Reflux.createStore({
    listenables: [ServiceDetailActions],
    onGetIdentityList: function (data) {
        var url = SiteProperties.serverURL + BussinessAPI.getIdentityList;

        data.accessToken = sessionStorage.getItem(SessionKey.accessToken);
        data.operatorID = sessionStorage.getItem(SessionKey.operatorID);

        // 检查token是否过期
        if (data.accessToken == null || data.accessToken == "") {
            location.href = SiteProperties.webURL + Page.login;
            return false;
        }

        var self = this;
        var callback = function (result) {
            console.log(result.data);
            if (result.status == 200) {
                self.trigger(result.data);
            } else {
                console.log(result);
            }
        };

        ajaxPost(url, data, callback);
    }
});

var ServiceDetail = React.createClass({
    mixins: [Reflux.connect(ServiceDetailStore, 'identityData')],
    getInitialState: function () {
        return {
            identityData: {
                page: {},
                identityList: []
            }
        };
    },
    componentDidMount: function () {
        //ServiceDetailActions.getIdentityList(this.state);
    },
    onChildChanged: function (childState) {
        if (childState.currentPage != null) {
            this.state.currentPage = childState.currentPage;

            ServiceDetailActions.searchSiteUserList(this.state);
        }
    },
    handleSearch: function(){
        this.state.loginID = this.refs.inputLoginID.value;
        this.state.userName = this.refs.inputUserName.value;
        this.state.sex = this.refs.inputSex.value;
        this.state.mobile = this.refs.inputMobile.value;
        this.state.email = this.refs.inputEmail.value;
        this.state.weixinID = this.refs.inputWeixinID.value;
        ServiceDetailActions.searchSiteUserList(this.state);
    },
    render: function () {
        return (
            <div>

            </div>
        );
    }
});


ReactDOM.render(
    <ServiceDetail />,
    document.getElementById('page')
);