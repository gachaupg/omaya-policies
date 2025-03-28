import Layout from "@/components/layout/Layout";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cryptoBlogs = [
    {
      id: 1,
      title: "The Future of Bitcoin in Somalia",
      excerpt:
        "How cryptocurrency is revolutionizing remittances and financial inclusion in Somalia.",
      image:
        "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop",
      content: `
        <p>Bitcoin is gaining significant traction in Somalia as a solution to the country's financial challenges. With a large diaspora sending remittances back home, cryptocurrency offers a faster and cheaper alternative to traditional money transfer services.</p>
        <p class="mt-4">Key benefits include:</p>
        <ul class="list-disc pl-6 mt-2 space-y-2">
          <li>Lower transaction fees compared to hawala systems</li>
          <li>24/7 availability without relying on physical locations</li>
          <li>Protection against inflation of the local currency</li>
          <li>Financial access for unbanked populations</li>
        </ul>
        <p class="mt-4">Local exchanges like Omaya are making it easier for Somalis to buy and sell Bitcoin with Somali Shillings, helping bridge the gap between traditional and digital finance.</p>
      `,
      date: "May 15, 2024",
      author: "Ahmed Hassan",
    },
    {
      id: 2,
      title: "Understanding Stablecoins for Somali Businesses",
      excerpt:
        "Why USDT and other stablecoins are becoming popular for cross-border trade in Somalia.",
      image:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=2187&auto=format&fit=crop",
      content: `
        <p>Stablecoins like USDT (Tether) are transforming how Somali businesses conduct international trade. These digital assets maintain a stable value by being pegged to the US Dollar, eliminating the volatility concerns of other cryptocurrencies.</p>
        <p class="mt-4">Advantages for Somali merchants:</p>
        <ul class="list-disc pl-6 mt-2 space-y-2">
          <li>Instant settlement of international payments</li>
          <li>No need for foreign bank accounts</li>
          <li>Protection from local currency fluctuations</li>
          <li>24/7 access to global markets</li>
        </ul>
        <p class="mt-4">Many import/export businesses in Mogadishu now prefer stablecoin payments over traditional banking channels due to their reliability and speed.</p>
      `,
      date: "June 2, 2024",
      author: "Fatima Ali",
    },
    {
      id: 3,
      title: "NFT Opportunities for Somali Artists",
      excerpt:
        "How digital artists in Somalia can monetize their work through blockchain technology.",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2187&auto=format&fit=crop",
      content: `
        <p>Non-Fungible Tokens (NFTs) present an exciting opportunity for Somali artists to reach global audiences and earn fair compensation for their work. The digital nature of NFTs eliminates traditional barriers to art markets.</p>
        <p class="mt-4">Benefits for creators:</p>
        <ul class="list-disc pl-6 mt-2 space-y-2">
          <li>Direct sales to international collectors</li>
          <li>Royalties on secondary sales</li>
          <li>Proof of authenticity and ownership</li>
          <li>Access to new revenue streams</li>
        </ul>
        <p class="mt-4">Several young Somali digital artists have already gained recognition through NFT platforms, showcasing the rich cultural heritage of Somalia to the world.</p>
      `,
      date: "June 18, 2024",
      author: "Mohamed Abdi",
    },
    {
      id: 4,
      title: "Blockchain Solutions for Somali Agriculture",
      excerpt:
        "Using smart contracts to improve transparency in Somalia's agricultural supply chains.",
      image:
        "https://images.unsplash.com/photo-1621761191309-9d9fe5f8f0a3?q=80&w=2187&auto=format&fit=crop",
      content: `
        <p>Blockchain technology is being piloted in Somalia's agricultural sector to create more efficient and transparent supply chains. Smart contracts can automate payments and verify product origins.</p>
        <p class="mt-4">Potential applications:</p>
        <ul class="list-disc pl-6 mt-2 space-y-2">
          <li>Tracking livestock from farm to market</li>
          <li>Verifying organic certification</li>
          <li>Automating payments to farmers</li>
          <li>Reducing disputes in trade agreements</li>
        </ul>
        <p class="mt-4">Early trials in the banana export industry have shown promising results, with farmers receiving payments faster and buyers having more confidence in product quality.</p>
      `,
      date: "July 5, 2024",
      author: "Aisha Mohamed",
    },
  ];

  const openBlogModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };

  return (
    <Layout>
      <div className="bg-gray-50 dark:bg-[#1d1d23] py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Crypto Insights & News
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stay updated with the latest trends and developments in
              cryptocurrency and blockchain technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cryptoBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white dark:bg-[#35353E] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {blog.date}
                    </span>
                    <span className="text-sm text-primary">{blog.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {blog.excerpt}
                  </p>
                  <Button
                    onClick={() => openBlogModal(blog)}
                    className="w-full mt-2"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Modal */}
      <Dialog open={isModalOpen} onOpenChange={closeModal}>
        <DialogContent className="max-w-4xl bg-white dark:bg-gray-800">
          {selectedBlog && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedBlog.title}
                </DialogTitle>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {selectedBlog.date}
                  </span>
                  <span className="text-sm text-primary">
                    {selectedBlog.author}
                  </span>
                </div>
              </DialogHeader>
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-64 object-cover rounded-lg my-4"
              />
              <div
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
              />
              <div className="mt-6 flex justify-end">
                <Button onClick={closeModal}>Close</Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Blogs;
