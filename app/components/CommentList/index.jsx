import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Item from './Item'

import './style.less'

class CommentList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        return (
        	<div className="comment-list">
                <h3>热门短评</h3>
	            {data.map((item, index) => {
	            	return <Item key={index} data={item}/>
	            })}
                <p className="msg-all-Comment">查看全部短评论</p>
                <p className="msg-all-Comment">查看全部影评</p>

            </div>
        )    
    }
}

export default CommentList
