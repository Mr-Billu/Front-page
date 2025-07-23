"use client";

import React from "react";


const line1 = [
  {
    name: "Aarav Sharma",
    review: (
      <span>
        
        These shoes are incredibly comfortable and stylish.
        I wore them all day and my feet felt great.
        Would definitely recommend to friends!
      </span>
    ),
    rating: 5,
    productImage: "/assets/shoes-pics/sneaker-7.jpg",
  },
  {
    name: "Priya Mehra",
    review: (
      <span>
        
        The design is modern and fits my style.
        Very comfortable for daily use.
        The delivery was quick too.
        Will buy again!
      </span>
    ),
    rating: 4,
    productImage: "/assets/shoes-pics/sneaker-2.jpg",
  },
  {
    name: "Rohan Patel",
    review: (
      <span>
        
        Great support and the verification badge is a game changer.
        My store looks more professional.
      </span>
    ),
    rating: 5,
    productImage: "/assets/shoes-pics/sneaker-3.jpg",
  },
  {
    name: "Kavya Desai",
    review: (
      <span>
        
        AssureMe is now a core part of my business.
        The trust badges are visible and effective.
        Setup was fast and simple.
      </span>
    ),
    rating: 5,
    productImage: "/assets/shoes-pics/sneaker-4.jpg",
  },
  {
    name: "Sneha Iyer",
    review: (
      <span>
        
        The trust signals really help convert visitors.
        I noticed an increase in completed checkouts.
        Thank you for a great product!
      </span>
    ),
    rating: 5,
    productImage: "/assets/shoes-pics/sneaker-5.jpg",
  },
  {
    name: "Vikram Joshi",
    review: (
      <span>
        
        Easy setup and great customer support team.
        The support team is always helpful.
      </span>
    ),
    rating: 4,
    productImage: "/assets/shoes-pics/sneaker-6.jpg",
  },
  {
    name: "Ananya Rao",
    review: (
      <span>
        
        My conversion rate improved significantly.
        The trust badges are clear and professional.
        Would definitely recommend to others!
      </span>
    ),
    rating: 5,
    productImage: "/assets/shoes-pics/sneaker-1.jpg",
  },
  
];

const line2 = [
  {
    name: "Fatima Siddiqui",
    title: "Beautiful & Soft Hijab",
    review: (
      <span>
        The texture is incredibly soft on the skin.
        Even after washing, it retains the same quality.
        I've ordered 3 more already!
      </span>
    ),
    rating: 5,
    productImage: "/assets/hijab-pics/5.jpeg",
  },
  {
    name: "Priya Mehra",
    title: "Beautiful & Soft Hijab",
    review: (
      <span>
        The material is so lightweight and airy.
        I used it for a styling shoot and it looked stunning in every frame.
      </span>
    ),
    rating: 4,
    productImage: "/assets/hijab-pics/2.jpeg",
  },
  {
    name: "Nazia Rahman",
    title: "Beautiful & Soft Hijab",
    review: (
      <span>
        This hijab is perfect for daily wear.
        Light, flowy, and doesn't slip.
        Totally worth the money!
      </span>
    ),
    rating: 5,
    productImage: "/assets/hijab-pics/7.webp",
  },
  {
    name: "Aaliyah Khan",
    title: "Beautiful & Soft Hijab",
    review: (
      <span>
        This hijab is so soft and breathable.
        I wore it all day and didn't feel uncomfortable for a second.
        The color is rich and exactly like the picture.
      </span>
    ),
    rating: 5,
    productImage: "/assets/hijab-pics/1.jpeg",
  },
  {
    name: "Rhea Sharma",
    title: "Beautiful & Soft Hijab",
    review: (
      <span>
        Bought this as a gift for a friend.
        She couldn't stop praising the quality and look.
      </span>
    ),
    rating: 4,
    productImage: "/assets/hijab-pics/6.webp",
  },
  {
    name: "Kavya Nair",
    title: "Beautiful & Soft Hijab",
    review: (
      <span>
        Loved how soft and elegant it feels.
        Looks premium and goes well with every outfit.
        Already got compliments!
      </span>
    ),
    rating: 4,
    productImage: "/assets/hijab-pics/2.jpeg",
  },
  {
    name: "Ishita Verma",
    title: "Beautiful & Soft Hijab",
    review: (
      <span>
        Surprisingly good quality for the price.
        My sister borrowed it and now she wants one too!
      </span>
    ),
    rating: 4,
    productImage: "/assets/hijab-pics/4.jpeg",
  },
  {
    name: "Sana Qureshi",
    title: "Beautiful & Soft Hijab",
    review: (
      <span>
        Super comfy and breathable even in hot weather.
        The stitching and finishing are top notch.
      </span>
    ),
    rating: 5,
    productImage: "/assets/hijab-pics/1.jpeg",
  },
  {
    name: "Ananya Joshi",
    title: "Beautiful & Soft Hijab",
    review: (
      <span>
        Although I don't wear hijabs daily, I got one for styling.
        The fabric is gorgeous and photographs really well.
      </span>
    ),
    rating: 4,
    productImage: "/assets/hijab-pics/8.webp",
  },
  {
    name: "Zoya Sheikh",
    title: "Beautiful & Soft Hijab",
    review: (
      <span>
        I absolutely love this hijab!
        It's elegant, classy, and the fabric drapes beautifully.
        Would recommend for both daily wear and events.
      </span>
    ),
    rating: 5,
    productImage: "/assets/hijab-pics/3.jpeg",
  },
];


