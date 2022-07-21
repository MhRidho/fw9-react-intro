import React from 'react'

import Partners from '../assets/img/partners.png'
import PngPhone from '../assets/img/PngPhone.png'
import PngPhone2 from '../assets/img/PngPhone2.png'
import PngPhone3 from '../assets/img/PngPhone3.png'
import Profile from '../assets/img/1.png'

const Home = () => {
    return (
        <>
            <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
            {/* START HEADER */}
            <header>
                <nav>
                    <h1>Zwallet</h1>
                    <div className='btn'>
                        <button className='b-login'><a href="./login.html" class="a-login">Login</a></button >
                        <button className='b-sign'><a href="./signUp.html" class="a-sign">Sign Up</a></button >
                    </div>
                </nav>
                <main>
                    <div>
                        <div className='aside'>
                            <h1>Awesome App<br />
                                For Saving Time.</h1>
                            <p>We bring you a mobile app for banking problems that<br />
                                oftenly wasting much of your times.</p>
                            <button className="b-sign"><a href="./signUp.html" className="a-sign">Try It Free</a></button>
                        </div>
                    </div>
                    <div className='wallpaper'>
                        <img src={PngPhone} alt="PngPhone.png" />
                    </div>
                </main>
            </header>
            {/* END HEADER */}

            {/* <!-- START PARTNERS --> */}
            <section>
                <img src={Partners} alt="partners.png" />
            </section>
            {/* <!-- END PARTNERS --> */}


            {/* <!-- START ABOUT --> */}
            <main className="about">
                <div className="h1">
                    <h1><span>About</span> the Application.</h1>
                </div>
                <div className="p">
                    <p>We have some great features from the application and it's totally free<br /> to use by all users around the
                        world.</p>
                </div>
                <div className="row-card">
                    <div className="card">
                        <div className="img">
                            <i className="i" data-feather="phone"></i>
                        </div>
                        <p className="support">24/7 Support</p>
                        <p className="contact">We have 24/7 contact support so you can contact us
                            whenever you want and we will
                            respond it.</p>
                    </div>
                    <div className="card">
                        <div className="img">
                            <i className="i" data-feather="lock"></i>
                        </div>
                        <p className="support">Data Privacy</p>
                        <p className="contact">We make sure your data is safe in our database and we will encrypt any data you
                            submitted to us.</p>
                    </div>
                    <div className="card">
                        <div className="img">
                            <i className="i" data-feather="download"></i>
                        </div>
                        <p className="support">Easy Download</p>
                        <p className="contact">Zwallet is 100% totally free to use it's now available on Google Play Store and
                            App Store.</p>
                    </div>
                </div>
            </main>
            {/* <!-- END ABOUT --> */}


            {/* <!-- START FEATURE ARTICLE --> */}
            <article>
                <div className="row">
                    <div className="col-1">
                        <img src={PngPhone2} alt="PngPhone2.png" />
                        <img src={PngPhone3} alt="PngPhone3.png" />
                    </div>
                    <div className="col-2">
                        <div>
                            <h1>All The <span>Great</span><br />
                                Zwallet Features.</h1>
                        </div>
                        <div className="ul-features">
                            <div className="li-features">
                                <p className="title"><span>1. </span>Small Fee</p>
                                <p>We only charge 5% of every success transaction done in Zwallet app.</p>
                            </div>
                            <div className="li-features">
                                <p className="title"><span>2. </span>Data Secured</p>
                                <p>All your data is secured properly in our system and it's encrypted.</p>
                            </div>
                            <div className="li-features">
                                <p className="title"><span>3. </span>User Friendly</p>
                                <p>Zwallet come up with modern and sleek design and not complicated.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            {/* <!-- END FEATURE ARTICLE --> */}


            {/* <!-- START SAYING SUMMARY --> */}
            <summary>
                <div>
                    <h1>What Users are <span>Saying.</span></h1>
                </div>
                <div>
                    <p>We have some great features from the application and it's totally free<br /> to use by all users around the
                        world.</p>
                </div>
                <div className="people">
                    <div className="arrow"><i className="ar" data-feather="arrow-left"></i></div>
                    <div className="figure">
                        <img src={Profile} alt="Profile" />
                        <h1>Alex Hansinburg</h1>
                        <span>Designer</span>
                        <p>“This is the most outstanding app that I've ever try in my live, this app is such an amazing
                            masterpiece and<br /> it's suitable for you who is bussy with their bussiness and must transfer money
                            to
                            another person aut there.<br /> Just try this app and see the power!”</p>
                    </div>
                    <div className="arrow"><i className="ar" data-feather="arrow-right"></i></div>
                </div>
            </summary>
            {/* <!-- END SAYING SUMMARY -->*/}

            {/* <!-- START FOOTER --> */}
            <footer>
                <div><span className="footer">Zwallet</span></div>
                <div>
                    <p>Simplify financial needs and saving much time in banking needs with one single app.</p>
                </div>
                <div>
                    <hr />
                </div>
                <div className="contact">
                    <span>2020 Zwallet. All right reserved.</span>
                    <div className="numb">
                        <span>+62 5637 8882 9901</span>
                        <span>contact@zwallet.com</span>
                    </div>
                </div>
            </footer>
            {/* <!-- END FOOTER --> */}
            <script>feather.replace()</script>
        </>

    )
}

export default Home;
