import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as categoryActions from "../../redux/actions/categoryActions"; 
import{ListGroup,ListGroupItem,Badge} from "reactstrap";
import * as productActions from "../../redux/actions/productActions";

class CategoryList extends Component {

componentDidMount(){
this.props.actions.getCategories();//render edilmeden önce kategori getirme metodunu çağırdık ve bu sayede categories içerisi doldu artık kullanıma hazır. 
}
selectCategory= category=>{
this.props.actions.changeCategory(category);
this.props.actions.getProducts(category.id);
}
  render() {
    return (
      <div>
          <Badge color='warning'>Categories</Badge>
        <ListGroup>
          {this.props.categories.map(category=>
            <ListGroupItem active={this.props.currentCategory.id===category.id} onClick={()=>this.selectCategory(category)} key={category.id}>
              {category.categoryName}
            </ListGroupItem>
            )}
        </ListGroup>
      </div>
    )
  }
}
function mapStateToProps(state){
  return{
    currentCategory:state.changeCategoryReducer,
    categories:state.categoryListReducer
  }
}
function mapDispatchToProps(dispatch){ //dispatch diyince aklına aksiyon gelsin. Aksiyonları propsa bağladık bu sayede çalıştırabileceğiz
  return{
    actions:{
      getCategories:bindActionCreators(categoryActions.getCategories,dispatch),
      changeCategory:bindActionCreators(categoryActions.changeCategory,dispatch),
      getProducts: bindActionCreators(productActions.getProducts, dispatch),

    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryList)