
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown, TrendingUp, PieChart, BarChart, AlertCircle } from "lucide-react";
import { 
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { Link } from "react-router-dom";

// Sample data for the charts
const btcData = [
  { date: "Jan", price: 28000 },
  { date: "Feb", price: 29500 },
  { date: "Mar", price: 27800 },
  { date: "Apr", price: 31000 },
  { date: "May", price: 33500 },
  { date: "Jun", price: 36000 },
  { date: "Jul", price: 38500 },
  { date: "Aug", price: 37000 },
  { date: "Sep", price: 39000 },
  { date: "Oct", price: 41000 },
  { date: "Nov", price: 43000 },
  { date: "Dec", price: 45000 },
];

const ethData = [
  { date: "Jan", price: 1800 },
  { date: "Feb", price: 1950 },
  { date: "Mar", price: 2100 },
  { date: "Apr", price: 2300 },
  { date: "May", price: 2200 },
  { date: "Jun", price: 2400 },
  { date: "Jul", price: 2600 },
  { date: "Aug", price: 2500 },
  { date: "Sep", price: 2700 },
  { date: "Oct", price: 2900 },
  { date: "Nov", price: 3100 },
  { date: "Dec", price: 3300 },
];

const volumeData = [
  { month: "Jan", volume: 400 },
  { month: "Feb", volume: 500 },
  { month: "Mar", volume: 450 },
  { month: "Apr", volume: 700 },
  { month: "May", volume: 600 },
  { month: "Jun", volume: 800 },
  { month: "Jul", volume: 1000 },
  { month: "Aug", volume: 950 },
  { month: "Sep", volume: 1200 },
  { month: "Oct", volume: 1100 },
  { month: "Nov", volume: 1300 },
  { month: "Dec", volume: 1500 },
];

const marketTrends = [
  {
    coin: "Bitcoin (BTC)",
    price: "$43,265.89",
    change: "+5.32%",
    isPositive: true,
    description: "Bitcoin continues its upward trend, buoyed by institutional adoption and reduced mining difficulty."
  },
  {
    coin: "Ethereum (ETH)",
    price: "$3,122.45",
    change: "+2.87%",
    isPositive: true,
    description: "Ethereum shows steady growth as DeFi applications continue to expand the ecosystem."
  },
  {
    coin: "Tether (USDT)",
    price: "$1.00",
    change: "0.00%",
    isPositive: true,
    description: "Tether maintains its stability as the primary stablecoin used in cryptocurrency exchanges."
  },
  {
    coin: "Cardano (ADA)",
    price: "$1.13",
    change: "-1.23%",
    isPositive: false,
    description: "Cardano faces slight downward pressure after recent smart contract implementation."
  },
  {
    coin: "Solana (SOL)",
    price: "$98.76",
    change: "-0.54%",
    isPositive: false,
    description: "Solana experiences minor volatility as network congestion issues are addressed."
  }
];

const marketInsights = [
  {
    title: "Institutional Adoption Accelerates",
    description: "Major financial institutions are increasingly incorporating cryptocurrency options into their service offerings, signaling broader market acceptance."
  },
  {
    title: "DeFi Ecosystem Growth",
    description: "Decentralized Finance (DeFi) applications continue to attract significant capital, with total value locked (TVL) reaching new highs."
  },
  {
    title: "NFT Market Maturation",
    description: "The Non-Fungible Token market is showing signs of maturation with more practical applications beyond digital art emerging."
  },
  {
    title: "Regulatory Clarity Improving",
    description: "Regulatory frameworks for cryptocurrencies are becoming clearer in many jurisdictions, potentially reducing market uncertainty."
  }
];

const Market = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    document.title = "Market Analysis | OMAYA Express Exchange";
    setIsMounted(true);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-primary/20 text-primary rounded-full">
            Market Intelligence
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cryptocurrency Market Analysis</h1>
          <p className="text-lg text-muted-foreground">
            Stay updated with the latest trends and analysis in the cryptocurrency market, helping you make informed trading decisions.
          </p>
        </div>

        <Tabs defaultValue="overview" className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="overview">Market Overview</TabsTrigger>
            <TabsTrigger value="trends">Price Trends</TabsTrigger>
            <TabsTrigger value="insights">Market Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm animate-on-scroll">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <TrendingUp className="h-5 w-5 text-primary mr-2" />
                    <CardTitle>Trading Volume (USD)</CardTitle>
                  </div>
                  <CardDescription>Monthly exchange volume over the past year</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  {isMounted && (
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={volumeData}>
                        <defs>
                          <linearGradient id="volumeGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" opacity={0.3} />
                        <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                        <YAxis stroke="hsl(var(--muted-foreground))" tickFormatter={(value) => `$${value}K`} />
                        <Tooltip 
                          formatter={(value) => [`$${value}K`, 'Volume']}
                          contentStyle={{ 
                            backgroundColor: 'hsl(var(--card))',
                            borderRadius: '8px',
                            border: '1px solid hsl(var(--border))',
                            color: 'hsl(var(--card-foreground))'
                          }}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="volume" 
                          stroke="hsl(var(--primary))" 
                          fillOpacity={1} 
                          fill="url(#volumeGradient)" 
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm animate-on-scroll" style={{ animationDelay: "100ms" }}>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <PieChart className="h-5 w-5 text-primary mr-2" />
                    <CardTitle>Market Distribution</CardTitle>
                  </div>
                  <CardDescription>Distribution of trading volume by cryptocurrency</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  {isMounted && (
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsBarChart data={[
                        { name: 'USDT', value: 45 },
                        { name: 'BTC', value: 30 },
                        { name: 'ETH', value: 15 },
                        { name: 'Others', value: 10 }
                      ]}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" opacity={0.3} />
                        <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                        <YAxis stroke="hsl(var(--muted-foreground))" tickFormatter={(value) => `${value}%`} />
                        <Tooltip
                          formatter={(value) => [`${value}%`, 'Market Share']}
                          contentStyle={{ 
                            backgroundColor: 'hsl(var(--card))',
                            borderRadius: '8px',
                            border: '1px solid hsl(var(--border))',
                            color: 'hsl(var(--card-foreground))'
                          }}
                        />
                        <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Active Users", value: "2,500+", subtext: "And growing every day" },
                { label: "Monthly Volume", value: "$800K+", subtext: "During bear market" },
                { label: "Avg. Transaction", value: "$320", subtext: "Per exchange" },
                { label: "Supported Coins", value: "10+", subtext: "Major cryptocurrencies" }
              ].map((stat, index) => (
                <Card key={index} className="bg-card/50 border-border/50 backdrop-blur-sm animate-on-scroll" style={{ animationDelay: `${index * 50}ms` }}>
                  <CardContent className="pt-6">
                    <div className="text-sm font-medium text-muted-foreground mb-1">{stat.label}</div>
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.subtext}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="trends">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm animate-on-scroll">
                <CardHeader>
                  <CardTitle>Bitcoin (BTC) Price Trend</CardTitle>
                  <CardDescription>Annual price movement in USD</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  {isMounted && (
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={btcData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" opacity={0.3} />
                        <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                        <YAxis stroke="hsl(var(--muted-foreground))" tickFormatter={(value) => `$${value}`} />
                        <Tooltip 
                          formatter={(value) => [`$${value}`, 'Price']}
                          contentStyle={{ 
                            backgroundColor: 'hsl(var(--card))',
                            borderRadius: '8px',
                            border: '1px solid hsl(var(--border))',
                            color: 'hsl(var(--card-foreground))'
                          }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="price" 
                          stroke="hsl(var(--primary))" 
                          strokeWidth={2}
                          dot={{ r: 3, strokeWidth: 2 }}
                          activeDot={{ r: 5, strokeWidth: 0 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm animate-on-scroll" style={{ animationDelay: "100ms" }}>
                <CardHeader>
                  <CardTitle>Ethereum (ETH) Price Trend</CardTitle>
                  <CardDescription>Annual price movement in USD</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  {isMounted && (
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={ethData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" opacity={0.3} />
                        <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                        <YAxis stroke="hsl(var(--muted-foreground))" tickFormatter={(value) => `$${value}`} />
                        <Tooltip 
                          formatter={(value) => [`$${value}`, 'Price']}
                          contentStyle={{ 
                            backgroundColor: 'hsl(var(--card))',
                            borderRadius: '8px',
                            border: '1px solid hsl(var(--border))',
                            color: 'hsl(var(--card-foreground))'
                          }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="price" 
                          stroke="hsl(var(--primary))" 
                          strokeWidth={2}
                          dot={{ r: 3, strokeWidth: 2 }}
                          activeDot={{ r: 5, strokeWidth: 0 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 gap-4 mb-8">
              {marketTrends.map((coin, index) => (
                <Card key={index} className="bg-card/50 border-border/50 backdrop-blur-sm animate-on-scroll" style={{ animationDelay: `${index * 50}ms` }}>
                  <CardContent className="flex items-center p-4">
                    <div className="flex-1">
                      <div className="font-medium text-lg mb-1">{coin.coin}</div>
                      <div className="text-muted-foreground text-sm">{coin.description}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">{coin.price}</div>
                      <div className={`flex items-center justify-end ${coin.isPositive ? 'text-primary' : 'text-destructive'}`}>
                        {coin.isPositive ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
                        {coin.change}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="insights">
            <div className="grid grid-cols-1 gap-6 mb-8">
              {marketInsights.map((insight, index) => (
                <Card key={index} className="bg-card/50 border-border/50 backdrop-blur-sm animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <CardTitle className="flex items-start">
                      <TrendingUp className="h-5 w-5 text-primary mr-2 mt-1" />
                      {insight.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{insight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-card/50 border-border/50 backdrop-blur-sm animate-on-scroll p-6 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0 bg-primary/20 p-4 rounded-full">
                <AlertCircle className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Risk Disclaimer</h3>
                <p className="text-muted-foreground mb-4">
                  Cryptocurrency markets are volatile and investing in them carries significant risk. The information provided on this page is for educational purposes only and should not be considered as financial advice. Always conduct your own research before making investment decisions.
                </p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="max-w-3xl mx-auto text-center animate-on-scroll">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Trading?</h2>
          <p className="text-muted-foreground mb-6">
            Join OMAYA Express Exchange today and leverage our market insights to make informed trading decisions.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-black" asChild>
            <Link to="/register">Create Your Account</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Market;
