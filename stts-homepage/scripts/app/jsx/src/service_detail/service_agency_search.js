/**
 * 服务搜索
 */
var ServiceAgencyCard = React.createClass({
    render: function () {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">服务搜索</div>
                <div className="panel-body">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" className="spleft_sbox">
                        <tbody>
                        <tr>
                            <th>服务名：</th>
                            <td>
                                <input id="serName" type="text" name="serName" className="spleft_sinput"
                                       style="width:135px;"/></td>
                        </tr>
                        <tr>
                            <th>价 格：</th>
                            <td>
                                <input id="startPrice" type="text" name="priceStart" className="spleft_sinput"
                                       style="width:56px;"/>
                                - <input id="endPrice" type="text" name="priceEnd" className="spleft_sinput"
                                         style="width:56px;"/></td>
                        </tr>
                        <tr>
                            <th>&nbsp;</th>
                            <td><a href="#" className="jobsearch_btn" onclick="doSearch();this.blur();">搜索</a></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
});
