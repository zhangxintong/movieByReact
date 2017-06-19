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
            <Link to={'/detail/'+item.subject.id+'/'+item.subject.title}>
            	<div className="star-movie">
            		<div className="img-info">
            			<img src={item.subject.images.small} alt={item.alt}/>
            		</div>
                    <div className="other-info"> 
                		<div>
                			<p>{item.subject.title}</p>
                            {
                                item.roles.map((it,index)=>{
                                    return <p key={index}>{it} </p>
                                })
                            }
                            <p>{item.subject.year}</p>
                		</div>
                        <div>
                            <Star className="star-container" score={item.subject.rating.average} />
                            <p>{item.subject.rating.average}分 {item.subject.collect_count}人评价</p>
                        </div>
                    </div>
            	</div>
            </Link>
        )
    }
}

export default Item
