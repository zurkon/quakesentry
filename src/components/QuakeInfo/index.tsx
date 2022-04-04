import { Anchor, Card, MediaQuery, Text, Title } from "@mantine/core"

interface QuakeInfoProps {
  selectedQuake: {
    place: string,
    mag: number,
    time: number,
    url: string
  }
}

const QuakeInfo = ({ selectedQuake }: QuakeInfoProps) => {
  return (
    <MediaQuery
      smallerThan="xs"
      styles={{
        width: '95vw'
      }}
    >
      <Card
        sx={{
          minWidth: 320
        }}
      >
        <MediaQuery
          smallerThan="sm"
          styles={{
            fontSize: 24
          }}
        >
          <Title order={2}>Earthquake Information</Title>
        </MediaQuery>

        {
          selectedQuake.place !== '' &&
          <Text weight="bold" >{selectedQuake.place}</Text>
        }

        {
          selectedQuake.mag > 0 &&
          <Text>{`Magnitude: ${selectedQuake.mag}`}</Text>
        }

        {
          selectedQuake.time > 0 &&
          <Text>{new Date(selectedQuake.time).toUTCString().replace('GMT', 'UTC')}</Text>
        }

        {
          selectedQuake.url !== '' &&
          <Anchor href={selectedQuake.url} target="_blank">
            More Details on USGS
          </Anchor>
        }

        {
          (selectedQuake.mag == 0 && selectedQuake.place == '') &&
          <Text>Hover over a circle</Text>
        }

      </Card>
    </MediaQuery>
  )
}

export default QuakeInfo