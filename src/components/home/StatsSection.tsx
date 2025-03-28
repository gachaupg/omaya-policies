
import { useState, useEffect } from "react";
import { 
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

// Sample data for the chart
const chartData = [
  { month: "Jan", volume: 0.8 },
  { month: "Feb", volume: 0.500 },
  { month: "Mar", volume: 0.450 },
  { month: "Apr", volume: 0.700 },
  { month: "May", volume: 0.600 },
  { month: "Jun", volume: 0.800 },
  { month: "Jul", volume: 1.000 },
  { month: "Aug", volume: 0.950 },
  { month: "Sep", volume: 1.200 },
  { month: "Oct", volume: 1.100 },
  { month: "Nov", volume: 1.300 },
  { month: "Dec", volume: 1.500 },
];

const stats = [
  {
    label: "Monthly Exchange Volume",
    value: "$1.5M+",
    description: "During bear market conditions",
  },
  {
    label: "Active Users",
    value: "5000+",
    description: "And growing every day",
  },
  {
    label: "Years of Experience",
    value: "5+",
    description: "In the cryptocurrency market",
  },
  {
    label: "Supported Cryptocurrencies",
    value: "10+",
    description: "Including Bitcoin, Ethereum, and USDT",
  },
];

const StatsSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-primary/20 text-primary rounded-full">
            Our Growth
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            OMAYA Exchange By The Numbers
          </h2>
          <p className="text-muted-foreground text-lg">
            Despite market volatility, we've maintained consistent growth and exchange volumes, demonstrating our resilience and customer trust.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg overflow-hidden animate-on-scroll h-[400px]">
            <h3 className="text-xl font-semibold mb-6 text-white">Monthly Exchange Volume (USD)</h3>
            {isMounted && (
              <ResponsiveContainer width="100%" height="85%">
                <LineChart
                  data={chartData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 12 }} 
                    stroke="hsl(var(--muted-foreground))"
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value) => `$${value}K`}
                    stroke="hsl(var(--muted-foreground))"
                  />
                  <Tooltip 
                    formatter={(value) => [`$${value}K`, 'Volume']}
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      borderRadius: '8px',
                      border: '1px solid hsl(var(--border))',
                      color: 'hsl(var(--card-foreground))'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="volume" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ r: 4, strokeWidth: 2 }}
                    activeDot={{ r: 6, strokeWidth: 0, fill: "hsl(var(--primary))" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-gray-800 rounded-xl p-6 shadow-md border border-gray-700 animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="text-sm font-medium text-muted-foreground mb-2">
                  {stat.label}
                </h4>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
