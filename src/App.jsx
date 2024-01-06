import React, { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Coinlist from "./Components/CoinList/Coinlist";
import News from "./Components/News/News";
import Alert from "./Components/Alert/Alert";
import {
  BrowserRouter,//router
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import { data } from "autoprefixer";


const infoUrl =
  "https://coinranking1.p.rapidapi.com/stats?referenceCurrencyUuid=yhjMzLPhuIDl";
const topCoinsUrl = "https://coinranking1.p.rapidapi.com/coins";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "229fef9a77msh017f36c38d33d77p1ce4ffjsn8ab51e16ce2c",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

function App() {

  const [globalStats, setGlobalStats] = useState(null);
  const [topCoins, setTopCoins] = useState([]);
  const [gitdata, setgitdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch global stats
        const response = await fetch(infoUrl, options);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setGlobalStats(result.data);

        // Fetch top coins
        const topCoinsResponse = await fetch(topCoinsUrl, options);
        if (!topCoinsResponse.ok) {
          throw new Error("Network response was not ok for top coins");
        }
        const topCoinsResult = await topCoinsResponse.json();
        setTopCoins(topCoinsResult.data.coins);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchnewsdata = async () => {
      try {
        const response = await fetch(
          'https://news-api14.p.rapidapi.com/search?q=crypto&country=us&language=en&pageSize=100&publisher=cnn.com%2Cbbc.com',
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '229fef9a77msh017f36c38d33d77p1ce4ffjsn8ab51e16ce2c',
              'X-RapidAPI-Host': 'news-api14.p.rapidapi.com',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setNewsData(result.articles);
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    fetchnewsdata();
  }, []);

  async function githubdata() {
    try {
      const response = await fetch("https://api.github.com/users/rohiit257");
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      const data = await response.json();
     
      console.log(data);
      // Assuming setgitdata is a state setter function
      setgitdata(data);
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
      console.log("working")
    }
  }
  
  // Call the function to fetch GitHub data
  githubdata();
  
  





  return (
    <>
    <BrowserRouter>
    <Sidebar />
      <Alert/>
      <Routes>
        <Route path="/" element={<Coinlist  topCoins={topCoins} globalStats={globalStats} />}/>
        <Route path="/news" element={<News newsData={newsData}/>}/>
        <Route path="/about" element={<About gitdata={gitdata}/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
     
      
      
      
      
    </>
  );
}

export default App;
