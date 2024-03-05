export default function Socials() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
                <p className="mt-4 leading-7 text-gray-600">
                  I use different social media platforms for different needs. Here is a list of my socials.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Business</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div>
                      <dt className="sr-only">LinkedIn</dt>
                      <dd>
                        <a className="font-semibold text-indigo-600" href="https://www.linkedin.com/in/ubermensch/">
                          LinkedIn
                        </a>
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
                        <a className="font-semibold text-indigo-600" href="https://www.kaggle.com/ianolmstead">
                          Kaggle
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Software Engineering</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div>
                      <dt className="sr-only">Leetcode</dt>
                      <dd>
                        <a className="font-semibold text-indigo-600" href="https://leetcode.com/Apogi23/">
                          Leetcode
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="sr-only">Leetcode</dt>
                      <dd>
                        <a className="font-semibold text-indigo-600" href="https://github.com/iolmstead23">
                          Github
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">AI</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div>
                      <dt className="sr-only">CivitAI</dt>
                      <dd>
                        <a className="font-semibold text-indigo-600" href="https://civitai.com/user/iolmstead23">
                          CivitAI
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="sr-only">CivitAI</dt>
                      <dd>
                        <a className="font-semibold text-indigo-600" href="https://huggingface.co/iolmstead">
                          HuggingFace
                        </a>
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
  