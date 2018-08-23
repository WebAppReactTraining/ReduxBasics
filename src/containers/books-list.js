import React,{Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class Booklist extends Component {
	renderList(){
		return this.props.books.map((book)=>{
			return(
				<li 
				key={book.title} 
				onClick={()=>this.props.selectBook(book)}
				className="list-group-item" >
				{book.title}
				</li>
				)
		})
	}

	render(){
		return(
		<ul className="list-group col-san-4">
		{this.renderList()}
		</ul>
			)
	}
}

function mapStateToProps(state){
	return{
		books:state.books
	};
}




function mapDispatchToProps(dispatch){
	//Whenever selectBook is called, the result should be passed to alll the reducers
	return bindActionCreators({selectBook:selectBook},dispatch)
}
//Anything rreturned from this function will end up as props on the Booklist container

export default connect(mapStateToProps, mapDispatchToProps)(Booklist) 
//promote Booklist from a component to container-It needs to know about this new dispatch-
//method, selectBook. Make it available as props.