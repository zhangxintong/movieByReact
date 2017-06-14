import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Comment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <h1>Comment</h1>
        )
    }
}

export default Comment
