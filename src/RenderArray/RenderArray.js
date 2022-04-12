import React, { Component } from 'react'

export default class RenderArray extends Component {

    arrProduct = [
        {id:1,name:'black car',img:'./img/products/black.jpg',price:5000}, 
        {id:2,name:'red car',img:'./img/products/red.jpg',price:6000}, 
        {id:3,name:'silver car',img:'./img/products/silver.jpg',price:7000}, 
        {id:4,name:'steel car',img:'./img/products/steel.jpg',price:8000} 
    ]

    renderCarProduct = () => {
        // let result = [];
        // for(let product of this.arrProduct){
            // let tr = <tr key={product.id}>
            //     <td>{product.id}</td>
            //     <td>{product.name}</td>
            //     <td><img src={product.img} alt='...' width={50}/></td>
            //     <td>{product.price}</td>
            //     <td></td>
            // </tr>;
        //     result.push(tr);
        // }

        let result = this.arrProduct.map((product,index)=>{
            return  <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td><img src={product.img} alt='...' width={50}/></td>
            <td>{product.price}</td>
            <td></td>
        </tr>
        })

        return result;
    }
       
    


  render() {
    return (
      <div className='container'>
          <h3>Danh sách xe hơi</h3>
          <table className='table'>
              <thead>
                  <tr>
                      <th>id</th>
                      <th>name</th>
                      <th>img</th>
                      <th>price</th>
                      <th></th>
                  </tr>
              </thead>
              <tbody>
                  {this.renderCarProduct()}
                  {/* <tr></tr>
                  <tr></tr>
                  <tr></tr>
                  <tr></tr> */}
              </tbody>
          </table>
          
      </div>
    )
  }
}