const line3 = [
  {
    name: "Ayaan Khan",
    title: "Cozy Winter Hoodie",
    review: (
      <span>
        The hoodie is soft and fits perfectly.  
        Wore it on a trip to Manali and it kept me warm.  
        Fabric quality feels premium.
      </span>
    ),
    rating: 5,
    productImage: "/assets/hoodie-pics/1.jpeg",
  },
  {
    name: "Riya Sharma",
    title: "Cozy Winter Hoodie",
    review: (
      <span>
        Loved the minimal design.  
        Looks good even after multiple washes.
      </span>
    ),
    rating: 4,
    productImage: "/assets/hoodie-pics/2.jpeg",
  },
  {
    name: "Zara Sheikh",
    title: "Cozy Winter Hoodie",
    review: (
      <span>
        I got this for my brother and he absolutely loved it.  
        Color is true to picture and very comfy.  
        A bit loose, but that's how he likes it.  
        Would buy again.
      </span>
    ),
    rating: 5,
    productImage: "/assets/hoodie-pics/3.jpeg",
  },
  {
    name: "Kabir Verma",
    title: "Cozy Winter Hoodie",
    review: (
      <span>
        Great for daily wear.  
        I use it for college and it's stylish yet warm.
      </span>
    ),
    rating: 4,
    productImage: "/assets/hoodie-pics/4.jpeg",
  },
  {
    name: "Fatima Ansari",
    title: "Cozy Winter Hoodie",
    review: (
      <span>
        Super cozy and doesn't itch at all.  
        I've worn it almost every day this week.  
        Looks great with jeans or joggers.
      </span>
    ),
    rating: 5,
    productImage: "/assets/hoodie-pics/5.jpeg",
  },
  {
    name: "Meera Nair",
    title: "Cozy Winter Hoodie",
    review: (
      <span>
        This hoodie is worth every rupee.  
        Material is thick but breathable.
      </span>
    ),
    rating: 4,
    productImage: "/assets/hoodie-pics/6.jpeg",
  },
  {
    name: "Imran Siddiqui",
    title: "Cozy Winter Hoodie",
    review: (
      <span>
        Wasn't expecting it to be this good!  
        Warm, soft and stylish.  
        The zip is sturdy too.  
        I've already ordered another one.
      </span>
    ),
    rating: 5,
    productImage: "/assets/hoodie-pics/7.jpeg",
  },
  {
    name: "Sneha Joshi",
    title: "Cozy Winter Hoodie",
    review: (
      <span>
        It's a very comfortable hoodie.  
        I use it for my morning walks.
      </span>
    ),
    rating: 4,
    productImage: "/assets/hoodie-pics/8.jpeg",
  },
  {
    name: "Yusuf Qureshi",
    title: "Cozy Winter Hoodie",
    review: (
      <span>
        Keeps me warm in Delhi winters.  
        Hoodie is deep enough to cover properly.  
        Stitching looks solid.  
        Got compliments already!
      </span>
    ),
    rating: 5,
    productImage: "/assets/hoodie-pics/9.jpeg",
  },
  {
    name: "Ananya Iyer",
    title: "Cozy Winter Hoodie",
    review: (
      <span>
        Just the right balance of comfort and style.  
        I've recommended it to my friends.
      </span>
    ),
    rating: 4,
    productImage: "/assets/hoodie-pics/10.jpeg",
  },
];

