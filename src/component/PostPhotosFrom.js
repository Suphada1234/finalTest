import React from 'react';
import { faHeart, faComment, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostPhotosFrom = ({ search }) => {
    return (
        <from >
            <div key={search.id}>
                <div className="photo__header"  >
                    <div className="photo__header-color" >
                        <a href={"/profile/" + search.user.username} >
                            <img
                                className="photo__avatar"
                                alt={search.alt_description}
                                src={search.user.profile_image.medium}
                            ></img>
                        </a>
                    </div>
                    <div className="photo__header-column">
                        <span className="photo__username"><a href={"/profile/" + search.user.username} >{search.user.username}</a></span>
                    </div>
                </div>
                <div className="photo__file-container">
                    <img className="photo__file" alt={search.alt_description} src={search.urls.raw}></img>
                </div>
                <div className="photo__info">
                    <div className="photo__icons">
                        <span className="photo__icon"><FontAwesomeIcon icon={faHeart} /></span>
                        <span className="photo__icon"><FontAwesomeIcon icon={faComment} /></span> <span className="photo__icon"><FontAwesomeIcon icon={faShare} /></span>
                    </div>
                    <span className="photo__likes">{search.likes} likes</span>
                    <div className="photo__comments">
                        <div className="photo__comment">
                            <span className="photo__comment-author">
                                <a href={"/profile/" + search.user.username}>{search.user.username}</a>
                            </span>{search.alt_description}
                        </div>
                    </div>
                </div>
            </div>
            {" "}

        </from>
    )
}

export default PostPhotosFrom;