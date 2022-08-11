import React from "react";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}
interface ChartProps {
  coinId: string;
}
const Chart = ({ coinId }: ChartProps) => {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  console.log(data);
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "sales",
              data: data?.map((price) => parseFloat(price.close)) ?? [],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 500,
              width: 500,
              background: "transparent",
            },
            grid: {
              show: false,
            },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: {
                show: false,
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default Chart;
