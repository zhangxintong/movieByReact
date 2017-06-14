import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../../Star'

import './style.less'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const item = this.props.data
        return (
             <div className="comment-item">
                <div className="msg-rating">
                    <Star score={item.rating.value*2}/>
                    <span>{item.created_at}</span>
                </div>
                <p className="author-content">
                    {item.content}
                </p>
                <div className="author-img">
                    <img src={item.author.avatar} alt={item.author.alt}/>
                    <span>{item.author.name}</span>
                </div>
            </div>
        )
    }
}

export default Item
