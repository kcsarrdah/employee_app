import React from "react";
import MainBody from '../components/headers/MainBody'
import LargeCardContainer from '../components/cards/CardContainer/largeCardcontainer'
import LargeCard from '../components/cards/largeCard'
import FaqAndTnc from '../components/extras/faqAndTncBox'


const MyPerks = () => {
  return (
    <div>
      <MainBody>
        <LargeCardContainer>
          <LargeCard />
          <LargeCard />
          <LargeCard />
          <LargeCard />
        </LargeCardContainer>
        <FaqAndTnc />
      </MainBody>
    </div>
  );
};

export default MyPerks;
