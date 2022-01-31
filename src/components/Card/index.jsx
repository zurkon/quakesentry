import { Box, useColorModeValue } from '@chakra-ui/react'

const Card = ({ children }) => {
  return (
    <Box
      mt={3}
      mr={3}
      mb={8}
      borderRadius={5}
      boxShadow='lg'
      bg={useColorModeValue('gray.50', 'gray.700')}
      px={3}
      py={4}
      fontSize={18}
    >
      {children}
    </Box>
  )
}

export default Card