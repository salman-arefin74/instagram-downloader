// ImageDownloader.js
import React, { useState } from 'react';
import axios from 'axios';
import './ImageDownloader.css'

function ImageDownloader() {
  const [url, setUrl] = useState('');
  
  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const handleDownload = () => {
    axios.post('/download', { url })
      .then(response => {
        const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', 'image.jpg');
        document.body.appendChild(link);
        link.click();
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <label htmlFor="url">Enter Instagram image URL:</label>
      <input type="text" id="url" name="url" value={url} onChange={handleChange} />
      <button type="button" onClick={handleDownload}>Download</button>
    </div>
  );
}

export default ImageDownloader;
