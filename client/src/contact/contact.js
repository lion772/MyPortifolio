import LottieContact from "./lottieContact";
import Navbar from "../hooks/nav";
import Footer from "../hooks/footer";

export default function Contact() {
    return (
        <div className="contact-container">
            <Navbar contact={true} />
            <div className="fill-form"></div>
            <h2>Get in touch!</h2>
            <h3>If you have any question, do not hesitate to ask.</h3>
            <LottieContact />
            <a className="button " href="mailto:williamlopes64@gmail.com">
                Write me an email
            </a>
            <h3>Or reach out to me on my social networks</h3>
            <Footer />
        </div>
    );
}
