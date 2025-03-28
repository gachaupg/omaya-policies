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
        "data:image/jpeg;base64,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",
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
