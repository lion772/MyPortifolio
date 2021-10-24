import { FaMobileAlt } from "react-icons/fa";

export default function AndroidOrFullstack() {
    return (
        <>
            <div className="android-development">
                <h2>Android development </h2>
                <div>
                    <p>
                        I&apos;m responsible for the maintenance of my
                        company&apos;s app, promoting a better experience and
                        quality for our users. I learned many things, new
                        technologies, such as: how to work by using both
                        programming languages (Kotlin and Java), MVVM
                        architecture, Courotine, Dependency Injection (Dagger 2
                        and Koin, mainly), DataBinding, SOLID concept, and so on
                        and so forth. It&apos;s my first experience as an
                        android developer, that&apos;s why I&apos;m grateful for
                        everything this company has done for me, from opening up
                        its job offer door to improving my level of coding and
                        become better every single day.
                    </p>
                    <div>
                        <FaMobileAlt
                            style={{ color: "white", fontSize: "80px" }}
                        />
                        <FaMobileAlt
                            style={{ color: "white", fontSize: "80px" }}
                        />
                        <FaMobileAlt
                            style={{ color: "white", fontSize: "80px" }}
                        />
                    </div>
                </div>
            </div>
            <div className="web-development">
                <h2>Full-Stack development </h2>
                <div></div>
            </div>
        </>
    );
}
