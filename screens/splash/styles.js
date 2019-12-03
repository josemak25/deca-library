import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  height: 100%;
`;

export const Background = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const BackgroundImage = styled.Image`
  width: 100%;
  height: 50%;
`;

export const SplashContent = styled.View`
  width: 80%;
  height: 15%;
  padding: 30px;
  margin-top: 5px;
  justify-content: center;
  align-self: center;
`;

export const SplashContentHeader = styled.Text`
  text-align: center;
  color: ${props => props.color};
  font-family: "panton-bold";
  font-size: 15px;
`;

export const SplashContentFooter = styled.Text`
  color: ${props => props.color};
  font-size: 13.5px;
  font-family: ${props => props.font};
  line-height: 16px;
  margin-top: 10px;
  height: 120%;
  text-align: center;
`;

export const Pagination = styled.View`
  width: 18%;
  height: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
`;

export const ActiveSliderPage = styled.View`
  width: 28px;
  height: 8px;
  background-color: ${props => props.color};
  align-self: center;
  border-radius: 100px;
`;

export const DoneButtonText = styled.Text`
  color: ${props => props.color};
  font-size: 14px;
  font-family: ${props => props.font};
  line-height: 16px;
  height: 100%;
  padding: 12px;
  text-align: center;
`;
