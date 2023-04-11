import './App.css';
import { Helmet } from 'react-helmet';
import ImageDownloader from './ImageDownloader'

function App() {
    return (
        <div className="app">
            <Helmet>
                <title>Instagram Downloader</title>
            </Helmet>
            
            <ImageDownloader></ImageDownloader>
        </div>
    );
}

export default App;
