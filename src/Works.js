import React, {useEffect, useState} from 'react';
import {Work} from "./Work";

const Works = () => {
    const [works, setWorks]=useState([])

    useEffect(() => {
      fetch(`http://localhost:7000/works`, {mode: 'no-cors'},
          {method: "POST",
              headers: {
                  "Content-Type": "text/plain"}})
          .then((value) => value.json())
          .then((value) => setWorks(value))
    }, [works]);
    console.log(works)
    return (
        <div>
vghvhj
            {works.map(work=><Work key={work.id} work={work}/>)}
        </div>
    );
};

export {Works};