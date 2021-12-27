import React from 'react';

const QuakeInfo = ({ selectedQuake }) => {
  return (
    <React.Fragment>
      <h4 style={{ margin: 0, marginBottom: '5px', color: '#777' }}>EarthQuake Information</h4>
      <div style={{ width: '220px' }}>
        {
          selectedQuake.place !== '' &&
          <p style={{ marginTop: 0, marginBottom: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <b>{selectedQuake.place}</b>
          </p>
        }
        {
          selectedQuake.mag > 0 && <React.Fragment>{`Magnitude: ${selectedQuake.mag}`}</React.Fragment>
        }
        {
          (selectedQuake.mag == 0 && selectedQuake.place == '') && <span>Hover over a Circle</span>
        }
      </div>
    </React.Fragment>
  );
}

export default QuakeInfo;