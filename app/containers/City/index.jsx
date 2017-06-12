import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo' 
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'
import LocalStore from '../../util/localStore'
import {hashHistory} from 'react-router'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList changeFn={this.changeCity.bind(this)}/>
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props.userinfo)
        console.log(this.props.userInfoActions)
    }

    changeCity(newCity){
        if(newCity == null){
            return
        }

        //修改redux
        const userinfo = this.props.userinfo
        userinfo.cityName = newCity
        this.props.userInfoActions.update(userinfo)
        //修改localStorage
        LocalStore.setItem('USER_CURRENT_CITY_NAME',newCity)
        //跳转到首页
        hashHistory.push('/')
    }
}

function mapStateToProps(state) {
    return {
        userinfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)
