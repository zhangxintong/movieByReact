import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Star extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
    	//获取star数量 并取余5（最多5个star）
    	let star = this.props.star || 0
    	if(star > 5){
    		star = star % 5
    	}
        //let score = this.props.score||0
        let result = []
        let score = Math.floor(this.props.score) / 2
        let starOn = Math.floor(score)
        let starHalf = (score - starOn) === 0 ? 0 : 1
        for (let i = 0; i < starOn; i++) {
          result.push('icon-star light')
        }
        if (starHalf === 1) {
          result.push('icon-star-half light')
        }
        while (result.length < 5) {
          result.push('icon-star')
        }
        //return result
      
        return (
        	<div className="star-container">
        		{result.map((item,index) => {
        			//const lightClass = star >=item ? ' light' :''
        			return <i key={index} className={item}/>
        		})}
        	</div>
        )
    }
}

export default Star
