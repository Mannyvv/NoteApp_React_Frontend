import {API_URL} from "../utils/API"


//Fetch all Notes - GET
export const fetchNotes = async (setNotes) => {
    try {
      const response = await fetch(API_URL);
      const notes = await response.json();
      setNotes(notes.reverse());
    } catch (error) {
      console.log(error);
    } 
} 


export const awakeHeroku = () => {
  try {
    setInterval( async() => {
      const response = await fetch(API_URL);
      const notes = await response.json()
      console.log("it worked", notes)
    }, 1 * 60 * 1000); // every 25 minutes
    
  } catch (error) {
    console.log(error)
  }
}