const line4 = [
  {
    name: "Zainab Sheikh",
    title: "Elegant Wrist Watch for Women",
    review: (
      <span>
        Love the sleek design and the strap is super comfy.  
        Been wearing it to college daily and it matches all my outfits.
      </span>
    ),
    rating: 5,
    productImage: "/assets/watch-pics/1.jpg",
  },
  {
    name: "Rehan Ali",
    title: "Modern Stainless Steel Watch",
    review: (
      <span>
        This feels premium in hand.  
        It’s got a nice weight to it and looks even better in real life.  
        Battery life’s solid too.
      </span>
    ),
    rating: 4,
    productImage: "/assets/watch-pics/2.png",
  },
  {
    name: "Fatima Javed",
    title: "Chic Rose Gold Watch",
    review: (
      <span>
        So elegant and classy!  
        My mom gifted me this and I can’t stop wearing it.  
        Gets me compliments every day.
      </span>
    ),
    rating: 5,
    productImage: "/assets/watch-pics/3.jpg",
  },
  {
    name: "Ayaan Verma",
    title: "Casual Leather Strap Watch",
    review: (
      <span>
        Decent build, looks clean.  
        Perfect for daily wear.  
        The buckle could be better though.
      </span>
    ),
    rating: 4,
    productImage: "/assets/watch-pics/4.jpg",
  },
  {
    name: "Mehwish Ansari",
    title: "Minimalist Analog Watch",
    review: (
      <span>
        Super lightweight and pretty.  
        The face is just the right size.  
        Would definitely buy again!
      </span>
    ),
    rating: 5,
    productImage: "/assets/watch-pics/5.jpg",
  },
  {
    name: "Shoaib Khan",
    title: "Bold Black Sports Watch",
    review: (
      <span>
        Great for gym and running.  
        It’s rugged and doesn’t feel cheap.  
        The strap’s a bit tight at first but loosens with use.
      </span>
    ),
    rating: 4,
    productImage: "/assets/watch-pics/6.jpg",
  },
  {
    name: "Aaliya Mir",
    title: "Trendy Digital Watch",
    review: (
      <span>
        Bought this for my niece and she loves it!  
        Super cute and easy to use.  
        Display is clear even under sunlight.
      </span>
    ),
    rating: 5,
    productImage: "/assets/watch-pics/7.jpg",
  },
  {
    name: "Imran Qureshi",
    title: "Luxury Chronograph Watch",
    review: (
      <span>
        Honestly looks way more expensive than it is.  
        People think it’s branded lol.  
        I wear it to meetings and weddings.
      </span>
    ),
    rating: 5,
    productImage: "/assets/watch-pics/8.jpg",
  },
  {
    name: "Nusrat Chauhan",
    title: "Smart Watch with Fitness Tracker",
    review: (
      <span>
        Tracks steps and heart rate accurately.  
        Display could be brighter in sun.  
        Battery lasts about 3 days.
      </span>
    ),
    rating: 4,
    productImage: "/assets/watch-pics/9.jpg",
  },
  {
    name: "Bilal Ahmad",
    title: "Everyday Classic Watch",
    review: (
      <span>
        Simple and reliable.  
        I just needed something clean for everyday wear, and this works great.  
        Not flashy, just neat.
      </span>
    ),
    rating: 4,
    productImage: "/assets/watch-pics/10.jpg",
  },
];





