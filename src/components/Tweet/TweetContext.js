import React, { createContext, useState } from "react";
import moment from "moment";
import avatar from "../../assets/carmen-sandiego.png";

export const TweetContext = createContext(null);

const date = new moment().format("h:mm A - MMM Do, YYYY");

export const TweetProvider = ({ children }) => {
  const [numOfLikes, setNumOfLikes] = useState(460);
  const [numOfRetweets, setNumOfRetweets] = useState(65);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  const handleToggleLike = () => {
    if (isLiked) {
      setNumOfLikes(numOfLikes - 1);
      setIsLiked(false);
    } else {
      setNumOfLikes(numOfLikes + 1);
      setIsLiked(true);
    }
    // console.log("click");
  };

  const handleToggleRetweet = () => {
    if (isRetweeted) {
      setNumOfRetweets(numOfRetweets - 1);
      setIsRetweeted(false);
    } else {
      setNumOfRetweets(numOfRetweets + 1);
      setIsRetweeted(true);
    }
  };

  return (
    <TweetContext.Provider
      value={{
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        isRetweetedByCurrentUser: isRetweeted,
        isLikedByCurrentUser: isLiked,
        date,
        numOfLikes,
        numOfRetweets,
        isLiked,
        isRetweeted,
        handleToggleLike,
        handleToggleRetweet,
        size: 40,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
