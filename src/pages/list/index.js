import React,{Component} from 'react';
import React_DOM,{render} from 'react-dom'
import iScroll from 'iscroll/build/iscroll-probe'
import ReactIScroll from 'react-iscroll'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as action from '../../redux/actions'
import Header from '../../components/header'
import {getBook,removeBook} from '../../api'
import './index.css'
class Home extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        getBook().then(res=>{
            this.props.setBook(res.data);
        });
        this.props.setLink('/list');
    }
    save=(book)=>{
      this.props.addCollect(book);
      this.props.history.push('/collect');
    };
    remove=(id)=>{
        removeBook(id).then(res=>{
            this.props.deleteBook(id)
        })
    };
    render(){
        return(
            <div>
                <Header title="列表页"/>
                <div id="wrapper">
                    <ReactIScroll iScroll={iScroll} options={{mouseWheel: true,click: true, tap: true}}>
                        <ul className="list">
                            {
                                this.props.book.list.map((item,index)=>(
                                    <li key={index}>
                                        <img src={item.bookCover} alt=""/>
                                        <div className="list-right">
                                            <div className="list-header">
                                                <h3>{item.bookName}</h3>
                                                <button className="iconfont icon-shoucang" onClick={()=>this.save(item)}>
                                                </button>
                                            </div>
                                            <p className="book-content">{item.content}</p>
                                            <p className="btn-list">
                                                <button onClick={()=>{this.props.history.push(`/update/${item.id}`)}} className="btn-update">修改</button>
                                                <button onClick={()=>{this.remove(item.id)}} className="btn-delete">删除</button>
                                            </p>
                                        </div>
                                    </li>
                                ))
                            }
                            <div className="empty">
                            </div>
                        </ul>
                    </ReactIScroll>
                </div>
            </div>
        )
    }
}
export default connect((state)=>({
    book:state.book,
    link:state.link
}),action)(Home)