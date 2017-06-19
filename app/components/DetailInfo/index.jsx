import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../Star'
import {Link} from 'react-router'

import './style.less'

class DetailInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
    	// 获取数据
        const data = this.props.data
        return (
	        <div>
	            <div id="detail-info-container">
	                <div className="clear-fix">
	                    <div className="info-img-container float-left">
	                        <img src={data.images.medium} alt={data.alt}/>
	                    </div>
	                    <div className="info-content">
	                        <h3>{data.title}</h3>
	                        <Star className="star-container" score={data.rating.average}/>
	                        <p>{data.rating.average}({data.collect_count}人评分)</p>
	                        <p>{data.year}年</p>
	                        <p>{data.genres.join(', ')}</p>
	                        {
	                        	data.countries.map((item,index)=>{
	                        		return <p key={index}>{item}</p>
	                        	})
	                        }
	                        {
	                        	data.durations.map((item,index)=>{
	                        		if(item.indexOf('中国')>0)
	                        		return <p key={index}>{item}</p>
	                        	})

	                        }
	                        {
	                        	data.pubdates.map((item,index)=>{
	                        		if(item.indexOf('中国')>0)
	                        		return <p key={index}>{item}</p>
	                        	})

	                        }

	                    </div>
	                </div>
	            </div>
	            <div className="msg-count">
	            	<div>
	            		{data.wish_count}人想看
	            	</div>
	            	<div>
	            		{data.reviews_count}人看过
	            	</div>
	            </div>
	            <div className="msg-summary">
	            	{data.summary}
	            </div>
	            <div className="msg-scoll-hidden">
	            	<div className="msg-star-wrap">
	            		<h3>
	            			演职人员
	            		</h3>
	            		<div className="msg-scoll">
	            			{
	            				data.directors.map((item,index)=>{
	            					return(
	            							<div key={index}>
	            								<Link to={'/starMsg/'+item.id}>
		            							<div>
		            								<img src={item.avatars.small} alt={item.alt}/>
		            							</div>
		            							<div className="msg-star-name">
		            								{item.name}[导演]
		            							</div>
		            							</Link>
	            							</div>
	            						)
	            				})
	            			}
	            			{
	            				data.casts.map((item,index)=>{
	            					return (
	            							<div key={index}>
	            								<Link to={'/starMsg/'+item.id}>
	            								<div>
	            									<img src={item.avatars.small} alt={item.alt}/>
	            								</div>
	            								<div className="msg-star-name">
	            									{item.name}
	            								</div>
	            								</Link>
	            							</div>
	            						)
	            				})
	            			}
	            		</div>
	            	</div>
	            </div>
	        </div>

        )
    }
}

export default DetailInfo
