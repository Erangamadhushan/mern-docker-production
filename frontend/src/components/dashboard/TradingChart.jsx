import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

function TradingChart() {
    const [series, setSeries] = useState([
        {
            name: "Server Uptime",
            data: []
        }
    ]);

    const [categories, setCategories] = useState([]);
    const fetchData = async () => {
        try {
            const res = await fetch("/api/health");
            const data = await res.json();
            setSeries(prev => {
                const updated = [...prev[0].data, data.uptime];
                if (updated.length > 50) updated.shift();
                return [{ name: "Server Uptime", data: updated }];
            });

            setCategories(prev => {
                const time = new Date().toLocaleTimeString();
                const updated = [...prev, time];
                if (updated.length > 50) updated.shift();
                return updated;

            });

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, []);

    const options = {
        chart: {
            type: "area",
            height: 350,
            zoom: {
                enabled: true
            },
            toolbar: {
                show: true
            }
        },

        dataLabels: {
            enabled: false
        },

        stroke: {
            curve: "smooth",
            width: 3
        },

        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.6,
                opacityTo: 0.1
            }
        },

        xaxis: {
            categories: categories
        },

        title: {
            text: "Server Uptime Monitoring",
            align: "left"
        }

    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <Chart
                options={options}
                series={series}
                type="area"
                height={350}
            />
        </div>
    );
}

export default TradingChart;