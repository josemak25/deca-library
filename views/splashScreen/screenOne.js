import React from 'react';
import { useSelector, connect } from 'react-redux';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import Svg from '../../components/Svg';
import styled from 'styled-components';
import boxShadow from '../../utils/boxShadows';

export default function ScreenOne() {
  const theme = useSelector(getThemeFromState);
  return (
    <Container>
      <Background>
        <BackgroundImage
          source={require('../../assets/images/undraw_book_lover_mkck.png')}
          resizeMode="contain"
        />
        <SplashContent>
          <SplashContentHeader color={theme.PRIMARY_COLOR} font={theme.FONT_FAMILY_REGULAR}>
            Discover a world of books
          </SplashContentHeader>
          <SplashContentFooter color={theme.PRIMARY_COLOR} font={theme.FONT_FAMILY_REGULAR}>
            come up with unique solutions to problems that you might not be able to otherwise.
          </SplashContentFooter>
        </SplashContent>
        <Pagination>
          <ActiveSliderPage
            color={theme.PRIMARY_COLOR}
            style={boxShadow({ elevation: 6, color: theme.SHADOW_COLOR })}
          />
          <Svg
            viewBox="0 0 9.17 9.06"
            style={{
              width: 11,
              height: 11
            }}
            color={theme.SVG_COLOR}
            cx={5}
            cy={5}
            rx={4}
            ry={4}
          />
          <Svg
            viewBox="0 0 9.17 9.06"
            style={{
              width: 11,
              height: 11
            }}
            color={theme.SVG_COLOR}
            cx={5}
            cy={5}
            rx={4}
            ry={4}
          />
        </Pagination>
        <Button
          style={[
            {
              width: 56,
              height: 56,
              marginTop: 40,
              marginLeft: 250,
              borderRadius: 50,
              backgroundColor: theme.PRIMARY_COLOR
            },
            boxShadow({ elevation: 9, color: theme.SHADOW_COLOR })
          ]}
        >
          <Icon
            name="chevron-right"
            style={{
              color: '#fff',
              fontFamily: theme.FONT_FAMILY_BOLD,
              fontSize: 40,
              height: 40,
              width: 40
            }}
          />
        </Button>
      </Background>
    </Container>
  );
}

const getThemeFromState = state => {
  const currentTheme = state.theme.CURRENT_THEME;
  const theme = state.theme[currentTheme];
  return { ...theme };
};

const Container = styled.View`
  flex: 1;
`;

const Background = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
`;

const BackgroundImage = styled.Image`
  width: 100%;
  height: 50%;
  margin-top: 30px;
`;

const SplashContent = styled.View`
  width: 80%;
  height: 15%;
  padding: 30px;
  margin-top: 5px;
  justify-content: center;
  align-self: center;
`;

const SplashContentHeader = styled.Text`
  text-align: center;
  color: ${props => props.color};
  font-family: 'panton-bold';
  font-size: 15px;
`;

const SplashContentFooter = styled.Text`
  color: ${props => props.color};
  font-size: 13.5px;
  font-family: ${props => props.font};
  line-height: 16px;
  text-align: center;
  margin-top: 10px;
`;

const Pagination = styled.View`
  width: 18%;
  height: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
`;

const ActiveSliderPage = styled.View`
  width: 28px;
  height: 8px;
  background-color: ${props => props.color};
  align-self: center;
  border-radius: 100px;
`;
