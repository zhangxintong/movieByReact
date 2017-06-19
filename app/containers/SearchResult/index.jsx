import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
//import Info from './subpage/Info.jsx'
//import Comment from './subpage/Comment'
import {LoadingData} from '../../components/Loading'
import SearchResultList from '../../components/SearchResultList'

class SearchResult extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.getData = this.getData.bind(this)
        this.state = {
            info :false
        }
    }
    render() {
        //获取搜索的内容
        const val = this.props.params.val
        return (
            <div>
                {
                    this.state.info
                    ?<div>
                     <Header title={"'"+val+"' 的搜索结果, 共"+this.state.info.total+"条信息"}/>
                     <SearchResultList data ={this.state.info.subjects} />
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
        const url = 'https://api.douban.com/v2/movie/search?q=' + this.props.params.val
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
                info:res
            })
        })

    }
}

export default SearchResult
