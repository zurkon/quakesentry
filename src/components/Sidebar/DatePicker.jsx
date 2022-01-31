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
    <InputGroup
      mb={4}
      justifyContent="center"
      pb={1}
      borderBottom={`1px solid ${useColorModeValue('black', 'white')}`}
    >
      <InputLeftAddon
        children={<CalendarIcon color={useColorModeValue('black', 'white')} />}
        bg="transparent"
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
        color={useColorModeValue('black', 'white')}
        bg="transparent"
        px={3}
        py={2}
        border="none"
      />
    </InputGroup>
  )
}

export default DatePicker