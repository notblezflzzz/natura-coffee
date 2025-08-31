import React from 'react'


function Home() {
    const menus = [
        {   
            image: "/espresso.jpg",
            name: "Espresso",
            description: "Strong and bold coffee shot",
        },
        {   
            image: "/cappuccino.jpg",
            name: "Cappuccino",
            description: "Espresso with steamed milk and foam",
        },
        {   
            image: "/latte.jpg",
            name: "Latte",
            description: "Espresso with steamed milk",
        }
    ]

    const galleryImages = [
        "/gallery1.jpg",
        "/gallery2.jpg",
        "/latte.jpg",
        "/cappuccino.jpg",
        "/espresso.jpg",
        "/coffee.jpg",
    ]

    return (
    <div>
        <section className='h-screen w-full' id='home'>
        <div className='h-full w-full relative bg-[linear-gradient(rgba(0,0,0,0.30),rgba(0,0,0,0.6)),url("/bgcoffee.jpg")] bg-cover bg-center items-center flex justify-center backdrop-brightness-50 '>
            <div className='text-center flex flex-col gap-6 text-white justify-center items-center'>
                <h1 className='text-[48px] font-[600] md:3xl'>Brewed with Passion, Served with Love</h1>
                <p className='italic text-white'>Your Cozy Spot for Coffee & Conversations</p>
                <button className='rounded-[10px] cursor-pointer text-black bg-[#F5E6D3] py-[10px] px-[20px] transition-all duration-300 hover:bg-[#ccc5a5]'><a href="#menu">See Our Menu</a></button>
            </div>
        </div>
        </section>

        <section className='py-16 bg-gray-50' id='about'>
            <div className=' max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center'>
                <div>
                    <h1 className='font-[500] text-[26px]'>About Us</h1>
                    <p className='leading-relaxed mb-6 text-gray-600'>
                        At <span className="font-semibold">NatureCoffe</span>, we believe that every cup tells a story. 
                        Founded with passion for authentic flavors, our café serves more than just coffee — 
                        it’s a place where people connect, relax, and create memories.
                    </p>
                    <p className='text-gray-700 leading-relaxed'>
                        We carefully select our beans, brew them with love, and create a cozy atmosphere that feels like home. Whether you’re here to work, meet friends, or simply enjoy a quiet moment, NatureCoffe is here to serve you the perfect cup.
                    </p>
                </div>
                <div>
                    <img src="/coffee.jpg" alt="" className='rounded-2xl shadow-lg'/>
                </div>
            </div>
        </section>

        <section className='py-16 bg-gray-50' id='menu'>
            <div className='mb-6 max-w-6xl mx-auto px-6 flex flex-col gap-4'>
                <h1 className='text-center text-[26px] font-[500]'>Signature Drinks</h1>
                <p className='text-center italic text-gray-700'>Discover our handcrafted coffee selections, brewed with love and passion to brighten your day.</p>
            </div>
            
            <div className='grid md:grid-cols-3 max-w-6xl mx-auto px-6 gap-10 items-center'>
                {menus.map((menu) => (
                    <div className='pt-[40px] border-2 rounded-2xl border-gray-200 flex flex-col justify-center items-center text-center p-6 shadow-lg hover:shadow-2xl transition-all duration-300'>
                        <img src={menu.image} alt="" className='w-[60%]'/>
                        <h1 className='font-[500] text-[22px] mb-2 pt-[10px]'>{menu.name}</h1>
                        <p className='text-gray-600 leading-relaxed'>{menu.description}</p>
                        <a href=''>See full menu</a>
                    </div>
                ))}
            </div>
        </section>

        <section className='py-16 bg-gray-50' id='gallery'>
                <div>
                    <div className='mb-6 max-w-6xl mx-auto px-6 flex flex-col gap-4'>
                        <h1 className='text-center font-[500] text-[30px]'>Our Gallery</h1>
                        <p className='text-center italic text-gray-700'>A glimpse of our cozy space and handcrafted coffee creations.</p>
                    </div>

                    <div className='grid md:grid-cols-3 max-w-6xl mx-auto px-6 gap-10 items-center'>
                        {galleryImages.map((image) => (
                            <div className='rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300'>
                                <img src={image} alt="" className="w-full aspect-square object-cover rounded-xl"/>
                            </div>
                        ))}
                    </div>
                </div>
        </section>

        <section className='py-16 bg-gray-50' id='contact'>
            <div>
                <div>
                    <h1 className='text-center text-[30px] font-[500]'>Contact Us</h1>
                    <p className='text-center italic text-gray-700'>Find Us Here!</p>
                </div>

                <div className='grid md:grid-cols-2 max-w-6xl mx-auto px-6 gap-10 items-center mt-6 '>
                    <div className='flex flex-col gap-4 text-gray-700 border-2 border-gray-200 rounded-2xl p-6 shadow-lg'>
                        <div className='flex flex-col'>
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder='Type your Name' required className='border-1 border-gray-400 rounded-[10px] py-[10px] px-[15px] outline-none'/>
                        </div>
                        
                        <div className='flex flex-col'>
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder='Type your email' required className='border-1 border-gray-400 rounded-[10px] py-[10px] px-[15px] outline-none'/>
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="">Message</label>
                            <input type="text" placeholder='Your message' required className='border-1 border-gray-400 rounded-[10px] py-[10px] px-[15px] outline-none'/>
                        </div>

                        <button type='submit' className='bg-[#4B2E2B] text-white px-[20px] py-[10px] rounded-2xl cursor-pointer hover:bg-[#2a1a19] transition-all duration-300'>Submit</button>
                    </div>

                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126763.40396249277!2d106.68943188949607!3d-6.229386699999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1d0e9a7f4f7%3A0x2c2a2291a07698d2!2sCoffee%20Shop!5e0!3m2!1sen!2sid!4v1693409136843!5m2!1sen!2sid" 
                        width="100%" 
                        height="350" 
                        className="border-none rounded-2xl shadow-lg" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">

                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
  )
}

export default Home;