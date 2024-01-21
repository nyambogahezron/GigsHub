import FormInputRow from "../components/FormInputRow";
import { useState } from "react";
import Header from "../components/PageHeader"

const CreatJob = () => {
    const [Company, setCompany] = useState("");
    const [JobTitle, setJobTitle] = useState("");
    const [Location, setLocation] = useState("");
    const [Email, setEmail] = useState("");
    const [Website, setWebsite] = useState("");
    const [Tags, setTags] = useState("");
    const [Logo, setLogo] = useState("");
    const [Description, setDescription] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(Company, JobTitle, Location, Email, Website, Tags, Description);
    };
    return (
        <main>
            <div className="mx-4">
                <div className="bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-24">
                    <Header
                        headerTitle="Create a Gig"
                        Descp="Post a gig to find a developer"
                    />

                    <form onSubmit={submitHandler}>
                        <FormInputRow
                            type="text"
                            name="company"
                            value={Company}
                            handleChange={(e) => setCompany(e.target.value)}
                            placeHolder=" Enter Company Name"
                            labelText="Company Name"
                        />
                        <FormInputRow
                            type="text"
                            name="JobTitle"
                            value={JobTitle}
                            handleChange={(e) => setJobTitle(e.target.value)}
                            placeHolder="Example: Senior Laravel Developer"
                            labelText="Job Title"
                        />
                        <FormInputRow
                            type="text"
                            name="location"
                            value={Location}
                            handleChange={(e) => setLocation(e.target.value)}
                            placeHolder="Example: Remote, Boston MA, etc"
                            labelText="Location"
                        />
                        <FormInputRow
                            type="text"
                            name="email"
                            value={Email}
                            handleChange={(e) => setEmail(e.target.value)}
                            labelText="Contact Email"
                        />
                        <FormInputRow
                            type="text"
                            name="website"
                            value={Website}
                            handleChange={(e) => setWebsite(e.target.value)}
                            labelText="Website/Application URL"
                        />
                        <FormInputRow
                            type="text"
                            name="tags"
                            value={Tags}
                            handleChange={(e) => setTags(e.target.value)}
                            labelText="Tags (Comma Separated)"
                            placeHolder="Example: Laravel, Backend, Postgres, etc"
                        />
                        <FormInputRow
                            type="file"
                            name="logo"
                            value={Logo}
                            handleChange={(e) => setLogo(e.target.value)}
                        />

                        <div className="mb-6">
                            <label
                                htmlFor="description"
                                className="inline-block text-lg mb-2"
                            >
                                Job Description
                            </label>
                            <textarea
                                className="border border-gray-200 rounded p-2 w-full"
                                name="description"
                                rows="10"
                                placeholder="Include tasks, requirements, salary, etc"
                                onChange ={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="mb-6">
                            <button className="bg-primary-color text-white rounded py-2 px-4 hover:bg-black">
                                Create Gig
                            </button>

                            <a href="/" className="text-black ml-4">
                                {" "}
                                Back{" "}
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};
export default CreatJob;
