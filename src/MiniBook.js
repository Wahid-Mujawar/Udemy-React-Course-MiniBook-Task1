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
      >
        <p>Sudha Murthy always inspired everyone to 
        lead a simple life and listen to their conscience. 
        She believes the beauty of a person lies in simplicity and confidence; 
        so she says live life for yourself and not for others. Every human
        being should run their own marathon</p>
      </Book>
       <Book 

      img={secondbook.img}
      title={secondbook.title}
      author={secondbook.author}
      />
    </section>
  )
}
const Book = (props) => {
  const {img, title, author} = props;
  return (
  <article className='book'>
    <img src={img} alt=''/>  
    <h4>{title}</h4>
    <h5>{author}</h5>
    {props.children}
  </article>
  )
}

export default BookList