import Link from "next/link";
import appData from "@data/app.json";
import { useEffect } from "react";
import ImageView from "@components/ImageView";
import { footerSticky } from "@common/utilits";

const DefaultFooter = () => {
  useEffect(() => {
    footerSticky();
  }, []);

  return (
    <>
        {/* Footer */}
        <footer className="onovo-footer footer--dark">
            <div className="footer--default">
                <div className="container">

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3" style={{alignContent:"center"}}>

                            {/* Description */}
                            <div className="onovo-text onovo-text-white">
                                <h5>Information</h5>
                                <p style={{"opacity": "0.6"}}>Bringing ideas to life with bold visuals and timeless design. <strong>Crafting stories that captivate, inspire, and leave a lasting impact.</strong> </p>
                            </div>

                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 offset-lg-1" style={{alignContent:"center"}}>

                            {/* Description */}
                            <div className="onovo-text onovo-text-white">
                                <h5>Get in Touch</h5>
                                <p style={{"opacity": "0.6"}}>Greater Kailash, KC Studio <br />Delhi - 110048 </p>
                                <p style={{"opacity": "0.6"}}>
                                    <a href="tel:+919811028537" className="onovo-lnk lnk--white" target="_blank">+91-98110 28537</a><br />
                                    {/* <a href="mailto:contact@kushagrahchawala.com" className="onovo-lnk lnk--white" target="_blank">contact@kushagrahchawala.com</a> */}
                                </p>
                            </div>

                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">

                            
                            <div className="row">
                                {/* {appData.footer.gallery.map((item, key) => (
                                <div key={`fgallery-item-${key}`} className="col-4 col-xs-6 col-sm-6 col-md-4 col-lg-4">
                                    <figure className="gallery-item">
                                        <a href={item.image} title={item.title}>
                                            <img src={item.image} alt={item.alt} />
                                        </a>
                                    </figure>
                                </div>
                                ))} */}
                                <div className="d-flex justify-content-center">
                                        <img src="/images/official/final_logo.png" width="70%" alt="Kushagrah Chawala" srcset="" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="separator"></div>

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-self-center">

                            {/* Copyright */}
                            <div className="copyright onovo-text-white">
                                <div dangerouslySetInnerHTML={{__html: appData.footer.copy}} />
                            </div>

                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-right">

                            {/* Social */}
                            <div className="onovo-social-1 onovo-social-active">
                                <ul>
                                    {appData.social.map((item, key) => (
                                    <li key={`fsocial-item-${key}`}>
                                        <a className="onovo-social-link onovo-hover-2" href={item.link} title={item.title} target="_blank">
                                            <i className={item.icon}></i>
                                        </a>
                                    </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </footer>

        <ImageView />
    </>
  );
};
export default DefaultFooter;