// ReviewCard component for rendering a single review card
const ReviewCard = ({ item, index }) => (
  <div
    className="bg-white rounded-2xl flex gap-2 flex-col p-3 sm:p-4 border border-blue-50 text-left"
    style={{
      height: '280px',
      fontFamily: "var(--font-body)",
      width: "180px",
      maxWidth: "220px",
      boxShadow: "none",
    }}
  >
    <img
      src={item.productImage}
      alt="Product"
      style={{
        width: "100%",
        height: "120px",
        objectFit: "cover",
        borderRadius: "10px 10px 0 0",
      }}
    />
    <div className="flex items-center mb-1 sm:mb-3 gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 sm:w-4 sm:h-4 ${i < item.rating ? "text-blue-500" : "text-blue-100"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
        </svg>
      ))}
    </div>
    <p
      className="text-gray-700 text-xs sm:text-sm text-left leading-relaxed"
      style={{ margin: 0, padding: 0, lineHeight: 1.3 }}
    >
      {item.review}
    </p>
    <h4
      className="text-base sm:text-lg font-semibold mb-1 tracking-wide text-grey-600"
      style={{
        fontFamily: "sans-serif",
        fontSize: "12px",
        letterSpacing: "0.05em",
        fontWeight: "400",
      }}
    >
      {item.name}
    </h4>
  </div>
);

// MobileReviewSection component using the provided cards XML
const MobileReviewSection = () => {
  return (
    <section className="w-full max-w-full overflow-hidden relative section-fade-mask" style={{height: '100vh', border :'none' , background: '#d3d3d3'}}>
      {/* Fade overlay for top and bottom blending */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 20,
        background: 'linear-gradient(to bottom, #f0f9ff 0%, rgba(240,249,255,0.7) 8%, rgba(255,255,255,0) 18%, rgba(255,255,255,0) 82%, rgba(240,249,255,0.7) 92%, #f0f9ff 100%)',
      }} />
      <div className="flex justify-center items-start h-full relative z-10" style={{background:  '#d3d3d3' , position: 'relative', overflow: 'hidden'}}>
        {/* Curved lines SVG background */}
        <svg
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%'}}
          aria-hidden="true"
        >
          {/* 24 smooth curved lines */}
          {Array.from({length: 24}).map((_, i) => {
            const y = 30 + i * 13;
            return (
              <path
                key={`curve-${i}`}
                d={`M 0 ${y} Q 200 ${y + 30}, 400 ${y}`}
                stroke="#64748b"
                strokeWidth="1"
                opacity="0.18"
                fill="none"
              />
            );
          })}
        </svg>
        {/* Column 1 - Shoes */}
        <div className="flex flex-col space-y-3 cardsline1  ">
          {[...line1, ...line1].map((item, index) => (
            <ReviewCard key={`shoes-${index}`} item={item} index={index} />
          ))}
        </div>
        {/* Column 2 - Hijabs */}
        <div className="flex flex-col space-y-3 cardsline2 ">
          {line2.map((item, index) => (
            <ReviewCard key={`hijab-${index}`} item={item} index={index} />
          ))}
        </div>
        {/* Column 3 - Hoodies */}
        <div className="flex flex-col space-y-3 cardsline3 ">
          {line3.map((item, index) => (
            <ReviewCard key={`hoodie-${index}`} item={item} index={index} />
          ))}
        </div>
        {/* Column 4 - Watches */}
        <div className="flex flex-col space-y-3  cardsline4 ">
          {line4.map((item, index) => (
            <ReviewCard key={`watch-${index}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { MobileReviewSection };

