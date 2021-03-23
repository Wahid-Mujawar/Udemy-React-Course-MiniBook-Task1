import React from 'react';

const firstbook = {
  img: "https://images-eu.ssl-images-amazon.com/images/I/818mZjcEJ4L._AC_UL200_SR200,200_.jpg",
  title : "The Sudha Murty Book",
  author : "Sudha Murty"
}

const secondbook = {
  img :"https://images-eu.ssl-images-amazon.com/images/I/71KKZlVjbwL._AC_UL200_SR200,200_.jpg",
  title : "Wings of Fire An Autobiography",
  author : "A. P. J. Abdul Kalam"
}


function BookList () {
  return(
    <section className="booklist">
      <Book 
      img={firstbook.img}
      title={firstbook.title}
      author={firstbook.author}
      />
       <Book 
      img={secondbook.img}
      title={secondbook.title}
      author={secondbook.author}
      />
    </section>
  )
}
const Book = (props) => {
  
  return (
  <article className='book'>
    <img src={props.img}/>  
    <h4>{props.title}</h4>
    <h5>{props.author}</h5>
  </article>
  )
}

export default BookList