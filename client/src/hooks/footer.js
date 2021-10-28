export default function Footer({ isHeader, isProjects, isContact }) {
    const checkClass = () => {
        if (!isProjects && !isContact) {
            return "bottom-container-header";
        } else {
            return isProjects
                ? "bottom-container-project"
                : "bottom-container-content";
        }
    };
    return (
        <>
            <div className={checkClass()}>
                <div className="bottom-container">
                    <div>
                        <a href="https://www.linkedin.com/in/william-steinke-de-mello/">
                            LinkedIn
                        </a>
                        <span>&mdash;</span>
                        <a href="https://www.facebook.com/will.lopes.104">
                            Facebook
                        </a>
                    </div>
                    <p>© 2021 William Steinke de Mello.</p>
                </div>
            </div>
        </>
    );
}
