import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo' 
import {hashHistory} from 'react-router'
import Header from '../../components/Header'
import LoginComponent from '../../components/Login'

import './style.less'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	checking:true
        }
    }
    render() {
        return (
        	<div>
        	<Header title="登录" />
	        {
	        	this.state.checking
	        	?<div></div>
	        	:<LoginComponent loginHandle={this.loginHandle.bind(this)}/>
	        }
	        </div>
        )
    }
    componentDidMount(){
    	this.doCheck()
    }
		// 登录成功后的业务
    loginHandle(username){
    	//保存用户名
    	const actions = this.props.userInfoActions
    	let userinfo = this.props.userinfo
    	userinfo.username = username
    	actions.update(userinfo)

    	//跳转链接
    	const params = this.props.params
    	const router = params.router
    	if(router){
    		//跳转到指定页面
    		hashHistory.push(router)
    	}else{
    		//跳转到默认页面 即用户中心页

    		this.goUserPage()
    	}
    }
    doCheck(){
    	const userinfo = this.props.userinfo
    	if(userinfo.username){
    		//已经登录
    		this.goUserPage()
    	}else{
    		//尚未登录
    		this.setState({
    			checking:false
    		})
    	}
    }
    goUserPage(){
    	hashHistory.push('/User')
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
)(Login)

