import Link from "next/link"
import About from "./about"

export default function Socials() {
    return (
      <div className="bg-white py-24 sm:py-10">
        <div className="mx-auto max-w-7xl px-10 2xl:px-0">
          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
              <div>
                <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">About Me</h2>
                <About />
              </div>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Business</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div>
                      <dt className="sr-only">LinkedIn</dt>
                      <dd>
                        <Link className="font-semibold text-indigo-600" href="https://www.linkedin.com/in/ubermensch/">
                          LinkedIn
                        </Link>
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Data Science</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div>
                      <dt className="sr-only">Kaggle</dt>
                      <dd>
                        <Link className="font-semibold text-indigo-600" href="https://www.kaggle.com/ianolmstead">
                          Kaggle
                        </Link>
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Software Development</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div>
                      <dt className="sr-only">Leetcode</dt>
                      <dd>
                        <Link className="font-semibold text-indigo-600" href="https://leetcode.com/Apogi23/">
                          Leetcode
                        </Link>
                      </dd>
                    </div>
                    <div>
                      <dt className="sr-only">Leetcode</dt>
                      <dd>
                        <Link className="font-semibold text-indigo-600" href="https://github.com/iolmstead23">
                          Github
                        </Link>
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">AI/Machine Learning</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div>
                      <dt className="sr-only">CivitAI</dt>
                      <dd>
                        <Link className="font-semibold text-indigo-600" href="https://civitai.com/user/iolmstead23">
                          CivitAI
                        </Link>
                      </dd>
                    </div>
                    <div>
                      <dt className="sr-only">CivitAI</dt>
                      <dd>
                        <Link className="font-semibold text-indigo-600" href="https://huggingface.co/iolmstead">
                          HuggingFace
                        </Link>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            </div>
        </div>
    </div>
    )
  }
  