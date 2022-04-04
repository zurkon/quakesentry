import React from "react"
import { Box } from "@mantine/core"

const ErrorLabel: React.FC = ({ children }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        zIndex: 1000,
        backgroundColor: '#fff'
      }}
    >
      {children}
    </Box>
  )
}

export default ErrorLabel