import React,{Component} from 'react';
import React_DOM,{render} from 'react-dom'
import {connect} from 'react-redux'
import * as action from '../../redux/actions'
import Header from '../../components/header'
import {addBook} from '../../api'
import './index.css'
class Add extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        this.props.setLink('/add');
    }
    add=()=>{
        let book={
            bookName:this.name.value,
            bookCover:this.bookCover.value,
            content:this.content.value
        };
        addBook(book).then(res=>{
            this.props.addBook(res.data);
            this.props.history.push('/list');
        });
        this.props.setLink('/add');
    };
    render(){
        return(
            <div>
                <Header title="添加页">
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
                    <button onClick={this.add}>添加图书</button>
                    <button onClick={()=>{this.props.history.push('/home')}}>返回主页</button>
            </div>
            </div>
        )
    }
}
export default connect((state)=>({
    link:state.link
}),action)(Add)