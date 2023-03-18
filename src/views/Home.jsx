import Navbar from "../components/Navbar";
import SkillWrapper from "../components/Skills/SkillWrapper";
import "./Home.scss";

const Home = () => {
    return (
        <div id="home" name="home">
            <Navbar/>
            <div className="main_section">
                <div className="main_section__presentation">
                    <div className="flex flex-col justify-center">
                        <div className="presentation__title">Ibai Farina</div>
                        <div className="presentation__description">
                            Hi! I'm Ibai Farina. I'm a full stack web developer from Barcelona, Spain. I have years of
                            experience working with Python and I've also completed several web projects.
                        </div>
                        <button className="btn sm:w-fit mt-10">My work</button>
                    </div>
                    <SkillWrapper/>
                </div>
            </div>
        </div>
    );
};

export default Home;