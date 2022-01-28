import Layout from "../components/layout/Layout";
import pictures from "../data/pictures";

const Gallery = () => {
    return (
        <Layout>
            <div className="columns">
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap"
                }} className="column is-full">
                    {pictures.map(picture => (
                        <div style={{
                            margin: "10px",
                        }} className="card" key={picture.length}>
                            <div className="card-content">
                                <div className="content">
                                    <img src={picture} alt="image" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Gallery;