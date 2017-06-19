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
    	const data = this.props.data
        return (
        	<Link to={'/detail/'+data.id+'/'+data.title}>
	        	<div className="res-movies-show">
	        		<div className="res-movies-show-child">
	        			<div>
	        				<img src={data.images.small} alt={data.alt} />
	        			</div>
	        			<div className="res-movieMsg">
	        				<h2>{data.title}</h2>
	                    	<Star score={data.rating.average}/>
	        				<p>{ data.rating.average }分({ data.collect_count }评价)</p>
	              			<p>{ data.year }年</p>
	        			</div>
	        		</div>
	        	</div>
        	</Link>
        )
    }
}

export default Item
