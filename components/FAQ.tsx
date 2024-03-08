import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "Why Should I Work With You?",
    answer:
      "I have a background in coding starting from age 13. I got my Applied Data Science certificate from MIT in 2020 which I use everyday. I am completing a bachelors degree in computer science. I understand personal and business needs and want to help you manifest your ideas!",
  },
  {
    question: "What Services Do You Offer?",
    answer:
      "All of my packages are listed on my Fiverr account. I have experience working with AI to generate images, coding front end design, and mining data from different sources.",
  },
  // More questions...
]

export default function FAQ() {
  return (
    <div className="bg-white px-10 2xl:px-0">
      <div className="mx-auto max-w-7xl py-24 sm:py-10 lg:py-32">
        <div className="mx-auto divide-y divide-gray-900/10">
          <h2 className="text-center text-3xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}