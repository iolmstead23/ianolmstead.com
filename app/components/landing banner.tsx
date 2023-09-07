import Skill from "./banner card"

export default function Banner() {
    return (
        <div className="container w-full py-20">
            <div className="flex flex-row flex-wrap justify-around lg:ml-[80px]">
                <Skill title="javascript" text="Lorem Ipsum blah blah blah" />
                <Skill title="python" text="Lorem Ipsum blah blah blah" />
                <Skill title="sql" text="Lorem Ipsum blah blah blah" />
            </div>
        </div>
    )
}