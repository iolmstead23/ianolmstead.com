import Project from "./project";

const dummy_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export default function Portfolio() {
    return (
        <div className="container w-full md:flex md:flex-row md:flex-wrap">
            <Project title="Time Series Data" text={dummy_text} url="/time_series_data.png" />
            <Project title="Regression" text={dummy_text} url="/time_series_data.png" />
            <Project title="Neural Network" text={dummy_text} url="/time_series_data.png" />
            <Project title="Tree/Forest" text={dummy_text} url="/time_series_data.png" />
            <Project title="Recomendation System" text={dummy_text} url="/time_series_data.png" />
            <Project title="Clustering" text={dummy_text} url="/time_series_data.png" />
            <Project title="Credit Risk Modeling" text={dummy_text} url="/time_series_data.png" />
            <Project title="Website" text={dummy_text} url="/time_series_data.png" />
            
        </div>
    )
}