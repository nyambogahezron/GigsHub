import FormInputRow from "../components/FormInputRow";
import SelectInput from "../components/SelectInput";
import { useState, useEffect } from "react";
import Header from "../components/PageHeader";
import CustomButton from "../components/CustomButton";
import ImagesUpload from "../components/ImagesUpload";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCreateGigMutation } from "../slices/gigsApiSlice";
import { toast } from "react-toastify";

const CreateJob = () => {
  useEffect(() => {
    document.title = "GIGSHUB - Create Gig";
    return () => {
      document.title = "GIGSHUB - Find | Post Jobs";
    };
  }, []);

  const jobTypeOptions = [
    { value: "full-time", label: "Full-time" },
    { value: "part-time", label: "Part-time" },
    { value: "remote", label: "Remote" },
    { value: "internship", label: "Internship" },
  ];
  const statusOptions = [
    { value: "interview", label: "Interview" },
    { value: "declined", label: "Declined" },
    { value: "pending", label: "Pending" },
  ];
  // get form inputs
  const [JobTitle, setJobTitle] = useState("");
  const [position, setPosition] = useState("");
  const [jobType, setJobType] = useState("");
  const [tags, setTags] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");

  // create action
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [createGig, { isLoading }] = useCreateGigMutation();

  // const { userInfo } = useSelector((state) => state.auth);
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(
      JobTitle,
      position,
      jobType,
      tags,
      description,
      location,
      image,
    );
    // check if all inputs are filied
    if (
      !JobTitle ||
      !position ||
      !jobType ||
      !tags ||
      !description ||
      !location
    ) {
      toast.error("Please Provide All Fields!");
    } else {
     try {
      const res = await createGig({
        title: JobTitle,
        position,
        tags,
        status,
        jobType,
        jobLocation: location,
        description,
        image,
      }).unwrap();

      console.log(res);

      toast.info(res.msg);
      // navigate("/home");
    } catch (err) {
      console.log(err);
      toast.error(err?.data?.msg || err.error);
    }
  }
  };
  return (
    <main>
      <div className="mx-4">
        <div className="bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-24">
          <Header
            headerTitle="Create a Gig"
            Description="Post a gig to find a developer"
          />

          <form onSubmit={submitHandler}>
            <FormInputRow
              type="text"
              name="JobTitle"
              value={JobTitle}
              handleChange={(e) => setJobTitle(e.target.value)}
              placeHolder="Example: Laravel Developer"
              labelText="Title"
            />
            <FormInputRow
              type="text"
              name="position"
              value={position}
              handleChange={(e) => setPosition(e.target.value)}
              placeHolder="Example: Senior Laravel Developer"
              labelText="Position"
            />
            <SelectInput
              name="exampleSelect"
              value={jobType}
              handleChange={(e) => setJobType(e.target.value)}
              options={jobTypeOptions}
              labelText="Select Job Type"
            />

            <SelectInput
              name="status"
              value={status}
              handleChange={(e) => setStatus(e.target.value)}
              options={statusOptions}
              labelText="Job Status"
            />
            <FormInputRow
              type="text"
              name="location"
              value={location}
              handleChange={(e) => setLocation(e.target.value)}
              labelText="Location"
            />

            <FormInputRow
              type="text"
              name="tags"
              value={tags}
              handleChange={(e) => setTags(e.target.value)}
              labelText="Tags (Comma Separated)"
              placeHolder="Example: Laravel, Backend, Postgres, etc"
            />
            <div className="mb-6">
              <ImagesUpload setImage={setImage} />
            </div>

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
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <CustomButton btnText="Create Gig" />
          </form>
        </div>
      </div>
    </main>
  );
};
export default CreateJob;
