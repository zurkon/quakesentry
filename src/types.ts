export type earthquake = {
  id: string,
  geometry: {
    coordinates: Array<number>
  },
  properties: {
    mag: number,
    place: string,
    time: number,
    url: string
  }
}