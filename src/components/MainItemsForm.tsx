import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import MainItem from './MainItem';
import MainItemButton from './MainItemButton';
import { mainPageState } from './../store/mainPageState';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  jus
`;

const StyledInput = styled.input`
  border: solid 2px #e02678;
  border-radius: 0.3rem;
  padding: 1rem 1.25rem;
  margin: 0.5rem 0;
`;

const MainItemsForm = ({ index, text, buttonText }) => {
  const [activeIndex, setActiveIndex] = useRecoilState(mainPageState);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (index === activeIndex) {
      // 활성화 되었을 때 로직
    }
  }, [index, activeIndex]);

  const handleChange = (event, setter) => {
    setter(event.target.value);
  };

  const handleSend = async () => {
    try {
      const response = await fetch('YOUR_API_URL_HERE', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        // 요청이 성공했을 때 수행할 로직
        setActiveIndex((prevIndex) => prevIndex + 1);
        alert('이메일이 성공적으로 발송 되었습니다.');
        setName('');
        setEmail('');
        window.location.reload();
      } else {
        // 요청이 실패했을 때 수행할 로직
        alert('이메일 전송이 실패했습니다');
      }
    } catch (error) {
      console.error('에러가 발생했습니다:', error);
      alert('이메일 전송이 실패했습니다');
    }
  };

  return (
    <>
      {index === activeIndex && (
        <MainItem>
          <StyledSection>
            <label>
              이름
              <StyledInput type="text" value={name} onChange={(e) => handleChange(e, setName)} />
            </label>
            <label>
              이메일
              <StyledInput type="email" value={email} onChange={(e) => handleChange(e, setEmail)} />
            </label>
            <MainItemButton text={buttonText} onClick={handleSend} />
          </StyledSection>
        </MainItem>
      )}
    </>
  );
};

export default MainItemsForm;
