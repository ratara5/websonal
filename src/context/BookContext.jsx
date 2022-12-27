import {createContext, useState, useEffect} from 'react' 

export const BookContext=createContext()

export function BookContextProvider(props) {

  const [books,setBooks]=useState();

  const [descriptionBook, setDescriptionBook]=useState('Take a book for see its description');

  useEffect(()=>{
    async function getBooks(){
      const result=await fetch('http://localhost:3001/books');
      const response=await result.json();
      setBooks(response);
    }
    getBooks();
  },[]);

  function handleSelectedBook(bookId, bookDescription) {
    const selectedBookDescription=bookDescription;
    setDescriptionBook(selectedBookDescription);
  }

  return (
    <BookContext.Provider value={{
      books,
      descriptionBook,
      handleSelectedBook
      }}>
        {props.children}
    </BookContext.Provider>
  )
}