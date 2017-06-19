import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import Item from '../../components/CommentList/Item'
import {LoadingData} from '../../components/Loading'

class ShrotComment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.getData = this.getData.bind(this);
        this.state = {
        	comments:false
        }
    }
    render() {
        return (
        	<div>
        	{
        		this.state.comments?
        		<div>
        			<Header title={this.props.params.title} />
        			<div style={{padding:10,}}>
           		    {this.state.comments.map((item,index)=>{
           		    	return <Item key={index} data={item}/>
           		    })}
           		    </div>
        		</div>
        		:<LoadingData/>
        	}
            
            </div>

        )
    }
    componentDidMount(){
        this.getData()
    }
    getData(){
        const url = 'https://api.douban.com/v2/movie/subject/' + this.props.params.id +'/comments?apikey=0b2bdeda43b5688921839c8ecb20399b&count=40&client=something&udid=dddddddddddddddddddddd'
        $.ajax({
            // 注意这里有个参数callback=?
             url: url,
             async: true ,// 同步请求，发送请求后浏览器将被锁定，只有等到该请求完成(无论成功或失败)后，用户才能操作，js代码才会继续执行
             dataType: "jsonp" ,// 返回JSON格式的数据
             success: function( data, textStatus, jqXHR ){
                console.log(data)
                 return data
            },
            error:function(){
                console.log("&&&")
            }
        }).then(res=>{
            console.log("*&&&&")
            console.log(res)
            this.setState({
                comments:res.comments
            })
        })

    }
}

export default ShrotComment
