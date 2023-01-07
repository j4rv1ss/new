import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const ErrorComponent = ({message}) => {
  return (
    <Alert status={"error"} w={"container.lg"} left={"50%"} bottom={4} position={"fixed"} transform={"translateX(-50%)"}>
      <AlertIcon/>
      {message}
    </Alert>
  )
}

export default ErrorComponent
