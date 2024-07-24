import Form from 'react-bootstrap/Form';
import './Select.css'

function Select() {
  return (
    <div >
      <h6 className='text-white '>seleziona una lingua</h6>
      <Form.Select className='select' aria-label="Default select example">
        <option>ITALIANO (italiano)</option>
        <option value="1">francese</option>
        <option value="2">spagnolo</option>
        <option value="3">inglese</option>
      </Form.Select>
    </div>


  );
}

export default Select