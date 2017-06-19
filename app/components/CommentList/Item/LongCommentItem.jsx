import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../../Star'

import './style.less'

class LongCommentItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.showContent = this.showContent.bind(this)
        this.state = {
        	show:true
        }
    }
    render() {
        const item = this.props.data
        return (
             <div className="largeCom-content">
             	<h3>标题:{item.title}</h3>
             	<div className="largeCom-content-header">
             		<img src={item.author.avatar} alt={item.author.alt}/>
             		<span>{item.author.name}</span>
             		<div className="largeCom-star">
             			<Star score={item.rating.value*2}/>
             		</div>
             		<span>{item.created_at}</span>
             	</div>
             	<div onClick={this.showContent} ref="summary">
             		{item.summary}
             	</div>
             	<div className="hide-content"  onClick={this.showContent} ref="content">
             		{item.content}
             	</div>
             	<footer>
             		{item.useful_count}赞同
             		{item.useless_count}反对
             	</footer>
            </div>
        )
    }
    showContent(){
    	console.log("******")
    	const item = this.props.data

    	if(this.refs.content.className==="hide-content"){
    		this.refs.summary.className = "hide-content"
    		this.refs.content.className = "show-content"
    	}else{
    		this.refs.summary.className = "show-content"
    		this.refs.content.className = "hide-content"
    	}
    }
}

export default LongCommentItem
