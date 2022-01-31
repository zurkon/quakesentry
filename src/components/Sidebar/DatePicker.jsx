import { CalendarIcon } from '@chakra-ui/icons'
import {
  chakra,
  InputGroup,
  InputLeftAddon,
  useColorModeValue
} from '@chakra-ui/react'
import ReactDatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const CustomDate = chakra(ReactDatePicker)

const DatePicker = ({ id, startDate, onChange, endDate }) => {

  return (
    <InputGroup mb={4} justifyContent="center" pb={1} borderBottom="1px solid white">
      <InputLeftAddon
        children={<CalendarIcon color="white" />}
        // bg={useColorModeValue('#f5f5f5', '#404040')}
        bg="transparent"
        borderColor="white"
        border="none"
      />
      <CustomDate
        id={id}
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        yearDropdownItemNumber={10}
        selectsRange
        withPortal
        color="white"
        bg="transparent"
        px={3}
        py={2}
        border="none"
        borderColor="white"
      // borderRightRadius="md"
      />
    </InputGroup>
  )
}

export default DatePicker