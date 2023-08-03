import React from 'react';
import ImgHome1 from '../../AssetsMain/Uploads/488762capture.jpg';
import ImgHome2 from '../../AssetsMain/Uploads/485289img_9632.jpg';
import ImgHome3 from '../../AssetsMain/Uploads/413919img_9623.jpg';
import ImgHome4 from '../../AssetsMain/Uploads/668220img_9613.jpg';
import ImgHome5 from '../../AssetsMain/Uploads/46306img.jpg';
import ImgHome6 from '../../AssetsMain/Uploads/577475img.jpg';
import ImgHome7 from '../../AssetsMain/Uploads/oil&ghee.jpg';
import ImgHome8 from '../../AssetsMain/Uploads/industrialFat.jpg';
import ImgHome9 from '../../AssetsMain/Uploads/laraibinn.jpg';
import ImgHome10 from '../../AssetsMain/Uploads/transport-02.jpg';
import ImgHome11 from '../../AssetsMain/Uploads/energySector.jpg';
import ImgHome12 from '../../AssetsMain/Uploads/wcc-03.jpg';
import ImgHome13 from '../../AssetsMain/Uploads/Business/c1.png';
import ImgHome14 from '../../AssetsMain/Uploads/Business/c2.png';
import ImgHome15 from '../../AssetsMain/Uploads/Business/c3.png';
import ImgHome16 from '../../AssetsMain/Uploads/Business/c4.png';
import ImgHome17 from '../../AssetsMain/Uploads/Business/c5.png';
import ImgHome18 from '../../AssetsMain/Uploads/Business/c6.png';
import ImgHome19 from '../../AssetsMain/Uploads/Business/c7.png';
import ImgHome20 from '../../AssetsMain/Uploads/Business/c8.png';


