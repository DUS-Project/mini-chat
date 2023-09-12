import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import MainItem from './MainItem';
import MainItemButton from './MainItemButton';
import { mainPageState } from './../store/mainPageState';

const MainItems = ({ index, items, buttonText }) => {
  const [activeIndex, setActiveIndex] = useRecoilState(mainPageState);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    if (index === activeIndex) {
      let i = 0;
      setVisibleItems([items[i]]); // 첫 번째 아이템을 배열에 추가
      const intervalId = setInterval(() => {
        i += 1;
        if (i < items.length) {
          setVisibleItems((prev) => [...prev, items[i]]); // 아이템을 배열에 추가
        } else {
          clearInterval(intervalId); // 모든 아이템이 추가되면 인터벌을 정지
        }
      }, 1000);

      return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 정리
    }
  }, [index, activeIndex, items]);

  const handleClick = () => {
    setActiveIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <>
      {visibleItems.map((itemText, idx) => (
        <MainItem key={idx} text={itemText} /> // 키를 인덱스로 사용
      ))}
      {visibleItems.length === items.length && <MainItemButton text={buttonText} onClick={handleClick} />}
    </>
  );
};

export default MainItems;
