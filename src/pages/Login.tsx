import SocialLoginButton from '../components/login/SocialLoginButton';
import React from 'react';
import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';
import BasicLayout from './layout/BasicLayout';
import Typography from '../components/common/Typography';
import { colors } from 'src/styles/colors';
import { common } from 'src/styles/common';
import { ReactComponent as Naver } from '@assets/icons/naverIcon.svg';
import { ReactComponent as Kakao } from '@assets/icons/kakaoIcon.svg';
import { ReactComponent as Google } from '@assets/icons/googleIcon.svg';
import { SocialLogin } from 'src/types/socialLogin';
import IconWrapper from '@components/common/IconWrapper';

const socialLogins: SocialLogin[] = [
  {
    link: `${process.env.REACT_APP_SNS_BASE_URL}/kakao`,
    platform: '카카오로 시작',
    icon: (
      <IconWrapper>
        <Kakao />
      </IconWrapper>
    ),
    $variant: 'primary',
    color: colors.black,
    style: { background: '#FEE500', color: colors.black },
  },
  {
    link: `${process.env.REACT_APP_SNS_BASE_URL}/naver`,
    platform: '네이버로 시작',
    icon: (
      <IconWrapper>
        <Naver />
      </IconWrapper>
    ),
    $variant: 'primary',
    color: colors.white,
    style: { background: '#03C75A', color: colors.white },
  },
  {
    link: `${process.env.REACT_APP_SNS_BASE_URL}/google`,
    platform: '구글로 시작',
    icon: (
      <IconWrapper>
        <Google />
      </IconWrapper>
    ),
    $variant: 'ghost',
    color: colors.gray[60],
    style: { background: colors.white, color: colors.gray[20], border: `1px solid ${colors.gray[20]}` },
  },
];

const Login = () => {
  return (
    <BasicLayout>
      <SloganBox>
        <Typography
          $variant='largetitle'
          color={colors.gray[90]}
          $style={css`
            text-align: center;
            margin-bottom: 20px;
          `}
        >
          나도 몰랐던
          <br /> 받고 싶은 선물이 뭘까?
        </Typography>
        <Typography
          $variant='body1'
          color={colors.gray[70]}
          $style={css`
            text-align: center;
            margin-bottom: 10px;
          `}
        >
          은근슨물에서 은근테스트로 알아보자!
        </Typography>
        <picture>
          <source type='image/webp' srcSet={`${process.env.PUBLIC_URL}/assets/images/present.webp`} />
          <img src={`${process.env.PUBLIC_URL}/assets/images/present.png`} alt='선물사진' />
        </picture>
      </SloganBox>
      <SocialButtonWrapper>
        {socialLogins.map((socialLogin, index) => (
          <Link to={socialLogin.link} key={index}>
            <SocialLoginButton
              key={index}
              socialLogin={socialLogin.platform}
              $variant={socialLogin.$variant}
              icon={socialLogin.icon}
              color={socialLogin.color}
              style={socialLogin.style}
            />
          </Link>
        ))}
      </SocialButtonWrapper>
      <AssentBox>
        <Typography
          $variant={'caption2'}
          $style={css`
            color: ${colors.gray[50]};
          `}
        >
          로그인은 개인 정보 보호 정책 및 서비스 약관에 동의하는
          <br /> 것을 의미하여, 서비스 이용을 위해
          <br />
          이메일과 이름, 성별, 위치를 수집합니다.
        </Typography>
      </AssentBox>
    </BasicLayout>
  );
};

export default Login;

const SloganBox = styled.div`
  margin-top: 132px;
  ${common.flexCenterColumn}
`;

const SocialButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 57px auto 41px;
  gap: 10px;
`;

const AssentBox = styled.div`
  margin: 0 auto;
  text-align: center;
`;
