import { useEffect, useState, useMemo } from "react";
import axios from 'axios';

// 'https://cors-anywhere.herokuapp.com/https://random-memer.herokuapp.com/'
const Item = ({text}) => {

    const [imageData, setImageData] = useState('');

    useEffect(() =>{
        axios.get("https://picsum.photos/70/100", {responseType: 'blob'})
            .then(response => {
                const localUrl = URL.createObjectURL(response.data);
                setImageData(localUrl);
            }).catch(r => console.log({r}));
        }, []);

    return (<div>
        <p>{text}</p>
        <img src={imageData} style={{width: "100px", height: "60px"}}/>
    </div>)
}

export default Item;
