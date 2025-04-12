// src/appwrite/storage.js

import { Storage, Client, ID } from "appwrite";
import conf from "./config";

const client = new Client()
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);

const storage = new Storage(client);

const getFilePreview = (fileId) => {
    return storage.getFilePreview(conf.appwriteBucketId, fileId);
};

export default { getFilePreview };
