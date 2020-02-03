import styled from 'styled-components/native'

export const CenteredContainer = styled.SafeAreaView`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const TopContainer = styled.SafeAreaView`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const StyledHeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 98%;
`

export const HeaderButtonContainer = styled.TouchableOpacity`
  margin: 8px 0;
`

export const StyledForm = styled.View`
  display: flex;
  flex-direction: column;
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
  margin: 8px;
  padding: 5px;
  background-color: #ededed;
  border-radius: 5px;
`

export const SearchInput = styled.TextInput`
  padding-left: 5px;
  color: #000;
  flex: 1;
`

export const CardContainer = styled.View`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.14);
  display: flex;
  align-items: center;
`

export const CardHeader = styled.Text`
  font-size: 20px;
`

export const CardText = styled.Text`
  width: 100%;
  text-align: center;
  padding: 10px;
`