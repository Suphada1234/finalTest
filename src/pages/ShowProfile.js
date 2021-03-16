import React from "react";
import Profile from "../component/UserProfileFrom";
import PhotoList from "../component/PhotoListFrom";

const ShowProfile = (props) => {
    return (
        <main>
            <Profile id={props.match.params.id} />
            <PhotoList id={props.match.params.id} />
        </main>
    );
};

export default ShowProfile;
