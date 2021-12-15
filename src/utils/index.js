export const colorScale = [
  {
    scale: '>= 8.0',
    color: '#720000'
  },
  {
    scale: '>= 7.0',
    color: '#f44336'
  },
  {
    scale: '>= 6.1',
    color: '#ff9800'
  },
  {
    scale: '>= 5.5',
    color: '#ffeb3b'
  },
  {
    scale: '>= 2.5',
    color: '#4caf50'
  },
  {
    scale: '< 2.5',
    color: '#33c9dc'
  },
]

export const getMagnitudeScaleColor = (magnitude) => {
  if (magnitude >= 8.0) {
    return '#720000';
  }
  if (magnitude >= 7.0) {
    return '#f44336';
  }
  if (magnitude >= 6.1) {
    return '#ff9800';
  }
  if (magnitude >= 5.5) {
    return '#ffeb3b';
  }
  if (magnitude >= 2.5) {
    return '#4caf50';
  }

  return '#33c9dc';
}

// cyan - #33c9dc
// green - #4caf50
// yellow - #ffeb3b
// orange - #ff9800
// red - #f44336
// darkred - #720000