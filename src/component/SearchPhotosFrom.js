import React, { useState } from "react";
import axios from 'axios';
import PostPhotosFrom from './PostPhotosFrom';



export default function SearchPhotos() {
    const [search, setSearch] = useState("");
    const accessKey = "6rKVEZd1gWGlA8FLgveFQZFC7sOucq0rpGK9hqf1W-4";
    const [user, setUsers] = useState([]);

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSubmit = () => {
        console.log(search);
        const api = "https://api.unsplash.com/search/photos?page=1&query=" + search + "&per_page=15&client_id=" + accessKey;
        axios.get(api).then((response) => {
            console.log(response);
            setUsers(response.data.results);
        });
    };

    return (
        <>
            <form className="form">
                {" "}
                <label className="label" htmlFor="search">
                    {" "}
          📷
        </label>
                <input
                    type="text"
                    name="search"
                    className="input"
                    placeholder={`Try "dog" or "apple"`}
                    value={search}
                    onChange={handleChange}
                />
                <button type="submit" className="button" onClick={handleSubmit}>
                    Search
        </button>
                <div className="result">
                    {user.map((search) => (
                        <div className="show">
                            <PostPhotosFrom image={search} />
                        </div>
                    ))}
                </div>
            </form>


        </>
    );
}
