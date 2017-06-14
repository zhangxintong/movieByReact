import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ListFilm from '../../components/ListFilm'
//import {spinner}  from 'react-core-image-upload'
import {LoadingData}from '../../components/Loading'

class InTheaters extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
        }
        this.getData = this.getData.bind(this)
    }
    render() {
    	console.log("render **")
    	console.log(this.state.data.length)
        return (
        	<div>
            {
                this.state.data.length
                ? <ListFilm data={this.state.data}/>
                : <div>
                	<LoadingData />
                  </div>
            }
            </div>

        )
    }
    componentDidMount(){
    	 this.getData()
     }
   
     getData(){
    	$.ajax({
		    // 注意这里有个参数callback=?
		     url: "https://api.douban.com/v2/movie/in_theaters",
		     async: true ,// 同步请求，发送请求后浏览器将被锁定，只有等到该请求完成(无论成功或失败)后，用户才能操作，js代码才会继续执行
		     dataType: "jsonp" ,// 返回JSON格式的数据
		     success: function( data, textStatus, jqXHR ){
		        console.log(data.subjects)
		         return data.subjects
		    },
		    error:function(){
		    	console.log("&&&")
		    }
		}).then(res=>{
			console.log("*&&&&")
			console.log(res)
			this.setState({
				data:res.subjects
			})
		})

    }
  
}

export default InTheaters
