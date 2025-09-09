import { useState } from "react";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loading from "../../ui/Loading";
import useEditProject from "./useEditProject";

function CreateProjectForm({ onClose, projectToEdit = {} }) {
  const { _id: editId } = projectToEdit;
  const isEditSesson = Boolean(editId);

  const { title, description, budget, category, deadline, prevTags } =
    projectToEdit;
  let editValues = {};
  if (isEditSesson) {
    editValues = {
      title,
      description,
      budget,
      category: category._id,
    };
  }

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));
  const { editProject } = useEditProject();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues });

  const { categories } = useCategories();
  const { isCreating, createProject } = useCreateProject();

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };
    if (isEditSesson) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            setTags([]);
            setDate(new Date(""));
            reset();
            onClose();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          reset();
          onClose();
        },
      });
    }
  };
  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Title"
        name="title"
        register={register}
        validationSchema={{
          required: "Title is required!",
          minLength: {
            value: 10,
            message: "Length must be more than 10 characters.",
          },
        }}
        required
        errors={errors}
      />
      <TextField
        label="Description"
        name="description"
        register={register}
        validationSchema={{
          required: "Description is required!",
          minLength: {
            value: 15,
            message: "Length must be more than 15 characters.",
          },
        }}
        required
        errors={errors}
      />
      <TextField
        label="Budget"
        name="budget"
        type="number"
        register={register}
        validationSchema={{
          required: "Budget is required!",
        }}
        required
        errors={errors}
      />
      <RHFSelect
        label="Category"
        name="category"
        required
        register={register}
        options={categories}
      />
      <div>
        <label htmlFor="tags" className="mb-2 block text-secondary-700">
          Tags
        </label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField date={date} setDate={setDate} label="Deadline" />
      <div className="mt-8">
        {isCreating ? (
          <Loading />
        ) : (
          <button className="btn btn--primary w-full" type="submit">
            Submitt
          </button>
        )}
      </div>
    </form>
  );
}

export default CreateProjectForm;
