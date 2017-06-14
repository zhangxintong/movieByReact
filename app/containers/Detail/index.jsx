import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
//import Info from './subpage/Info.jsx'
//import Comment from './subpage/Comment'
import {LoadingData} from '../../components/Loading'
import DetailInfo from '../../components/DetailInfo'
import CommentList from '../../components/CommentList'
class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.getData = this.getData.bind(this)
        this.state = {
            info :false
        }
    }
    render() {
        //获取商户ID
        const id = this.props.params.id
        return (
            <div>
                {
                    this.state.info
                    ?<div>
                     <Header title={this.props.params.title}/>
                     <DetailInfo data ={this.state.info}/>
                     <CommentList data={this.state.info.popular_comments}/>
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
        const url = 'https://api.douban.com/v2/movie/subject/' + this.props.params.id + '?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=something&udid=dddddddddddddddddddddd'
        $.ajax({
            // 注意这里有个参数callback=?
             url: url,
             async: true ,// 同步请求，发送请求后浏览器将被锁定，只有等到该请求完成(无论成功或失败)后，用户才能操作，js代码才会继续执行
             dataType: "jsonp" ,// 返回JSON格式的数据
             success: function( data, textStatus, jqXHR ){
                console.log(data)
                 return data.subjects
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

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default Detail
module.exports = Detail