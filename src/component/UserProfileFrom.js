import React, { useState ,useEffect } from 'react';



const UserProfileFrom = ({id}) =>{
    const [user , setUsers] = useState([]);
    const accessKey = "6rKVEZd1gWGlA8FLgveFQZFC7sOucq0rpGK9hqf1W-4";
    const api = "https://api.unsplash.com/search/photos?page=1&query=" + id + "&per_page=15&client_id=" + accessKey;


    useEffect(() =>{

    })

    return(
        <p>Hiii</p>
        

    );


};

export default UserProfileFrom;