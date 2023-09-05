import Card from "./card";

const dummy_text: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export default function Portfolio() {
    return (
        <div className="container w-full md:flex md:flex-row md:flex-wrap">
            <Card title="Time Series Data" text={dummy_text} image="/time_series_data.png" url="#"/>
            <Card title="Regression" text={dummy_text} image="/time_series_data.png"  url="#"/>
            <Card title="Neural Network" text={dummy_text} image="/time_series_data.png"  url="#"/>
            <Card title="Tree/Forest" text={dummy_text} image="/time_series_data.png"  url="#"/>
            <Card title="Recomendation System" text={dummy_text} image="/time_series_data.png"  url="#"/>
            <Card title="Clustering" text={dummy_text} image="/time_series_data.png"  url="#"/>
            <Card title="Credit Risk Modeling" text={dummy_text} image="/time_series_data.png"  url="#"/>
            <Card title="Website" text={dummy_text} image="/time_series_data.png"  url="#"/>
            
        </div>
    )
}