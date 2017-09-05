import React,{Component} from 'react';
import React_DOM,{render} from 'react-dom'
import {connect} from 'react-redux'
import * as action from '../../redux/actions'
import Header from '../../components/header'
import Slider from '../../components/slider'
import {getHot,getSliders} from '../../api'
import './index.css'
class Home extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        getHot().then(res=>{
            this.props.setHot(res.data);
        });
        getSliders().then(res=>{
            this.props.setSlider(res.data)
        });
        this.props.setLink('/home');
    }
    render(){
        return(
            <div>
                <Header title="书架"/>
                <Slider data={this.props.slider.sliderList}/>
                <h3>最新上架</h3>
                <ul className="hot">
                    {
                        this.props.hot.hotList.map((item,index)=>(
                            <li key={index}>
                                <img src={item.bookCover} alt=""/>
                                <span>{item.bookName}</span>
                            </li>
                        ))
                    }
                </ul>
                <div style={{height:"76px",width:"100%"}}>
                </div>
            </div>
        )
    }
}
export default connect((state)=>({
    hot:state.hot,
    slider:state.slider,
    link:state.link
}),action)(Home)