function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex justify-center py-4">
        <h2>**Nav Bar Here**</h2>
      </div>

      <div className="flex flex-grow flex-col items-center justify-center">
        <h1 className="text-xl">WLNS</h1>
        <h4 className="text-s">The Wellness Hub</h4>
        <h4>**Search Bar Here**</h4>
        <a href="" className="text-xs">
          Explore More
        </a>
      </div>
    </div>
  );
}

export default Home;
