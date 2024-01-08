import React from 'react';
import styled, { css } from 'styled-components';
import { UserDataProps } from 'src/modules/@types/common';
import Typography from '@components/common/Typography';
import Input from '@components/common/Input';

const NameBox = styled.div``;

const Name: React.FC<UserDataProps> = ({ userData, setUserData }) => {
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevUserData) => ({ ...prevUserData, name: event.target.value }));
  };

  return (
    <NameBox>
      <Typography
        variant={'title1'}
        $style={css`
          margin-bottom: 100px;
        `}
      >
        반가워요! <br />
        이름이 어떻게 되시나요?
      </Typography>
      <Input onChange={handleNameChange}>
        <Input.TextField placeholder='닉네임을 입력해주세요' error={false} />
      </Input>
    </NameBox>
  );
};

export default Name;