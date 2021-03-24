import React from 'react';

const books = [
  {
    id : 1,
    img: "https://images-eu.ssl-images-amazon.com/images/I/818mZjcEJ4L._AC_UL200_SR200,200_.jpg",
    title : "The Sudha Murty Book",
    author : "Sudha Murty"
  },

  {
    id : 2,
    img :"https://images-eu.ssl-images-amazon.com/images/I/71KKZlVjbwL._AC_UL200_SR200,200_.jpg",
    title : "Wings of Fire An Autobiography",
    author : "A. P. J. Abdul Kalam"
  },
  
  {
    id : 3,
    img :"https://images-eu.ssl-images-amazon.com/images/I/715gDLrD9JL._AC_UL200_SR200,200_.jpg",
    title : "The Power of Your Subconscious Mind",
    author : "Joseph Murphy"
  },
]

function BookList () {
  return(
    <section className="booklist">
      {books.map((book) => {
      return <Book key={book.id} book={book}></Book>
      })}
    </section>
  );
}

const clickHandler = () => {
  alert("Mini Book");
}

const Book = (props) => {
  const {img, title, author} = props.book;
  return (
  <article className='book'>
    <img src={img} alt=''/>  
    <h4>{title}</h4>
    <h5>{author}</h5>
    <button type="button" onClick={clickHandler}>On Click</button>
    
  </article>
  )
}

export default BookList