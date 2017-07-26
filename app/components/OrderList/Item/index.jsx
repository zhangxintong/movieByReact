import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	commentState:2 //0-未评价 1-评价中 2-已评价
        }
    }
    render() {
        const data = this.props.data
        return (
            <div className="order-item-container">
            	<div className="clear-fix">
	                <div className="order-item-img float-left">
	                    <img src={data.img}/>
	                </div>
	                <div className="order-item-comment float-right">
					{    
						this.state.commentState === 0
					 	? <button className="btn" onClick={this.showComment.bind(this)}>未评价</button>
					 	:
					 		 this.state.commentState ===1
					 		? ''
					 		:<button className="btn unseleted-btn">已评价</button>
	                }                
	                </div>
	                <div className="order-item-content">
	                    <span>影片：{data.title}</span>
	                    <span>影院：{data.cinemaInfo}</span>
	                    <span>座位：{data.seats}</span>
	                </div>
	                <div className="order-item-content">
	                    <span>状态：{data.orderStatus==='1'?"未支付":"已支付"}</span>
	                    <span>数量：{data.count}</span>
	                    <span>单价：￥{data.price}</span>
	                </div>
	            </div>
	              {
                    // “评价中”才会显示输入框
                    this.state.commentState === 1
                    ? <div className="comment-text-container">
                        <textarea style={{width: '100%', height: '80px'}} className="comment-text" ref="commentText"></textarea>
                        <button className="btn" onClick={this.submitClickHandle.bind(this)}>提交</button>
                        &nbsp;
                        <button className="btn unseleted-btn" onClick={this.hideComment.bind(this)}>取消</button>
                    </div>
                    : ''
                }
            </div>
        )
    }
    showComment(){
    	this.setState({
    		commentState:1
    	})
    }
    hideComment(){
    	this.setState({
    		commentState:0
    	})
    }
    submitClickHandle(){
    	const submitComment = this.props.submitComment
    	const id = this.props.data.id
    	const commentTextDOM = this.refs.commentText
    	const value = commentTextDOM.value.trim()
    	if(!value){
    		return 
    	}
    	//提交评论内容
    	submitComment(id,value,this.commentOK.bind(this))
    }
    commentOK(){
    	//已经评价 修改状态
    	this.setState({
    		commentState:2
    	})
    }
    componentDidMount(){
    	this.setState({
    		commentState:this.props.data.commentState
    	})
    }
}

export default Item