const Home = () => {
    return (

        <div>

            {/* Fullscreen Slider Start  */}
            <div className="rev_slider_wrapper">

                {/* <div style="position: relative; z-index: -99; width: 100%; height: 100%"> */}
                <div style="position: relative; z-index: -99; width: 100%; height: 100%">
                    {/* <iframe frameborder="0" height="100%" width="100%"
                        src="https://www.facebook.com/plugins/video.php?height=308&href=https%3A%2F%2Fwww.facebook.com%2FPVMAOFFICIAL%2Fvideos%2F456941835324774%2F&show_text=false&width=560&t=0"
                        width="560" height="308" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe> */}

                    {/* <!--
                    <iframe frameborder="0" height="100%" width="100%"
                        src="https://youtube.com/embed/4v_to2wESLs?autoplay=1&mute=1&enablejsapi=1&controls=0&showinfo=0&autohide=1" allow="modestbranding;" >
                    </iframe> --> */}

                </div>
            </div>
            <style>
                #myvid{

                    //  Same code as before, then…

                    // object - fit: cover;

                    // above line is not being read in react

                }
                .slider_heading{
                    // margin:auto;
                    // above line is not being read in react

                    // vertical - align:middle;
                    // above line is not being read in react

                }
                .rev_slider_wrapper{
                    /*margin-top:-130px;*/
                    // height:100vh;
                    // above line is not being read in react


                }

                #mainslider{
                    // float:left;
                    // above line is not being read in react
                }
                #video_overlays {
                    //     position:absolute;
                    //    float:left;
                    // width:100%;
                    // min-height:100%;
                    // background-color: rgba(0,0,0,0.5);
                    // z-index:300000;
                    // above line is not being read in react
                }

            </style>

            <script>
                var video = document.getElementById("myVideo");
                var btn = document.getElementById("myBtn");

                video.play();

                {/* function myFunction() {
  if (video.paused) {
                     video.play();
                    btn.innerHTML = "Pause";
  } else {
                    video.pause();
                btn.innerHTML = "Play";
  }
} */}
                {/* // above lines of function is not being read in react */}

            </script>

            <style>
                #myVideo {
                    // min - width: 100%;
                    // above line is not being read in react

                    // min-height: 100vh;
                    //   above line is not being read in react

                }

            </style>


            <div className="section-heading text-center">
                <h3 className="semi-bold font-size-33 " style="color:#ef4736;">Latest News</h3>
            </div>
            <div className="owl-carousel owl-theme testmonial-carousel-4 mt-10">

                {/* <a href="latestNews.html#Mr Abdul Waheed, Chairman PVMA KN News"> */}
                <a href="/LatestNews">
                    <div className="testmonial-item-5" style="min-height:200px;">
                        <div className="row">
                            <div className="col-lg-5 col-sm-5 col-md-5">
                                <img src={ImgHome1} className="img-responsive" alt="img"></img>
                            </div>
                            <div className="col-lg-7 col-sm-7 col-md-7">

                                <div className="testmonial-item-5-text" style="max-height:250px;">
                                    <p style="overflow:hidden; max-height:150px;">Mr Abdul Waheed, Chairman PVMA KN News</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </a>

                <a href="latestNews.html#Mr. Abdul Waheed Sheikh - welcoming Guest of Honor Mr. Faisal Javed Khan">
                    <div className="testmonial-item-5" style="min-height:200px;">
                        <div className="row">
                            <div className="col-lg-5 col-sm-5 col-md-5">
                                <img src={ImgHome2} className="img-responsive" alt="img" />
                            </div>
                            <div className="col-lg-7 col-sm-7 col-md-7">

                                <div className="testmonial-item-5-text" style="max-height:250px;">
                                    <p style="overflow:hidden; max-height:150px;">Mr. Abdul Waheed Sheikh - welcoming Guest of Honor Mr. Faisal Javed Khan</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </a>





                <a href="latestNews.html#Mr. Abdul Waheed Sheikh - welcoming Ambassador of UAE">
                    <div className="testmonial-item-5" style="min-height:200px;">
                        <div className="row">
                            <div className="col-lg-5 col-sm-5 col-md-5">
                                <img src={ImgHome3} className="img-responsive" alt="img" />
                            </div>
                            <div className="col-lg-7 col-sm-7 col-md-7">

                                <div className="testmonial-item-5-text" style="max-height:250px;">
                                    <p style="overflow:hidden; max-height:150px;">Mr. Abdul Waheed Sheikh - welcoming Ambassador of UAE</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </a>





                <a href="latestNews.html#Mr. Abdul Waheed Sheikh - welcoming Ambassador of Somalia">
                    <div className="testmonial-item-5" style="min-height:200px;">
                        <div className="row">
                            <div className="col-lg-5 col-sm-5 col-md-5">
                                <img src={ImgHome4} className="img-responsive" alt="img" />
                            </div>
                            <div className="col-lg-7 col-sm-7 col-md-7">

                                <div className="testmonial-item-5-text" style="max-height:250px;">
                                    <p style="overflow:hidden; max-height:150px;">Mr. Abdul Waheed Sheikh - welcoming Ambassador of Somalia</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </a>





                <a href="latestNews.html#Mr. Awais Karni - Director Waheed Group of Companies">
                    <div className="testmonial-item-5" style="min-height:200px;">
                        <div className="row">
                            <div className="col-lg-5 col-sm-5 col-md-5">
                                <img src={ImgHome5} className="img-responsive" alt="img" />
                            </div>
                            <div className="col-lg-7 col-sm-7 col-md-7">

                                <div className="testmonial-item-5-text" style="max-height:250px;">
                                    <p style="overflow:hidden; max-height:150px;">Mr. Awais Karni - Director Waheed Group of Companies</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </a>





                <a href="latestNews.html#Meeting with Chaudhry Shujaat Hussain">
                    <div className="testmonial-item-5" style="min-height:200px;">
                        <div className="row">
                            <div className="col-lg-5 col-sm-5 col-md-5">
                                <img src={ImgHome6} className="img-responsive" alt="img" />
                            </div>
                            <div className="col-lg-7 col-sm-7 col-md-7">

                                <div className="testmonial-item-5-text" style="max-height:250px;">
                                    <p style="overflow:hidden; max-height:150px;">Meeting with Chaudhry Shujaat Hussain</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </a>




            </div>

            <div className="container-fluid pl-0 pr-0">
                <div className="row no-gutters">
                    <div className="col-md-6 col-sm-12 col-12">
                        <div className="padding-10-perc grey-bg background-80 background-no-repeat background-center">
                            <div className="section-heading text-left"><small className=" font-size-20 font-weight-normal">About</small>
                                <h4 className="semi-bold font-size-35" style="color:#083f88;">WAHEED GROUP</h4>
                            </div>
                            <div className="text-content mt-20">
                                <p>Welcome to the Waheed Group of Companies!

                                    What started off over four decades ago as a small business has today spread out by
                                    leaps and bounds to be-come Pakistan’s largest business group. Our company’s operations
                                    are widely spread all over the country and abroad, providing high quality standards of
                                    products and services to our clientele. We are the business leaders and have set a pattern
                                    of success stories that have let our organization grow and receive immense respect from
                                    consumers and our trade partners alike. Today, the company generates an annual turnover
                                    of over three hundred and fifty million US dollars ($350 million), contributing significantly to the country’s economy.</p>
                            </div>

                            <div className="mt-40"><a href="aboutus.html" className="button-primary button-sm">Learn More</a></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-12">
                        <div className="full-background background-right min-350" style="background-image: url(uploads/waheed.jpg);"></div>
                    </div>
                </div>
            </div>


            <div className="section-block pb-0 mb-50">
                <div className="container">
                    <div className="section-heading text-center">

                        <div className="col-md-12 col-sm-12 col-12">
                            <h4 className="semi-bold font-size-32">Our Concerns</h4>
                            <div className="section-heading-line line-thin"></div>
                        </div>


                    </div>
                    <div className="row mt-60">
                        <div className="owl-carousel owl-theme services-carousel-2">
                            <div className="service-block-2">
                                <img src={ImgHome7} alt="img" style="height:200px" />
                                <div className="service-block-2-content">
                                    <h4><a href="oil&ghee.html">Oil & Ghee</a></h4>
                                    <strong> WGC is a well-known leader in the oil industry for the last 25 years. It is one of the largest importers of Crude Palm Oil, RBD Palm Oil, Soybean oil and RBD Palm Olein from Malaysia and Indonesia.

                                    </strong><a href="oil&ghee.html" className="service-block-2-btn">Learn more <i className="fa fa-arrow-right primary-color"></i></a>
                                </div>
                            </div>
                            <div className="service-block-2">
                                <img src={ImgHome8} alt="img" style="height:200px;" />
                                <div className="service-block-2-content">
                                    <h4><a href="industrial-fat.html">Industrial Fat</a></h4><strong>
                                        Butter, shortening, and margarine are all types of fats. Shortening comes from vegetable oil, made solid by the process of hydrogenation. Because the oil comes from plant sources, it does not contain cholesterol, but might contain some saturated fat.
                                    </strong><a href="industrial-fat.html" className="service-block-2-btn">Learn more <i className="fa fa-arrow-right primary-color"></i></a>
                                </div>
                            </div>
                            <div className="service-block-2">
                                <img src={ImgHome9} alt="img" style="height:200px;" />
                                <div className="service-block-2-content">
                                    <h4><a href="hotel.html">Hotels</a></h4><strong>Laraib Inn situated in the heart of Islamabad, the capital city of Pakistan, Laraib Inn is a popular multi-purpose hotel that is nestled in a unique commercial destination.

                                    </strong>
                                    <a href="hotel.html" className="service-block-2-btn">Learn
                                        more <i className="fa fa-arrow-right primary-color"></i></a>
                                </div>
                            </div>
                            <div className="service-block-2">
                                <img src={ImgHome10} alt="img" style="height:200px;" />
                                <div className="service-block-2-content">
                                    <h4><a href="transport.html">Transport</a></h4><strong>Having one of Pakistan’s biggest set-ups of Palm Oil as well as one of largest distributorship of Edible Oil & Ghee products, WGC has big requirement of transportation.

                                    </strong>
                                    <a href="transport.html" className="service-block-2-btn">Learn more <i className="fa fa-arrow-right primary-color"></i></a>
                                </div>
                            </div>
                            <div className="service-block-2">
                                <img src={ImgHome11} alt="img" style="height:200px;" />
                                <div className="service-block-2-content">
                                    <h4><a href="energy-sector.html">Energy Sector</a></h4><strong>
                                        WGC invested its time, experience and capital to flourish the business of CNG in Pakistan. It is only because of WGC’s hard work that group has a large list of CNG filling stations. It has also expended the CNG business in major cities of Pakistan.
                                    </strong><a href="energy-sector.html" className="service-block-2-btn">Learn more <i className="fa fa-arrow-right primary-color"></i></a>
                                </div>
                            </div>
                            <div className="service-block-2">
                                <img src={ImgHome12} alt="img" style="height:200px;" />
                                <div className="service-block-2-content">
                                    <h4><a href="wgc-interprises-ltd.html">Waheed Group in Canada</a></h4><strong>
                                        WGC Canada started overseas operations in 2010 and, since then, it has been successful in providing consultancy to business organizations on corporate levels. WGC Canada has played an important role for the companies that had business requirements...
                                    </strong><a href="wgc-interprises-ltd.html" className="service-block-2-btn">Learn more <i className="fa fa-arrow-right primary-color"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-block section-sm">
                <div className="container">
                    <div className="col-md-12 col-sm-12 col-12">
                        <h4 className="semi-bold font-size-32 text-center">Our Business</h4>
                        <div className="section-heading-line line-thin"></div>
                    </div><br />
                    <div className="owl-carousel owl-theme clients clients-carousel">
                        <div className="item"><img src={ImgHome13} alt="partner-image" /></div>
                        <div className="item"><img src={ImgHome14} alt="partner-image" /></div>
                        <div className="item"><img src={ImgHome15} alt="partner-image" /></div>
                        <div className="item"><img src={ImgHome16} alt="partner-image" /></div>
                        <div className="item"><img src={ImgHome17} alt="partner-image" /></div>
                        <div className="item"><img src={ImgHome18} alt="partner-image" /></div>
                        <div className="item"><img src={ImgHome19} alt="partner-image" /></div>
                        <div className="item"><img src={ImgHome20} alt="partner-image" /></div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;

