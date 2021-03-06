import styled from 'styled-components/native'
import { Animated } from 'react-native'

export const placeholderColor = '#777'
export const cardFontSize = 16

export const CenteredContainer = styled.SafeAreaView`
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #fff;
`

export const TopContainer = styled.SafeAreaView`
  height: 100%;
  display: flex;
  justify-content: space-around;
`

export const StyledHeaderContainer = styled.View`
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`

export const StyledForm = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`

export const StyledInput = styled.TextInput`
  color: #000;
  border: 1px solid #ababab;
  border-top-left-radius: ${({ first }) => first ? '3px' : '0'};
  border-top-right-radius: ${({ first }) => first ? '3px' : '0'};
  border-bottom-left-radius: ${({ last }) => last ? '3px' : '0'};
  border-bottom-right-radius: ${({ last }) => last ? '3px' : '0'};
  width: 100%;
  padding: 10px;
  margin-top: -1px;
`

export const StyledText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`

export const ActionOpacity = styled.TouchableOpacity`
  margin: 8px 0;
  background-color: #008bd1;
  border-radius: 5px;
`

export const StyledButton = styled.Text`
  text-align: center;
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  padding: ${({ fontSize }) => `${Math.floor(parseInt(fontSize) / 1.8)}px`};
`

export const StyledSearch = styled.View`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
  padding: 5px;
  background-color: #efefef;
  border-radius: 5px;
`

export const SearchInput = styled.TextInput`
  padding-left: 5px;
  color: #000;
  flex: 1;
`

export const CardContainer = styled.View`
  display: flex;
  align-items: center;
  background-color: #fff;
  margin: 10px;
  padding: 0 0 10px 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.14);
`

export const CardImage = styled(Animated.Image)`
  margin: 0 0 5px 0;
  width: 100%;
  height: 200px;
`

export const CardHeader = styled.Text`
  font-size: 20px;
`

export const CardText = styled.Text`
  width: 100%;
  text-align: center;
  padding: 10px;
`

export const CardSeparator = styled.View`
  width: 100%;
  margin: 0 5px 5px 5px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`