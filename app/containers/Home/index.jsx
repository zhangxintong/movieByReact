import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import HomeHeader from '../../components/HomeHeader'
import TabsControl from '../../components/TabsControl'
import InThreaters from '../InTheaters'
import ComingSoon from '../ComingSoon'
class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<div>
            <HomeHeader cityName={this.props.userinfo.cityName}/>
            <TabsControl>
            	<div name = "正在热映">
                    <InThreaters/>
                </div>
                <div name = "即将上映">
                    <ComingSoon/>
                </div>
            </TabsControl>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userinfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
