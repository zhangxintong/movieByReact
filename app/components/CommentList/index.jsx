import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Item from './Item'
import {Link} from 'react-router'

import './style.less'

class CommentList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        const title = this.props.title
        const id = this.props.id
        return (
        	<div className="comment-list">
                <h3>热门短评</h3>
	            {data.map((item, index) => {
	            	return <Item key={index} data={item}/>
	            })}
                <Link to={'/shortComment/短评--'+title+'/'+id} >
                    <p className="msg-all-Comment">查看全部短评论</p>
                </Link>
                <Link to={'/longComment/长评--'+title+'/'+id}>
                    <p className="msg-all-Comment">查看全部影评</p>
                </Link>

            </div>
        )    
    }
}

export default CommentList
