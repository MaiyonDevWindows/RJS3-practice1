import './App.css';
import logo from './logo.svg';
import photo1 from './images/photo1.jpg';
import {base64photo} from './Constant';
import DeleteIcon from './DeleteIcon';

function App() {
  return (
    <div className="container">
      <div>Đây là hướng dẫn dùng ảnh trong ReactJS</div>
      <img src={photo1} width="200" height="100" className="img1" />
      <div className="require-title">Đây là ảnh dùng require</div>
      <img src={require('./images/photo1.jpg')} className="img2" />
      <div className="require-title">Đây là ảnh dùng link online</div>
      <img src="https://i.imgur.com/0BJobQo.jpg" className="img3" />
      <div className="require-title">Đây là ảnh dùng base64</div>
      <img src={base64photo} className="img4" />
      <div className="require-title">Đây là ảnh dùng svg</div>
      <img src={logo} className="img5" width="100" height="100"/>
      <DeleteIcon></DeleteIcon>
    </div>
  );
}

export default App;
