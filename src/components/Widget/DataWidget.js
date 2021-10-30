import React from 'react';
import PropTypes from 'utils/propTypes';

import { Card, CardText, CardTitle, Progress } from 'reactstrap';
import Typography from '../Typography';

const DataWidget = ({
  title,
  data1: { value1, label1 },
  data2:{ value2, label2 },
  data3:{ value3, label3 },
  ...restProps
}) => {
  return (
    <Card body {...restProps}>
      <div className="d-flex justify-content-between">
        <CardText tag="div">
          <Typography className="mb-0">
            <strong>{title}</strong>
          </Typography>
        </CardText>
      </div>
      <CardText tag="div" className="d-flex justify-content-between">
        <Typography tag="span" className="text-left ">
          {label1}
        </Typography>
        <Typography tag="span" className="text-right  ">
          {value1}
        </Typography>
      </CardText>
      <CardText tag="div" className="d-flex justify-content-between">
        <Typography tag="span" className="text-left ">
          {label2}
        </Typography>
        <Typography tag="span" className="text-right  ">
          {value2}
        </Typography>
      </CardText>
      <CardText tag="div" className="d-flex justify-content-between">
        <Typography tag="span" className="text-left ">
          {label3}
        </Typography>
        <Typography tag="span" className="text-right  ">
          {value3}
        </Typography>
      </CardText>
    </Card>
  );
};

DataWidget.propTypes = {
  title: PropTypes.string.isRequired,
  data1: PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string,
  }),
  data2: PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string,
  }),
  data3: PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string,
  }),
};

DataWidget.defaultProps = {
  title: '',
  data1: {
    value1: 0,
    label1: '',
  },
  data2: {
    value2: 0,
    label2: '',
  },
  data3: {
    value3: 0,
    label3: '',
  },
};

export default DataWidget;
