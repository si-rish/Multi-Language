import React, { useEffect, useState } from 'react'
import "./Home.css"
import multilang from '../../utils/multilang';

function Home() {

    const usersCount = 25;

    return (
        <div>
            <h1>{multilang("welcomeMessage")}</h1>

            <p>{multilang("normalMessage")}</p>

            <h4>{multilang("greetingMessage")}</h4>


            <select
                defaultValue={localStorage.getItem("lang")}
                onChange={(e) => {
                    localStorage.setItem("lang", e.target.value);
                    window.location.reload();
                }}>
                <option value="mr">Marathi</option>
                <option value="hin">Hindi</option>
                <option value="en">English</option>
            </select>

            <h3>{multilang("userStatMessage", "<studentCount>", usersCount)}</h3>
            
        </div>
    )
}

export default Home