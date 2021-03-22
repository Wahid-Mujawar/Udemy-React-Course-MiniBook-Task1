import React from 'react';

function BookList () {
  return(
    <section>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  )
}
const Book = () => {
  return (
  <article>
    <Image></Image>
    <Title/>
    <Author/>
  </article>
  )
}

const Image = () => {
  return (
  <img
  src='https://images-eu.ssl-images-amazon.com/images/I/91UZesy7p5L._AC_UL200_SR200,200_.jpg' alt="" 
  />
  )
}
const Title  = () =><h3>Sudha Murty Three Thousand Stitches</h3>
const Author  = () =><h4>Sudha Murty</h4>

export default BookList