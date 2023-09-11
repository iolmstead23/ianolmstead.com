import Skill from "@/components/ui/portfolio card";

export default function Portfolio() {
    
    const description = {
        recommendation: "Recommendation systems, often referred to as recommender systems, are a subset of machine learning and artificial intelligence that aim to provide personalized suggestions or recommendations to users. These systems are widely used in various industries to help users discover products, services, or content they may be interested in, thereby enhancing user experience, increasing engagement, and driving sales or user interactions. Recommendation systems leverage user data and item data to generate these personalized recommendations. There are several different approaches to building recommendation systems, with collaborative filtering and content-based filtering being the most common ones",
        timeseries: "Time series data is data that has time as the main vector. Is a sequence of data points indexed in time order. This can be stock data or any data with a fixed time interval.",
        regression: "Regression is a fundamental concept in machine learning and statistical modeling. It is a supervised learning technique used for predicting a continuous numeric value (output or dependent variable) based on one or more input features (independent variables).",
        neuralnetwork: "Neural networks, also known as artificial neural networks (ANNs) or simply 'neural nets,' are a fundamental component of modern machine learning and artificial intelligence.",
        treesforest: "Decision Trees and Random Forests are powerful machine learning algorithms used for both classification and regression tasks. They are particularly popular for their simplicity, interpretability, and effectiveness in a wide range of applications.",
        clustering: "Clustering is a machine learning technique used for grouping similar data points or objects into clusters or clusters based on their intrinsic characteristics or similarities. The primary goal of clustering is to uncover hidden patterns and structure within data, making it a valuable tool for exploratory data analysis, data compression, and data preprocessing.",
        creditrisk: "Credit risk modeling in machine learning is the process of using data and statistical techniques to assess and predict the creditworthiness of individuals or entities seeking credit, such as loans or credit cards. It plays a crucial role in the financial industry by helping banks and lending institutions make informed decisions about whether to approve or deny credit applications, as well as how to set interest rates and credit limits.",
        website: "Coming Soon!",
    }

    return (
        <div>
            <div className="flex flex-row flex-wrap justify-around">
                <Skill title="Time Series Data" text={description.timeseries.slice(0,200) + "..."} image="/dummy_image.png" url="/blogs/time-series-data" />
                <Skill title="Regression" text={description.regression.slice(0,200) + "..."} image="/dummy_image.png"  url="/blogs/regression" />
                <Skill title="Neural Network" text={description.neuralnetwork.slice(0,200) + "..."} image="/dummy_image.png"  url="/blogs/neural-network"/>
                <Skill title="Tree/Forest" text={description.treesforest.slice(0,200) + "..."} image="/dummy_image.png"  url="/blogs/tree-forest"/>
                <Skill title="Recommendation System" text={description.recommendation.slice(0,200) + "..."} image="/dummy_image.png"  url="/blogs/recommendation-system"/>
                <Skill title="Clustering" text={description.clustering.slice(0,200) + "..."} image="/dummy_image.png"  url="/blogs/clustering"/>
                <Skill title="Credit Risk Modeling" text={description.creditrisk.slice(0,200) + "..."} image="/dummy_image.png"  url="/blogs/credit-risk-modeling"/>
                <Skill title="Website" text={description.website.slice(0,200) + "..."} image="/dummy_image.png"  url="/blogs/website"/>
            </div>
        </div>
    )
}