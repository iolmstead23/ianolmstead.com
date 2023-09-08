import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "./ui/card"

const dummyText: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Pulvinar pellentesque habitant morbi tristique. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Elementum eu facilisis sed odio morbi quis commodo. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Duis at consectetur lorem donec massa sapien faucibus. Interdum velit euismod in pellentesque massa placerat. Non pulvinar neque laoreet suspendisse. Nibh praesent tristique magna sit amet. Non consectetur a erat nam at lectus. Tempor orci dapibus ultrices in iaculis nunc. Et sollicitudin ac orci phasellus egestas tellus. Quisque sagittis purus sit amet. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Bibendum est ultricies integer quis auctor elit. Non odio euismod lacinia at quis risus. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Fames ac turpis egestas sed.'

export default function Banner() {
    return (
        <div className="container w-full py-20">
            <div className="flex flex-row flex-wrap justify-around lg:ml-[80px]">
                <Card className="shadow-2xl">
                    <CardHeader>
                        <CardTitle className="text-center">Analyst</CardTitle>
                    </CardHeader>
                    <CardContent className="w-[250px]">
                        <p>{dummyText.slice(0,100)}</p>
                    </CardContent>
                </Card>

                <Card className="shadow-2xl">
                    <CardHeader>
                        <CardTitle className="text-center">Programmer</CardTitle>
                    </CardHeader>
                    <CardContent className="w-[250px]">
                        <p>{dummyText.slice(0,100)}</p>
                    </CardContent>
                </Card>

                <Card className="shadow-2xl">
                    <CardHeader>
                        <CardTitle className="text-center">Front End<br />Developer</CardTitle>
                    </CardHeader>
                    <CardContent className="w-[250px]">
                        <p>{dummyText.slice(0,100)}</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}