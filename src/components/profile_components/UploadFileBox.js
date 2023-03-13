import { Dropdown, Form } from 'react-bootstrap';
import '../../css/upload.css';

function UploadFileBox() {
  return (
    <div className="center">
      <div className="upload-file-box">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Select an Option
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/exams">Exams</Dropdown.Item>
            <Dropdown.Item href="#/series">Series</Dropdown.Item>
            <Dropdown.Item href="#/videos">Videos</Dropdown.Item>
            <Dropdown.Item href="#/courses">Courses</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Form>
          <Form.Group controlId="formFile">
            <Form.Label></Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default UploadFileBox;
