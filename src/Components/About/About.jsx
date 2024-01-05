import React from "react";

function About({gitdata}) {





  return (
    <>
      <section className="px-2 py-10 md:px-0">
        <div className="mx-auto max-w-4xl">
          <div className="md:flex md:items-center md:justify-center md:space-x-14">
            <div className="relative h-48 w-48 flex-shrink-0">
              <img
                className="relative h-48 w-48 rounded-full object-cover"
                src={gitdata.avatar_url}
                alt=""
              />
            </div>
            <div className="mt-10 md:mt-0">
              <blockquote>
                <p className="text-xl text-zinc-400">
                 '{gitdata.bio}'
                </p>
              </blockquote>
              <p className="mt-7 text-lg font-semibold text-zinc-400">{gitdata.name}</p>
              <p className="mt-1 text-base text-zinc-600">
                Web Dev | Cs Major | <a href="https://github.com/rohiit257">GitHub</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}

export default About;
