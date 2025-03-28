import Layout from '@/components/layout/Layout';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const Container = styled.div`
  background-color: #1D1D23;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 2rem;
  text-align: center;
  overflow: hidden;
  position: relative;
`;

const ComingSoonImage = styled.div`
  width: 100%;
  max-width: 900px;
  height: 500px;
  background-image: url('https://img.freepik.com/free-vector/abstract-coming-soon-halftone-style-background-design_1017-27282.jpg');
  background-size: cover;
  background-position: center;
  margin-bottom: 2rem;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(29, 29, 35, 0.1), rgba(29, 29, 35, 0.8));
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #1D8751, #3bd18f, #1D8751);
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${gradientAnimation} 3s linear infinite;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 3rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;

const ProgressBar = styled.div`
  width: 100%;
  max-width: 400px;
  height: 6px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  margin-bottom: 2rem;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  width: 60%;
  background: linear-gradient(90deg, #1D8751, #3bd18f);
  border-radius: 3px;
  animation: ${pulseAnimation} 2s ease-in-out infinite;
`;

const CountdownContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const CountdownItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CountdownValue = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1D8751;
  min-width: 70px;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    min-width: 50px;
  }
`;

const CountdownLabel = styled.div`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #1D8751;
  }
`;

const Coming = () => {
  // Example countdown data - replace with your actual target date
  const countdownData = [
    { value: '12', label: 'Days' },
    { value: '23', label: 'Hours' },
    { value: '45', label: 'Minutes' },
    { value: '30', label: 'Seconds' },
  ];

  return (
    <Layout>
      <Container>
        <ComingSoonImage />
       
      </Container>
    </Layout>
  );
};

export default Coming;