import React from 'react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  Image,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'
import MenuToggle from './MenuToggle'
import QuakeForm from './QuakeForm'

const Sidebar = ({ startDate, endDate, setMagnitude, setStartDate, setEndDate, handleFetch }) => {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <React.Fragment>
      <Box pos="absolute" zIndex={1500} left={0} top={0} p={4}>
        <MenuToggle
          onClick={onToggle}
          isOpen={isOpen}
          color={useColorModeValue('black', 'white')}
        />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent
          bg={useColorModeValue('gray.50', 'gray.700')}
          color={useColorModeValue('black', 'white')}
        >
          <DrawerHeader textAlign="center">
            <Heading as="h1" size="lg">
              Search
            </Heading>
          </DrawerHeader>
          <DrawerBody display="flex" flexDirection="column" justifyContent="space-between">
            <Box>
              <Heading as="h3" size="md" textAlign="center" mb={6}>Filter Parameter</Heading>
              <QuakeForm
                startDate={startDate}
                endDate={endDate}
                setMagnitude={setMagnitude}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                handleFetch={handleFetch}
                onClose={onClose}
              />
            </Box>
            <Flex alignItems="center" direction="column" w="full" pb={10}>
              <HStack mb={6}>
                <SunIcon w={6} h={6} />
                <Switch size="lg" isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
                <MoonIcon w={6} h={6} />
              </HStack>
              <Text fontSize={12} color={useColorModeValue('black', 'white')}>Powered by</Text>
              <Box w="50%">
                <Image src={useColorModeValue('./light-usgs-logo.svg', './usgs-logo.svg')} alt="USGS logo" />
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  )
}

export default Sidebar