import React, { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Coinlist from "./Components/CoinList/Coinlist";
import News from "./Components/News/News";
import Alert from "./Components/Alert/Alert";


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





  return (
    <>
      <Sidebar />
      <Alert/>
      <Coinlist  topCoins={topCoins} globalStats={globalStats}/>
      <News newsData={newsData}/>
      
      
    </>
  );
}

export default App;
