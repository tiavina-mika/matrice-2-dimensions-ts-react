import { useEffect, useState } from "react";
import "./styles.css";

interface Image {
  image: string;
}

const App = () => {
  const [images, setImages] = useState<Image[] | Image[][]>([]);
  useEffect(() => {
    // datas
    const row: Image[] = [
      { image: 'https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697' }, 
      { image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg' }, 
      { image: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg' }, 
      { image: 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2' }, 
      { image: 'https://masterclip.co.uk/uploads/Let%20your%20cat%20get%20accustomed%20to%20your%20presence%20.jpg' }, 
      { image: 'https://icatcare.org/app/uploads/2018/06/Layer-1704-1920x840.jpg' }, 
      { image: 'https://i.redd.it/rxl5mhpdrsv11.jpg' }, 
    ]; 
    const col: number = 2; 
    let i = 0;
    
    const array2D: Image[][] = [[]];
    for(let r = 0; r < row.length / col; ++r) {
        array2D[r] = [];
        for(let c = 0; c < col; ++c) {
            array2D[r][c] = row[i++];
        }
    }
    setImages([...array2D]);
  }, [])
  return (
    <div className="App">
      <h1>Create 2 dimension Matrice</h1>
      <div className="images">
        <div className="row">
          {(images as any).map((row: Image[], i: number) => (
            <div key={i} className="col">
              {row.map((col: Image, k: number) => (
                col && (
                  <div key={k} className="cell">
                    <img alt="" src={col.image} />
                  </div>
                )
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="footer">
        <span>By</span>
        <a href="/" className="link">
          Tiavina Michael Ralainirina
        </a>
      </div>
    </div>
  );
}

export default App;
