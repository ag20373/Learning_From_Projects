const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          THE ASD EDAS FDSFDS DSAs DSAD eADAS dsnjs sdndsdk ksdhfkds sdjfsk
          sdkfns ksfdskj ljfnsdjjfn sdkfndsk hweufnm skdfh hfsdufn fjshdfb
          jfhbsd sfhiue sfisdfb ihewi isfhwei hfiwufb msfgiuf wifuhewiu wfhui.
        </p>
        <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondary-btn">Category</button>  
        </div>
        <div className="shopping">
            <p>Also Available On</p>
            <div className="brand-icons">
                <img src="/Images/amazon.png" alt="amazon.logo" />
                <img src="/Images/flipkart.png" alt="flipkart.logo" />
            </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/Images/hero-image.png" alt="hero-image" />
      </div>
    </main>
  );
};

export default HeroSection;
