import {createContext, useState, useEffect} from 'react' 

export const BookContext=createContext()

export function BookContextProvider(props) {

  const [books,setBooks]=useState();
  const initialDescriptionText={bookId: 0, bookDescription: "Take a book for see its description", bookColor:"transparent", bookIcon:""}
  const [descriptionBook, setDescriptionBook]=useState(initialDescriptionText);

  useEffect(()=>{
    async function getBooks(){
      const result=await fetch('http://localhost:3001/books');
      const response=await result.json();
      setBooks(response);
    }
    getBooks();
  },[]);

  function handleSelectedBook(bookId, bookDescription, bookColor, bookIcon) {
    const selectedBookDescription={bookId,bookDescription,bookColor,bookIcon};
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