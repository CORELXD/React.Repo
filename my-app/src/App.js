import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Parentbox">
    <div className="Foto">
      <img src="Headset.jpg"/>
    </div>
    <div className="Deskripsi">
      <p className="judul"id="judul">The best wireless Earbuds  </p>
      <p className="Title"><b>NOVEMBER RELEASE </b></p>
      <p className="Price">Number:<a id="nomer">#897879</a></p>
      <p className="Info">
      Lorem Ipsum is simply dummy text of the printing and typesetting indus-try. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      <p><b>SIZE</b></p>
      <tabel>
        <tr id="i">
          <th><button id="button">XS</button></th>&nbsp;
          <th><button id="button">S</button></th>&nbsp;
          <th><button id="button">M</button></th>&nbsp;
          <th><button id="button">L</button></th>&nbsp;
        </tr>
      </tabel>
      <br></br><br></br>
      <tabel>
        <tr id="i">
          <th><button id="circle">√ </button></th>&nbsp;
          <th><button id="circle2">√ </button></th>&nbsp;
          <th><button id="circle3">√</button></th>&nbsp;
          <th><button id="circle4">√</button></th>&nbsp;
        </tr>
      </tabel>
      <br></br><br></br><br></br>
      <tabel>
        <tr >
          <th><button id="o"><p id="v">BUY NOW</p></button></th>&nbsp;&nbsp;&nbsp;
          <th><button id="u"><p ADD id="b">ADD TO WISHLIST</p></button></th>
        </tr>
      </tabel>
      <p id="z">'Only Limited Edition'</p>
    </div>
    </div>
  );
}

export default App;
