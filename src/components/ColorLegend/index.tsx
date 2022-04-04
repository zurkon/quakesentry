import { Badge, Box, Card, ColorSwatch, Group, MediaQuery, Stack, Text } from "@mantine/core"
import { colorScale } from '../../utils'

const ColorLegend = () => {
  return (
    <Card
      sx={{
        marginBottom: '0.5rem'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {
          colorScale.map(item => (
            <Group
              key={item.scale}
              spacing={5}
            >
              <Box
                sx={{
                  display: 'block',
                  width: 24,
                  height: 24,
                  backgroundColor: item.color
                }}
              />
              <Text size="sm">
                {item.scale}
              </Text>
            </Group>
          ))
        }
      </Box>
    </Card>
  )
}

export default ColorLegend