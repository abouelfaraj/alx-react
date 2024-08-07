import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const rowStyle = isHeader ? { backgroundColor: '#deb5b545'} : { backgroundColor: '#f5f5f5ab'};
  const headerStyle = {backgroundColor: '#deb5b545'};
  return (
    <tr style={isHeader ? headerStyle : rowStyle}>
      {isHeader ?
        textSecondCell === null ?
          <th colSpan="2">{textFirstCell}</th>
        :
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
      :
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      }
    </tr>
  );
}

CourseListRow.defaultProps = {
  isHeader: false,
  textFirstCell: null,
  textSecondCell: null
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default CourseListRow;
