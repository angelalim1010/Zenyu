import axios from "axios";

export const getJournal = async (date)=>{
    console.log("getting journals")
    try{
        console.log("got journals")
        return await axios.get(`https://zenyu-backend.herokuapp.com/api/users/userjournals?creationDate=${date}`)
    }
    catch(e){
        console.log(e.response)
    }
}

export const updateJournal = async (id, newContent) =>{
    console.log("journal updating")
    try{
        return await axios.put(`https://zenyu-backend.herokuapp.com/api/userjournals/${id}`,
            {content: newContent})

    }

    catch(e){
        console.log(e.response)
    }
}

export const updateMood = async (id, newContent) =>{
    console.log("mood updating")
    try{
        return await axios.put(`https://zenyu-backend.herokuapp.com/api/usermoods/${id}`,
            {moodid: newContent},
            {headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjZhNDliYTBkLTAzY2YtNDQ0ZS1hNGUzLTEyMGVlMTA2Y2RkYyIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsIm5iZiI6MTYwMzMxMDQ4NiwiZXhwIjoxNjM0ODQ2NDg2LCJpYXQiOjE2MDMzMTA0ODZ9.Hg7eDvCmxQJiY8zpKCgkqaarwGDq_ITaFqWCA1YA8lo`
            }
        })

    }

    catch(e){
        console.log(e.response)
    }
}

export const deleteJournal = async (id) =>{
    console.log("journal deleted")
    try{
        return await axios.delete(`https://zenyu-backend.herokuapp.com/api/userjournals/${id}`)
    }
    catch(e){
        console.log(e.response)
    }
}

export const deleteMood = async (id) =>{
    console.log("mood deleted")
    try{
        return await axios.delete(`https://zenyu-backend.herokuapp.com/api/usermoods/${id}`)
    }
    catch(e){
        console.log(e.response)
    }
}