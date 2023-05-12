import PropTypes from 'prop-types';
import { Button } from './Button';

export const Header = ({ title, onAdd, showAdd }) => {
  // const onClick = () => {
  //   console.log('Click');
  // }

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'Red' : 'Green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'blueviolet', 
//     backgroundColor: 'black',
// }