import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const Chart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let quantidade = [];
    let preço = [];
    axios
      .get("http://localhost:3333/api/produtos")
      .then((res) => {
        for (const dataObj of res.data) {
          quantidade.push(parseInt(dataObj.preco_produto));
          preço.push(parseInt(dataObj.quantidade_produto));
        }
        setChartData({
          labels: preço,
          datasets: [
            {
              label: "Preço",
              data: quantidade,
              backgroundColor: ["rgba(75, 193, 193, 0.6)"],
              borderWidth: 3,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className='App'>
      <h1>Gráfico </h1>
      <div>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "PRODUTOS", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

export default Chart;
