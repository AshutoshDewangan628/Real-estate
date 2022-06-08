import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

// headers: {
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
//     'X-RapidAPI-Key': '5291bf74b1msh1630e15fa7ba805p13b50fjsn46a4b56daa07'
//   }


export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '5291bf74b1msh1630e15fa7ba805p13b50fjsn46a4b56daa07'
          }
        
    });
      
    return data;
  }