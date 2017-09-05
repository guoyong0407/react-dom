import React,{Component} from 'react';
import React_DOM,{render} from 'react-dom'
import {connect} from 'react-redux'
import * as action from '../../redux/actions'
import Header from '../../components/header'
import {getOneBook,updateBook} from '../../api'
import './index.css'
class Update extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        let id=this.props.match.params.id;
        getOneBook(id).then(res=>{
            this.name.value=res.data.bookName;
            this.bookCover.value=res.data.bookCover;
            this.content.value=res.data.content;
        })
    }
    edit=()=>{
        let id=this.props.match.params.id;
        let book={
            bookName:this.name.value,
            bookCover:this.bookCover.value,
            content:this.content.value,
        };
        updateBook(id,book).then(res=>{
            this.props.history.push('/list');
        })
    };
    render(){
        return(
            <div>
                <Header title="修改页面">
                </Header>
                <div className="add">
                    <div className="group">
                        <label htmlFor="bookName">书名</label>
                        <input type="text" id="bookName" placeholder="请输入书名" ref={ref=>this.name=ref}/>
                    </div>
                    <div className="group">
                        <label htmlFor="bookCover">书的封面地址</label>
                        <input type="text" id="bookCover" placeholder="请输入书的封面地址" ref={ref=>this.bookCover=ref}/>
                    </div>
                    <div className="group">
                        <label htmlFor="content">书的详情</label>
                        <input type="text" id="content" placeholder="请输入书的详细内容" ref={ref=>this.content=ref}/>
                    </div>
                </div>
                <div className="choose">
                    <button onClick={this.edit}>修改图书</button>
                    <button onClick={()=>{this.props.history.push('/list')}}>返回列表</button>
                </div>
            </div>
        )
    }
}
export default connect((state)=>({
    book:state.book
}),action)(Update)