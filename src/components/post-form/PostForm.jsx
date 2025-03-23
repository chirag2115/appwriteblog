import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        if (!userData || !userData.$id) {
            console.error("Error: User data is missing", userData);
            return;
        }

        try {
            let fileId = post?.featuredImage || "";

            if (data.image && data.image[0]) {
                const file = await appwriteService.uploadFile(data.image[0]);
                if (file) fileId = file.$id;
            }

            if (post && post.$id) {
                const updatedPost = await appwriteService.updatePost(post.$id, {
                    ...data,
                    featuredImage: fileId,
                });

                if (updatedPost) {
                    navigate(`/post/${updatedPost.$id}`);
                }
            } else {
                const newPost = await appwriteService.createPost({
                    ...data,
                    userId: userData.$id,
                    featuredImage: fileId,
                });

                if (newPost) {
                    navigate(`/post/${newPost.$id}`);
                }
            }
        } catch (error) {
            console.error("Error submitting post:", error);
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-col md:flex-row gap-6 bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
            {/* Left Side - Form Inputs */}
            <div className="md:w-2/3 space-y-6">
                <Input
                    label="Title :"
                    placeholder="Enter your post title"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Post slug"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>

            {/* Right Side - File Upload & Status */}
            <div className="md:w-1/3 space-y-6 flex flex-col items-center">
                <div className="p-4 border border-dashed border-gray-400 rounded-lg text-center bg-gray-100 hover:bg-gray-200 transition duration-300 w-full">
                    <Input
                        label="Upload Featured Image:"
                        type="file"
                        className="w-full"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register("image", { required: !post })}
                    />
                </div>

                {/* Preview Uploaded Image */}
                {post?.featuredImage && (
                    <div className="w-full max-w-[250px] h-[200px] overflow-hidden rounded-lg shadow-md">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                )}

                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                    {...register("status", { required: true })}
                />

                <Button
                    type="submit"
                    className={`w-full text-white py-2 rounded-lg font-semibold transition duration-300 ${
                        post ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"
                    }`}
                >
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}
