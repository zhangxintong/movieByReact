#项目概览
链接 <https://zhangxintong.github.io/movieByReact/>
  
###说明
* 调用豆瓣电影票接口提供数据  
* 订单列表数据是使用koa做后端接口的模拟，在mock目录下是模拟数据，所以需要另为启动一个后台接口服务器 命令 npm run mock
* 没有影院列表展示和在线展示功能  

###技术栈
webpack+react+react-router+redux

###在本地打开项目  
* npm install
* npm start
* npm run mock  

###项目发布到gh-pages分支的方法  
+ git add dist
+ git subtree push --prefix dist origin gh-pages  
 - dist 代表子树所在的目录名  
 - origin 是 remote name
 - gh-pages 是目标分支名称
 
###跨域问题解决
+ ajax解决跨域 
`$.ajax({ url: "https://api.douban.com/v2/movie/in_theaters",
		     async: true ,// 同步请求，发送请求后浏览器将被锁定，只有等到该请求完成(无论成功或失败)后，用户才能操作，js代码才会继续执行
		     dataType: "jsonp" ,// 返回JSON格式的数据
		     success: function( data, textStatus, jqXHR ){
		         return data.subjects
		    },
		    error:function(e){
		    	console.log(e)
		    }
		}).then(res=>{
			console.log(res)
			this.setState({
				data:res.subjects
			})
		})` 
+ fetch-jsop
 - npm install fetch-jsonp
 - import fetchJsonp from 'fetch-jsonp'
 - 例子
 `let that = this;
  fetchJsonp(
    'https://api.douban.com/v2/movie/in_theaters'
  ).then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
    that.setState({
         data:json.subjects
    })
  }).catch(function(ex) {
     console.log('parsing failed', ex)
 )`
 说明：此处要先把this保存下来，否则数据返回后无法找到this，做this.setState({})操作。



 


 

