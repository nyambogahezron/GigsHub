import SearchBox from "../components/SearchBox";

const SingleJob = () => {
  return (
    <main>
      <SearchBox />
      <a href="index.html" className="inline-block text-black ml-4 mb-4">
        <i className="fa-solid fa-arrow-left"></i> Back
      </a>
      <div className="mx-4">
        <div className="bg-gray-50 border border-gray-200 p-10 rounded">
          <div className="flex flex-col items-center justify-center text-center">
            <img className="w-48 mr-6 mb-6" src="images/acme.png" alt="" />

            <h3 className="text-2xl mb-2">Senior Laravel Developer</h3>
            <div className="text-xl font-bold mb-4">Acme Corp</div>
            <ul className="flex">
              <li className="bg-black text-white rounded-xl px-3 py-1 mr-2">
                <a href="#">Laravel</a>
              </li>
              <li className="bg-black text-white rounded-xl px-3 py-1 mr-2">
                <a href="#">API</a>
              </li>
              <li className="bg-black text-white rounded-xl px-3 py-1 mr-2">
                <a href="#">Backend</a>
              </li>
              <li className="bg-black text-white rounded-xl px-3 py-1 mr-2">
                <a href="#">Vue</a>
              </li>
            </ul>
            <div className="text-lg my-4">
              <i className="fa-solid fa-location-dot"></i> Daytona, FL
            </div>
            <div className="border border-gray-200 w-full mb-6"></div>
            <div>
              <h3 className="text-3xl font-bold mb-4">Job Description</h3>
              <div className="text-lg space-y-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eligendi non reprehenderit facilis architecto autem quam
                  necessitatibus, odit quod, repellendus voluptate cum.
                  Necessitatibus a id tenetur. Error numquam at modi quaerat.
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat praesentium eos consequuntur ex voluptatum
                  necessitatibus odio quos cupiditate iste similique rem in,
                  voluptates quod maxime animi veritatis illum quo sapiente.
                </p>

                <a
                  href="mailto:test@test.com"
                  className="block bg-laravel text-white mt-6 py-2 rounded-xl hover:opacity-80"
                >
                  <i className="fa-solid fa-envelope"></i> Contact Employer
                </a>

                <a
                  href="https://test.com"
                  target="_blank"
                  className="block bg-black text-white py-2 rounded-xl hover:opacity-80"
                >
                  <i className="fa-solid fa-globe"></i> Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default SingleJob;
