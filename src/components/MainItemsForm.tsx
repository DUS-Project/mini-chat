import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import MainItem from './MainItem';
import MainItemButton from './MainItemButton';
import { mainPageState } from './../store/mainPageState';
import styled from 'styled-components';

interface MainItemsFormProps {
  index: number;
  text: string;
  buttonText: string;
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;

const StyledLabel = styled.label`
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  border: solid 2px #e02678;
  border-radius: 0.3rem;
  padding: 1rem 1.25rem;
  margin: 0.5rem 0;
`;

const MainItemsForm: React.FC<MainItemsFormProps> = ({ index, buttonText }) => {
  const [activeIndex, setActiveIndex] = useRecoilState(mainPageState);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (index === activeIndex) {
      // 활성화 되었을 때 로직
    }
  }, [index, activeIndex]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    setter(event.target.value);
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email) {
      alert('이름과 이메일을 올바르게 작성해 주세요');
      return;
    }

    try {
      const response = await fetch('YOUR_API_URL_HERE', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        setActiveIndex((prevIndex) => prevIndex + 1);
        alert('이메일이 성공적으로 발송 되었습니다.');
        setName('');
        setEmail('');
        window.location.reload();
      } else {
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
        <MainItem text="">
          <StyledForm onSubmit={handleSend}>
            <StyledLabel>이름</StyledLabel>
            <StyledInput
              type="text"
              value={name}
              onChange={(e) => handleChange(e, setName)}
              required
              autoFocus
              placeholder="성함을 입력해주세요"
              maxLength={15}
            />
            <StyledLabel>이메일</StyledLabel>
            <StyledInput
              type="email"
              value={email}
              onChange={(e) => handleChange(e, setEmail)}
              required
              placeholder="답신을 받을 이메일을 입력해주세요"
              maxLength={40}
            />
            <MainItemButton type="submit" text={buttonText} />
          </StyledForm>
        </MainItem>
      )}
    </>
  );
};

export default MainItemsForm;
