import React, { useContext } from "react";
import styled from "styled-components";
import { TweetContext } from "./TweetContext";
import Header from "./Header";
import ActionBar from "./ActionBar";

const Tweet = () => {
  const { tweetContents, date, numOfLikes, numOfRetweets } = useContext(
    TweetContext
  );
  return (
    <Wrapper>
      <Header />
      <TweetContents>{tweetContents}</TweetContents>
      <Timestamp>{date}</Timestamp>
      <Divider />

      <Stats>
        <Bold>{numOfRetweets}</Bold>
        <SmallFont>Retweets</SmallFont>
        <Bold>{numOfLikes}</Bold>
        <SmallFont>Likes</SmallFont>
      </Stats>
      <Divider />
      <ActionBar />
      <Divider />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  width: 580px;
  padding: 16px;
  text-align: left;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
`;

const TweetContents = styled.div`
  font-size: 22px;
  padding: 16px 0;
`;

const Timestamp = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  padding-bottom: 16px;
`;

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
`;

const SmallFont = styled.span`
  margin-left: 5px;
  margin-right: 25px;
  font-size: 16px;
  color: slategray;
`;

const Bold = styled.span`
  font-weight: bold;
`;

export default Tweet;
