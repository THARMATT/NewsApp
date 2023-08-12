import React, { Component } from 'react'

export class NewsItem extends Component {
   
  render() {
   let{ title,description,imageurl,newsurl}=this.props
    return (
      <div className='my-3'>
       <div class="card" style={{width: "18rem"}}>
  <img src={imageurl}class="card-img-top" alt="img"/>
  <div class="card-body">
    <h5 class="card-title">{title}title</h5>
    <p class="card-text">{description}...</p>
    <a href={newsurl} target= "blank" class="btn btn-primary">Read More </a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
