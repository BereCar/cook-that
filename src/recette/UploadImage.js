import React, { useState, useEffect } from "react";
import { storage } from "../firebase";
import { render } from "@testing-library/react"
import { Button, Divider } from "@material-ui/core"
import ImageIcon from '@material-ui/icons/Image';

export default()=>{
   const [file, setFile] = useState(null);
  const [url, setURL] = useState("");

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleUpload(e) {
    e.preventDefault();
    const ref = storage.ref(`/images/${file.name}`);
    const uploadTask = ref.put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      ref
        .getDownloadURL()
        .then((url) => {
          setFile(null);
          setURL(url);
        });
    });
  }
   
    

    return(

  <div>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleChange} />
        <button disabled={!file}>upload to firebase</button>
      </form>
      <img src={url} alt="" style={{maxWidth: 50}}/>
    </div>
    )
}