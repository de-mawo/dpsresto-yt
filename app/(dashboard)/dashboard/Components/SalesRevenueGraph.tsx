"use client";

import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
} from "recharts";

const SalesRevenueGraph = () => {
  const active = true;
  const data = [
    { month: "Jan", revenue: 120, sales: 150 },
    { month: "Feb", revenue: 350, sales: 170 },
    { month: "Mar", revenue: 200, sales: 160 },
    { month: "Apr", revenue: 340, sales: 200 },
    { month: "May", revenue: 365, sales: 270 },
    { month: "Jun", revenue: 260, sales: 180 },
    { month: "Jul", revenue: 355, sales: 350 },
    { month: "Aug", revenue: 280, sales: 140 },
    { month: "Sep", revenue: 270, sales: 237 },
    { month: "Oct", revenue: 120, sales: 186 },
    { month: "Nov", revenue: 275, sales: 190 },
    { month: "Dec", revenue: 270, sales: 155 },
  ];

  return (
    <div className="hidden lg:block bg-white shadow-md rounded-md ">
      <div className="flex flex-col  justify-between md:flex-row items-center space-y-3 md:space-y-0 py-5 px-12">
        <div className="flex items-center space-x-3">
          <p className="flex items-baseline">
            <span className="mt-1 mr-2 flex h-4 w-4 items-center justify-center rounded-full border border-green-500">
              <span className="block h-2  w-2 rounded-full bg-green-500"></span>
            </span>
            <span className="text-xs md:text-base">Total Revenue</span>
          </p>
          <p className="flex items-baseline">
            <span className="mt-1 mr-2 flex h-4 w-4 items-center justify-center rounded-full border border-slate-500">
              <span className="block h-2  w-2 rounded-full bg-slate-500"></span>
            </span>
            <span className="text-xs md:text-base">Total Sales</span>
          </p>
        </div>
        <div className="flex space-x-3 bg-slate-100 p-2 rounded-md text-xs">
          <button className={active ? "bg-white rounded-md py-1 px-3" : ""}>
            Day
          </button>
          <button>Week</button>
          <button>Month</button>
        </div>
      </div>

      <div className="w-full h-96   ">
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 20,
              bottom: 5,
              left: 20,
            }}
          >
            <defs>
              <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="55%" stopColor="#a7f3d0" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#a7f3d0" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="sales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="55%" stopColor="#e2e8f0" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#e2e8f0" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#22c55e"
              fill="url(#revenue)"
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#94a3b8"
              fill="url(#sales)"
            />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesRevenueGraph;