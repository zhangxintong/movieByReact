import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import {LoadingData} from '../../components/Loading'
import StarMsgInfo from '../../components/StarMsgInfo'

class StarMsg extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.getData = this.getData.bind(this);
        this.state = {
        	info :false
        }
    }
    render() {
        return (
        	<div>
	        {

	        	this.state.info?
	        	<div>
	            <Header title={this.state.info.name_en +" "+this.state.info.name }/>
	            <StarMsgInfo data ={this.state.info}/>
	            </div>
	            :<LoadingData />
	        }
          </div>
        )
    }
    componentDidMount(){
        this.getData()
    }
    getData(){
        const url = 'https://api.douban.com/v2/movie/celebrity/' + this.props.params.id 
        $.ajax({
            // 注意这里有个参数callback=?
             url: url,
             async: true ,// 同步请求，发送请求后浏览器将被锁定，只有等到该请求完成(无论成功或失败)后，用户才能操作，js代码才会继续执行
             dataType: "jsonp" ,// 返回JSON格式的数据
             success: function( data, textStatus, jqXHR ){
                console.log(data)
            },
            error:function(){
                console.log("&&&")
            }
        }).then(res=>{
            console.log("*&&&&")
            console.log(res)
            this.setState({
                info:res
            })
        })

    }
}

export default StarMsg
