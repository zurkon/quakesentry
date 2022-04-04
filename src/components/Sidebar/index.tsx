import { FormEventHandler, useState } from "react"
import {
  Box,
  Burger,
  Button,
  Center,
  Drawer,
  Image,
  MediaQuery,
  Stack,
  Text,
  Title
} from "@mantine/core"
import { DateRangePicker } from "@mantine/dates"
import SliderLabel from "./SliderLabel"

import { IconCalendar, IconSearch } from '@tabler/icons'

interface SidebarProps {
  dateRange: [Date | null, Date | null],
  setDateRange: React.Dispatch<React.SetStateAction<[Date | null, Date | null]>>,
  minMagnitude: number,
  maxMagnitude: number,
  setMinMagnitude: React.Dispatch<React.SetStateAction<number>>,
  setMaxMagnitude: React.Dispatch<React.SetStateAction<number>>,
  handleFetch: () => void
}

const Sidebar = ({
  dateRange,
  setDateRange,
  minMagnitude,
  setMinMagnitude,
  maxMagnitude,
  setMaxMagnitude,
  handleFetch
}: SidebarProps) => {
  const [opened, setOpened] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    console.log("Enviado...")

    if (minMagnitude >= maxMagnitude) {
      setError('Min Magnitude must be lower than Max Magnitude')
      return
    } else {
      setError('')
    }

    handleFetch()
    setOpened(false) // Close Sidebar
  }

  return (
    <>
      <Burger
        sx={{
          position: 'absolute',
          zIndex: 1500,
          left: 10,
          top: 10,
        }}
        size="lg"
        opened={opened}
        onClick={() => setOpened(open => !open)}
        title={opened ? 'Close Sidebar' : 'Open Sidebar'}
      />
      <MediaQuery
        smallerThan="xs"
        styles={{
          width: '100%'
        }}
      >
        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          size="lg"
          padding="md"
          zIndex={1000}
          withCloseButton={false}
        >
          <Stack justify="space-between" sx={{ height: '100%' }}>
            <Box>
              <Title
                order={1}
                align="center"
                sx={{
                  marginBottom: '1rem'
                }}
              >
                Search
              </Title>
              <Title
                order={3}
                align="center"
                sx={{
                  marginBottom: '2rem'
                }}
              >Filter Parameters</Title>
              <form onSubmit={handleSubmit}>
                <Stack spacing="xl">
                  <SliderLabel
                    id="min-mag-slider"
                    label="Min Magnitude"
                    description="Select a Minimum Magnitude"

                    error={error}

                    value={minMagnitude}
                    onChangeEnd={setMinMagnitude}
                  />
                  <SliderLabel
                    id="max-mag-slider"
                    label="Max Magnitude"
                    description="Select a Minimum Magnitude"

                    value={maxMagnitude}
                    onChangeEnd={setMaxMagnitude}
                  />
                  <DateRangePicker
                    icon={<IconCalendar size={16} />}
                    label="Date Range"
                    description="Select the Earthquake Date Range Search"
                    placeholder="Pick dates range"
                    inputFormat="YYYY-MM-DD"
                    zIndex={1000}

                    value={dateRange}
                    onChange={setDateRange}
                  />
                  <Center>
                    <Button
                      type="submit"
                      leftIcon={<IconSearch size={16} />}
                    >
                      Search
                    </Button>
                  </Center>
                </Stack>
              </form>
            </Box>
            <Box sx={{
              marginBottom: '1rem',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <Box
                sx={{
                  width: '50%'
                }}
              >
                <Text align="center" weight="bold">Powered By</Text>
                <Image src='./usgs-logo.svg' alt="USGS logo" />
              </Box>
            </Box>
          </Stack>
        </Drawer>
      </MediaQuery>
    </>
  )
}

export default Sidebar