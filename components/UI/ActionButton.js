import React, { useRef } from 'react'
import { Animated } from 'react-native'

import { ActionOpacity, StyledButton } from '../Styled'

const ActionButton = ({ title, onPress }) => {
  const scale = useRef(new Animated.Value(1)).current
  const animateScale = toValue => Animated.timing(scale, {
    toValue,
    duration: 100,
    useNativeDriver: true
  })
  return (
    <ActionOpacity
      style={{ width: '100%', transform: [{ scaleX: scale }] }}
      onPressIn={() => animateScale(0.9).start()}
      onPressOut={() => animateScale(1).start()}
      onPress={onPress}>
      <StyledButton
        color="white"
        fontSize="18">
        {title}
      </StyledButton>
    </ActionOpacity>
  )
}

export default ActionButton