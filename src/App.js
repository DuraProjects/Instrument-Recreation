import './App.css';
import ReactPlayer from 'react-player'; 
import Navbar from './Components/Navbar';   
import Main from './Components/Main'; 


function App() {
  const vidUrl= "https://player.vimeo.com/video/428281636?h=be0963aaa9&controls=0&loop=1&background=1&app_id=122963"
  return (
    <div>
    <Navbar/> 
   
    <div>
    <ReactPlayer 
    url={vidUrl}
    autoplay={true}
    volume={0.5}
    controls={true}
    width={1800}
    height={1900}
    />
</div>
 <div>
  <h1>We build connected brand <br></br>systems from vision through <br></br>execution</h1>
 </div>
 <Main/>
</div>
  );
}

export default App;
