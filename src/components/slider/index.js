import React,{Component} from 'react';
import React_DOM,{render} from 'react-dom'
import './index.css'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default class Slider extends Component{
    constructor(){
        super();
    }
    componentDidUpdate(){
        new Swiper(".swiper-container", {
            autoplay:true,
            speed:3000,
            loop: true,
            pagination: '.swiper-pagination',
        })
    }
    render(){
        return(
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        this.props.data.map((item,index)=>(
                            <div className="swiper-slide" key={index}>
                                <img src={item} alt=""/>
                            </div>
                        ))
                    }
                </div>
                <div className="swiper-pagination">
                </div>
            </div>
        )
    }
}