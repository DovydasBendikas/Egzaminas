import React, {useState, useEffect} from "react";
import Header from '../components/header';
import 'bootstrap/dist/css/bootstrap.min.css';

function UploadEvent() {
    const[name, setName] = useState("");
    const[category, setCategory] = useState("");
    const[time, setTime] = useState("");
    const[location, setLocation] = useState("");
    const[image, setImage] = useState(null);
    const[message, setMessage] = useState("");
    const[data, setData] = useState("")

    const uploadToServer = async (event) => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("category", category);
        formData.append("time", time);
        formData.append("location", location);
        formData.append("images", image);
    
        event.preventDefault();
        const res = await fetch("http://localhost:3001/upload", {
          method: "POST",
          body: formData,
        }).then((res) => res.json()).then((data) => setMessage(data.message));
        window.location.reload()
      };
    
      return (
        <div>
          <Header />
          <div className="text-center">
            
            { message ?
            
              <div className="alert alert-success container" role="alert">
                {message}
              </div>
              : null
            }
            <form className="text-center p-2">
              <h3>Pavadinimas</h3>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              ></input>
              <h3>Kategorija</h3>
              <select
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                <option value="Koncertas">Koncertas</option>
                <option value="Varzybos">Varžybos</option>
                <option value="Paroda">Paroda</option>
                <option value="Festivalis">Festivalis</option>
                <option value="Labdara">Labdara</option>
              </select>
              <h3>Laikas</h3>
              <input
                type="datetime-local"
                onChange={(e) => setTime(e.target.value)}
                value={time}
              ></input>
              <h3>Vieta</h3>
              <input
                type="text"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
              ></input>
              <h3>Paveiksliukas</h3>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              ></input>
              <br></br>
              <button className="m-2" onClick={uploadToServer}>
                Įkelti
              </button>
            </form>
          </div>
        </div>
      );
}

export default UploadEvent