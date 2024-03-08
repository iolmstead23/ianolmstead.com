const features = [
    {
      name: 'Versatility',
      description:
        'Full-stack developers possess proficiency in both front-end and back-end development, making them versatile assets to any development team. They can handle various tasks throughout the development process, from creating user interfaces to designing and managing databases, streamlining project workflows.',
    },
    {
      name: 'Cost Effectiveness',
      description:
        'Hiring a full-stack developer can be more cost-effective than hiring separate specialists for front-end and back-end development. With one individual handling multiple aspects of the project, businesses can save on recruitment and personnel expenses.',
    },
    {
      name: 'Faster Development Cycles',
      description:
        'Full-stack developers are adept at understanding the entire development process, allowing them to work seamlessly across different layers of the application. This comprehensive knowledge enables them to identify potential bottlenecks and implement solutions efficiently, resulting in shorter development cycles.',
    },
    {
      name: 'Efficient Communication',
      description:
        'Full-stack developers can effectively communicate with various team members, including designers, project managers, and clients, as they understand the technical aspects of both front-end and back-end development. This facilitates smoother collaboration and ensures that everyone is on the same page throughout the development process.',
    },
    {
      name: 'Rapid Prototyping',
      description:
        'With expertise in both front-end and back-end technologies, full-stack developers can quickly create prototypes and minimum viable products (MVPs) to test ideas and gather feedback. This agile approach allows businesses to iterate and refine their products faster, ultimately accelerating time-to-market.',
    },
    {
      name: 'Adaptability To Technology Changes',
      description:
        'The technology landscape is constantly evolving, with new frameworks, languages, and tools emerging regularly. Full-stack developers possess a broad skill set and a willingness to learn, making them well-equipped to adapt to these changes and incorporate new technologies into their projects effectively.',
    },
  ]
  
  export default function Features() {
    return (
      <div className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-10 2xl:px-0">
          <div className="mx-auto">
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Full Stack Development</h2>
            <p className="text-center mt-6 text-lg leading-8 text-gray-600">
              6 reasons why you should hire a Full Stack Developer for your next project.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="font-semibold text-gray-900">{feature.name}</dt>
                <dd className="mt-1 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  