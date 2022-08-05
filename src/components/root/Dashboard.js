import React, { Component } from 'react'
import CategoryList from '../categories/CategoryList'
import {Col,Row} from 'reactstrap'
import ProductList from '../products/ProductList'
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Row>
            <Col xs="3">
                <CategoryList/>
            </Col>
            <Col xs="9">
                <ProductList/>
            </Col>

        </Row>

      </div>
    )
  }
}
