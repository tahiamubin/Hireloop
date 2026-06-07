"use client"
import { createJob } from "@/lib/actions/jobs";
import { useState } from "react";
import toast from "react-hot-toast";

export default function PostNewJobForm({ companyRecruiter }) {
  const companyId = companyRecruiter?._id;
  const recruiterId = companyRecruiter?.recruiterId;

  const [form, setForm] = useState({
    jobTitle: "",
    jobCompany: "",
    jobType: "",
    salaryRange: "",
    location: "",
    applicationDate: "",
    jobDetails: "",
    requirements: "",
    benefits: "",
    companyId: companyId,
    recruiterId: recruiterId,
    status: "active",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createJob(form);
    if (res.insertedId) {
      toast.success("Job posted successfully!");
      // optionally reset form here
    }
  };

  const handleReset = () => {
    setForm({
      jobTitle: "", jobCompany: "", jobType: "", salaryRange: "",
      location: "", applicationDate: "", jobDetails: "",
      requirements: "", benefits: "",
      companyId, recruiterId, status: "active",
    });
  };

  return (
    <div className="min-h-screen  p-6 flex justify-between items-center">
      <div className="w-full max-w-2xl">

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white">Post New Job</h2>
          <p className="mt-1.5 text-sm text-white/45">
            Fill in the details below to publish a new job listing on HireLoop.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Job Title & Company */}
            <div className="flex gap-5">
              <Field label="Job Title">
                <Input name="jobTitle" placeholder="e.g. Senior Designer"
                  value={form.jobTitle} onChange={handleChange} />
              </Field>
              <Field label="Job Company">
                <Input name="jobCompany" placeholder="e.g. Acme Corp"
                  value={form.jobCompany} onChange={handleChange} />
              </Field>
            </div>

            {/* Job Type & Salary */}
            <div className="flex gap-5">
              <Field label="Job Type">
                <select name="jobType" value={form.jobType} onChange={handleChange}
                  className="w-full bg-white/[0.06] border border-white/[0.12] rounded-[10px] px-3 py-[9px] text-sm text-white outline-none focus:border-white/35 focus:bg-white/[0.08] transition-all cursor-pointer appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='rgba(255,255,255,0.4)' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                    paddingRight: "32px",
                  }}
                >
                  <option value="" disabled>Select one</option>
                  <option value="full-time">Full-Time</option>
                  <option value="part-time">Part-Time</option>
                  <option value="contract">Contract</option>
                  <option value="freelance">Freelance</option>
                  <option value="internship">Internship</option>
                  <option value="remote">Remote</option>
                </select>
              </Field>
              <Field label="Salary Range">
                <Input name="salaryRange" placeholder="e.g. $60k – $90k / yr"
                  value={form.salaryRange} onChange={handleChange} />
              </Field>
            </div>

            {/* Location & Application Date */}
            <div className="flex gap-5">
              <Field label="Location">
                <Input name="location" placeholder="City, Country"
                  value={form.location} onChange={handleChange} />
              </Field>
              <Field label="Application Date">
                <Input name="applicationDate" type="date"
                  value={form.applicationDate} onChange={handleChange} />
              </Field>
            </div>

            {/* Job Details */}
            <Field label="Job Details">
              <Textarea name="jobDetails"
                placeholder="Describe the role, responsibilities, and what the job involves..."
                value={form.jobDetails} onChange={handleChange} />
            </Field>

            {/* Requirements & Benefits */}
            <div className="flex gap-5">
              <Field label="Requirements">
                <Textarea name="requirements"
                  placeholder="List the skills, experience, or qualifications needed..."
                  value={form.requirements} onChange={handleChange} />
              </Field>
              <Field label="Benefits">
                <Textarea name="benefits"
                  placeholder="e.g. Health insurance, remote work, paid leave..."
                  value={form.benefits} onChange={handleChange} />
              </Field>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-2 pt-2 border-t border-white/[0.07] mt-2">
              <button type="button" onClick={handleReset}
                className="px-[18px] py-2 rounded-[10px] bg-transparent border border-white/[0.15] text-white text-sm cursor-pointer hover:bg-white/[0.06] transition-all">
                Reset
              </button>
              <button type="submit"
                className="px-[18px] py-2 rounded-[10px] bg-white border border-white text-black text-sm font-medium cursor-pointer hover:bg-white/90 transition-all">
                Post Job
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-[13px] font-medium text-white/75">{label}</label>
      {children}
    </div>
  );
}

function Input({ name, placeholder, type = "text", value, onChange }) {
  return (
    <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}
      className="w-full bg-white/[0.06] border border-white/[0.12] rounded-[10px] px-3 py-[9px] text-sm text-white placeholder-white/25 outline-none focus:border-white/35 focus:bg-white/[0.08] transition-all" />
  );
}

function Textarea({ name, placeholder, value, onChange }) {
  return (
    <textarea name={name} placeholder={placeholder} value={value} onChange={onChange} rows={4}
      className="w-full bg-white/[0.06] border border-white/[0.12] rounded-[10px] px-3 py-[9px] text-sm text-white placeholder-white/25 outline-none focus:border-white/35 focus:bg-white/[0.08] transition-all resize-none leading-relaxed" />
  );
}