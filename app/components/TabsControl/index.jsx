import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import "./style.less"

class TabsControl extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        this.state = { 
            currentIndex : 0
        }
    }

    check_title_index( index ){
        return index === this.state.currentIndex ? "tab_title active" : "tab_title"
    }

    check_item_index( index ){
        return index === this.state.currentIndex ? "tab_item show" : "tab_item"
    }

    render(  ){
        let _this = this
        return(
            <div>
                { /* 动态生成Tab导航 */ }
                <div className="tab_title_wrap">
                    { 
                        React.Children.map( this.props.children , ( element,index ) => {
                            return(
                                <div onClick={ (  ) => { this.setState({ currentIndex : index }) } } className={ this.check_title_index( index ) }>{ element.props.name }</div>
                            )
                        }) 
                    }
                </div>
                { /* Tab内容区域 */ }
                <div className="tab_item_wrap">
                    {
                        React.Children.map(this.props.children,( element,index )=>{
                            return(
                                <div className={ this.check_item_index( index ) }>{ element }</div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default TabsControl