import React, {Component} from 'react';
import {ProductConsumer} from '../Context'
import Title from './Title'
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button'

class Details extends Component {
  render(){

    return (
      <div>
            <Title name="" title="Details" />
            <ProductConsumer>
              {values =>{
                  const {id,title,company,info,price,img,inCart} = values.detailProduct;
                  return(
                    <div className="container py-5">
                      {/* title */}
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                              <h1>{title}</h1>
                            </div>
                        </div>
                      {/* end title */}
                      {/* product info */}
                      <div className="row">
                        <div className="col-md mx-auto col-md-6 my-3">
                        <img src={img} alt="img" className="img-fluid"></img>
                        </div>
                        <div className="col-md mx-auto col-md-6 my-3 text-capitalize">
                              <h1>Model: {title}</h1>
                              <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                made by: <span className="text-uppercase">
                                  {company}
                                </span>
                              </h4>
                              <h4 className="text-blue">
                                <strong>
                                  Price: <span>$</span>{price}
                                </strong>
                              </h4>
                              <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                some info about product
                              </p>
                              <p className="text-muted lead">{info}</p>
                         {/* buttons */}
                          <div>
                          <Link to="/">
                            <ButtonContainer>
                              Back to products
                            </ButtonContainer>
                            </Link>
                            <ButtonContainer disabled={inCart ? true : false} onClick={() => values.addToCart(id)}>
                              {inCart ? "Incart" : "add to cart"}
                            </ButtonContainer>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              } }
            </ProductConsumer>
      </div>
  );
}
}

export default Details;
