import { useEffect, useState } from 'react';
import './App.css';
import { LazyImage } from './dist/LazyImage.js'

function App() {
  const [photos, setPhotos] = useState(null)
  useEffect(() => {
    fetch('https://picsum.photos/v2/list').then(res => {
      console.log(res);
      return res.json()
    }).then(data => {
      console.log('data ', data);
      setPhotos(data)
    })
  }, [])
  return (
    <div className='App'>
      <div className='imageContainer'>
        {
          photos &&
          photos.map((photo) => (
            <LazyImage
              placeholderSrc="https://images.pexels.com/photos/11586556/pexels-photo-11586556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              placeholderStyle={{ width: "100%" }}
              placeholderClassName="placeholderClassName"
              src={photo.download_url}
              alt="my-image"
              className="imageClassName"
              style={{ width: "100%" }}
              key={photo.id}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
