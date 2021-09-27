import React, { useEffect, useState } from 'react';
import { useCardList } from '../context/CardContext';
import axios from 'axios';
import Card from './Card';

const CardList = () => {
  const { cardList, setCardList, filteredList, setFilteredList } =
    useCardList();
  const [isLoading, setisLoading] = useState(true);
  console.log('comp:', filteredList);

  const fetchData = async () => {
    const res = await axios(
      'https://614f3e1cb4f6d30017b48511.mockapi.io/api/youtube'
    );
    setCardList(res.data);
    setFilteredList(res.data);
    setisLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="cardList">
        {isLoading && <div className="loading"></div>}
        {!isLoading &&
          filteredList.map((card, index) => {
            if (index < 10) {
              return <Card key={card.id} item={card} />;
            }
          })}
      </div>
    </div>
  );
};

export default CardList;