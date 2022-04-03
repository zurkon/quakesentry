import { useCallback, useState } from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import {
  FormControl,
  FormLabel,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Tooltip,
  Button,
  Center,
  Text,
  HStack
} from '@chakra-ui/react'
import DatePicker from './DatePicker'

const QuakeForm = ({ startDate, endDate, magnitude, setMagnitude, setStartDate, setEndDate, handleFetch, onClose }) => {
  const [range, setRange] = useState([magnitude.min, magnitude.max])
  // const [isOpen, setIsOpen] = useState(false)

  const handleMagChange = useCallback((val) => {
    setRange(val)
  }, [range])

  const handleChangeEnd = useCallback(() => {
    setMagnitude({
      min: range[0],
      max: range[1]
    })
  }, [range, setMagnitude, magnitude])

  const handleDateChange = useCallback((dates) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }, [startDate, endDate])

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log({
    //   min: range[0],
    //   max: range[1]
    // })
    // console.log(parseDate(startDate))
    // console.log(parseDate(endDate))

    handleFetch()
    onClose()
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel htmlFor="mag" mr={0} textAlign="center">Magnitude Range</FormLabel>
        <RangeSlider
          id="mag"
          defaultValue={[range[0], range[1]]}
          min={0}
          max={10}
          step={1}
          minStepsBetweenThumbs={1}
          onChange={handleMagChange}
          onChangeEnd={handleChangeEnd}
        >
          <RangeSliderTrack bg="blue.100">
            <RangeSliderFilledTrack bg="blue.500" />
          </RangeSliderTrack>

          <RangeSliderThumb boxSize={5} index={0} />

          <RangeSliderThumb boxSize={5} index={1} />

        </RangeSlider>

        <HStack justifyContent="space-between" mb={8}>
          <Text fontSize={18}>Min: {range[0]}</Text>
          <Text fontSize={18}>Max: {range[1]}</Text>
        </HStack>

        <FormLabel htmlFor="dateRange" mr={0} textAlign="center">Date Range</FormLabel>
        <DatePicker id="dateRange" onChange={handleDateChange} startDate={startDate} endDate={endDate} />

        <Center mt={10}>
          <Button
            leftIcon={<SearchIcon />}
            bg="blue.500"
            color="white"
            _hover={{
              bg: 'blue.600'
            }}
            variant="solid"
            w="120px"
            type="submit"
          >
            Search
          </Button>
        </Center>
      </FormControl>
    </form>
  )
}

export default QuakeForm