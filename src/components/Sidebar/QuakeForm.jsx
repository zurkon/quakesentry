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
  Center
} from '@chakra-ui/react'
import { parseDate } from '../../lib/utils'
import DatePicker from './DatePicker'

const QuakeForm = ({ startDate, endDate, setMagnitude, setStartDate, setEndDate, handleFetch, onClose }) => {
  const [range, setRange] = useState([3, 6])
  const [isOpen, setIsOpen] = useState(false)

  const handleMagChange = useCallback((val) => {
    setRange(val)
  }, [range])

  const handleChangeEnd = useCallback(() => {
    setMagnitude({
      min: range[0],
      max: range[1]
    })
  }, [range])

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
          defaultValue={[3, 6]}
          min={0}
          max={10}
          step={1}
          minStepsBetweenThumbs={1}
          onChange={handleMagChange}
          onChangeEnd={handleChangeEnd}
          onFocus={() => setIsOpen(true)}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          mb={8}
        >
          <RangeSliderTrack bg="blue.100">
            <RangeSliderFilledTrack bg="blue.500" />
          </RangeSliderTrack>
          <Tooltip
            label={range[0]}
            bg="gray.100"
            color="black"
            placement="bottom"
            isOpen={isOpen}
          >
            <RangeSliderThumb boxSize={5} index={0} />
          </Tooltip>
          <Tooltip
            label={range[1]}
            bg="gray.100"
            color="black"
            placement="bottom"
            isOpen={isOpen}
          >
            <RangeSliderThumb boxSize={5} index={1} />
          </Tooltip>
        </RangeSlider>

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