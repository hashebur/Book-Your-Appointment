"use client";
import type { NextPage } from "next";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

// Yup schema to validate the form
const schema = Yup.object().shape({
  name: Yup.string().required(),
  location: Yup.string().required(),
  other: Yup.string().required(),
  date: Yup.string().required(),

  number: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Must be a valid number")
    .min(9),
  selectedOption: Yup.string().required("Please select an option"),
});

export default function Page() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      other: "",
      location: "",
      number: "",
      date: "",
      selectedOption: "",
    },

    // Pass the Yup schema to validate the form
    validationSchema: schema,

    // Handle form submission

    onSubmit: async ({
      name,
      location,
      date,
      other,
      number,
      selectedOption,
    }) => {
      try {
        await {
          name,
          location,
          date,
          other,
          number,
          selectedOption,
        };

        setIsFormSubmitted(true);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className=" bg-[#e0e7eb]   md:h-screen p-3 md:p-10">
      <div className="bg-white p-5 rounded-xl">
        <h1 className="text-center  text-2xl pt-5 text-black font-semibold">
          Book Your Appointment
        </h1>
        <form onSubmit={handleSubmit} method="POST">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5 ">
            <div>
              <label
                className="block  mb-2 text-sm   text-gray-900 "
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                id="name"
                className="bg-gray-50 border      sm:text-sm rounded-lg   block w-full p-2.5    dark:placeholder-black placeholder:font-semibold    dark:text-black"
                placeholder="Enter Name"
              />
              <p className="text-red-400">
                {" "}
                {errors.name && touched.name && <span>{errors.name}</span>}
              </p>
            </div>
            <div>
              <label
                className="block mb-2 text-sm   text-gray-900 "
                htmlFor="number"
              >
                Number
              </label>
              <input
                type="text"
                name="number"
                value={values.number}
                onChange={handleChange}
                id="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg   block w-full p-2.5    dark:placeholder-black placeholder:font-semibold    dark:text-black"
                placeholder="Enter Number"
              />
              <p className="text-red-400">
                {" "}
                {errors.name && touched.name && <span>{errors.name}</span>}
              </p>
            </div>

            <div>
              <label
                className="block mb-2 text-sm   text-gray-900  "
                htmlFor="Location"
              >
                Location
              </label>
              <input
                type="text"
                name="location"
                value={values.location}
                onChange={handleChange}
                id="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg   block w-full p-2.5    dark:placeholder-black placeholder:font-semibold    dark:text-black"
                placeholder="Enter Location"
              />
              <p className="text-red-400">
                {" "}
                {errors.location && touched.location && (
                  <span>{errors.location}</span>
                )}
              </p>
            </div>
          </div>

          <div>
            <label
              className="block mb-2 mt-3 text-sm text-gray-900"
              htmlFor="selectedOption"
            >
              Multiple Choice
            </label>

            <div className="flex justify-around">
              <div>
                <input
                  type="radio"
                  name="selectedOption"
                  value="LHR"
                  id="LHR"
                  checked={values.selectedOption === "LHR"}
                  onChange={handleChange}
                />
                <label htmlFor="LHR" className="ml-2  text-black">
                  LHR
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  name="selectedOption"
                  value="Slimming"
                  id="Slimming"
                  checked={values.selectedOption === "Slimming  text-black"}
                  onChange={handleChange}
                />
                <label htmlFor="Slimming" className="ml-2  text-black">
                  Slimming
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  name="selectedOption"
                  value="Facial"
                  id="Facial"
                  checked={values.selectedOption === "Facial"}
                  onChange={handleChange}
                />
                <label htmlFor="Facial " className="ml-2 text-black">
                  Facial
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="selectedOption"
                  value="Skin Rejuvenation"
                  id="Skin Rejuvenation"
                  checked={values.selectedOption === "Skin Rejuvenation"}
                  onChange={handleChange}
                />
                <label htmlFor="Skin Rejuvenation" className="ml-2  text-black">
                  Skin Rejuvenation
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="selectedOption"
                  value="Doctor Lead Service"
                  id="Doctor Lead Service"
                  checked={values.selectedOption === "Doctor Lead Service"}
                  onChange={handleChange}
                />
                <label
                  htmlFor="Doctor Lead Service"
                  className="ml-2  text-black"
                >
                  Doctor Lead Service
                </label>
              </div>
            </div>

            <p className="text-red-400">
              {errors.selectedOption && touched.selectedOption && (
                <span>{errors.selectedOption}</span>
              )}
            </p>
          </div>

          <div className=" grid grid-cols-2 gap-3 mt-5">
            <div>
              <label
                className="mb-2  text-sm   text-gray-900 "
                htmlFor="Location"
              >
                Others
              </label>
              <input
                type="text"
                name="other"
                value={values.other}
                onChange={handleChange}
                id="other"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg   block w-full p-2.5    dark:placeholder-black placeholder:font-semibold    dark:text-black"
                placeholder="Other"
              />
              <p className="text-red-400">
                {" "}
                {errors.other && touched.other && <span>{errors.other}</span>}
              </p>
            </div>
            <div>
              <label
                className=" mb-2 text-sm   text-gray-900 "
                htmlFor="Location"
              >
                {" "}
                Date of Clinic visit
              </label>
              <input
                type="date"
                name="date"
                value={values.date}
                onChange={handleChange}
                id="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg   block w-full p-2.5    dark:placeholder-black placeholder:font-semibold  "
                placeholder="Select Date"
              />
              <p className="text-red-400">
                {" "}
                {errors.date && touched.date && <span>{errors.date}</span>}
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center  mt-12">
            <button
              className="btn bg-black  lg:w-24 w-full   py-2 rounded-lg "
              type="submit"
            >
              ADD
            </button>
          </div>

          {isFormSubmitted && (
            <div className="fixed inset-0 flex items-center justify-center">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">
                  Form Submitted Successfully!
                </h2>
                <p>Your form has been successfully submitted.</p>
                {/* You can add additional content or buttons here */}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
