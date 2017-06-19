import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Item from './Item'
import './style.less'

class StarMsgInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
    	// 获取数据
        const data = this.props.data
        return (
        	<div>
	        	<div className="star-msg">
	        		<img src={data.avatars.large} />
	        		<div>
	        			<h3>影星资料</h3>
	        			<p>{data.name}</p>
	        			<p>{data.name_en}</p>
	        			<p>{data.gender}</p>
	        		</div>
	        	</div>
	        	<div className="star-movie-wrap">
	        		{data.gender =='男'?<h3>他的代表作品</h3>:<h3>她的代表作品</h3>}
	        		{data.works.map((item, index) => {
		            	return <Item key={index} data={item}/>
		            })}
	            </div>
            </div>
        )
    }
}

export default StarMsgInfo
