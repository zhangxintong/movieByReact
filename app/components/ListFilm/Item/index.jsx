import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../../Star'
import {Link} from 'react-router'

import './style.less'
class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
    	const item = this.props.data
    	//console.log(item)
        return (
        	<div className="list-item clear-fix">
        		<Link to={'/detail/'+item.id+'/'+item.title}>
        		<div className="item-img-container float-left">
        			<img src={item.images.small} alt={item.alt}/>
        		</div>
        		<div className="item-content clear-fix">
        			<h2>{item.title}</h2>
        			<Star className="star-container" score={item.rating.average} />
        			<p>{item.rating.average}分</p>
        			<p>导演：{item.directors[0].name}</p>
        			 <p>
		                主演:{ item.casts.length>0
		                	  ?item.casts[0].name
		                      :item.casts.length>=2
		                      ?<span> , {item.casts[1].name }</span>
		               		  :''
		               } 
	              </p>
        		</div>
        		</Link>
        	</div>
        )
    }
}

export default Item
