import Skill from "./ui/portfolio card";

const dummyText: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Pulvinar pellentesque habitant morbi tristique. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Elementum eu facilisis sed odio morbi quis commodo. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Duis at consectetur lorem donec massa sapien faucibus. Interdum velit euismod in pellentesque massa placerat. Non pulvinar neque laoreet suspendisse. Nibh praesent tristique magna sit amet. Non consectetur a erat nam at lectus. Tempor orci dapibus ultrices in iaculis nunc. Et sollicitudin ac orci phasellus egestas tellus. Quisque sagittis purus sit amet. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Bibendum est ultricies integer quis auctor elit. Non odio euismod lacinia at quis risus. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Fames ac turpis egestas sed.'

export default function Portfolio() {
    return (
        <div className="container">
            <div className="w-full flex flex-row flex-wrap justify-around">
                <Skill title="Time Series Data" text={dummyText.slice(0,200) + "..."} image="/dummy_image.png" url="#" />
                <Skill title="Regression" text={dummyText.slice(0,200) + "..."} image="/dummy_image.png"  url="#"/>
                <Skill title="Neural Network" text={dummyText.slice(0,200) + "..."} image="/dummy_image.png"  url="#"/>
                <Skill title="Tree/Forest" text={dummyText.slice(0,200) + "..."} image="/dummy_image.png"  url="#"/>
                <Skill title="Recomendation System" text={dummyText.slice(0,200) + "..."} image="/dummy_image.png"  url="#"/>
                <Skill title="Clustering" text={dummyText.slice(0,200) + "..."} image="/dummy_image.png"  url="#"/>
                <Skill title="Credit Risk Modeling" text={dummyText.slice(0,200) + "..."} image="/dummy_image.png"  url="#"/>
                <Skill title="Website" text={dummyText.slice(0,200) + "..."} image="/dummy_image.png"  url="#"/>
            </div>
        </div>
    )
}