import { useState } from 'react'
import { Box, InputWrapper, Slider } from '@mantine/core'
import ErrorLabel from './ErrorLabel'

interface SliderLabelProps {
  id: string,
  label: string,
  description: string,
  value: number,
  onChangeEnd: (value: number) => void,
  error?: string
}

const SliderLabel = ({
  id,
  label,
  description,
  value,
  onChangeEnd,
  error
}: SliderLabelProps) => {
  const [_value, setValue] = useState(value)

  const marks = [
    { value: 1, label: '' },
    { value: 2, label: 'Mag: 2.0' },
    { value: 3, label: '' },
    { value: 4, label: '' },
    { value: 5, label: 'Mag: 5.0' },
    { value: 6, label: '' },
    { value: 7, label: '' },
    { value: 8, label: 'Mag: 8.0' },
    { value: 9, label: '' },
    { value: 10, label: '' },
  ]

  return (
    <Box
      sx={{
        marginBottom: '1.5rem'
      }}
    >
      <InputWrapper
        id={id}
        label={label}
        description={description}
        error={error ? <ErrorLabel>{error}</ErrorLabel> : undefined}
      >
        <Slider
          id={id}
          min={0}
          max={10}
          value={_value}
          marks={marks}
          step={1}
          onChange={setValue}
          onChangeEnd={onChangeEnd}
        />
      </InputWrapper>
    </Box>
  )
}

export default SliderLabel